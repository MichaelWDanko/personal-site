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

const topicData = {
  ai: {
    title: "AI workflows",
    copy: "Testing where LLMs can remove drag from product work without adding noise.",
    footnote: "Current goal: save time on repetitive planning work.",
  },
  ios: {
    title: "iOS learning",
    copy: "Building Swift and app-design intuition through small experiments and prototypes.",
    footnote: "Current goal: ship compact projects with a clean UX.",
  },
  docs: {
    title: "Product docs",
    copy: "Refining templates and writing patterns that help teams move faster with less confusion.",
    footnote: "Current goal: make requirements easier to consume and execute.",
  },
  systems: {
    title: "Internal systems",
    copy: "Mapping workflows and dependencies so tools feel less fragmented and more reliable.",
    footnote: "Current goal: improve operational clarity across teams.",
  },
};

const chips = document.querySelectorAll(".chip");
const topicTitle = document.getElementById("topic-title");
const topicCopy = document.getElementById("topic-copy");
const topicFootnote = document.getElementById("topic-footnote");

function renderTopic(key) {
  const data = topicData[key];
  if (!data || !topicTitle || !topicCopy || !topicFootnote) return;

  topicTitle.textContent = data.title;
  topicCopy.textContent = data.copy;
  topicFootnote.textContent = data.footnote;
}

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((other) => other.classList.remove("active"));
    chip.classList.add("active");
    renderTopic(chip.dataset.topic);
  });
});

const copyBtn = document.getElementById("copy-email");
const copyStatus = document.getElementById("copy-status");

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const email = "hello@michaelwdanko.com";

    try {
      await navigator.clipboard.writeText(email);
      if (copyStatus) copyStatus.textContent = "Email copied.";
    } catch {
      if (copyStatus) copyStatus.textContent = "Copy unavailable. Use hello@michaelwdanko.com.";
    }
  });
}

renderLens("operator");
renderTopic("ai");
