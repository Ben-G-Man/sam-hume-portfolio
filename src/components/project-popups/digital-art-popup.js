import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DigitalArtPopup extends ProjectPopup {    
    constructor() {
        super();

        this.slideshowImages = [
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-1.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-3.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-4.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-5.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-6.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-7.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-8.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-v2-9.webp",
        ];
    }

    static styles = [
        ProjectPopup.styles,
        css`
            img {
                position: absolute;
                width: calc(80 * var(--cw));
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: contain;
            }

            multimedia-slideshow {
                margin-left: 13%;
                width: calc(74 * var(--cw));
                aspect-ratio: 5 / 4;
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/other-digital-v2-art.webp" />
            <multimedia-slideshow
                .images=${this.slideshowImages}
                duration="0"
                navbar="true"
            ></multimedia-slideshow>
        `;
    }
}

customElements.define("digital-art-popup", DigitalArtPopup);
