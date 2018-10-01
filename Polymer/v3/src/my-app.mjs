import { Element } from '@polymer/polymer/polymer-element.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import './poly2map.mjs';
class MyApp extends Element {
  static get template() {
    return html`
    <style>
    </style>
    <poly-three-map></poly-three-map>
`;
  }

  static get is() { return 'my-app'; }

  static get properties() {
    return {
    };
  }
}

window.customElements.define(MyApp.is, MyApp);
