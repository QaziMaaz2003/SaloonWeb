# Gentry Salon

A premium, modern men's grooming salon website built with **React**, **React Router**, and **Tailwind CSS v4**.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Reusable UI building blocks
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── ServiceCard.jsx
│   ├── ServicesGrid.jsx
│   ├── SectionHeading.jsx
│   ├── PageHeader.jsx
│   ├── RazorDivider.jsx
│   ├── Button.jsx
│   ├── CTASection.jsx
│   ├── WhyChooseUs.jsx
│   ├── ExperienceSection.jsx
│   ├── IntroSection.jsx
│   ├── FeaturedServices.jsx
│   ├── StorySection.jsx
│   ├── PhilosophySection.jsx
│   ├── ContactForm.jsx
│   ├── ContactInfoCard.jsx
│   ├── MapPanel.jsx
│   └── ScrollToTop.jsx
│
├── pages/             # One file per route
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
├── data/
│   └── services.js    # Shared service catalogue used on Home + Services
│
├── App.jsx            # Route definitions
├── main.jsx           # App entry point (BrowserRouter)
└── index.css           # Design tokens + global styles (Tailwind v4 @theme)
```

## Design System

- **Colors:** obsidian (near-black charcoal), warm ivory, and a bronze/gold accent — defined as CSS variables in `src/index.css` under `@theme`, and used as Tailwind utility classes (`bg-obsidian`, `text-bronze`, etc).
- **Type:** Fraunces (display serif) for headings, Manrope (sans) for body copy, Space Mono for eyebrows/labels/prices.
- **Signature motif:** the "razor-line" — a thin animated bronze divider (`RazorDivider.jsx`) used throughout as a section marker, echoing a single straight-razor stroke.

## Notes

- No routing/build errors — verified with `npm run build` and `npx oxlint src`.
- All imagery is custom SVG line art (no external image dependencies), so the project runs fully offline aside from Google Fonts.
- Fully responsive from mobile through large desktop; reduced-motion is respected for all custom animations.
