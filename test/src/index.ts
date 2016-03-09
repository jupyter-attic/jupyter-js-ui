// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import expect = require('expect.js');
import { createElement } from '../../lib/utils';

describe('jupyter-ui', () => {
  describe('jupyter-js-ui/utils', () => {
    it('createElement simple element', () => {
      let el = createElement('div');
      expect(el).to.have.property('tagName', 'DIV');
    })
    it('createElement text content', () => {
      let el = createElement('div', null, 'inside')
      expect(el).to.have.property('tagName', 'DIV');
      expect(el.textContent).to.be('inside'); 
    })
    it('createElement with attributes', () => {
      let el: HTMLInputElement = createElement('input', {className: 'classA classB', value: 'myvalue', title: 'mytitle'}) as HTMLInputElement;
      expect(el).to.have.property('tagName', 'INPUT');
      expect(el.classList.contains('classA')).to.be(true);
      expect(el.classList.contains('classB')).to.be(true);
      expect(el).to.have.property('value', 'myvalue');
      expect(el).to.have.property('title', 'mytitle');
    })
    it('createElement with no attributes and children', () => {
      let el: HTMLElement = createElement('span', void 0, [
        createElement('span', null, 'inside1'),
        createElement('span', {}, 'inside2')
      ]);
      expect(el).to.have.property('tagName', 'SPAN');
      expect(el.children[0]).to.have.property('tagName', 'SPAN');
      expect(el.children[0]).to.have.property('textContent', 'inside1');
      expect(el.children[1]).to.have.property('tagName', 'SPAN');
      expect(el.children[1]).to.have.property('textContent', 'inside2');
    })
    it('createElement with attributes and children', () => {
      let el: HTMLElement = createElement('span', {className: 'classA'}, [
        createElement('span', null, 'inside1'),
      ]);
      expect(el).to.have.property('tagName', 'SPAN');
      expect(el.classList.contains('classA')).to.be(true);
      expect(el.children[0]).to.have.property('tagName', 'SPAN');
      expect(el.children[0]).to.have.property('textContent', 'inside1');
    })
  });
});
