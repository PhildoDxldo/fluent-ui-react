// Behavior-test use 'docs\src\behaviorMenu.json' file as source of strings to parse.
// The json file is generated by task 'build:docs:component-menu-behaviors'. The task will generate json file from the behaviors description.
// If you change behavior description, then you need to run:
//  - 'gulp build:docs:component-menu-behaviors' in order to get json file generated
//  OR
//  - 'yarn test' which has creating json file predefined in "pretest" step
import {
  attachmentBehavior,
  basicListBehavior,
  basicListItemBehavior,
  buttonBehavior,
  checkboxBehavior,
  embedBehavior,
  iconBehavior,
  imageBehavior,
  inputBehavior,
  loaderBehavior,
  menuBehavior,
  menuItemBehavior,
  menuDividerBehavior,
  submenuBehavior,
  popupBehavior,
  dialogBehavior,
  radioGroupBehavior,
  radioGroupItemBehavior,
  navigableListBehavior,
  navigableListItemBehavior,
  selectableListBehavior,
  selectableListItemBehavior,
  sliderBehavior,
  tabBehavior,
  tabListBehavior,
  toggleButtonBehavior,
  menuAsToolbarBehavior,
  menuItemAsToolbarButtonBehavior,
  hierarchicalTreeBehavior,
  hierarchicalTreeTitleBehavior,
  hierarchicalTreeItemBehavior,
  hierarchicalSubtreeBehavior,
  gridBehavior,
  gridHorizontalBehavior,
  statusBehavior,
  alertWarningBehavior,
  accordionBehavior,
  accordionTitleBehavior,
  accordionContentBehavior,
  chatBehavior,
  chatMessageBehavior,
  toolbarBehavior,
  toolbarItemBehavior,
  toolbarMenuItemCheckboxBehavior,
  toolbarMenuItemRadioBehavior,
  toolbarMenuRadioGroupBehavior,
  toolbarRadioGroupBehavior,
  toolbarRadioGroupItemBehavior,
  tooltipBehavior,
  tooltipAsLabelBehavior,
  menuButtonBehavior,
  splitButtonBehavior,
  treeBehavior,
  treeItemBehavior,
  treeTitleBehavior,
  textAreaBehavior,
  treeAsListBehavior,
  treeItemAsListItemBehavior,
  treeTitleAsListItemTitleBehavior,
} from '@stardust-ui/accessibility'
import { TestHelper } from './testHelper'
import definitions from './testDefinitions'

const behaviorMenuItems = require('../../../../docs/src/behaviorMenu')

const testHelper = new TestHelper()
testHelper.addTests(definitions)

testHelper.addBehavior('attachmentBehavior', attachmentBehavior)
testHelper.addBehavior('basicListBehavior', basicListBehavior)
testHelper.addBehavior('basicListItemBehavior', basicListItemBehavior)
testHelper.addBehavior('buttonBehavior', buttonBehavior)
testHelper.addBehavior('checkboxBehavior', checkboxBehavior)
testHelper.addBehavior('embedBehavior', embedBehavior)
testHelper.addBehavior('iconBehavior', iconBehavior)
testHelper.addBehavior('inputBehavior', inputBehavior)
testHelper.addBehavior('imageBehavior', imageBehavior)
testHelper.addBehavior('loaderBehavior', loaderBehavior)
testHelper.addBehavior('menuBehavior', menuBehavior)
testHelper.addBehavior('menuItemBehavior', menuItemBehavior)
testHelper.addBehavior('menuDividerBehavior', menuDividerBehavior)
testHelper.addBehavior('menuButtonBehavior', menuButtonBehavior)
testHelper.addBehavior('submenuBehavior', submenuBehavior)
testHelper.addBehavior('popupBehavior', popupBehavior)
testHelper.addBehavior('radioGroupBehavior', radioGroupBehavior)
testHelper.addBehavior('radioGroupItemBehavior', radioGroupItemBehavior)
testHelper.addBehavior('navigableListBehavior', navigableListBehavior)
testHelper.addBehavior('navigableListItemBehavior', navigableListItemBehavior)
testHelper.addBehavior('selectableListBehavior', selectableListBehavior)
testHelper.addBehavior('selectableListItemBehavior', selectableListItemBehavior)
testHelper.addBehavior('sliderBehavior', sliderBehavior)
testHelper.addBehavior('tabBehavior', tabBehavior)
testHelper.addBehavior('tabListBehavior', tabListBehavior)
testHelper.addBehavior('menuAsToolbarBehavior', menuAsToolbarBehavior)
testHelper.addBehavior('toggleButtonBehavior', toggleButtonBehavior)
testHelper.addBehavior('menuItemAsToolbarButtonBehavior', menuItemAsToolbarButtonBehavior)
testHelper.addBehavior('hierarchicalTreeTitleBehavior', hierarchicalTreeTitleBehavior)
testHelper.addBehavior('hierarchicalTreeBehavior', hierarchicalTreeBehavior)
testHelper.addBehavior('hierarchicalTreeItemBehavior', hierarchicalTreeItemBehavior)
testHelper.addBehavior('hierarchicalSubtreeBehavior', hierarchicalSubtreeBehavior)
testHelper.addBehavior('gridBehavior', gridBehavior)
testHelper.addBehavior('gridHorizontalBehavior', gridHorizontalBehavior)
testHelper.addBehavior('dialogBehavior', dialogBehavior)
testHelper.addBehavior('statusBehavior', statusBehavior)
testHelper.addBehavior('alertWarningBehavior', alertWarningBehavior)
testHelper.addBehavior('accordionBehavior', accordionBehavior)
testHelper.addBehavior('accordionTitleBehavior', accordionTitleBehavior)
testHelper.addBehavior('accordionContentBehavior', accordionContentBehavior)
testHelper.addBehavior('chatBehavior', chatBehavior)
testHelper.addBehavior('chatMessageBehavior', chatMessageBehavior)
testHelper.addBehavior('toolbarBehavior', toolbarBehavior)
testHelper.addBehavior('toolbarItemBehavior', toolbarItemBehavior)
testHelper.addBehavior('toolbarMenuItemCheckboxBehavior', toolbarMenuItemCheckboxBehavior)
testHelper.addBehavior('toolbarMenuItemRadioBehavior', toolbarMenuItemRadioBehavior)
testHelper.addBehavior('toolbarMenuRadioGroupBehavior', toolbarMenuRadioGroupBehavior)
testHelper.addBehavior('toolbarRadioGroupBehavior', toolbarRadioGroupBehavior)
testHelper.addBehavior('toolbarRadioGroupItemBehavior', toolbarRadioGroupItemBehavior)
testHelper.addBehavior('tooltipBehavior', tooltipBehavior)
testHelper.addBehavior('tooltipAsLabelBehavior', tooltipAsLabelBehavior)
testHelper.addBehavior('splitButtonBehavior', splitButtonBehavior)
testHelper.addBehavior('treeBehavior', treeBehavior)
testHelper.addBehavior('treeItemBehavior', treeItemBehavior)
testHelper.addBehavior('treeTitleBehavior', treeTitleBehavior)
testHelper.addBehavior('textAreaBehavior', textAreaBehavior)
testHelper.addBehavior('treeAsListBehavior', treeAsListBehavior)
testHelper.addBehavior('treeItemAsListItemBehavior', treeItemAsListItemBehavior)
testHelper.addBehavior('treeTitleAsListItemTitleBehavior', treeTitleAsListItemTitleBehavior)

testHelper.run(behaviorMenuItems)