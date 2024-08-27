import type { NodeProperties } from "@/types/NodeProperties";

/**
 * Node properties
 * 
 * @param node - Node properties
 * @returns Node properties
 */
const NODE_PROPERTIES = (node: NodeProperties) => {
  return {
    accessKey: node?.accessKey,
    align: node?.align,
    ariaAtomic: node?.ariaAtomic,
    ariaAutoComplete: node?.ariaAutoComplete,
    ariaBrailleLabel: node?.ariaBrailleLabel,
    ariaBrailleRoleDescription: node?.ariaBrailleRoleDescription,
    ariaBusy: node?.ariaBusy,
    ariaChecked: node?.ariaChecked,
    ariaColCount: node?.ariaColCount,
    ariaColIndex: node?.ariaColIndex,
    ariaColSpan: node?.ariaColSpan,
    ariaCurrent: node?.ariaCurrent,
    ariaDescription: node?.ariaDescription,
    ariaDisabled: node?.ariaDisabled,
    ariaExpanded: node?.ariaExpanded,
    ariaHasPopup: node?.ariaHasPopup,
    ariaHidden: node?.ariaHidden,
    ariaInvalid: node?.ariaInvalid,
    ariaKeyShortcuts: node?.ariaKeyShortcuts,
    ariaLabel: node?.ariaLabel,
    ariaLevel: node?.ariaLevel,
    ariaLive: node?.ariaLive,
    ariaModal: node?.ariaModal,
    ariaMultiLine: node?.ariaMultiLine,
    ariaMultiSelectable: node?.ariaMultiSelectable,
    ariaOrientation: node?.ariaOrientation,
    ariaPlaceholder: node?.ariaPlaceholder,
    ariaPosInSet: node?.ariaPosInSet,
    ariaPressed: node?.ariaPressed,
    ariaReadOnly: node?.ariaReadOnly,
    ariaRelevant: node?.ariaRelevant,
    ariaRequired: node?.ariaRequired,
    ariaRoleDescription: node?.ariaRoleDescription,
    ariaRowCount: node?.ariaRowCount,
    ariaRowIndex: node?.ariaRowIndex,
    ariaRowSpan: node?.ariaRowSpan,
    ariaSelected: node?.ariaSelected,
    ariaSetSize: node?.ariaSetSize,
    ariaSort: node?.ariaSort,
    ariaValueMax: node?.ariaValueMax,
    ariaValueMin: node?.ariaValueMin,
    ariaValueNow: node?.ariaValueNow,
    ariaValueText: node?.ariaValueText,
    assignedSlot: node?.assignedSlot,
    attributeStyleMap: node?.attributes,
    attributes: node?.attributes,
    autocapitalize: node?.autocapitalize,
    autofocus: node?.autofocus,
    baseURI: node?.baseURI,
    childElementCount: node?.childElementCount,
    childNodes: node?.childNodes,
    children: node?.children,
    classList: node?.classList,
    className: node?.className,
    clientHeight: node?.clientHeight,
    clientLeft: node?.clientLeft,
    clientTop: node?.clientTop,
    clientWidth: node?.clientWidth,
    contentEditable: node?.contentEditable,
    dataset: node?.dataset,
    dir: node?.dir,
    draggable: node?.draggable,
    elementTiming: node?.elementTiming,
    enterKeyHint: node?.enterKeyHint,
    firstChild: node?.firstChild,
    firstElementChild: node?.firstElementChild,
    hidden: node?.hidden,
    id: node?.id,
    inert: node?.inert,
    innerHTML: node?.innerHTML,
    innerText: node?.innerText,
    inputMode: node?.inputMode,
    isConnected: node?.isConnected,
    isContentEditable: node?.isContentEditable,
    lang: node?.lang,
    lastChild: node?.lastChild,
    lastElementChild: node?.lastElementChild,
    localName: node?.localName,
    namespaceURI: node?.namespaceURI,
    nextElementSibling: node?.nextElementSibling,
    nextSibling: node?.nextSibling,
    nodeName: node?.nodeName,
    nodeType: node?.nodeType,
    nodeValue: node?.nodeValue,
    nonce: node?.nonce,
    offsetHeight: node?.offsetHeight,
    offsetLeft: node?.offsetLeft,
    offsetParent: node?.offsetParent,
    offsetTop: node?.offsetTop,
    offsetWidth: node?.offsetWidth,
    onabort: node?.onabort,
    onanimationend: node?.onanimationend,
    onanimationiteration: node?.onanimationiteration,
    onanimationstart: node?.onanimationstart,
    onauxclick: node?.onauxclick,
    onbeforecopy: node?.onbeforecopy,
    onbeforecut: node?.onbeforecut,
    onbeforeinput: node?.onbeforeinput,
    onbeforematch: node?.onbeforematch,
    onbeforepaste: node?.onbeforepaste,
    onbeforexrselect: node?.onbeforexrselect,
    onblur: node?.onblur,
    oncancel: node?.oncancel,
    oncanplay: node?.oncanplay,
    oncanplaythrough: node?.oncanplaythrough,
    onchange: node?.onchange,
    onclick: node?.onclick,
    onclose: node?.onclose,
    oncontentvisibilityautostatechange: node?.oncontentvisibilityautostatechange,
    oncontextlost: node?.oncontextlost,
    oncontextmenu: node?.oncontextmenu,
    oncontextrestored: node?.oncontextrestored,
    oncopy: node?.oncopy,
    oncuechange: node?.oncuechange,
    oncut: node?.oncut,
    ondblclick: node?.ondblclick,
    ondrag: node?.ondrag,
    ondragend: node?.ondragend,
    ondragenter: node?.ondragenter,
    ondragleave: node?.ondragleave,
    ondragover: node?.ondragover,
    ondragstart: node?.ondragstart,
    ondrop: node?.ondrop,
    ondurationchange: node?.ondurationchange,
    onemptied: node?.onemptied,
    onended: node?.onended,
    onerror: node?.onerror,
    onfocus: node?.onfocus,
    onformdata: node?.onformdata,
    onfullscreenchange: node?.onfullscreenchange,
    onfullscreenerror: node?.onfullscreenerror,
    ongotpointercapture: node?.ongotpointercapture,
    oninput: node?.oninput,
    oninvalid: node?.oninvalid,
    onkeydown: node?.onkeydown,
    onkeypress: node?.onkeypress,
    onkeyup: node?.onkeyup,
    onload: node?.onload,
    onloadeddata: node?.onloadeddata,
    onloadedmetadata: node?.onloadedmetadata,
    onloadstart: node?.onloadstart,
    onlostpointercapture: node?.onlostpointercapture,
    onmousedown: node?.onmousedown,
    onmouseenter: node?.onmouseenter,
    onmouseleave: node?.onmouseleave,
    onmousemove: node?.onmousemove,
    onmouseout: node?.onmouseout,
    onmouseover: node?.onmouseover,
    onmouseup: node?.onmouseup,
    onmousewheel: node?.onmousewheel,
    onpaste: node?.onpaste,
    onpause: node?.onpause,
    onplay: node?.onplay,
    onplaying: node?.onplaying,
    onpointercancel: node?.onpointercancel,
    onpointerdown: node?.onpointerdown,
    onpointerenter: node?.onpointerenter,
    onpointerleave: node?.onpointerleave,
    onpointermove: node?.onpointermove,
    onpointerout: node?.onpointerout,
    onpointerover: node?.onpointerover,
    onpointerrawupdate: node?.onpointerrawupdate,
    onpointerup: node?.onpointerup,
    onprogress: node?.onprogress,
    onratechange: node?.onratechange,
    onreset: node?.onreset,
    onresize: node?.onresize,
    onscroll: node?.onscroll,
    onsearch: node?.onsearch,
    onsecuritypolicyviolation: node?.onsecuritypolicyviolation,
    onseeked: node?.onseeked,
    onseeking: node?.onseeking,
    onselect: node?.onselect,
    onselectionchange: node?.onselectionchange,
    onselectstart: node?.onselectstart,
    onslotchange: node?.onslotchange,
    onstalled: node?.onstalled,
    onsubmit: node?.onsubmit,
    onsuspend: node?.onsuspend,
    ontimeupdate: node?.ontimeupdate,
    ontoggle: node?.ontoggle,
    ontransitioncancel: node?.ontransitioncancel,
    ontransitionend: node?.ontransitionend,
    ontransitionrun: node?.ontransitionrun,
    ontransitionstart: node?.ontransitionstart,
    onvolumechange: node?.onvolumechange,
    onwaiting: node?.onwaiting,
    onwebkitanimationend: node?.onwebkitanimationend,
    onwebkitanimationiteration: node?.onwebkitanimationiteration,
    onwebkitanimationstart: node?.onwebkitanimationstart,
    onwebkitfullscreenchange: node?.onwebkitfullscreenchange,
    onwebkitfullscreenerror: node?.onwebkitfullscreenerror,
    onwebkittransitionend: node?.onwebkittransitionend,
    onwheel: node?.onwheel,
    outerHTML: node?.outerHTML,
    outerText: node?.outerText,
    ownerDocument: node?.ownerDocument,
    parentElement: node?.parentElement,
    parentNode: node?.parentNode,
    part: node?.part,
    prefix: node?.prefix,
    previousElementSibling: node?.previousElementSibling,
    previousSibling: node?.previousSibling,
    role: node?.role,
    scrollHeight: node?.scrollHeight,
    scrollLeft: node?.scrollLeft,
    scrollTop: node?.scrollTop,
    scrollWidth: node?.scrollWidth,
    shadowRoot: node?.shadowRoot,
    slot: node?.slot,
    spellcheck: node?.spellcheck,
    style: node?.style,
    tabIndex: node?.tabIndex,
    tagName: node?.tagName,
    textContent: node?.textContent,
    title: node?.title,
    translate: node?.translate,
    virtualKeyboardPolicy: node?.virtualKeyboardPolicy,
  }
}

export default NODE_PROPERTIES;