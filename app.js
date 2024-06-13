const homeDisplay = document.querySelector("#home-display");
const awayDisplay = document.querySelector("#away-display");
const home0 = document.querySelector("#home-button0");
const home1 = document.querySelector("#home-button1");
const home2 = document.querySelector("#home-button2");
const home3 = document.querySelector("#home-button3");
const away1 = document.querySelector("#away-button1");
const away2 = document.querySelector("#away-button2");
const away3 = document.querySelector("#away-button3");
const reset = document.querySelector("#reset");
let homePoints = 0;
let awayPoints = 0;

homeDisplay.addEventListener("click", () => {
  homePoints += 1;
  homeDisplay.textContent = homePoints;
});
awayDisplay.addEventListener("click", () => {
  awayPoints += 1;
  awayDisplay.textContent = awayPoints;
});

home1.addEventListener("click", () => {
  if (homePoints !== 0) {
    homePoints -= 1;
    homeDisplay.textContent = homePoints;
  }
});
home2.addEventListener("click", () => {
  homePoints += 2;
  homeDisplay.textContent = homePoints;
});
home3.addEventListener("click", () => {
  homePoints += 3;
  homeDisplay.textContent = homePoints;
});

away1.addEventListener("click", () => {
  if (awayPoints !== 0) {
    awayPoints -= 1;
    awayDisplay.textContent = awayPoints;
  }
});
away2.addEventListener("click", () => {
  awayPoints += 2;
  awayDisplay.textContent = awayPoints;
});
away3.addEventListener("click", () => {
  awayPoints += 3;
  awayDisplay.textContent = awayPoints;
});

reset.addEventListener("click", () => {
  homePoints = 0;
  awayPoints = 0;
  homeDisplay.textContent = homePoints;
  awayDisplay.textContent = awayPoints;
});
