import { css, html } from "lit";
import { InfiniteSlideshow } from "./infinite-slideshow.js";

export class AnimationSlideshow extends InfiniteSlideshow {
    static styles = [
        InfiniteSlideshow.styles,
        css`
            :host {
                width: 100%;
                aspect-ratio: 2 / 1;
            }
            button {
                position: absolute;
                width: 13vw;
                aspect-ratio: 1 / 1;
                border: 0;
                top: 50%;
                transform: translateY(-50%);
                background: rgba(0, 0, 0, 0);
                background-size: cover;
                cursor: pointer;
            }
            #prev {
                left: 10vw;
                background-image: url("/sam-hume-portfoliohttps://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-grey.webp");
            }
            #prev:hover {
                background-image: url("/sam-hume-portfoliohttps://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-left-red.webp");
            }
            #next {
                right: 10vw;
                background-image: url("/sam-hume-portfoliohttps://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-grey.webp");
            }
            #next:hover {
                background-image: url("/sam-hume-portfoliohttps://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/animation/button-right-red.webp");
            }
        `,
    ];

    renderExtraContent() {
        return html`
            <button id="prev" @click="${this.prevSlide}"></button>
            <button id="next" @click="${this.nextSlide}"></button>
        `;
    }
}

customElements.define("animation-slideshow", AnimationSlideshow);
