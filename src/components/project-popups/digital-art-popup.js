import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DigitalArtPopup extends ProjectPopup {    
    constructor() {
        super();

        // TODO: Hardcode in auto-replacing MED_RES with HIGH_RES once we have MED_RES and HIGH_RES alternatives 
        this.slideshowImages = [
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/1.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/2.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/3.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/4.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/5.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/6.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/7.webp",
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/8.webp",
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
            <img src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/digital-art/background.webp" />
            <multimedia-slideshow
                .images=${this.slideshowImages}
                duration="0"
                navbar
            ></multimedia-slideshow>
        `;
    }
}

customElements.define("digital-art-popup", DigitalArtPopup);
