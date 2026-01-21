// Whether the provided quips are funny is questionable.
const funnyQuips = [
  "Don't touch anything. This site is built on fragile hopes and dreams.", 
  "ERR: Connection to 'ai-quip-generator.net' timed out!", 
  "If you're seeing this you must be lost, kindly close the source inspector at your earliest convenience.", 
  "DON'T LOOK AT MY CODE, IT'S HIDEOUS!", 
  "Ben says: Tell your mother you love her!", 
  "Ben says: Halo Reach is the best one.",
  "Ben says: Valve's Portal franchise is a masterpiece, but there isn't room for a third.",
  "Ben says: We'll get Halflife 3... eventually.",
  "Ben says: It's never too soon to start praying.",
  "Ben says: Climate change is a lie invented by Exxon because their execuative board has a humiliation kink.",
  "This debug console ain't big enough for the two of us...",
  "It is Jun 2nd, 1989, and we're decades ahead of the competition. We're set for life, unless somehow this site isn't published until 2026...",
  "Note to self: Buy more sticky notes, writing my todo list in the console logs of a freelance artist's portfolio is getting tiring.",
  "Note to self: Write more quips in the quip generator.",
  "Song of the year 2007: All I Need, Radiohead",
  "I miss flash :(",
  "What do you believe happens after death? Submit your belief to `iknowwhatsafterdeath@yahoo.com`!",
  "Coming at you from the middle of nowhere, the centre of everywhere!",
  "If your console doesn't fit the cool title text you need a bigger screen.",
  "I survived the Sam Site (TM) and all I got was this shirt.",
  "Your number is [100283], please wait for your number to be called.",
  "You should mess up the source code, that's how I learned to make websites.",
  "HELP ME I'VE BEEN STUCK IN THIS DEBUG CONSOLE SINCE 2008",
];

const random = Math.floor(Math.random() * funnyQuips.length);
console.log(
  "\n ------------------------ ",
  "\n\nWelcome to the one and only",
  "\n",
  "\n ▗▄▄▖ ▗▄▖ ▗▖  ▗▖     ▗▄▄▖▗▄▄▄▖▗▄▄▄▖▗▄▄▄▖",
  "\n▐▌   ▐▌ ▐▌▐▛▚▞▜▌    ▐▌     █    █  ▐▌   ",
  "\n ▝▀▚▖▐▛▀▜▌▐▌  ▐▌     ▝▀▚▖  █    █  ▐▛▀▀▘",
  "\n▗▄▄▞▘▐▌ ▐▌▐▌  ▐▌    ▗▄▄▞▘▗▄█▄▖  █  ▐▙▄▄▖",
  "\n\n\n-> ", funnyQuips[random],
  "\n\n ------------------------ \n",
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
