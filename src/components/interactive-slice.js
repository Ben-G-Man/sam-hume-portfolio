import { html, css } from 'lit';
import { Slice } from './slice.js';

export class InteractiveSlice extends Slice {
    static properties = {
        imagePath: { type: String },
        link: { type: String },
    };

    constructor() {
        super();
    }

    static styles = [
        Slice.styles,
        css`
            .slice-front {
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }

            .slice.interactive {
                cursor: pointer;
            }

            .slice.interactive > :first-child {
                opacity: 0;
            }

            .slice.interactive > :last-child {
                opacity: 1;
            }

            .slice.interactive:hover > :first-child {
                opacity: 1;
            }

            .slice.interactive:hover > :last-child {
                opacity: 0;
            }
        `,
    ];

    render() {
        return html`
            <a class='slice interactive' target='_blank' href='${this.link}'>
                <img
                    class='slice-back'
                    src='${this.imagePath.replace(/(\.[^/.]+)$/, '-hover$1')}'
                />
                <img class='slice-front' src='${this.imagePath}' />
            </a>
        `;
    }
}

customElements.define('interactive-slice', InteractiveSlice);
