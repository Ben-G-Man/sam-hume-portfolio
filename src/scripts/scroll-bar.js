const thumb = document.getElementById("scroll-thumb");
const track = document.getElementById("scroll-track");

let isDragging = false;
let startY, startScroll;

thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
    startScroll = content.scrollTop;
    thumb.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    thumb.style.cursor = "grab";
    document.body.style.userSelect = "";
});

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const dy = e.clientY - startY;
    const scrollable = content.scrollHeight - window.innerHeight;
    const trackRange = track.offsetHeight - thumb.offsetHeight;
    const scrollRatio = scrollable / trackRange;
    content.scrollTop = startScroll + dy * scrollRatio;
});

content.addEventListener("scroll", () => {
    const scrollable = content.scrollHeight - window.innerHeight;
    const trackRange = track.offsetHeight - thumb.offsetHeight;
    const scrollY = (content.scrollTop / scrollable) * trackRange;
    thumb.style.top = `${scrollY}px`;
});
