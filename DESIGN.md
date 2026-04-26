---
version: alpha
name: Michael W. Danko Personal Site
description: Soft blue, approachable product-site design for clear thinking, practical building, and calm technical storytelling.
colors:
  primary: "#152843"
  background: "#EEF4FF"
  background-deep: "#E3EDFF"
  paper: "#F8FBFF"
  surface: "#FFFFFF"
  surface-alpha: "#FFFFFF"
  surface-soft: "#E2EDFF"
  surface-card: "#F6FBFF"
  text: "#152843"
  text-strong: "#16335D"
  text-muted: "#4F6586"
  text-body: "#28476F"
  border: "#C9D8EF"
  border-card: "#B8CDF4"
  brand: "#2D6FDA"
  brand-dark: "#1E4E9F"
  brand-hover: "#17458F"
  accent: "#5EA9FF"
  pop: "#0F7ABD"
  inverse: "#F7FBFF"
  code-background: "#16335D"
typography:
  display-xl:
    fontFamily: Sora
    fontSize: 4.25rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  display-lg:
    fontFamily: Sora
    fontSize: 2.4rem
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  heading-md:
    fontFamily: Sora
    fontSize: 1.02rem
    fontWeight: 700
    lineHeight: 1.3
  body-lg:
    fontFamily: Manrope
    fontSize: 1.24rem
    fontWeight: 400
    lineHeight: 1.6
  body-md:
    fontFamily: Manrope
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Manrope
    fontSize: 0.92rem
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: Manrope
    fontSize: 0.76rem
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.14em"
  button:
    fontFamily: Manrope
    fontSize: 0.94rem
    fontWeight: 700
    lineHeight: 1.2
  mono:
    fontFamily: SFMono-Regular
    fontSize: 0.88rem
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: 12px
  md: 14px
  lg: 16px
  xl: 18px
  panel: 24px
  hero: 26px
  pill: 999px
spacing:
  xs: 0.35rem
  sm: 0.6rem
  md: 0.9rem
  lg: 1.2rem
  xl: 1.4rem
  2xl: 2.2rem
  3xl: 2.8rem
  page-x: 2.2rem
  page-y: 3.7rem
components:
  page-background:
    backgroundColor: "{colors.background}"
    textColor: "{colors.primary}"
  hero-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    rounded: "{rounded.hero}"
    padding: 2.8rem
  section-panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.panel}"
    padding: 2.2rem
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: 1rem
  callout:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-body}"
    rounded: "{rounded.lg}"
    padding: 1rem
  button-primary:
    backgroundColor: "{colors.brand-dark}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0.62rem
  button-primary-hover:
    backgroundColor: "{colors.brand-hover}"
    textColor: "{colors.surface}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0.62rem
  button-secondary:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.brand-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 0.62rem
  code-block:
    backgroundColor: "{colors.code-background}"
    textColor: "{colors.inverse}"
    typography: "{typography.mono}"
    rounded: "{rounded.md}"
    padding: 1.05rem
---

## Overview

This design system describes Michael W. Danko's personal site and should be used when extending the site or adapting the same visual identity to related products such as the Hermes dashboard.

The style is a soft blue product-site aesthetic: clear, warm, practical, and technically credible without feeling cold or enterprise-heavy. It should feel like a calm workspace for complex thinking, not a flashy SaaS landing page or a dense admin console.

The strongest traits are pale blue ambient backgrounds, white rounded panels, blue-gray borders, bold navy headings, cobalt action buttons, and concise conversational copy. The visual identity supports the tagline: Complex problems. Simple solutions.

For a Hermes dashboard, preserve the personal site's calm and approachable tone while adding more operational structure. Think light command center, not dark terminal cockpit.

## Colors

The palette is cool, airy, and blue-led.

- **Background (#EEF4FF):** the main blue-tinted canvas. Use it instead of pure white so pages feel calm and cohesive.
- **Background Deep (#E3EDFF):** the deeper edge of the ambient page gradient.
- **Paper (#F8FBFF):** the hero and highlighted surface color. It is nearly white, but still cooler than a plain white card.
- **Surface (#FFFFFF):** primary content cards, dashboard widgets, forms, and modal bodies.
- **Surface Soft (#E2EDFF):** soft secondary fills for ghost buttons, selected states, and low-emphasis cards.
- **Text (#152843):** deep navy for major headings and high-emphasis text. Avoid pure black.
- **Text Body (#28476F):** readable navy-blue body text for long-form content.
- **Text Muted (#4F6586):** supporting copy, metadata, helper text, and secondary labels.
- **Border (#C9D8EF):** default panel border. Borders should be visible but gentle.
- **Brand (#2D6FDA):** primary blue for labels, links, and gradients.
- **Brand Dark (#1E4E9F):** primary button color and stronger interactive emphasis.
- **Accent (#5EA9FF):** light blue accent for ambient glow, focus details, and subtle highlights.
- **Pop (#0F7ABD):** stronger blue for small dynamic details like the homepage rotator.
- **Code Background (#16335D):** dark navy block for code, prompts, logs, or command snippets.

Use gradients sparingly. The site uses gentle blue gradients to create depth, not decorative spectacle. Good gradients move between paper, white, and pale blue. Avoid rainbow accents, heavy glassmorphism, neon effects, and stark black-white contrast.

## Typography

Use a modern rounded sans-serif pairing:

- **Sora** for headings and display text.
- **Manrope** for body copy, labels, buttons, and UI text.
- **SFMono-Regular / SF Mono / Consolas / Menlo** for code, logs, IDs, timestamps, and prompt blocks.

Headings should be confident and direct. Use bold Sora with tight negative tracking for large display headings. Body text should remain conversational, readable, and moderately spacious.

Use uppercase tracked labels for metadata, section kickers, project labels, status group names, and dashboard grouping labels. These labels should be small, blue, and high-weight. They should clarify structure, not decorate every line.

For long-form pages, keep body copy around 860px maximum width. For dashboards, use the same type language but allow denser secondary text in cards, tables, and logs.

## Layout

The site uses a modular card layout on a soft blue ambient page background.

Core layout rules:

- Use a centered page container with generous side margins.
- Keep major sections as large rounded panels.
- Use nested cards for groups of related ideas, projects, or dashboard widgets.
- Prefer grid layouts for related cards, then stack them on smaller screens.
- Keep content airy by default. Do not crowd panels just to fit more information above the fold.
- Use horizontal scrolling for dense technical tables on mobile instead of forcing awkward stacked cards.

Recommended dashboard adaptation:

- Treat the dashboard as a set of calm operational panels.
- Use a top-level overview row for active agent status, model/provider, running jobs, and recent outcomes.
- Use nested cards for cron jobs, skills, memory, tool activity, and logs.
- Preserve generous internal padding, but use compact typography inside dense operational components.
- Let status colors supplement the blue system. Blue remains the brand/action color, not the only state color.

## Elevation & Depth

Depth should be soft and cool-toned.

Primary elevation uses blue-tinted shadows such as `0 20px 44px rgba(27, 64, 129, 0.12)`. Smaller cards use lighter shadows such as `0 10px 22px rgba(37, 79, 150, 0.08)`.

Use elevation to separate important surfaces from the ambient background. Do not create heavy drop shadows, harsh dark overlays, or stacked material layers. Borders carry more of the structure than shadows do.

Ambient depth comes from three elements:

1. A radial blue-white page background.
2. A subtle 42px technical grid texture with very low opacity.
3. Soft blurred blue orbs at the page edges.

For Hermes, the grid texture is especially useful. It can make the dashboard feel technical and system-oriented while still matching the personal site.

## Shapes

The shape language is rounded and friendly, but not bubbly.

- Hero panels: 26px radius.
- Standard panels: 24px radius.
- Profile cards and workflow cards: 18px radius.
- Project cards and callouts: 16px radius.
- Smaller cards and code blocks: 12px to 14px radius.
- Buttons and pills: fully rounded with 999px radius.

Use consistent rounded geometry across cards, buttons, images, badges, panels, and dashboard widgets. Avoid sharp enterprise rectangles unless displaying dense data where compactness matters.

## Components

`hero-panel` is the most expressive container. It uses a pale paper surface, cool border, large radius, and soft shadow. Use it for page introductions, overview states, or a Hermes dashboard command-center header.

`section-panel` is the default major content container. Use it for homepage sections, article panels, dashboard sections, settings groups, and high-level modules.

`feature-card` is for nested content: project cards, workflow steps, dashboard widgets, job summaries, skill cards, and status cards. Cards should include a short heading and useful explanatory text. They should not become dense walls of copy.

`callout` is a pale highlighted block with a strong blue left border in CSS. Use it when one idea should anchor a section. Do not use callouts for repeated summaries.

`button-primary` is reserved for the strongest action in a local area. It uses a cobalt-to-navy blue treatment with white text and soft elevation.

`button-secondary` is a low-emphasis action. It uses a pale blue fill and blue text. Use this for secondary navigation, optional actions, and dashboard filters.

`code-block` uses a dark navy surface with pale text. For Hermes, this treatment should extend to logs, prompt examples, terminal snippets, and tool-call previews.

Dashboard-specific components should inherit this language:

- **Agent status card:** feature-card surface with an uppercase status label, bold title, and concise details.
- **Cron job card:** feature-card surface with next run, last outcome, and a small status badge.
- **Tool activity row:** compact cards or pills with blue outlines and muted text.
- **Log panel:** code-block surface for raw logs, or a white panel with dark navy monospace rows for mixed operational readability.
- **Approval drawer:** section-panel surface with primary and secondary pill buttons.
- **Skill card:** feature-card surface with label, short description, and category pill.

## Do's and Don'ts

Do:

- Use pale blue ambience instead of a plain white page.
- Use navy text instead of black.
- Use Sora for confident headings and Manrope for readable UI/body copy.
- Keep copy short, direct, and human.
- Use uppercase tracked labels for structure and metadata.
- Use rounded white panels with blue-gray borders.
- Use soft blue gradients and shadows only when they support clarity.
- Give cards enough breathing room.
- Use the dark navy code-block treatment for technical snippets and logs.
- Let the Hermes dashboard feel operational while staying calm and approachable.

Don't:

- Turn the theme into a dark terminal UI.
- Use harsh black, flat gray enterprise surfaces, or generic admin-dashboard chrome.
- Overuse glow, glass, neon, or heavy gradients.
- Make every component blue; blue should guide attention and action.
- Crowd dashboards with dense tables when a summarized card or timeline would communicate better.
- Use corporate or AI-generated marketing language.
- Add decorative icons or charts unless they clarify the actual work.
- Mix unrelated accent colors into the core brand palette.
