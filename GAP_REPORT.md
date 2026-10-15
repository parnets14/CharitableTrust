# Gap Analysis — Nadaprabhu Kempegowda Educational & Charitable Trust (Website)

**Scope:** Full review of the React + Vite + Tailwind project (`src/`, config, build output).
**Date:** 2026-10-15
**Verdict:** Code structure is clean and the production build **compiles successfully**, but there are real gaps in **performance, functionality, content accuracy, and code hygiene** that should be fixed before this goes live.

---

## 🔴 Critical — must fix before launch

### 1. Unoptimized images (build is ~100 MB)
- **27 image files totaling 51.2 MB** in `src/assets/`. Every photo is **1.6–2.4 MB** (e.g. `Home/Family.png` 2.42 MB, `About/photo3.png` 2.41 MB).
- Vite copies these **uncompressed** into `dist/` (each still ~2 MB). The JS bundle is only 354 KB (104 KB gzip) and CSS 43 KB — so **images are ~99% of the payload**.
- There is also a stray **`dist/assets.zip` (48 MB)** in the build output that would be deployed if you ship the `dist/` folder as-is.
- **Impact:** The site will load extremely slowly (multi-second/multi-MB downloads per page). This is the single biggest problem.
- **Fix:** Resize photos to display dimensions and export as **WebP at ~80 KB each** (target ≤200 KB). Rebuild. Delete the stray zip.

---

## 🟠 High — functional correctness

### 2. Contact form does not actually send anything
- `Contact.jsx` `handleSubmit` only sets a success message and clears the form. There is **no backend, no email, no API call**.
- **Fix:** Wire it to a form service (Formspree/Web3Forms/your backend) or clearly label it as "coming soon".

### 3. Donation details are placeholders
- Bank: `A/C 50100123456789`, `IFSC SBIN0001234`, `SBI Bengaluru Main` — sample values.
- UPI ID `mkctrust@upi` and emails `donate@mkctrust.org` / `info@mkctrust.org` are placeholders.
- The UPI QR card literally says **"Place UPI QR"** (no real QR image).
- **Fix:** Replace with the trust's real, verified banking/UPI details and a generated QR.

### 4. Client-side routing will 404 on static hosts
- Uses `BrowserRouter` (clean URLs `/about`, `/donate`, `/contact`). On Netlify/Vercel/GitHub Pages, a hard refresh or shared link to those URLs returns 404 unless SPA rewrite rules exist.
- **Fix:** Add a rewrite config (`_redirects`, `vercel.json`, or `netlify.toml`) → all paths serve `index.html`. Or switch to `HashRouter` if you want zero-config hosting.

### 5. No 404 / NotFound route
- `App.jsx` only defines 4 routes; any unknown URL renders a **blank page**.
- **Fix:** Add a catch-all `*` route with a friendly NotFound page.

---

## 🟡 Medium — code quality (`npm run lint` fails with 6 errors)

| File | Issue |
|------|-------|
| `src/components/Navbar.jsx:26` | `setOpen(false)` called synchronously inside `useEffect` → `react-hooks/set-state-in-effect` error |
| `src/pages/Contact.jsx:11` | `logo` imported but never used |
| `src/pages/Contact.jsx:15` | `MapIllustration` component defined but never used |
| `src/pages/Donate.jsx:23` | `logo` imported but never used |
| `src/pages/Donate.jsx:39` | `upiApps` array declared but never used |
| `src/pages/Home.jsx:8` | `ArrowUpRight` imported but never used |

- **Fix:** Remove the dead imports/components; for the Navbar, derive the closed state from `location` (e.g. close the menu in the click handler) instead of setting state in the effect.

---

## 🟡 Medium — content & consistency

### 6. Dead links
- Footer **"Our Work"** program links → `href="#"` (4 of them).
- Footer **social icons** (Facebook / Instagram / YouTube) → `href="#"` (3 of them).

### 7. Inconsistent statistics across pages
- **Home stats bar:** 500+ children, 120+ families, 15+ programs, 10+ years.
- **About "Who we are":** 500+ children, 120+ families, 15+ programs, **50+ volunteers**.
- **About / Donate:** also cite **"3,000+ patients treated"** — which the Home bar **omits**.
- "15+ programs" vs the 3 described focus areas don't reconcile.
- **Fix:** Pick one canonical set of numbers and reuse it everywhere.

---

## 🟢 Low — polish / dead code

- **Unused Tailwind config & code:** `trustGreen` color, `bg-hero-blue`, `bg-dot-pattern`, `animate-float`, `.container-wide` (CSS), and `TwitterIcon` in `BrandIcons.jsx` are defined but never used.
- **Generic README:** still the default Vite template text — no project-specific info.
- **SEO/social:** no Open Graph / Twitter card tags and no share image; `dist/favicon.svg` & `dist/icons.svg` are generated but unused (index.html uses `Clogo.png`).
- **External runtime dependencies:** Google Fonts CDN + Unsplash hero images. The site degrades (missing fonts/hero photos) offline, and Unsplash URLs are outside your control. Consider self-hosting the hero images.

---

## ✅ What's already good
- Clean component/page structure; consistent design system (`primary`/`accent`/`logoBlue|Green|Orange`/`ink`/`cream` all defined and resolving correctly).
- Production build passes; responsive layouts throughout; `ScrollToTop` with hash handling; decent `alt` text and accessibility.
- ESLint config is in place (just needs the errors above cleared).

---

## Recommended fix order
1. **Optimize images → WebP, ≤200 KB** (biggest impact). ✅ **DONE** — 51.2 MB → 3.3 MB.
2. Add SPA rewrite rules + a 404 route. ✅ **DONE** — added `NotFound` page + catch-all route + `public/_redirects`.
3. Replace placeholder donation/contact details; make the contact form functional. ⏳ **PENDING** — needs the trust's real bank/UPI/email details from the owner (cannot invent these).
4. Clear the 6 lint errors. ✅ **DONE**.
5. Reconcile stats; fix dead footer links; add real UPI QR. ✅ Stats reconciled + footer links fixed; ⏳ UPI QR still a placeholder.
6. Polish: remove dead code, write a real README, add OG meta. ⏳ **PENDING**.

---

## Fixes applied (2026-10-15)

| Gap | Status | What changed |
|-----|--------|--------------|
| Image bloat (51 MB) | ✅ Fixed | 24 large PNGs → WebP (q82, ≤1600px). `dist/` 99 MB → **4.1 MB**. |
| Banner case mismatch (Linux 404) | ✅ Fixed | `DonateUs`/`Contactus` filenames now match imports; imported as `.webp`. |
| 6 ESLint errors | ✅ Fixed | Removed unused `logo`, `MapIllustration`, `upiApps`, `ArrowUpRight`; removed `setOpen` in Navbar effect (also a runtime crash). |
| No 404 route / SPA fallback | ✅ Fixed | Added `src/pages/NotFound.jsx`, catch-all `*` route, and `public/_redirects`. |
| Stat inconsistency | ✅ Fixed | Centralized into `src/data/site.js` (`IMPACT_STATS`); Home/About/Donate now match. |
| Dead footer "Our Work" links | ✅ Fixed | Now route to `/about` instead of `href="#"`. |
| Stray `dist/assets.zip` (48 MB) | ✅ Fixed | Deleted. |

**Still pending (needs owner input — not invented):** real donation bank/UPI/QR details, a functional contact-form backend, and real social URLs. (README is still the generic Vite template; the 3 hero/story photos still load from Unsplash.)

### Second-pass polish (2026-10-15)
- Added **Open Graph + Twitter meta tags** to `index.html` (present in the build).
- **Removed dead code:** `trustGreen` color, `bg-hero-blue`, `bg-dot-pattern`, `animate-float` + `float` keyframes (tailwind.config.js), `.container-wide` (index.css), `TwitterIcon` (BrandIcons.jsx).
- Fixed **dead contact-card links** (`#map`, `#`) — Phone/Mail stay clickable, Office/Hours now render as plain info rows.
- Deleted unused `Aboutus Banner.jpg`.
- Re-verified: `npm run build` + `npm run lint` both pass; `dist/` 4.1 MB.
