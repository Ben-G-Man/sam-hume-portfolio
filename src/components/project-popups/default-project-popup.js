import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DefaultProjectPopup extends ProjectPopup {
    static properties = {
        title: { type: String },
        year: { type: String },
        length: { type: String },
        tools: { type: String },
        description: { type: String },
        slideDeckPrefixPath: { type: String },
        slideCount: { type: Number },
        standardSuffix: { type: String },
    };
    
    constructor() {
        super();
        this.standardSuffix = ".webp";
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
                    z-index: 5;
                }

                #background {
                    height: 90%;
                    position: absolute;
                    top: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                }

                image-slideshow {
                    position: absolute;
                    right: 15%;
                    width: 55%;
                    height: 80%;
                }
            `,
    ]

    renderExtraContent() {
        return html`
            <img loading="lazy" id="background" src='https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/background-squared-paper.webp' />
            <image-slideshow
                .images=${Array.from({ length: this.slideCount}, (_, i) => `${this.slideDeckPrefixPath}${i + 1}${this.standardSuffix}`)}
            ></image-slideshow>
        `;
    }
}

customElements.define("default-project-popup", DefaultProjectPopup);
