import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

export class InteractiveSlideshow extends DefaultSlideshow {
    static properties = {
        prevImagePath: { type: String },
        prevImagePathHover: { type: String },
        nextImagePath: { type: String },
        nextImagePathHover: { type: String },
    };

    constructor() {
        super();
        this.prevImagePath =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp";
        this.prevImagePathHover =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp";
        this.nextImagePath =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-grey.webp";
        this.nextImagePathHover =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-red.webp";
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
                left: 10vw;
                background-image: var(--prev-img);
            }

            #prev:hover {
                background-image: var(--prev-hover);
            }

            #next {
                right: 10vw;
                background-image: var(--next-img);
            }

            #next:hover {
                background-image: var(--next-hover);
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <button
                id="prev"
                @click="${this.prevSlide}"
                style="
                    --prev-img: url(${this.prevImagePath});
                    --prev-hover: url(${this.prevImagePathHover});
                "
            ></button>

            <button
                id="next"
                @click="${this.nextSlide}"
                style="
                    --next-img: url(${this.nextImagePath});
                    --next-hover: url(${this.nextImagePathHover});
                "
            ></button>
        `;
    }
}

customElements.define("interactive-slideshow", InteractiveSlideshow);
