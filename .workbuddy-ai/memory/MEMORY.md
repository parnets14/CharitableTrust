# Project Memory — Charitable Trust Website

## Project
Charity website for "Nadaprabhu Kempegowda Educational & Charitable Trust". React 19 + Vite + Tailwind v3 + react-router-dom v7. Pages: Home, About, Donate, Contact. Components: Navbar, Footer, ScrollToTop, BrandIcons. Theme colors: `primary` (blue), `accent` (orange), `logoBlue/logoGreen/logoOrange`, `ink`, `cream`.

## Key facts
- Donation/bank/UPI details in `src/pages/Donate.jsx` and contact info are currently **placeholders** — must be replaced with real verified values before launch.
- Images in `src/assets/` are large (1.6–2.4 MB each) and unoptimized — compress to WebP before deploying.
- Uses `BrowserRouter` → needs SPA rewrite config on static hosts.

## Conventions
- Custom utility classes defined in `src/index.css` `@layer components`: `container-px`, `btn-primary`, `btn-ghost`, `section`, `section-title`, `section-eyebrow`, `card-hover`. Plus `dot-grid-bg`.
