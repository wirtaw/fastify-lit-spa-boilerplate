import {html, css, LitElement} from 'lit';

export class MainSpa extends LitElement {
  static get styles() {
    return css`p { color: red }`;
  }

  static get properties() {
    return {
      user: {type: Object}
    }
  }

  constructor() {
    super();
    this.user = {name: 'Somebody'};
  }

  firstUpdated(){
    fetch('/v1/user')
      .then((res) => res.json())
      .then((res) => {
        this.user = res;
      });
  }

  render() {
    return html`
      <div class="app">
        <header class="app-header">
          <h1 class="app-title">Welcome, ${this.user.name} to LitHTML</h1>
        </header>
        <div class="app-links">
          <a href="/">Home</a>
        </div>
        <div id="outlet"></div>
      </div>`;
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
