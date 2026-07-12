const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");
const modeRotator = document.getElementById("mode-rotator");
const modes = [
  "figure-it-out mode",
  "build mode",
  "problem-solving mode",
  "dad mode",
  "always-learning mode",
];

if (modeRotator && !reducedMotion) {
  let modeIndex = 0;
  window.setInterval(() => {
    modeRotator.classList.add("is-changing");
    window.setTimeout(() => {
      modeIndex = (modeIndex + 1) % modes.length;
      modeRotator.textContent = modes[modeIndex];
      modeRotator.classList.remove("is-changing");
    }, 180);
  }, 2600);
}

if (reducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((item) => item.classList.add("visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.12 }
  );
  reveals.forEach((item) => observer.observe(item));

  const portrait = document.querySelector(".portrait-frame");
  const depthSections = document.querySelectorAll(".section-heading, .manifesto blockquote, .about-grid");
  let framePending = false;

  const updateDepth = () => {
    const viewportCenter = window.innerHeight / 2;

    if (portrait) {
      const portraitCenter = portrait.getBoundingClientRect().top + portrait.offsetHeight / 2;
      const shift = Math.max(-32, Math.min(32, (viewportCenter - portraitCenter) * 0.04));
      portrait.style.setProperty("--portrait-shift", `${shift}px`);
    }

    depthSections.forEach((item) => {
      const itemCenter = item.getBoundingClientRect().top + item.offsetHeight / 2;
      const shift = Math.max(-24, Math.min(24, (viewportCenter - itemCenter) * 0.03));
      item.style.setProperty("--section-shift", `${shift}px`);
    });

    framePending = false;
  };

  window.addEventListener("scroll", () => {
    if (!framePending) {
      window.requestAnimationFrame(updateDepth);
      framePending = true;
    }
  }, { passive: true });

  updateDepth();
}
