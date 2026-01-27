import { LitElement, html, css } from "lit";

export class DefaultSlideshow extends LitElement {
    static properties = {
        currentIndex: { type: Number },
        travel: { type: Number },
        looping: { type: Boolean },
        duration: { type: Number },
    };

    constructor() {
        super();
        this.travel = 1;
        this.looping = true;
        this.duration = 0.3;
        this.currentIndex = this.looping ? 1 : 0;
        this.totalSlides = 0;
        this.isTransitioning = false;
        this.slidesContainer = null;
        this.userSlides = [];
    }

    renderExtraContent() {
        return html``;
    }

    static styles = css`
        :host {
            display: block;
            position: relative;
        }

        .viewport {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .slides {
            display: flex;
            height: 100%;
            transition: transform 0.25s ease;
            will-change: transform;
        }

        .slide {
            flex: 0 0 100%;
            height: 100%;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
        }
            
        .imageSlide {
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .imageSlide img {
            max-width: 100%;
            max-height: 100%;
            width: auto;
            height: auto;
            object-fit: contain;
            pointer-events: none;
        }
    `;

    firstUpdated() {
        super.firstUpdated();
        
        this.slidesContainer = this.renderRoot.querySelector(".slides");

        this.userSlides = Array.from(this.children);
        this.totalSlides = this.userSlides.length;

        this.populateSlides();

        this.slidesContainer.addEventListener("transitionend", () => {
            this.handleTransitionEnd();
        });
    }

    populateSlides() {
        if (!this.slidesContainer) return;

        this.slidesContainer.innerHTML = "";

        if (this.totalSlides === 0) return;

        if (this.looping) {
            // --- create clone of last at head ---
            const lastClone = this.userSlides[this.totalSlides - 1].cloneNode(true);
            lastClone.classList.add("slide");
            this.slidesContainer.appendChild(lastClone);
        }

        // --- add real slides ---
        this.userSlides.forEach((el) => {
            const clone = el.cloneNode(true);
            clone.classList.add("slide");
            this.slidesContainer.appendChild(clone);
        });

        if (this.looping) {
            // --- clone first at tail ---
            const firstClone = this.userSlides[0].cloneNode(true);
            firstClone.classList.add("slide");
            this.slidesContainer.appendChild(firstClone);
        }

        // snap into position
        this.updateTransform(true);
    }

    prevSlide() {
        this.setSlide(this.currentIndex - this.travel);
    }

    nextSlide() {
        this.setSlide(this.currentIndex + this.travel);
    }

    setSlide(newIndex) {
        if (this.isTransitioning || this.totalSlides === 0) return;
        if (!this.looping && (newIndex < 0 || newIndex >= this.totalSlides - this.travel)) return;
        this.adjustTravel();
        this.isTransitioning = true;
        this.currentIndex = newIndex;
        this.updateTransform();
    }

    // sanitize travel value
    adjustTravel() {
        if (
            typeof this.travel !== "number" ||
            this.travel <= 0 ||
            this.travel > 1
        ) {
            this.travel = 1;
        }
    }

    updateTransform(instant = false) {
        if (!this.slidesContainer) return;

        this.slidesContainer.style.transition = instant || this.duration <= 0
            ? "none"
            : `transform ${this.duration}s ease`;
        this.slidesContainer.style.transform = `translateX(-${
            this.currentIndex * 100
        }%)`;

        // Correct for lack of transition-triggered end handling
        if (!instant && this.duration <= 0) {
            this.handleTransitionEnd();
        }
    }

    handleTransitionEnd() {
        if (this.looping) {
            // Wrap from clone at start back to real last slide
            if (this.currentIndex < this.travel) {
                this.currentIndex = this.totalSlides;
                this.updateTransform(true);
            }

            // Wrap from clone at end to real first slide
            else if (this.currentIndex > this.totalSlides + 1 - this.travel) {
                this.currentIndex = 1;
                this.updateTransform(true);
            }
        }

        // Now transitions allowed again
        this.isTransitioning = false;
    }

    render() {
        return html`
            <div class="viewport">
                <div class="slides"></div>
            </div>

            ${this.renderExtraContent()}
        `;
    }
}

customElements.define("default-slideshow", DefaultSlideshow);
