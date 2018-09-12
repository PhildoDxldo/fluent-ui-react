import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as _ from 'lodash'

import {
  childrenExist,
  customPropTypes,
  AutoControlledComponent,
  eventStack,
  doesNodeContainClick,
} from '../../lib'
import { ItemShorthand, ReactChildren } from '../../../types/utils'
import Ref from '../Ref'
import PortalInner from './PortalInner'
import { FocusTrapZone, IFocusTrapZoneProps } from '../../lib/accessibility/FocusZone'

type ReactMouseEvent = React.MouseEvent<HTMLElement>

export interface IPortalProps {
  children?: ReactChildren
  content?: ItemShorthand | ItemShorthand[]
  defaultOpen?: boolean
  onMount?: (props: IPortalProps) => void
  onUnmount?: (props: IPortalProps) => void
  open?: boolean
  trigger?: JSX.Element
  triggerAccessibility?: any
  triggerRef?: (node: HTMLElement) => void
  onTriggerClick?: (e: ReactMouseEvent) => void
  onOutsideClick?: (e: ReactMouseEvent) => void
  trapFocus?: boolean
  focusTrapZoneProps?: IFocusTrapZoneProps
}

export interface IPortalState {
  open?: boolean
}

/**
 * A component that allows you to render children outside their parent.
 */
class Portal extends AutoControlledComponent<IPortalProps, IPortalState> {
  private portalNode: HTMLElement
  private triggerNode: HTMLElement

  public static autoControlledProps = ['open']

  public static propTypes = {
    /** Primary content. */
    children: PropTypes.node,

    /** Shorthand for primary content. */
    content: customPropTypes.contentShorthand,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /**
     * Called when the portal is mounted on the DOM.
     *
     * @param {object} data - All props.
     */
    onMount: PropTypes.func,

    /**
     * Called when the portal is unmounted from the DOM.
     *
     * @param {object} data - All props.
     */
    onUnmount: PropTypes.func,

    /** Controls whether or not the portal is displayed. */
    open: PropTypes.bool,

    /** Element to be rendered in-place where the portal is defined. */
    trigger: PropTypes.node,

    /**
     * Called with a ref to the trigger node.
     *
     * @param {JSX.Element} node - Referred node.
     */
    triggerRef: PropTypes.func,

    /** Trigger accessibility behavior object if overridden by the user. */
    triggerAccessibility: PropTypes.object,

    /**
     * Called when trigger was clicked.
     *
     * @param {object} data - All props.
     */
    onTriggerClick: PropTypes.func,

    /**
     * Called when click event was invoked outside portal or trigger.
     *
     * @param {object} data - All props.
     */
    onOutsideClick: PropTypes.func,
  }

  public static handledProps = [
    'children',
    'content',
    'defaultOpen',
    'onMount',
    'onOutsideClick',
    'onTriggerClick',
    'onUnmount',
    'open',
    'trigger',
    'triggerAccessibility',
    'triggerRef',
  ]

  public renderComponent(): React.ReactNode {
    return (
      <React.Fragment>
        {this.renderPortal()}
        {this.renderTrigger()}
      </React.Fragment>
    )
  }

  private renderPortal(): JSX.Element | undefined {
    const { children, content, trapFocus, focusTrapZoneProps } = this.props
    const { open } = this.state
    const contentToRender = childrenExist(children) ? children : content

    return (
      open && (
        <Ref innerRef={this.handlePortalRef}>
          <PortalInner onMount={this.handleMount} onUnmount={this.handleUnmount}>
            {trapFocus ? (
              <FocusTrapZone {...focusTrapZoneProps}>{contentToRender}</FocusTrapZone>
            ) : (
              { contentToRender }
            )}
          </PortalInner>
        </Ref>
      )
    )
  }

  private renderTrigger(): JSX.Element | undefined {
    const { trigger, triggerAccessibility } = this.props

    return (
      trigger && (
        <Ref innerRef={this.handleTriggerRef}>
          {React.cloneElement(trigger, {
            onClick: this.handleTriggerClick,
            ...triggerAccessibility,
          })}
        </Ref>
      )
    )
  }
  private handleMount = () => {
    eventStack.sub('click', this.handleDocumentClick)
    _.invoke(this.props, 'onMount', this.props)
  }

  private handleUnmount = () => {
    eventStack.unsub('click', this.handleDocumentClick)
    _.invoke(this.props, 'onUnmount', this.props)
  }

  private handlePortalRef = (portalNode: HTMLElement) => {
    this.portalNode = portalNode
  }

  private handleTriggerRef = (triggerNode: HTMLElement) => {
    this.triggerNode = triggerNode

    _.invoke(this.props, 'triggerRef', triggerNode)
  }

  private handleTriggerClick = (e: ReactMouseEvent, ...rest) => {
    const { trigger } = this.props

    _.invoke(this.props, 'onTriggerClick', e) // Call handler from popup
    _.invoke(trigger, 'props.onClick', e, ...rest) // Call original event handler
    this.trySetState({ open: !this.state.open })
  }

  private handleDocumentClick = (e: ReactMouseEvent) => {
    if (
      !this.portalNode || // no portal
      doesNodeContainClick(this.triggerNode, e) || // event happened in trigger (delegate to trigger handlers)
      doesNodeContainClick(this.portalNode, e) // event happened in the portal
    ) {
      return // ignore the click
    }
    _.invoke(this.props, 'onOutsideClick', e)
    this.trySetState({ open: false })
  }
}

export default Portal
