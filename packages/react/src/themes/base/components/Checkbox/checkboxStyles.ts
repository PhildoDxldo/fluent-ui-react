import { ComponentSlotStylesInput, ICSSInJSStyle } from '../../../types'
import { CheckboxProps, CheckboxState } from '../../../../components/Checkbox/Checkbox'
import { CheckboxVariables } from './checkboxVariables'

const checkboxStyles: ComponentSlotStylesInput<CheckboxProps & CheckboxState, CheckboxVariables> = {
  root: ({ props: p, variables: v }): ICSSInJSStyle => ({
    alignItems: 'center',
    position: 'relative',

    display: 'inline-grid',
    // IE11: Gap is done via virtual column as in autoprefixer
    gridTemplateColumns: p.labelPosition === 'start' ? `1fr ${v.gap} auto` : `auto ${v.gap} 1fr`,
    cursor: 'pointer',
    outline: 0,

    padding: v.padding,

    ...(p.disabled && {
      color: v.disabledColor,
      cursor: 'default',
    }),
  }),

  checkbox: ({ props: p, variables: v }): ICSSInJSStyle => ({
    gridColumn: p.labelPosition === 'start' ? 3 : 1,
    '-ms-grid-row-align': 'center',

    borderColor: v.borderColor,
    borderStyle: v.borderStyle,
    borderRadius: v.borderRadius,
    borderWidth: v.borderWidth,
    boxShadow: 'unset',
    color: v.checkboxColor,
    margin: v.margin,
    padding: v.padding,

    ...(p.checked && {
      background: v.checkedBackground,
      borderColor: v.checkedBorderColor,
      color: v.checkboxCheckedColor,
    }),

    ...(p.disabled && {
      borderColor: v.disabledCheckboxColor,

      ...(p.checked && {
        color: v.disabledCheckboxColor,
        background: v.disabledBackground,
      }),
    }),
  }),

  label: ({ props: p }): ICSSInJSStyle => ({
    display: 'block', // IE11: should be forced to be block, as inline-block is not supported
    gridColumn: p.labelPosition === 'start' ? 1 : 3,
  }),

  toggle: ({ props: p, variables: v }): ICSSInJSStyle => ({
    '-ms-grid-row-align': 'center',
    gridColumn: p.labelPosition === 'start' ? 3 : 1,

    background: v.toggleBackground,
    borderColor: v.toggleBorderColor,
    borderStyle: v.toggleBorderStyle,
    borderRadius: v.toggleBorderRadius,
    borderWidth: v.toggleBorderWidth,
    boxShadow: 'unset',
    color: v.toggleIndicatorColor,
    margin: v.toggleMargin,

    padding: v.togglePadding,
    transition: 'padding .3s ease',

    ...(p.checked && {
      background: v.checkboxToggleCheckedBackground,
      borderColor: v.checkboxToggleCheckedBorderColor,
      color: v.checkboxToggleCheckedColor,
      padding: v.toggleCheckedPadding,
    }),

    ...(p.disabled && {
      background: v.disabledToggleBackground,
      borderColor: v.disabledToggleBorderColor,
      color: v.disabledToggleIndicatorColor,
    }),
  }),
}

export default checkboxStyles