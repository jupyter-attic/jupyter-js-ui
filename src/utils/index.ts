// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

/**
 * HTML element attributes.
 */
export
interface IElementOptions {
  /**
   * A space-delimited list of classes for the element.
   */
   className?: string;

   /**
    * The title attribute of the element.
    */
   title?: string;

   /**
    * The value attribute of the element.
    */
   value?: string;
}

/**
 * Create an HTML element with given attributes and children.
 * 
 * #### Notes
 * As a convenience, the children can be a list of elements
 * or a string (which is interpreted as the textContent of the
 * new element).
 */

export
function createElement(tag: string, attr?: IElementOptions, children?: HTMLElement[] | string): HTMLElement {
  let el = document.createElement(tag);
  if (attr !== void 0 && attr !== null) {
    for (let x of Object.keys(attr)) {
      (el as any)[x] = (attr as any)[x];
    }
  }
  if (typeof children === 'string') {
     el.textContent = children;
  } else if (Array.isArray(children)) {
    for (let c of children) {
      el.appendChild(c);
    }
  }
  return el;
}
