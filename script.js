const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const rotatorEl = document.getElementById("rotator");
const modes = [
  "figure-it-out mode",
  "build mode",
  "problem-solving mode",
  "dad mode",
  "always-learning mode",
];
let modeIndex = 0;

if (rotatorEl) {
  setInterval(() => {
    modeIndex = (modeIndex + 1) % modes.length;
    rotatorEl.textContent = modes[modeIndex];
  }, 2300);
}
