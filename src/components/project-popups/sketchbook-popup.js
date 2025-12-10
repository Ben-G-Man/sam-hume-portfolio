import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";
import { ImageSlideshow } from "./../slideshows/image-slideshow";

export class SketchbookPopup extends ProjectPopup {
    constructor() {
        super();

        this.slideshowImages = [
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-1.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-3.webp",
        ];
    }

    static styles = [
        ProjectPopup.styles,
        css`
            img {
                position: absolute;
                width: 91%;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            image-slideshow {
                padding-top: 4%;
                margin-left: 10%;
                width: 80%;
                aspect-ratio: 1946 / 800;
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sketchbook layout.webp" />
            <image-slideshow
                travel="0.5"
                .images=${this.slideshowImages}
                .continuous=${true}
            ></image-slideshow>
        `;
    }
}

customElements.define("sketchbook-popup", SketchbookPopup);
