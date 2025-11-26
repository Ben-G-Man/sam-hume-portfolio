import { html } from 'lit';
import { Slice } from './slice.js';

export class BlankSlice extends Slice {
    static properties = {
        imagePath: { type: String },
    };

    constructor() {
        super();
    }

    render() {
        return html`
            <div class='slice'>
                <img class='slice-back' src='${this.imagePath}' />
            </div>
        `;
    }
}

customElements.define('blank-slice', BlankSlice);
