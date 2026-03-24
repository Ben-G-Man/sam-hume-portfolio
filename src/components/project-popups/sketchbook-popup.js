import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";
import { MultimediaSlideshow } from "../slideshows/multimedia-slideshow";

export class SketchbookPopup extends ProjectPopup {
    constructor() {
        super();

        this.slideshowImages = [
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/sketchbook/1-v2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/sketchbook/2-v2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/sketchbook/3-v2.webp",
        ];
    }

    static styles = [
        ProjectPopup.styles,
        css`
            img {
                position: absolute;
                width: 105%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            multimedia-slideshow {
                padding-top: 4%;
                margin-left: 3.5%;
                width: 92%;
                aspect-ratio: 1946 / 800;
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/sketchbook/background.webp" />
            <multimedia-slideshow
                travel="0.5"
                .images=${this.slideshowImages}
                .continuous=${true}
            ></multimedia-slideshow>
        `;
    }
}

customElements.define("sketchbook-popup", SketchbookPopup);
