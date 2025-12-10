const bg = document.getElementById("main-background");
const main = document.getElementsByTagName("main")[0];

main.addEventListener("scroll", () => {
    bg.style.marginTop = `-${main.scrollTop / 2}px`;
});