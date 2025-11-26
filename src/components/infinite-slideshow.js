import { LitElement, html, css } from "lit";

export class InfiniteSlideshow extends LitElement {
    static properties = {
        currentIndex: { type: Number },
        travel: { type: Number },
    };

    constructor() {
        super();
        this.currentIndex = 1;
        this.travel = 1;
        this.totalSlides = 0;
        this.isTransitioning = false;
        this.slidesContainer = null;
        this.userSlides = [];
    }

    // Subclasses override this to add UI
    renderExtraContent() {
        return html``;
    }

    static styles = css`
        :host {
            display: block;
            overflow: hidden;
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
    `;

    firstUpdated() {
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

        // --- create clone of last at head ---
        const lastClone = this.userSlides[this.totalSlides - 1].cloneNode(true);
        lastClone.classList.add("slide");
        this.slidesContainer.appendChild(lastClone);

        // --- add real slides ---
        this.userSlides.forEach((el) => {
            const clone = el.cloneNode(true);
            clone.classList.add("slide");
            this.slidesContainer.appendChild(clone);
        });

        // --- clone first at tail ---
        const firstClone = this.userSlides[0].cloneNode(true);
        firstClone.classList.add("slide");
        this.slidesContainer.appendChild(firstClone);

        // snap into position
        this.updateTransform(true);
    }

    prevSlide() {
        if (this.isTransitioning || this.totalSlides === 0) return;

        this.adjustTravel();
        this.isTransitioning = true;

        this.currentIndex -= this.travel;
        this.updateTransform();
    }

    nextSlide() {
        if (this.isTransitioning || this.totalSlides === 0) return;

        this.adjustTravel();
        this.isTransitioning = true;

        this.currentIndex += this.travel;
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

        this.slidesContainer.style.transition = instant
            ? "none"
            : "transform 0.25s ease";
        this.slidesContainer.style.transform = `translateX(-${
            this.currentIndex * 100
        }%)`;
    }

    handleTransitionEnd() {
        // Wrap from clone at start back to real last slide
        if (this.currentIndex < 1) {
            // Example: index = 0 or negative
            this.currentIndex = this.totalSlides;
            this.updateTransform(true);
        }

        // Wrap from clone at end to real first slide
        else if (this.currentIndex > this.totalSlides) {
            // Example: totalSlides = 5, index = 6
            this.currentIndex = 1;
            this.updateTransform(true);
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

customElements.define("infinite-slideshow", InfiniteSlideshow);
