import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

export class NavbarSlideshow extends DefaultSlideshow {
    constructor() {
        super();
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
                width: 4vw;
                height: 4vw;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp);
                cursor: pointer;
            }

            button:hover {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp);
            }

            #prev {
                left: 0;
            }

            #next {
                right: 0;
                transform: translateY(-50%) scaleX(-1);
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <div>
                <button id="prev" @click=${this.prevSlide}></button>
                <button id="next" @click=${this.nextSlide}></button>
            </div>
        `;
    }

}

customElements.define("navbar-slideshow", NavbarSlideshow);
