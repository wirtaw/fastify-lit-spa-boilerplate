import {html, css, LitElement} from 'lit';

export class MainSpa extends LitElement {
  static get styles() {
    return css`p { color: red }`;
  }

  static get properties() {
    return {
      name: {type: String}
    }
  }

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.name}!!!</p>`;
  }

  // static callback, called once when a class updates
  static hotReplacedCallback() {
    this.update();
  }

  // instance callback, called for each connected element
  hotReplacedCallback() {
    // this should kick off re-rendering
    this.rerender();
  }
}

customElements.define('main-spa', MainSpa);
