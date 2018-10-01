import {LitElement, html} from '@polymer/lit-element';
window.initMap = function () { window.dispatchEvent(new CustomEvent('google-map-ready')); }; // eslint-disable-line no-unused-vars
class LitElementMap extends LitElement {
  static get template() {
    return html`
    <style>
      :host {
        display: block
      }

      #map {
        height: 80vh;
        width: 99vw;
      }
    </style>
    <h1>Lit HTML</h1>

    <div id="map"></div>
`;
  }

  static get is() {
    return 'poly-three-map';
  }

  static get properties() {
    return {

    };
  }

  ready() {
    super.ready();
    // _mapScriptTag sets up and the google maps loader script tag - we inject it here
    // and after it loads it will fire the google-map-ready event
    this.shadowRoot.appendChild(this._mapScriptTag());
    window.addEventListener('google-map-ready', () => {
      this._mapRef = new google.maps.Map(this.shadowRoot.querySelector('#map'), {
        center: { lat: 40, lng: -112 },
        zoom: 5,
        streetViewControl: false,
      });
    });
  }

  _mapScriptTag() {
    const lang = 'en'
    // init google maps
    const googleMapsLoader = document.createElement('script');
    googleMapsLoader.src = `https://maps.${lang.includes('zh') ? 'google.cn' : 'googleapis.com'}/maps/api/js?key=${googleMapsKey}&language=${lang === 'zh' ? 'zh-TW' : lang}&callback=initMap`;
    googleMapsLoader.async = true;
    googleMapsLoader.defer = true;
    return googleMapsLoader;
  }
}

window.customElements.define(LitElementMap.is, Poly3Map);
