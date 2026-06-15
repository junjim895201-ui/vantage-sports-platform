# PROJECT SNAPSHOT — VANTAGE SPORTS Phase 5

**Date:** 2026-06-14  
**Version:** 0.6.0  
**Phase:** Recruitment Platform (展示型 → 招商型)  
**Repository:** `/Users/jun-330/workspace/Badminton_SEA`  
**Live URL:** https://vantage-sports.vercel.app

---

## Executive Summary

Phase 5 upgrades VANTAGE SPORTS from a **showcase website** to a **recruitment-focused platform** (招商型). New operational pages for distributor CRM, club testing database, product comparison, and download center — plus client-side lead tracking across all forms. Bilingual EN / 简体中文 preserved.

**Primary brand:** VANTAGE SPORTS  
**Manufacturing partner:** INFIV (OEM Partner only)

---

## Phase 5 Deliverables

| # | Task | Status |
|---|------|--------|
| 1 | Distributor CRM Page | ✅ `/distributor-crm` |
| 2 | Club Testing Database Page | ✅ `/club-testing-database` |
| 3 | Product Comparison Page | ✅ `/product-comparison` |
| 4 | Factory Partners Page (enhanced) | ✅ Recruitment CTAs added |
| 5 | Download Center | ✅ `/download-center` |
| 6 | Lead Tracking Structure | ✅ `src/lib/leads.ts` + form integration |
| 7 | SEO optimization | ✅ hreflang + sitemap + keywords |
| 8 | Mobile check | ✅ Responsive tables, nav, cards |
| 9 | EN / ZH bilingual | ✅ Full content in `en.ts` / `zh.ts` |
| 10 | `npm run build` + `npm run lint` | ✅ Pass |
| 11 | This snapshot | ✅ |

---

## Site Map (v0.6.0)

### Main Navigation (招商导向)

| EN | ZH | Path |
|----|-----|------|
| Home | 首页 | `/` · `/zh` |
| Products | 产品 | `/products` |
| Compare | 对比 | `/product-comparison` |
| Distributors | 分销商 | `/distributor-program` |
| Partners | 伙伴 | `/factory-partners` |
| Downloads | 下载 | `/download-center` |

### Footer Resources

| EN | Path |
|----|------|
| Distributor CRM | `/distributor-crm` |
| Club Testing DB | `/club-testing-database` |
| Shuttle Testing | `/shuttle-testing` |
| Download Center | `/download-center` |
| Resource Center | `/distributor-resources` |

### All Routes (EN + `/zh` prefix)

| Route | Page |
|-------|------|
| `/` | Home (+ recruitment tools section) |
| `/products` | Product series |
| `/product-comparison` | **NEW** G4/G6/G7 matrix |
| `/distributor-program` | Distributor recruitment + form |
| `/distributor-crm` | **NEW** Lead dashboard |
| `/club-testing-database` | **NEW** Testing applications DB |
| `/download-center` | **NEW** Catalog & asset hub |
| `/factory-partners` | Factory network + recruitment CTAs |
| `/shuttle-testing` | Free testing + application form |
| `/oem-manufacturing` | OEM service |
| `/market-coverage` | ASEAN markets |
| `/distributor-resources` | Legacy resource cards |
| `/media-library` | Media scaffold |
| `/about-factory` | Manufacturing partners |
| `/contact` | Contact + lead form |

**Total:** 15 pages × 2 locales = **30 routes** + redirects

---

## New Features

### 1. Lead Tracking (`src/lib/leads.ts`)

```typescript
type LeadType = "contact" | "distributor" | "testing";
type LeadRecord = { id, type, locale, sourcePath, submittedAt, status, data };
```

| Function | Purpose |
|----------|---------|
| `saveLead()` | Persist form submission to localStorage |
| `getLeads()` | Read all leads |
| `getLeadsByType()` | Filter by type |
| `getLeadStats()` | Aggregate counts |
| `updateLeadStatus()` | Pipeline: new → reviewing → qualified → closed |
| `exportLeadsJson()` | Download JSON for CRM import |
| `captureFormData()` | Serialize FormData to object |

**Storage key:** `vantage-sports-leads-v1`

**Hook:** `src/hooks/useLeadSubmit.ts` — wired into all 3 forms

### 2. Distributor CRM Page

- Pipeline overview (4 steps)
- Stats: total, new, distributor, contact leads
- Full leads table with status dropdown
- Export JSON + Refresh buttons
- Links to application form + testing database

### 3. Club Testing Database Page

- Filters `testing` type leads only
- Stats by organization type (clubs, shops, distributors)
- Application table
- CTA to apply + view CRM

### 4. Product Comparison Page

- Side-by-side G4 / G6 / G7 comparison table
- 6 attribute rows (grade, feather, channel, durability, MOQ, ASEAN fit)
- CTAs: testing, distributor application, download center

### 5. Download Center

- 6 resource categories with localized CTAs
- Catalog request, datasheets, application packs, factory overview, media
- Links to CRM + contact

### 6. Factory Partners (Enhanced)

- New **Partner with VANTAGE SPORTS** recruitment band
- CTAs: Distributor Application, Factory Tour, Partner Kit
- INFIV remains OEM Partner (not primary brand)

### 7. Home Page (招商)

- New recruitment tools section linking Compare, Downloads, CRM

---

## SEO Enhancements

| Enhancement | Implementation |
|-------------|----------------|
| hreflang | `Seo.tsx` sets `en`, `zh-Hans`, `x-default` alternate links |
| Canonical | Locale-prefixed per page |
| Keywords | New keys for CRM, testing DB, comparison, downloads |
| Sitemap | 30 URLs in `public/sitemap.xml` |

---

## Mobile Verification

| Component | Mobile behavior |
|-----------|-----------------|
| LeadsTable | `overflow-x-auto`, `min-w-[640px]` horizontal scroll |
| Product comparison | `min-w-[600px]` scroll table |
| Nav | 6 items + hamburger + language switcher |
| Recruitment cards | `sm:grid-cols-3` stack on mobile |
| Download grid | `sm:grid-cols-2` → single column |
| CTAs | `w-full sm:w-auto` |

---

## Architecture Additions

```
src/lib/leads.ts              # Lead tracking core
src/hooks/useLeadSubmit.ts    # Form → lead capture hook
src/components/ui/LeadsTable.tsx  # Shared CRM table
src/pages/DistributorCrm.tsx
src/pages/ClubTestingDatabase.tsx
src/pages/ProductComparison.tsx
src/pages/DownloadCenter.tsx
```

### Content additions (`en.ts` / `zh.ts`)

- `distributorCrm`
- `clubTestingDatabase`
- `productComparison`
- `downloadCenter`
- `factoryPartners.recruitmentTitle/Desc/Ctas`
- `common.leadsTable`, `common.leadTypes`, `common.leadStatuses`
- Updated `nav`, `footerNav`, form success messages

---

## Build & Lint

```bash
npm run build   # ✅ 68 modules, ~366 KB JS (gzip ~106 KB)
npm run lint    # ✅ 0 errors
```

**Package:** `badminton-sea@0.6.0`

---

## Brand Compliance

- Header/Footer: **VANTAGE SPORTS** only
- INFIV: Manufacturing/OEM Partner context on products & factory pages
- Recruitment copy positions VANTAGE as channel owner, factories as production partners

---

## Known Limitations

1. **Leads stored in browser localStorage** — not synced across devices; export JSON for manual CRM import until backend API
2. **No authentication on CRM/DB pages** — intended as partner operations demo; add auth before production CRM exposure
3. **Download Center** — links to forms/pages; no hosted PDF files yet
4. **Media Library** — still placeholder assets

---

## Next Steps (Post–Phase 5)

1. Vercel serverless API + database for lead persistence
2. HubSpot / Salesforce webhook integration
3. Password-protect or remove public CRM dashboard
4. Host product catalog PDF in `public/downloads/`
5. Populate media library with factory assets
6. Add `og:image` meta tag

---

## Related Documentation

- [I18N_IMPLEMENTATION_REPORT.md](./I18N_IMPLEMENTATION_REPORT.md)
- [PRE_DEPLOY_QA_REPORT_VANTAGE_V0_5.md](./PRE_DEPLOY_QA_REPORT_VANTAGE_V0_5.md)
- [PROJECT_SNAPSHOT_VANTAGE_PHASE3.md](./PROJECT_SNAPSHOT_VANTAGE_PHASE3.md)

---

*Phase 5 — Recruitment Platform — VANTAGE SPORTS v0.6.0*
