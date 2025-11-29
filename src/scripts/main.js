console.log(
    "Welcome to the Sam Site (TM)! Don't touch anything. This site is built on fragile hopes and dreams."
);

const rootElement = document.documentElement;
const openClassName = "open";
const popupBackground = document.getElementById("blur");

let openPopup;

function OpenPopup(popupId) {
    if (openPopup != null) openPopup.classList.remove(openClassName);
    openPopup = document.getElementById(popupId);
    openPopup.classList.add(openClassName);

    popupBackground.classList.add(openClassName);
}

function ClosePopup() {
    if (openPopup != null) openPopup.classList.remove(openClassName);
    openPopup = null;

    popupBackground.classList.remove(openClassName);
}