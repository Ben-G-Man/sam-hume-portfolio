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

            #navbar {
                position: absolute;
                width: 70%;
                left: 15%;
                bottom: 0;
                height: 6vw;
                background-color: rgba(0, 0, 0, 0.5);
            }

            button {
                position: absolute;
                width: 6vw;
                height: 6vw;
                border: 0;
                bottom: 0;
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
                transform: scaleX(-1);
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <div id="navbar"></div>
            <div>
                <button id="prev" @click=${this.prevSlide}></button>
                <button id="next" @click=${this.nextSlide}></button>
            </div>
        `;
    }

}

customElements.define("navbar-slideshow", NavbarSlideshow);
