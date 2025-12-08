let container;
let img;

export function initFullscreen() {
    container = document.getElementById("image-full-screen-containe");
    img = document.getElementById("image-full-screen");

    if (!container || !img) {
        throw new Error("Fullscreen elements missing from DOM");
    }

    document.getElementById("close")?.addEventListener("click", closeFullscreen);
}

export function openFullscreen(src) {
    img.src = src;
    container.classList.add("open");
}

export function closeFullscreen() {
    container.classList.remove("open");
}
