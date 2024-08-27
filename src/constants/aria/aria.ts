//*[ ARIA ROLES ]*/

/**
 * Document Structure Roles - Used to identify regions of a page to help users navigate the content.
 */
export const ARIA_DOCUMENT_STRUCTURE_ROLES = [
  'toolbar',
  'tooltip',
  'feed',
  'math',
  'presentation',
  'none',
  'description'
] as const;

/**
 * Widget Roles - Used to identify user interface objects that users can interact with.
 */
export const ARIA_WIDGET_ROLES = [
  'scrollbar',
  'searchbox',
  'separator',
  'slider',
  'spinbutton',
  'switch',
  'tab',
  'tabpanel',
  'treeitem'
] as const;

/**
 * Composite Widget Roles - Used to identify user interface objects that users can interact with.
 */
export const ARIA_COMPOSITE_WIDGET_ROLES = [
  'combobox',
  'menu',
  'menubar',
  'tablist',
  'tree',
  'treegrid'
] as const;

/**
 * Landmark Roles - Used to identify regions of a page to help users navigate the content.
 */
export const ARIA_LANDMARK_ROLES = [
  'banner', // document <header>
  'complementary', // <aside>
  'contentinfo', // document <footer>
  'form', // <form>
  'main', // <main>
  'navigation', // <nav>
  'region', // <section>
  'search', // <search>
] as const;

/**
 * Live Region Roles - Used to define the type of live region that is being added to the document.
 */
export const ARIA_LIVE_REGION_ROLES = [
  'alert',
  'log',
  'marquee',
  'status',
  'timer'
] as const;

/**
 * Window Roles - Used to identify user interface objects that users can interact with.
 */
export const ARIA_WINDOW_ROLES = [
  'alertdialog',
  'dialog'
] as const;

/**
 * Abstract Roles [DO NOT USE AS 'ROLE' IN YOUR APPLICATIONS] - Used by browsers to define the type
 * of user interface element that is being added to the document.
 */
export const ARIA_ABSTRACT_ROLES = [
  'command',
  'composite',
  'input',
  'landmark',
  'range',
  'roletype',
  'section',
  'sectionhead',
  'select',
  'structure',
  'widget',
  'window'
] as const;

/**
 * ARIA roles used to define the type of user interface element that is being added to the document.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
 * @see https://www.w3.org/TR/wai-aria-1.1/#roles
 * 
 * @property {ARIA_DOCUMENT_STRUCTURE_ROLES} DOCUMENT_STRUCTURE - Document structure roles
 * @property {ARIA_WIDGET_ROLES} WIDGET - Widget roles
 * @property {ARIA_COMPOSITE_WIDGET_ROLES} COMPOSITE_WIDGET - Composite widget roles
 * @property {ARIA_LANDMARK_ROLES} LANDMARK - Landmark roles
 * @property {ARIA_LIVE_REGION_ROLES} LIVE_REGION - Live region roles
 * @property {ARIA_WINDOW_ROLES} WINDOW - Window roles
 */
export const ARIA_ROLES = {
  /**
   * Document Structure Roles - Used to identify regions of a page to help users navigate the content.
   * @see https://www.w3.org/TR/wai-aria-1.1/#document_structure_roles
   */
  DOCUMENT_STRUCTURE: ARIA_DOCUMENT_STRUCTURE_ROLES,

  /**
   * Widget Roles - Used to identify user interface objects that users can interact with.
   * @see https://www.w3.org/TR/wai-aria-1.1/#widget_roles
   */
  WIDGET: ARIA_WIDGET_ROLES,

  /**
   * Composite Widget Roles - Used to identify user interface objects that users can interact with.
   * @see https://www.w3.org/TR/wai-aria-1.1/#composite_widget_roles
   */
  COMPOSITE_WIDGET: ARIA_COMPOSITE_WIDGET_ROLES,

  /**
   * Landmark Roles - Used to identify regions of a page to help users navigate the content.
   * @see https://www.w3.org/TR/wai-aria-1.1/#landmark_roles
   */
  LANDMARK: ARIA_LANDMARK_ROLES,

  /**
   * Live Region Roles - Used to define the type of live region that is being added to the document.
   * @see https://www.w3.org/TR/wai-aria-1.1/#live_region_roles
   */
  LIVE_REGION: ARIA_LIVE_REGION_ROLES,

  /**
   * Window Roles - Used to identify user interface objects that users can interact with.
   * @see https://www.w3.org/TR/wai-aria-1.1/#window_roles
   */
  WINDOW: ARIA_WINDOW_ROLES,
} as const;

/**
 * A list of all ARIA roles that can be used in your sites and applications.
 */
export const ALL_ARIA_ROLES = [
  ...ARIA_DOCUMENT_STRUCTURE_ROLES,
  ...ARIA_WIDGET_ROLES,
  ...ARIA_COMPOSITE_WIDGET_ROLES,
  ...ARIA_LANDMARK_ROLES,
  ...ARIA_LIVE_REGION_ROLES,
  ...ARIA_WINDOW_ROLES,
  ...ARIA_ABSTRACT_ROLES
] as const;

/**
 * An object containing ARIA roles that SHOULD NOT be used in your sites and applications.
 */
export const ARIA_DO_NOT_USE_ROLES = {
  /**
   * Document Structure Roles [DO NOT USE AS 'ROLE' IN YOUR APPLICATIONS]
   */
  DOCUMENT_STRUCTURE: [
    'application',
    'article', // <article>
    'cell', // <td>
    'columnheader', // <th scope="col">
    'definition', // <dfn>
    'directory',
    'document',
    'figure', // <figure>
    'group',
    'heading', // h1 through h6
    'img', // <img> or <picture>
    'list', // <ul> or <ol>
    'listitem', // <li>
    'meter', // <meter>
    'row', // <tr> with <table>
    'rowgroup', // <thead>, <tfoot> and <tbody>
    'rowheader', // <th scope="row">
    'separator', // <hr> if it doesn't have focus
    'table', // <table>
    'term', // <dfn>
    'associationlist',
    'associationlistitemkey',
    'associationlistitemvalue',
    'blockquote',
    'caption',
    'code',
    'deletion',
    'emphasis',
    'insertion',
    'paragraph',
    'strong',
    'subscript',
    'superscript',
    'time'
  ],

  /**
   * Widget Roles [DO NOT USE AS 'ROLE' IN YOUR APPLICATIONS]
   */
  WIDGET: [
    'button',
    'checkbox',
    'gridcell',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'progressbar',
    'radio',
    'textbox'
  ],

  /**
   * Composite Widget Roles [DO NOT USE AS 'ROLE' IN YOUR APPLICATIONS]
   */
  COMPOSITE_WIDGET: [
    'grid',
    'listbox',
    'radiogroup'
  ],

  /**
   * Abstract Roles [DO NOT USE AS 'ROLE' IN YOUR APPLICATIONS]
   */
  ABSTRACT: ARIA_ABSTRACT_ROLES,
} as const;

/**
 * A list containing all ARIA roles that should not be used in your sites and applications.
 */
export const ALL_ARIA_DO_NOT_USE_ROLES = [
  ...ARIA_DO_NOT_USE_ROLES.DOCUMENT_STRUCTURE,
  ...ARIA_DO_NOT_USE_ROLES.WIDGET,
  ...ARIA_DO_NOT_USE_ROLES.COMPOSITE_WIDGET,
  ...ARIA_ABSTRACT_ROLES
] as const;


//*[ ARIA ATTRIBUTES ]*//

/**
 * Widget Attributes - Used to define the current state of a user interface object.
 */
export const ARIA_WIDGET_ATTRIBUTES = [
  'aria-autocomplete',
  'aria-checked',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-label',
  'aria-level',
  'aria-modal',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-placeholder',
  'aria-pressed',
  'aria-readonly',
  'aria-required',
  'aria-selected',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
] as const;

/**
 * Live Region Attributes - Used to define the behavior of a live region.
 */
export const ARIA_LIVE_REGION_ATTRIBUTES = [
  'aria-busy',
  'aria-live',
  'aria-relevant',
  'aria-atomic',
] as const;

/**
 * Drag-And-Drop Attributes - Used to define the behavior of draggable elements.
 */
export const ARIA_DRAG_AND_DROP_ATTRIBUTES = [
  'aria-dropeffect',
  'aria-grabbed',
] as const;

/**
 * Relationship Attributes - Used to define the relationship between elements.
 * @enum {string} ARIA_RELATIONSHIP_ATTRIBUTES
 */
export const ARIA_RELATIONSHIP_ATTRIBUTES = [
  'aria-activedescendant',
  'aria-colcount',
  'aria-colindex',
  'aria-colspan',
  'aria-controls',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-errormessage',
  'aria-flowto',
  'aria-labelledby',
  'aria-owns',
  'aria-posinset',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowspan',
  'aria-setsize'
] as const;

/**
 * Global Attributes - Used to define the behavior of elements that are used across multipleroles.
 * These attributes can be used on any element.
 */
export const ARIA_GLOBAL_ATTRIBUTES = [
  'aria-atomic',
  'aria-busy',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-dropeffect',
  'aria-errormessage',
  'aria-flowto',
  'aria-grabbed',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-live',
  'aria-owns',
  'aria-relevant',
  'aria-roledescription'
] as const;


/**
 * ARIA Attributes - States and properties used to define the behavior of elements that are used across multiple roles.
 * 
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
 * @see https://www.w3.org/TR/wai-aria-1.1/#state_prop_def
 * 
 * @property {ARIA_WIDGET_ATTRIBUTES} WIDGET - Widget attributes
 * @property {ARIA_LIVE_REGION_ATTRIBUTES} LIVE_REGION - Live region attributes
 * @property {ARIA_DRAG_AND_DROP_ATTRIBUTES} DRAG_AND_DROP - Drag and drop attributes
 * @property {ARIA_RELATIONSHIP_ATTRIBUTES} RELATIONSHIP - Relationship attributes
 * @property {ARIA_GLOBAL_ATTRIBUTES} GLOBAL - Global attributes
 */
export const ARIA_ATTRIBUTES = {
  /**
   * Widget Attributes - Used to define the current state of a user interface object.
   * @enum {string} WIDGET
   * @see https://www.w3.org/TR/wai-aria-1.1/#state_prop_def
   */
  WIDGET: ARIA_WIDGET_ATTRIBUTES,

  /**
   * Live Region Attributes - Used to define the behavior of a live region.
   * @see https://www.w3.org/TR/wai-aria-1.1/#aria-live
   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
   */
  LIVE_REGION: ARIA_LIVE_REGION_ATTRIBUTES,

  /**
   * Drag-And-Drop Attributes - Used to define the behavior of draggable elements.
   * @see https://www.w3.org/TR/wai-aria-1.1/#dragdrop
   */
  DRAG_AND_DROP: ARIA_DRAG_AND_DROP_ATTRIBUTES,

  /**
   * Relationship Attributes - Used to define the relationship between elements.
   * @see https://www.w3.org/TR/wai-aria-1.1/#relationship_attributes
   */
  RELATIONSHIP: ARIA_RELATIONSHIP_ATTRIBUTES,

  /**
   * Global Attributes - Used to define the behavior of elements that are used across multiple roles.
   * These attributes can be used on any element.
   * @see https://www.w3.org/TR/wai-aria-1.1/#global_states
   */
  GLOBAL: ARIA_GLOBAL_ATTRIBUTES
} as const;

/**
 * A list of all ARIA attributes that can be used in your sites and applications.
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques
 */
export const ALL_ARIA_ATTRIBUTES = [
  ...ARIA_WIDGET_ATTRIBUTES,
  ...ARIA_LIVE_REGION_ATTRIBUTES,
  ...ARIA_DRAG_AND_DROP_ATTRIBUTES,
  ...ARIA_RELATIONSHIP_ATTRIBUTES,
  ...ARIA_GLOBAL_ATTRIBUTES
] as const;