import { LitElement, html, css } from "lit";

export class ProjectPopup extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        .popup-container {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            align-items: center; 
        }

        #exit-button {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 5%;
            right: 5%;
            background-image: url('https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/exit-symbol-1.webp');
            background-size: cover;
            cursor: pointer;
            z-index: 20;
        }

        #exit-button:hover {
            background-image: url('https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/project-popups/exit-symbol-2.webp');
        }
    `;

    renderExtraContent() {
        return html``;
    }

    render() {
        return html`
            <div class="popup-container">
                <div id="exit-button" onclick="ClosePopup()"></div>
                ${this.renderExtraContent()}
            </div>
        `;
    }
}

customElements.define("project-popup", ProjectPopup);
