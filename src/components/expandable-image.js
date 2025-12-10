import { LitElement, html, css, nothing } from "lit";

export class ExpandableImage extends LitElement {
  static properties = {
    src: { type: String },
    loading: { type: String },
  };

  constructor() {
    super();
    this.src = "";
    this.loading = "lazy";
  }

  static styles = css`
    #main-image {
      max-width: 100%;
      max-height: 100%;
      cursor: zoom-in;
    }
  `;

  _open() {
    const template = document.getElementById("full-screen-template");
    const templateContent = template.content;
    const clone = document.importNode(templateContent, true);
    const fullScreenImage = clone.querySelector("#image-full-screen");
    fullScreenImage.src = this.src;
    const exitButton = clone.querySelector("#exit-button");
    exitButton.addEventListener("click", () => this._close());
    document.body.appendChild(clone);
  }

  _close() {
    const fullScreenContainer = document.getElementById("image-full-screen-container");
    if (fullScreenContainer) {
      document.body.removeChild(fullScreenContainer);
    }
  }

  render() {
    return html`
      <img id="main-image" loading=${this.loading} src=${this.src} @click=${this._open} />
      ${this.open ? nothing : ''}
    `;
  }
}

customElements.define("expandable-image", ExpandableImage);
