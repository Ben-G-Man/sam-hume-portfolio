import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DigitalArtPopup extends ProjectPopup {    
    constructor() {
        super();

        this.slideshowImages = [
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-1.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-3.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-4.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-5.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-6.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-7.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/digital-8.webp",
        ];
    }

    static styles = [
        ProjectPopup.styles,
        css`
            img {
                position: absolute;
                width: 100vw;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                object-fit: contain;
            }

            multimedia-slideshow {
                margin-left: 13%;
                width: 74vw;
                aspect-ratio: 5 / 4;
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/other digital art/other-digital-art.webp" />
            <multimedia-slideshow
                .images=${this.slideshowImages}
                duration="0"
                navbar="true"
            ></multimedia-slideshow>
        `;
    }
}

customElements.define("digital-art-popup", DigitalArtPopup);
