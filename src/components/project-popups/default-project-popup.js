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
                    aspect-ratio: 5 / 4;
                }

                table {
                    position: absolute;
                    left: 13%;
                    /* This calc keeps the top of the text in line with the top of the space allocated in the background art */
                    top: calc(50% - 20.5vw);
                    width: 18.5%;
                    border-spacing: 0 1vh;
                    font-size: var(--text-height);
                    font-family: 'HelveticaThermal', sans-serif;
                }

                table #title {
                    font-size: var(--subtitle-height);
                }

                table tr:last-of-type {
                    transform: translateY(1.4vh);
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
            <table>
                <tr>
                    <td colspan="2" id="title">${this.title}</td>
                </tr>
                <tr>
                    <td>Year:</td>
                    <td>${this.year}</td>
                </tr>
                <tr>
                    <td>Length:</td>
                    <td>${this.length}</td>
                </tr>
                <tr>
                    <td>Tools:</td>
                    <td>${this.tools}</td>
                </tr>
                <tr>
                    <td colspan="2">${this.description}</td>
                </tr>
            </table>​
        `;
    }
}

customElements.define("default-project-popup", DefaultProjectPopup);
