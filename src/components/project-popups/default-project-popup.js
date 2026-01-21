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
                    right: 10%;
                    width: 55%;
                    aspect-ratio: 1 / 1;
                    top: 50%;
                    transform: translateY(-55%);
                }
                    
                #project-details-pane {
                    position: absolute;
                    left: 12.7vw;
                    /* This calc keeps the top of the text in line with the top of the space allocated in the background art */
                    top: calc(50% - 20.3vw);
                    width: 19vw;
                    font-size: var(--text-height);
                    font-family: 'HelveticaThermal', sans-serif;
                }

                #project-length, #project-tools, #project-year{
                    display: flex;
                    line-height: 2.5vw;
                }

                #project-title {
                    font-size: var(--subtitle-height);
                    line-height: 2.5vw;
                    margin-bottom: 2.5vw;
                }

                #project-description {
                    margin-top: 2.5vw;
                }

                .project-label {
                    min-width: 6vw;
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
