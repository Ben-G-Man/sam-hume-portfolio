import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

const STYLE_PRESETS = {
    default: "button { width: 13vw; }",
    withNavBar: "button { width: 8vw; }",
};

export class InteractiveSlideshow extends DefaultSlideshow {
    static properties = {
        imagePath: { type: String },
        imagePathHover: { type: String },
        buttonSpacing: { type: String },
        stylePreset: { type: String },
    };

    constructor() {
        super();
        this.imagePath = "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp";
        this.imagePathHover = "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp";
        this.buttonSpacing = "10vw";
    }

    static styles = [
        DefaultSlideshow.styles,
        css`
            :host {
                width: 100%;
                height: 100%;
            }

            button {
                position: absolute;
                aspect-ratio: 1 / 1;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-image: var(--btn-img);
                cursor: pointer;
            }

            button:hover {
                background-image: var(--btn-img-hover);
            }

            #prev {
                left: var(--button-spacing);
            }

            #next {
                right: var(--button-spacing);
                transform: translateY(-50%) scaleX(-1);
            }
        `,
    ];

    renderExtraContent() {
        const preset = STYLE_PRESETS[this.stylePreset] ?? STYLE_PRESETS.default;
        return html`
            <style>
                ${preset}
            </style>
            <div
                style="
                    --btn-img: url(${this.imagePath});
                    --btn-img-hover: url(${this.imagePathHover});
                    --button-spacing: ${this.buttonSpacing};
                "
            >
                <button id="prev" @click=${this.prevSlide}></button>
                <button id="next" @click=${this.nextSlide}></button>
            </div>
        `;
    }

}

customElements.define("interactive-slideshow", InteractiveSlideshow);
