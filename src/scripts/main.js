console.log(
  "Welcome to the Sam Site (TM)! Don't touch anything. This site is built on fragile hopes and dreams."
);

const openClassName = "open";

let openPopup;
let popupBackground;

function OpenPopup(popupId) {
  if (openPopup) openPopup.classList.remove(openClassName);

  openPopup = document.getElementById(popupId);
  if (!openPopup) {
    console.error("Popup not found:", popupId);
    return;
  }

  openPopup.classList.add(openClassName);
  popupBackground.classList.add(openClassName);
}

function ClosePopup() {
  if (openPopup) openPopup.classList.remove(openClassName);
  openPopup = null;

  popupBackground.classList.remove(openClassName);
}

document.addEventListener("DOMContentLoaded", () => {
  popupBackground = document.getElementById("blur");

  if (!popupBackground) {
    console.error("Blur background not found!");
  }

  window.OpenPopup = OpenPopup;
  window.ClosePopup = ClosePopup;
});
