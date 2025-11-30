import { html, css } from "lit";
import { ProjectPopup } from "./project-popup";
import { ImageSlideshow } from "./../slideshows/image-slideshow";

export class SketchbookPopup extends ProjectPopup {

  constructor() {
    super();

    this.slideshowImages = [
      "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-1.webp",
      "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-2.webp",
      "https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/misc-works/sketchbooks/sb-3.webp"
    ];
  }

  static styles = [
    ProjectPopup.styles,
    css`
        #background {
            height: 90%;
            position: absolute;
            top: 5%;
            left: 50%;
            transform: translateX(-50%);
        }
        
        image-slideshow {
            margin-left: 10%;
            width: 80%;
            aspect-ratio: 1946 / 800;
        }
    `
  ];

  renderExtraContent() {
    return html`
      <image-slideshow
        travel="0.5"
        .images=${this.slideshowImages}
      ></image-slideshow>
    `;
  }
}

customElements.define("sketchbook-popup", SketchbookPopup);
