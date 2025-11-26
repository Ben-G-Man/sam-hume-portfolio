const img = document.getElementById("face-melt");
const main = document.getElementsByTagName("main")[0];

/* ---- Settings ---- */

const startPos = window.innerHeight * 0.15;
const endPos = window.innerHeight * 0.6;
const frameCount = 9;
const maxFrameRate = 20; // FPS limit
const minFrameTime = 1000 / maxFrameRate;

let targetFrame = 1;
let displayedFrame = 1;
let lastFrameTime = 0;

const currentFrame = (i) =>
    `/sam-hume-portfoliohttps://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/landing/frame${i
        .toString()
        .padStart(4, "0")}.webp`;

console.log(
    "Welcome to the Sam Site (TM)! Don't touch anything. This site is built on fragile hopes and dreams."
);

function updateImage(index) {
    img.src = currentFrame(index);
}

/* ------------------------------------------
   SCROLL HANDLER — only sets the targetFrame
------------------------------------------- */
main.addEventListener("scroll", () => {
    const scrollTop = main.scrollTop - startPos;
    let scrollFraction = scrollTop / endPos;

    scrollFraction = Math.max(0, Math.min(1, scrollFraction));

    targetFrame = Math.min(
        frameCount,
        Math.max(1, Math.floor(scrollFraction * frameCount) + 1)
    );
});

/* ------------------------------------------
   CONTINUOUS ANIMATION LOOP
------------------------------------------- */
function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();

    if (now - lastFrameTime < minFrameTime) return;

    if (displayedFrame === targetFrame) return;

    if (displayedFrame < targetFrame) {
        displayedFrame++;
    } else if (displayedFrame > targetFrame) {
        displayedFrame--;
    }

    updateImage(displayedFrame);
    lastFrameTime = now;
}

animate();
