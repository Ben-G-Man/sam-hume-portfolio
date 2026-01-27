import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";

export class DefaultProjectPopup extends ProjectPopup {
    static properties = {
        title: { type: String },
        year: { type: String },
        length: { type: String },
        tools: { type: String },
        description: { type: String },
        slideDeckPrefixPath: { type: String },
        slideCount: { type: Number },
        standardSuffix: { type: String },
        video: { type: String },
    };
    
    constructor() {
        super();
        this.standardSuffix = ".webp";
        this.videos = [];
    }

    static styles = [
            ProjectPopup.styles,
            css`
                #background {
                    width: 90%;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }

                multimedia-slideshow {
                    position: absolute;
                    right: calc(10 * var(--cw));
                    width: calc(55 * var(--cw));
                    aspect-ratio: 1 / 1;
                    top: 50%;
                    transform: translateY(-55%);
                }
                    
                #project-details-pane {
                    position: absolute;
                    left: calc(12.7 * var(--cw));
                    /* This calc keeps the top of the text in line with the top of the space allocated in the background art */
                    top: calc(50% - 20.3 * var(--cw));
                    width: calc(19 * var(--cw));
                    font-size: var(--text-height);
                }

                #project-length, #project-tools, #project-year{
                    display: flex;
                    line-height: calc(2.5 * var(--cw));
                }

                #project-title {
                    font-size: var(--subtitle-height);
                    line-height: calc(2.5 * var(--cw));
                    margin-bottom: calc(2.5 * var(--cw));
                }

                #project-description {
                    margin-top: calc(2.5 * var(--cw));
                }

                .project-label {
                    min-width: calc(6 * var(--cw));
                }
            `,
    ]

    renderExtraContent() {
        return html`
            <img loading="lazy" id="background" src='https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/background-squared-paper.webp' />
            <multimedia-slideshow
                .images=${Array.from({ length: this.slideCount}, (_, i) => `${this.slideDeckPrefixPath}${i + 1}${this.standardSuffix}`)}
                .video=${this.video}
                navbar="true"
                duration="0"
            ></multimedia-slideshow>

            <div id="project-details-pane">
                <div id="project-title">${this.title}</div>
                <div id="project-year">
                    <div class="project-label">Year:</div>
                    <div class="project-detail">${this.year}</div>
                </div>
                <div id="project-length">
                    <div class="project-label">Length:</div>
                    <div class="project-detail">${this.length}</div>
                </div>
                <div id="project-tools">
                    <div class="project-label">Tools:</div>
                    <div class="project-detail">${this.tools}</div>
                </div>
                <div id="project-description">${this.description}</div>
            </div>
        `;
    }
}

customElements.define("default-project-popup", DefaultProjectPopup);
