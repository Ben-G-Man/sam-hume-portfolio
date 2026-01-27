import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

export class InteractiveSlideshow extends DefaultSlideshow {
    static properties = {
        buttonStyle: { type: String },
    };

    constructor() {
        super();
        this.buttonStyle = "tape";
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
                width: calc(13 * var(--cw));
                height: calc(13 * var(--cw));
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                cursor: pointer;
            }

            #prev.scribble {
                left: calc(-3 * var(--cw));
            }

            #next.scribble {
                right: calc(-3 * var(--cw));
            }

            #prev.tape {
                left: calc(3 * var(--cw));
            }

            #next.tape {
                right: calc(3 * var(--cw));
            }

            button.tape {
                filter: grayscale(100%);
                transition: filter 0.1s ease;
            }

            button.tape:hover {
                filter: grayscale(0%);
                transition: filter 0.1s ease;
            }

            #prev.tape {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp);
            }

            #next.tape {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-red.webp);
            }

            button.scribble {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_1.webp);
            }

            button.scribble:hover {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_2.gif);
            }

            #next.scribble {
                transform: translateY(-50%) scaleX(-1);
            }
        `,
    ];

    renderExtraContent() {
        return html`
                <button id="prev" class="${this.buttonStyle}" @click=${this.prevSlide}></button>
                <button id="next" class="${this.buttonStyle}" @click=${this.nextSlide}></button>
            </div>
        `;
    }

}

customElements.define("interactive-slideshow", InteractiveSlideshow);
