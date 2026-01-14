const img = document.getElementById("face-melt");
const main = document.getElementsByTagName("main")[0];

const frameCount = 8;
const maxFrameRate = 20;
const minFrameTime = 1000 / maxFrameRate;

let targetFrame = 1;
let displayedFrame = 1;
let lastFrameTime = 0;

const currentFrame = (i) =>
    `https://cdn.jsdelivr.net/gh/Ben-G-Man/sam-hume-portfolio@main/public/images/landing/face-melt-${i}.webp`;

function updateImage(index) {
    img.src = currentFrame(index);
}

function getScrollMetrics() {
    const viewport = main.clientHeight;

    // animation runs between 15% and 60% of the visible viewport
    const start = viewport * 0.15;
    const end = viewport;

    return {
        start,
        range: end - start
    };
}

main.addEventListener("scroll", () => {
    const { start, range } = getScrollMetrics();

    const scrollTop = main.scrollTop;
    const scrollFraction = (scrollTop - start) / range;

    const clamped = Math.max(0, Math.min(1, scrollFraction));

    targetFrame = Math.min(
        frameCount,
        Math.floor(clamped * frameCount)
    );
});

function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    if (now - lastFrameTime < minFrameTime) return;
    if (displayedFrame === targetFrame) return;

    displayedFrame += Math.sign(targetFrame - displayedFrame);
    updateImage(displayedFrame);

    lastFrameTime = now;
}

animate();
