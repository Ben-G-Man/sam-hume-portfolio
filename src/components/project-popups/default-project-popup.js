import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DefaultProjectPopup extends ProjectPopup {
    static properties = {
        textImagePath: { type: String },
        slideDeckPrefixPath: { type: String },
        slideCount: { type: Number },
    };
    
    constructor() {
        super();
    }

    static styles = [
            ProjectPopup.styles,
            css`
                .work-text {
                    pointer-events: none;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                }
            `,
    ]

    renderExtraContent() {
        return html`
            <img class="work-text" src="${this.textImagePath}" />
        `;
    }
}

customElements.define("default-project-popup", DefaultProjectPopup);
