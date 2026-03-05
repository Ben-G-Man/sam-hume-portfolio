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
        navBar: { type: Boolean },
    };
    
    constructor() {
        super();
        this.standardSuffix = ".webp";
        this.videos = [];
        this.navBar = false;
    }

    connectedCallback() {
        super.connectedCallback();

        this._orientationQuery = window.matchMedia("(orientation: landscape)");

        this._orientationHandler = (e) => {
            this.navBar = e.matches;
        };

        this.navBar = this._orientationQuery.matches;

        this._orientationQuery.addEventListener("change", this._orientationHandler);
    }

    disconnectedCallback() {
        this._orientationQuery?.removeEventListener("change", this._orientationHandler);
        super.disconnectedCallback();
    }

    static styles = [
        ProjectPopup.styles,
        css`
            picture {
                position: absolute;
                top: 0;
                left: 0;
                overflow: visible;
            }

            #background {
                position: relative;
                left: calc(50 * var(--cw));
                top: 50vh;
                transform: translateX(-50%) translateY(-50%);
            }

            @media (orientation: landscape) {
                #background {
                    width: calc(90 * var(--cw));
                }
            }

            @media (orientation: portrait) {
                #background {
                    height: 100vh;
                }
            }

            multimedia-slideshow {
                position: absolute;
                right: calc(5 * var(--cw));
                width: calc(65 * var(--cw));
                aspect-ratio: 5 / 4;
                top: 53%;
                transform: translateY(-55%);
            }
                
            #project-details-pane {
                position: absolute;
                left: calc(12.7 * var(--cw));
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
    ];

    renderExtraContent() {
        return html`
            <picture>
                <source
                    media="(orientation: portrait)"
                    srcset="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/background-popup-mobile.webp">
                <img
                    loading="lazy"
                    id="background"
                    src="https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio-assets@main/sections/misc-works/background-popup.webp">
            </picture>

            <multimedia-slideshow
                .images=${Array.from(
                    { length: this.slideCount },
                    (_, i) => `${this.slideDeckPrefixPath}${i + 1}${this.standardSuffix}`
                )}
                .video=${this.video}
                ?navbar=${this.navBar}
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