import { LitElement, html, css } from "lit";
import { ExpandableImage } from "../expandable-image";

export class MultimediaSlideshow extends LitElement {
    static properties = {
        images: { type: Array },
        video: { type: String },
        travel: { type: Number },
        continuous: { type: Boolean },
        navBar: { type: Boolean },
    };

    constructor() {
        super();
        this.images = [];
        this.videos = [];
        this.travel = 1;
        this.continuous = false;
        this.navBar = false;
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
                imagePath="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_1.webp"
                imagePathHover="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/arrow_2.gif"
                buttonSpacing="-3vw"
                travel="${this.travel}"
                stylePreset="${this.navBar ? 'withNavBar' : 'default'}"
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

                // If a video URL is provided, include it as the last slide via iFrame
                ${this.video
                    ? html`
                        <div>
                            <iframe
                                width="60%"
                                height="60%"
                                src="${this.video}"
                                title="YouTube video player"
                                frameborder="0"
                                allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
                                allowfullscreen
                            ></iframe>
                        </div>
                    `
                    : null
                }

            </interactive-slideshow>
        `;
    }

}

customElements.define("multimedia-slideshow", MultimediaSlideshow);
