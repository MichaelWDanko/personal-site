const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

const rotatorEl = document.getElementById("rotator");
const modes = [
  "product operator mode",
  "system simplifier mode",
  "AI experiment mode",
  "builder + dad mode",
];
let modeIndex = 0;

if (rotatorEl) {
  setInterval(() => {
    modeIndex = (modeIndex + 1) % modes.length;
    rotatorEl.textContent = modes[modeIndex];
  }, 2300);
}

const lensData = {
  operator: {
    title: "Calm operator energy",
    copy: "I thrive in high-context environments where teams need clearer direction and cleaner execution.",
    bullets: [
      "Prioritization and delivery rhythm",
      "Stakeholder alignment across functions",
      "Practical tradeoff decisions",
    ],
  },
  translator: {
    title: "Product + engineering translator",
    copy: "I bridge business intent and technical reality so requirements are clear enough to ship confidently.",
    bullets: [
      "Implementation-ready requirements",
      "Clear handoffs and acceptance criteria",
      "Shared language across product and engineering",
    ],
  },
  builder: {
    title: "Curious builder",
    copy: "I like learning by doing: testing tools, prototyping workflows, and running practical experiments.",
    bullets: [
      "AI-assisted product operations",
      "iOS and automation side projects",
      "Internal workflow improvements",
    ],
  },
  human: {
    title: "Human version",
    copy: "Outside of work, I recharge with family time, sports, gaming, and projects around the house.",
    bullets: [
      "Sports and competition",
      "Games and tech tinkering",
      "Home projects and personal systems",
    ],
  },
};

const lensButtons = document.querySelectorAll(".lens-btn");
const lensTitle = document.getElementById("lens-title");
const lensCopy = document.getElementById("lens-copy");
const lensList = document.getElementById("lens-list");

function renderLens(key) {
  const data = lensData[key];
  if (!data || !lensTitle || !lensCopy || !lensList) return;

  lensTitle.textContent = data.title;
  lensCopy.textContent = data.copy;
  lensList.innerHTML = data.bullets.map((item) => `<li>${item}</li>`).join("");
}

lensButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    lensButtons.forEach((other) => other.classList.remove("active"));
    btn.classList.add("active");
    renderLens(btn.dataset.lens);
  });
});

renderLens("operator");
