# Enerama Environmental Technologies — Website

Astro + Tailwind CSS + React. Deployed via Cloudflare Pages.

## Development

```bash
npm install
npm run dev        # localhost:4321
npm run build      # produces dist/
npm run preview    # serves dist/ locally
```

## Deployment

Push to `main` branch. Cloudflare Pages auto-builds and deploys.

**Build settings (Cloudflare Pages):**
- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: 18 or later

## Structure

```
src/
├── pages/          Routes (one .astro file per page)
├── components/     React components (Header, Footer)
├── layouts/        Shared page wrapper
├── lib/            Utilities
└── styles/         Global CSS, fonts
public/             Static assets served as-is
```

## Brand colors

- Navy `#1B3A6B`
- Orange `#E07B39`
- Teal `#0D7377`
- Dark Teal `#0B3D4C`

## Terminology rules

- Always "Liquid Desiccant" — never "LiCl"
- Enerama uses refrigerants — never write "No refrigerants"
- Dragon Solar TES = pre-commercial, PCT filed Q1 2026

## Verified numbers

27 commissioned projects · 3 countries (USA, Switzerland, Türkiye) · 4 offices (incl. Baku representation) · 350+ units · 2,830 kW installed · 14 years field-proven · 0 critical failures · founded 2011 
