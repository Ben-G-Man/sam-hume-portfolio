const bg = document.getElementById("main-background");
const main = document.getElementsByTagName("main")[0];

main.addEventListener("scroll", () => {
    bg.style.backgroundPositionY = `-${main.scrollTop / 4}px`;
});