// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';


/**
 * The options used to create an element.
 */
export
interface IElementOptions {
  children?: HTMLElement[];
  className?: string;
  textContent?: string;
  title?: string;
  value?: string;
}


/**
 * Create an element with the given tag name and options.
 */
export 
function createElement(tag: string, options: IElementOptions) : HTMLElement {
  let el = document.createElement(tag);
  if (Array.isArray(options.children)) {
    for (let child of options.children) {
      el.appendChild(child);
    }
  }
  if (options.className !== void 0) {
    el.className = options.className;
  }
  if (options.textContent !== void 0) {
    el.textContent = options.textContent;
  }
  if (options.title !== void 0) {
    el.title = options.title;
  }
  if (options.value !== void 0) {
    (el as HTMLInputElement).value = options.value;
  }
  return el;
}
