# PROJECT SNAPSHOT — VANTAGE SPORTS Phase 3

**Date:** 2026-06-14  
**Version:** 0.4.0  
**Phase:** Market Development (MVP → Market Dev)  
**Repository:** `/Users/jun-330/workspace/Badminton_SEA`  
**Live URL:** https://vantage-sports.vercel.app

---

## Executive Summary

Phase 3 upgrades the VANTAGE SPORTS website from MVP to a **market development** platform. Four new content pages, a distributor resource hub, media library scaffold, brand asset folder structure, shuttle testing application form, and catalog download CTAs were added. SEO, mobile navigation, build, and lint were verified.

**Primary brand:** VANTAGE SPORTS  
**Manufacturing partner:** INFIV (OEM Partner only — never primary brand)

---

## Phase 3 Deliverables Checklist

| # | Task | Status |
|---|------|--------|
| 1 | Market Coverage page (TH, MY, PH, VN) | ✅ |
| 2 | Factory Partner page (INFIV + Future OEM) | ✅ |
| 3 | Brand Assets folder structure | ✅ |
| 4 | Media Library page | ✅ |
| 5 | Distributor Resource Center page | ✅ |
| 6 | Free Shuttle Testing Application Form | ✅ |
| 7 | Download Catalog CTA | ✅ |
| 8 | SEO optimization | ✅ |
| 9 | Mobile check | ✅ |
| 10 | `npm run build` + `npm run lint` | ✅ |
| 11 | This snapshot document | ✅ |

---

## Site Map (10 routes + 3 redirects)

| Route | Page | Key Features |
|-------|------|--------------|
| `/` | Home | Pillars, audiences, markets preview, club testing CTA, catalog band |
| `/products` | Badminton Shuttlecock Series | G4/G6/G7 grades, specs, catalog band |
| `/market-coverage` | Market Coverage | Thailand, Malaysia, Philippines, Vietnam |
| `/factory-partners` | Factory Partners | INFIV (Active) + Future OEM Partners |
| `/oem-manufacturing` | OEM Manufacturing | Private label, MOQ, brand types |
| `/distributor-program` | Distributor Program | Benefits, lead form `#apply` |
| `/distributor-resources` | Distributor Resource Center | Resource cards + catalog CTA |
| `/shuttle-testing` | Shuttle Testing | Program info + application form `#apply` |
| `/media-library` | Media Library | Placeholder categories for factory media |
| `/contact` | Contact | VANTAGE SPORTS Lead Form |

**Redirects**

- `/about-factory` → `/factory-partners`
- `/about` → `/factory-partners`
- `/oem-service` → `/oem-manufacturing`

---

## New Pages (Phase 3)

### 1. Market Coverage (`/market-coverage`)

- **File:** `src/pages/MarketCoverage.tsx`
- **Content:** `marketCoverage` in `src/content/en.ts`
- **Regions:** Thailand, Malaysia, Philippines, Vietnam
- Per-market cards: status, highlight, opportunity, channels, recommended SKUs (G4/G6/G7)
- CTA: Apply for Your Market → `/distributor-program`
- Includes `DownloadCatalogCta` band

### 2. Factory Partners (`/factory-partners`)

- **File:** `src/pages/FactoryPartners.tsx`
- **Content:** `factoryPartners` in `src/content/en.ts`
- **Active partner:** INFIV (OEM Partner) with product lines and highlights
- **Future partners:** Racket OEM, Apparel OEM, Equipment OEM (Coming Soon)
- Factory capabilities grid from `factoryCapabilities` in `src/content/products.ts`
- Replaces legacy `/about-factory` page (`AboutFactory.tsx` removed)

### 3. Media Library (`/media-library`)

- **File:** `src/pages/MediaLibrary.tsx`
- **Content:** `mediaLibrary` in `src/content/en.ts`
- Categories: Factory Tour, Product Shots, Testing & Demos, Brand Assets
- Placeholder cards — ready for `/public/media/` assets
- Links to Distributor Resource Center and Contact

### 4. Distributor Resource Center (`/distributor-resources`)

- **File:** `src/pages/DistributorResources.tsx`
- **Content:** `distributorResources` in `src/content/en.ts`
- Resource cards: Product Catalog, Price Lists, Marketing Kit, Training Guide, Media Library
- Embedded `DownloadCatalogCta` card variant

---

## New Components

| Component | File | Usage |
|-----------|------|-------|
| Shuttle Testing Application Form | `src/components/ui/ShuttleTestingApplicationForm.tsx` | `/shuttle-testing#apply` |
| Download Catalog CTA | `src/components/ui/DownloadCatalogCta.tsx` | Home, Products, Market Coverage, Distributor Resources |

### Shuttle Testing Application Form Fields

- Organization type (club, academy, school, retailer, other)
- Country (TH, MY, PH, VN)
- Organization name, contact name, email, phone
- Monthly shuttle volume, preferred grade (G4/G6/G7)
- Testing purpose and notes
- Static submit (no backend/CRM yet) — success message on submit

### Download Catalog CTA

- **Variants:** `card` (resource pages) and `band` (full-width navy section)
- Links to `/contact` for catalog request (no PDF hosted yet)
- Copy in `catalog` object in `src/content/en.ts`

---

## Brand Assets Folder Structure

```
brand-assets/
├── README.md
├── colors/
│   └── brand-palette.md
├── logos/
│   └── primary/.gitkeep
└── product-images/
    └── shuttles/.gitkeep

public/media/
└── README.md
```

Documented full target structure in `brand-assets/README.md` (logos/partner, fonts, marketing, videos). Source masters live in `brand-assets/`; web-served files go in `public/media/`.

---

## Navigation Updates

### Header (`lg:` desktop, hamburger mobile)

| Label | Path |
|-------|------|
| Home | `/` |
| Products | `/products` |
| Markets | `/market-coverage` |
| Partners | `/factory-partners` |
| Distributors | `/distributor-program` |
| Contact | `/contact` |

### Footer — Resources

| Label | Path |
|-------|------|
| OEM Manufacturing | `/oem-manufacturing` |
| Shuttle Testing | `/shuttle-testing` |
| Resource Center | `/distributor-resources` |
| Media Library | `/media-library` |

---

## SEO

### Per-page `Seo` component (`src/components/seo/Seo.tsx`)

Each route sets:

- `document.title`
- `meta description`
- `meta keywords` (page-specific)
- Open Graph: `og:title`, `og:description`, `og:url`, `og:site_name`, `og:type`
- Twitter Card: `summary_large_image`
- Canonical URL: `https://vantage-sports.vercel.app{path}`

### Static SEO

- `index.html` — default title, description, theme-color, viewport
- `public/sitemap.xml` — all 10 routes (updated Phase 3)
- `public/robots.txt` — allows crawlers

### Sitemap URLs

```
/
/products
/market-coverage
/factory-partners
/oem-manufacturing
/distributor-program
/distributor-resources
/shuttle-testing
/media-library
/contact
```

---

## Mobile Verification

| Area | Implementation |
|------|----------------|
| Viewport | `width=device-width, initial-scale=1.0` in `index.html` |
| Header | Hamburger menu below `lg` breakpoint; 44px min touch targets |
| CTAs | `w-full sm:w-auto` on buttons — stack on mobile |
| Grids | `sm:` / `md:` / `lg:` responsive columns |
| Forms | `text-base` inputs, single-column on small screens |
| Catalog band | `flex-col` → `sm:flex-row` layout |

6 nav items + Contact button fit in mobile drawer (vertical stack).

---

## Build & Lint Results

```bash
npm run build   # ✅ tsc -b && vite build — 48 modules, ~1s
npm run lint    # ✅ eslint . — no errors
```

**Package version:** `0.4.0`

---

## Product Positioning (unchanged)

| Grade | Label | Use Case |
|-------|-------|----------|
| G4 | Tournament Grade | Competition, premium clubs |
| G6 | Club Training | Daily club practice |
| G7 | Economy Training | Schools, high-volume training |

Manufactured by **INFIV** (OEM Partner). Distributed by **VANTAGE SPORTS**.

---

## Forms (all static — no CRM integration)

| Form | Location | Purpose |
|------|----------|---------|
| ContactForm | `/contact` | General lead |
| DistributorLeadForm | `/distributor-program#apply` | Distributor recruitment |
| ShuttleTestingApplicationForm | `/shuttle-testing#apply` | Free shuttle testing |

---

## Files Changed / Added (Phase 3)

### New pages

- `src/pages/MarketCoverage.tsx`
- `src/pages/FactoryPartners.tsx`
- `src/pages/MediaLibrary.tsx`
- `src/pages/DistributorResources.tsx`

### New components

- `src/components/ui/ShuttleTestingApplicationForm.tsx`
- `src/components/ui/DownloadCatalogCta.tsx`

### Updated

- `src/App.tsx` — routes + redirects
- `src/content/en.ts` — nav, footerNav, page copy
- `src/pages/Home.tsx` — market link, catalog CTA
- `src/pages/Products.tsx` — catalog CTA
- `src/pages/DistributorProgram.tsx` — market coverage link (removed duplicate MarketsSection)
- `src/pages/ShuttleTesting.tsx` — application form
- `src/components/layout/Footer.tsx` — footerNav section
- `public/sitemap.xml`
- `package.json` — v0.4.0
- `README.md`

### Removed

- `src/pages/AboutFactory.tsx` (replaced by Factory Partners + redirect)

### Brand assets

- `brand-assets/` scaffold
- `public/media/README.md`

---

## Next Steps (post–Phase 3)

1. Upload factory/product media to `public/media/` and wire Media Library cards
2. Host product catalog PDF and point Download Catalog CTA to file or gated form
3. Connect forms to CRM (HubSpot, email API, or Vercel serverless)
4. Add real logo files to `brand-assets/logos/primary/`
5. Expand `brand-assets/` subfolders per README (partner logos, marketing, videos)
6. Add `og:image` meta when brand hero image is ready

---

## Related Documentation

- [README.md](./README.md)
- [REBRANDING_REPORT_VANTAGE_SPORTS.md](./REBRANDING_REPORT_VANTAGE_SPORTS.md)
- [PROJECT_SNAPSHOT_2026_06_BADMINTON_V1.md](./PROJECT_SNAPSHOT_2026_06_BADMINTON_V1.md) (Phase 2)
- [brand-assets/README.md](./brand-assets/README.md)
- [PRODUCT_DATABASE.md](./PRODUCT_DATABASE.md)

---

*Generated: Phase 3 Market Development — VANTAGE SPORTS v0.4.0*
