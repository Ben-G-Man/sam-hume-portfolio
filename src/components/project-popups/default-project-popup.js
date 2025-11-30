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

                #background {
                    height: 90%;
                    position: absolute;
                    top: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            `,
    ]

    renderExtraContent() {
        return html`
            <img loading="lazy" id="background" src='https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/background-lined-paper.webp' />
            <img loading="lazy" class="work-text" src="${this.textImagePath}" />
        `;
    }
}

customElements.define("default-project-popup", DefaultProjectPopup);
