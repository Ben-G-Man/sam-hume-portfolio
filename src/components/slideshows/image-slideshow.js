import { LitElement, html, css } from "lit";
import { ExpandableImage } from "../expandable-image";

export class ImageSlideshow extends LitElement {
    static properties = {
        images: { type: Array },
        travel: { type: Number },
        continuous: { type: Boolean },
    };

    constructor() {
        super();
        this.imagePath =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow 1.webp";
        this.imagePathHover =
            "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow 2 (select).gif";
        this.travel = 1;
        this.continuous = false;
    }

    static styles = css`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
        }
    `;

    render() {
        return html`
        <interactive-slideshow
        .imagePath=${this.imagePath}
        .imagePathHover=${this.imagePathHover}
        buttonSpacing="0"
        travel="${this.travel}"
        >
        ${this.images.map(
            imageUrl => html`
                <div>
                    ${this.continuous
                        ? html`<img style="height: 100%;" src="${imageUrl}" />`
                        : html`<expandable-image style="max-height: 100%; max-width: 72%;" src="${imageUrl}"></expandable-image>`
                }
                </div>
            `
        )}

        </interactive-slideshow>
    `;
    }

}

customElements.define("image-slideshow", ImageSlideshow);
