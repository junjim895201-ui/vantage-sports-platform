# PROJECT SNAPSHOT — Badminton SEA (Legacy INFIV Southeast Asia Phase)

**Version:** 0.2.0 (Phase 2)  
**Date:** 2026-06-14  
**Path:** `/Users/jun-330/workspace/Badminton_SEA`  
**Brand at this phase:** INFIV Southeast Asia  
**Current primary brand:** VANTAGE SPORTS

---

## Executive Summary

Phase 2 upgraded the legacy INFIV Southeast Asia B2B platform with optimized product positioning (G4/G6/G7), a dedicated distributor lead form, club testing CTAs, expanded OEM content, and a Southeast Asia markets section. The current live brand has since been rebranded to VANTAGE SPORTS, with INFIV retained only as a Manufacturing Partner / OEM Partner.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Styling | Tailwind CSS 3 |
| Routing | react-router-dom 7 |
| Lint | ESLint 10 + Prettier |
| Deploy | Vercel (`vercel.json` SPA rewrites) |

---

## Site Structure (7 Pages)

| Route | Page | Phase 2 Changes |
|-------|------|-----------------|
| `/` | Home | + Markets section, Club Testing CTA, distributor apply link |
| `/products` | Products | G4/G6/G7 grade badges & legend |
| `/oem-manufacturing` | OEM Manufacturing | + 4 brand solution types |
| `/distributor-program` | Distributor Program | + Lead form, markets section |
| `/shuttle-testing` | Free Shuttle Testing | + Club Testing CTA band |
| `/about-factory` | About Factory | SEO keywords |
| `/contact` | Contact | SEO keywords |

**Legacy redirects:** `/about`, `/market-coverage` → `/about-factory`; `/oem-service` → `/oem-manufacturing`

---

## Product Positioning (Phase 2)

| SKU | Grade Label | Feather | Target Channel |
|-----|-------------|---------|----------------|
| **G4** | Tournament Grade | Patent goose, full-round | Tournaments, premium shops |
| **G6** | Club Training | 0.15 mm goose back | Clubs, academies |
| **G7** | Economy Training | Golden silk duck | Sports shops, schools |

---

## New Components (Phase 2)

```
src/components/ui/
├── DistributorLeadForm.tsx   # Distributor lead capture
├── ClubTestingCta.tsx        # Reusable club testing band
├── MarketsSection.tsx        # TH / MY / PH / VN markets
├── ContactChannels.tsx
├── ContactForm.tsx
└── PageHero.tsx

src/components/seo/
└── Seo.tsx                   # + canonical, og:site_name, keywords
```

---

## Distributor Lead Form Fields

| Field | Type |
|-------|------|
| Country | Select (TH, MY, PH, VN, Other ASEAN) |
| Company | Text |
| Contact Person | Text |
| WhatsApp | Tel |
| Facebook Page | URL |
| Current Brands | Text |
| Monthly Purchase Volume | Select |
| Interested Products | Select |

Location: `/distributor-program#apply`  
Behavior: Static client-side submit (CRM pending)

---

## OEM Brand Solutions (Phase 2)

1. **Private Label** — Your brand on factory output
2. **Custom Packaging** — Multilingual ASEAN tube/box design
3. **Distributor Brand** — Territory-exclusive co-brand
4. **Academy Brand** — Club logo shuttles & team kits

---

## Southeast Asia Markets Section

| Country | Code | Focus Channels |
|---------|------|----------------|
| Thailand | TH | Wholesalers, pro shops, club chains |
| Malaysia | MY | Specialty retail, state distributors, academies |
| Philippines | PH | Sports retail, club suppliers, schools |
| Vietnam | VN | Wholesalers, club accounts, OEM brands |

Shown on: **Home**, **Distributor Program**

---

## Club Testing Program CTA

- **Title:** Club Testing Program
- **Action:** Apply Free Shuttle Testing
- **Shown on:** Home, Products, Shuttle Testing page
- **Target:** Clubs/academies with 20+ active members

---

## SEO (Phase 2)

Per-page via `Seo` component:

- `<title>` unique per route
- `meta description`
- `meta keywords` (Phase 2)
- Open Graph: title, description, url, site_name, type
- Twitter card: summary_large_image
- Canonical URL: `https://infiv-sea.vercel.app{path}`

Static assets: `public/robots.txt`, `public/sitemap.xml`

---

## Mobile-First Checklist

| Item | Status |
|------|--------|
| Min touch target 44px (buttons, inputs) | ✓ `min-h-11` on `.btn`, `.form-input` |
| Full-width CTAs on mobile | ✓ `w-full sm:w-auto` |
| Responsive grids | ✓ `sm:` / `md:` / `lg:` breakpoints |
| Sticky header + hamburger nav | ✓ |
| WhatsApp FAB (fixed bottom-right) | ✓ |
| No horizontal overflow on forms | ✓ single-column mobile form grids |
| Readable font sizes (14–16px body) | ✓ |

---

## Build & Lint (2026-06-14)

```bash
npm run build   # ✓ PASS
npm run lint    # ✓ PASS
```

**Build output:** 13 KB CSS · 280 KB JS (gzip: 3.5 KB · 86 KB)

---

## Documentation Files

| File | Purpose |
|------|---------|
| `README.md` | Setup & deploy |
| `PRODUCT_DATABASE.md` | G4/G6/G7 specs & factory data |
| `MARKETING_COPY_EN.md` | Facebook & outreach copy |
| `PROJECT_SNAPSHOT_2026_06_BADMINTON_V1.md` | This snapshot |

---

## Content Sources

- 精彩永恒品牌手册.pdf — factory, G-series specs
- 2026-5-1经销商价格表.pdf — accessory SKUs (no China prices on site)
- INFIV Thailand Agent Product Model — catalog cross-reference

---

## Not Included (By Design)

- Backend / API / CRM integration
- China franchise / 加盟 / 千馆 content
- China domestic pricing
- i18n (Thai, Malay, Vietnamese)

---

## Next Phase Suggestions

1. Wire distributor & contact forms to CRM (HubSpot / Zoho / webhook)
2. Add product images for G4/G6/G7 tubes
3. Thai / Malay / Vietnamese locale layer
4. Analytics (Plausible / GA4)
5. Replace placeholder WhatsApp & Facebook URLs with production accounts

---

## Quick Commands

```bash
cd /Users/jun-330/workspace/Badminton_SEA
npm install
npm run dev       # http://localhost:5173
npm run build
npm run lint
npx vercel --prod
```
