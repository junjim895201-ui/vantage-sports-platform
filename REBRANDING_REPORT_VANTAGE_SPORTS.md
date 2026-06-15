# REBRANDING REPORT — VANTAGE SPORTS

**Date:** 2026-06-14  
**Project:** `/Users/jun-330/workspace/Badminton_SEA`  
**Version:** 0.3.0  
**Previous Brand:** INFIV Southeast Asia  
**New Brand:** VANTAGE SPORTS

---

## Brand Positioning

| Attribute | Value |
|-----------|-------|
| **Primary Brand** | VANTAGE SPORTS |
| **Tagline** | Southeast Asia Sports Distribution & OEM Platform |
| **Role** | Distribution, OEM program management, market development |
| **INFIV Role** | Manufacturing Partner / OEM Partner only (never primary brand) |

---

## Core Business (Site Messaging)

1. Badminton Shuttlecock Distribution
2. OEM / Private Label Service
3. Distributor Recruitment
4. Club Testing Program
5. Southeast Asia Market Development

---

## What Changed

### Global Identity

| Element | Before | After |
|---------|--------|-------|
| Site name | INFIV Southeast Asia | **VANTAGE SPORTS** |
| URL (canonical) | infiv-sea.vercel.app | **vantage-sports.vercel.app** |
| Email | partners@infiv-badminton.com | **partners@vantage-sports.com** |
| Facebook | infiv.southeast.asia | **vantage.sports.sea** |
| Logo | INFIV + Southeast Asia | **VANTAGE SPORTS** (text logo, gold accent) |
| Primary CTA color | Orange (#e85d04) | **Gold (#c9a227) on navy** |

### Pages Updated

| Page | Key Changes |
|------|-------------|
| **Home** | VANTAGE SPORTS hero, core business pillars, market development |
| **Products** | Renamed → **Badminton Shuttlecock Series**; G4/G6/G7 as Partner Product Series |
| **OEM** | Emphasizes *we work with selected Chinese manufacturers*; INFIV as OEM partner |
| **Distributor** | Emphasizes *we help distributors access factory-direct products* |
| **Shuttle Testing** | Club Testing Program under VANTAGE SPORTS |
| **About Factory** | Manufacturing Partners section; INFIV listed as OEM Partner |
| **Contact** | **VANTAGE SPORTS Lead Form** |

### Products Page — Grade Labels

| SKU | Grade |
|-----|-------|
| G4 | Tournament Grade |
| G6 | Club Training |
| G7 | Economy Training |

Each card shows: `Manufacturing Partner: INFIV (OEM Partner)`

### Forms

| Form | Label |
|------|-------|
| Contact | VANTAGE SPORTS Lead Form |
| Distributor | Distributor Lead Form (unchanged fields) |

### SEO

- All `<title>` tags use VANTAGE SPORTS
- All `meta description` rewritten
- Canonical URLs → `https://vantage-sports.vercel.app`
- `sitemap.xml` and `robots.txt` updated
- INFIV appears only in partner-related keywords (e.g. "INFIV OEM partner")

---

## INFIV Usage Policy (Post-Rebrand)

**Allowed:**
- "Manufacturing Partner: INFIV (OEM Partner)"
- "INFIV (精彩永恒) as OEM partner"
- Factory stats attributed to manufacturing partners
- Product specs: "Manufactured by INFIV (OEM Partner)"

**Removed:**
- INFIV as site name, hero headline, or primary CTA
- "Partner with INFIV" / "Stock INFIV" / "INFIV Southeast Asia"
- INFIV in navigation, footer brand line, or contact subject as primary sender

---

## Files Modified

```
src/content/en.ts              — Full rebrand copy
src/content/products.ts        — Partner series, INFIV as OEM only
src/components/layout/Header.tsx — Text logo VANTAGE SPORTS
src/components/layout/Footer.tsx — (via site.*)
src/components/ui/ContactChannels.tsx
src/components/ui/ContactForm.tsx
src/components/ui/DistributorLeadForm.tsx
src/pages/*.tsx                — All 7 pages
src/index.css                  — Gold primary buttons
tailwind.config.js             — Navy/gold palette
index.html
public/robots.txt
public/sitemap.xml
public/favicon.svg
package.json                   — v0.3.0
```

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Navy | `#0a1628` | Headers, hero, footer |
| Navy Light | `#1a3a5c` | Links, accents |
| Gold | `#c9a227` | Logo accent, CTAs, badges |
| White | `#ffffff` | Backgrounds, cards |

---

## Build Verification

```bash
npm run build   # ✓ PASS (2026-06-14)
npm run lint    # ✓ PASS
```

---

## Deployment Notes

1. Update Vercel project domain to `vantage-sports.vercel.app` (or custom domain)
2. Replace placeholder WhatsApp, email, Facebook with production accounts
3. Update `site.url` in `src/content/en.ts` when custom domain is live
4. Optional: replace text logo with designed SVG wordmark

---

## Documents Not Auto-Updated (Legacy Reference)

These files still reference INFIV branding and may be updated separately:

- `PRODUCT_DATABASE.md`
- `MARKETING_COPY_EN.md`
- `PROJECT_SNAPSHOT_2026_06_BADMINTON_V1.md`
- `README.md`

Recommend regenerating marketing copy under VANTAGE SPORTS in a follow-up pass.
