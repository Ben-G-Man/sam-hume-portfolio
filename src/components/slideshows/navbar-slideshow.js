import { css, html } from "lit";
import { DefaultSlideshow } from "./default-slideshow.js";

export class NavbarSlideshow extends DefaultSlideshow {
    static properties = {
        // Preview images is the array of miniature thumbnail images to show in each navbar slide
        previewImages: { type: Array },
    };

    constructor() {
        super();
        this.previewImages = [];
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
                left: 6vw;
                bottom: 0;
                height: 6vw;
                display: flex;
                justify-content: space-between;
                gap: 1vw;
            }

            .navbarSlide {
                height: 100%;
                aspect-ratio: 373 / 218;
                cursor: pointer;
            }

            .navbarSlide:nth-of-type(1), .navbarSlide:nth-of-type(3) {
                // filter: grayscale(100%);
                opacity: 0.5;
            }

            button {
                width: 6vw;
                height: 6vw;
                border: 0;
                bottom: 0;
                background: transparent;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_1.webp);
                cursor: pointer;
            }

            button:hover {
                background-image: url(https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_2.gif);
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

    // Overriding setSlide to trigger navbar update
    setSlide(newIndex) {
        super.setSlide(newIndex);
        this.updateNavbar();
    }

    updateNavbar() {
        const slides = this.renderRoot.querySelectorAll('.navbarSlide');
        slides[0].src = this.getRelativeSlidePreview(-1);
        slides[1].src = this.getRelativeSlidePreview(0);
        slides[2].src = this.getRelativeSlidePreview(1);
    }

    getRelativeSlidePreview(relativeIndex) {
        let index = this.currentIndex + relativeIndex;
        if (index < 0) {
            index = this.totalSlides - 1;
        } else if (index > this.totalSlides) {
            index = 0;
        }
        return this.previewImages[index];
    }

    renderExtraContent() {
        return html`
            <div id="navbar">
                <button @click=${this.prevSlide}></button>
                <img class="navbarSlide" @click=${this.prevSlide} />
                <img class="navbarSlide" />
                <img class="navbarSlide" @click=${this.nextSlide} />
                <button id="next" @click=${this.nextSlide}></button>
            </div>
        `;
    }

}

customElements.define("navbar-slideshow", NavbarSlideshow);
