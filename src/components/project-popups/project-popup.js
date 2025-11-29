import { LitElement, html, css } from "lit";

export class ProjectPopup extends LitElement {
    constructor() {
        super();
    }

    static styles = css`
        div {
            width: 100%;
            height: 100%;
            position: relative;
        }

        #exit-button {
            width: 100px;
            height: 100px;
            position: absolute;
            top: 5%;
            right: 5%;
            background-image: url('./public/images/project-popups/exit-symbol-1.webp');
            background-size: cover;
            cursor: pointer;
        }

        #exit-button:hover {
            background-image: url('./public/images/project-popups/exit-symbol-2.webp');
        }

        #background {
            height: 90%;
            position: absolute;
            top: 5%;
            left: 50%;
            transform: translateX(-50%);
        }
    `;

    renderExtraContent() {
        return html``;
    }

    render() {
        return html`
            <div>
                <img id="background" src='./public/images/project-popups/background-lined-paper.webp' />
                <div id="exit-button" onclick="ClosePopup()"></div>
                ${this.renderExtraContent()}
            </div>
        `;
    }
}

customElements.define("project-popup", ProjectPopup);
