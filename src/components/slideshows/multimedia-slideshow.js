import { LitElement, html, css } from "lit";
import { ExpandableImage } from "../expandable-image";

export class MultimediaSlideshow extends LitElement {
    static properties = {
        images: { type: Array },
        video: { type: String },
        travel: { type: Number },
        continuous: { type: Boolean },
        navBar: { type: Boolean },
        duration: { type: Number },
    };

    constructor() {
        super();
        this.images = [];
        this.videos = [];
        this.travel = 1;
        this.continuous = false;
        this.navBar = false;
        this.duration = 0.3;
    }

    static styles = css`
        :host {
            display: block;
            overflow: hidden;
            position: relative;
        }

        navbar-slideshow {
            margin-top: -3vw;
        }
    `;

    getSlides() {
        let slides = this.images.map(
            imageUrl => html`
                <div>
                    ${this.continuous
                        ? html`<img style="height: 100%;" src="${imageUrl}" />`
                        : html`<expandable-image style="max-height: 100%; max-width: 90%;" src="${imageUrl}"></expandable-image>`
                    }
                </div>
            `
        );

        // If a video URL is provided, include it as the last slide via iFrame
        if (this.video) {
            slides.push(
                html`
                    <div>
                        <iframe
                            width="65%"
                            height="50%"
                            src="${this.video}"
                            title="YouTube video player"
                            frameborder="0"
                            allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                            allowfullscreen
                        ></iframe>
                    </div>
                `
            );
        }

        return slides;
    }

    getPreviewImages() {
        let previewImages = [...this.images];
        if (this.video) previewImages.concat("placeholderImage");
        return previewImages;
    }

    render() {
        if (this.navBar) {
            return html`
                <navbar-slideshow travel="${this.travel}" duration="${this.duration}" .previewImages="${this.getPreviewImages()}">
                    ${this.getSlides()}
                </navbar-slideshow>
            `;
        } else {
            return html`
                <interactive-slideshow
                    buttonStyle="scribble"
                    duration="${this.duration}"
                    travel="${this.travel}"
                >
                    ${this.getSlides()}
                </interactive-slideshow>
            `
        }
    }
}

customElements.define("multimedia-slideshow", MultimediaSlideshow);
