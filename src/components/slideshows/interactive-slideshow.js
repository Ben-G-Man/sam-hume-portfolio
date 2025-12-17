import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

export class InteractiveSlideshow extends DefaultSlideshow {
    static properties = {
        imagePath: { type: String },
        imagePathHover: { type: String },
        buttonSpacing: { type: String },
    };

    constructor() {
        super();
        this.imagePath =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp";
        this.imagePathHover =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp";
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
                width: 13vw;
                height: 13vw;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            #prev {
                left: var(--button-spacing);
                background-image: var(--btn-img);
            }

            #prev:hover {
                background-image: var(--btn-img-hover);
            }

            #next {
                right: var(--button-spacing);
                background-image: var(--btn-img);
                transform: translateY(-50%) scaleX(-1);
            }

            #next:hover {
                background-image: var(--btn-img-hover);
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <button
                id="prev"
                @click="${this.prevSlide}"
                style="
                    --btn-img: url(${this.imagePath});
                    --btn-img-hover: url(${this.imagePathHover});
                    --button-spacing: ${this.buttonSpacing};
                "
            ></button>

            <button
                id="next"
                @click="${this.nextSlide}"
                style="
                    --btn-img: url(${this.imagePath});
                    --btn-img-hover: url(${this.imagePathHover});
                    --button-spacing: ${this.buttonSpacing};
                "
            ></button>
        `;
    }
}

customElements.define("interactive-slideshow", InteractiveSlideshow);
