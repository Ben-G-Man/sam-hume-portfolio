import { LitElement, html, css } from "lit";

export class Slice extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .slice {
            position: relative;
            display: block;
            height: 100%;
        }

        .slice-back {
            height: 100%;
            position: relative;
        }
    `;
}

customElements.define("basic-slice", Slice);
