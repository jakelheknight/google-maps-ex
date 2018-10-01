import {LitElement, html} from '@polymer/lit-element';
import './poly2map.mjs';
class MyApp extends LitElement {
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
