# I18N Implementation Report — VANTAGE SPORTS Phase 4

**Date:** 2026-06-14  
**Version:** 0.5.0  
**Repository:** `/Users/jun-330/workspace/Badminton_SEA`

---

## Summary

VANTAGE SPORTS now supports a **bilingual architecture**:

| Role | Locale | URL prefix |
|------|--------|------------|
| **Primary** | English (`en`) | `/` |
| **Secondary** | 简体中文 (`zh`) | `/zh` |

- Default language: **English**
- Language switcher: **EN | 中文** in header (desktop + mobile)
- No external i18n library — lightweight TypeScript content modules + React context
- **Thai / Malay / Vietnamese** reserved in config, not implemented

---

## Architecture

```
src/i18n/
├── types.ts          # Locale, FutureLocale, LocaleConfig
├── config.ts         # LOCALES (en, zh), FUTURE_LOCALES (th, ms, vi)
├── paths.ts          # localizedPath, parseLocalePath, switchLocalePath
├── I18nContext.ts    # React context + I18nContextValue type
├── I18nProvider.tsx  # Provider — sets html lang/dir, loads content
├── useI18n.ts        # useI18n() hook
└── index.ts          # Public API

src/content/
├── en.ts             # English copy (primary)
├── zh.ts             # 简体中文 copy (secondary)
├── zh-products.ts    # Chinese product SKU copy
├── products.ts       # English product SKU copy
└── index.ts          # getContent(locale), getProductCatalog(locale)
```

### Design principles

1. **Content separated from UI** — all copy in `src/content/{locale}.ts`
2. **Type-safe** — `Content` type derived from `en.ts`; `zh.ts` mirrors structure
3. **Locale from URL** — `I18nProvider` receives `locale` from route wrapper
4. **Localized links** — `LocalizedLink` + `localizedPath()` prefix paths automatically
5. **Future-ready** — `FUTURE_LOCALES` in `config.ts` documents `th`, `ms`, `vi` slots

---

## URL Structure

### English (default)

| Page | URL |
|------|-----|
| Home | `/` |
| Products | `/products` |
| OEM Manufacturing | `/oem-manufacturing` |
| Distributor Program | `/distributor-program` |
| Free Shuttle Testing | `/shuttle-testing` |
| About Factory | `/about-factory` |
| Contact | `/contact` |

### 简体中文

| Page | URL |
|------|-----|
| 首页 | `/zh` |
| 产品 | `/zh/products` |
| OEM 制造 | `/zh/oem-manufacturing` |
| 分销商计划 | `/zh/distributor-program` |
| 免费试打 | `/zh/shuttle-testing` |
| 工厂介绍 | `/zh/about-factory` |
| 联系 | `/zh/contact` |

### Phase 3 pages (also bilingual)

| Page | EN | ZH |
|------|----|----|
| Market Coverage | `/market-coverage` | `/zh/market-coverage` |
| Factory Partners | `/factory-partners` | `/zh/factory-partners` |
| Distributor Resources | `/distributor-resources` | `/zh/distributor-resources` |
| Media Library | `/media-library` | `/zh/media-library` |

### Redirects

| From | To (EN) | To (ZH) |
|------|---------|---------|
| `/about` | `/about-factory` | `/zh/about-factory` |
| `/oem-service` | `/oem-manufacturing` | `/zh/oem-manufacturing` |

---

## Bilingual Pages Checklist (Phase 4 requirements)

| # | Page | EN | ZH | Notes |
|---|------|----|----|-------|
| 1 | Home | ✅ | ✅ | Hero, pillars, audiences, CTAs |
| 2 | Products | ✅ | ✅ | G4/G6/G7 + accessories + `zh-products.ts` |
| 3 | OEM Manufacturing | ✅ | ✅ | Scopes, MOQ, brand types |
| 4 | Distributor Program | ✅ | ✅ | Lead form labels + options |
| 5 | Free Shuttle Testing | ✅ | ✅ | Application form + program copy |
| 6 | About Factory | ✅ | ✅ | Restored as dedicated page |
| 7 | Contact | ✅ | ✅ | Lead form + contact channels |

---

## Language Switcher

**Component:** `src/components/ui/LanguageSwitcher.tsx`

- Toggle: **EN** | **中文**
- Preserves current page when switching (e.g. `/products` ↔ `/zh/products`)
- Uses `switchLocalePath()` from `src/i18n/paths.ts`
- Visible in header on desktop and mobile

---

## Navigation (locale-aware)

### Header nav (6 items + Contact CTA)

| EN | ZH |
|----|-----|
| Home | 首页 |
| Products | 产品 |
| OEM | OEM |
| Distributors | 分销商 |
| Shuttle Testing | 试打申请 |
| About Factory | 工厂介绍 |
| Contact (button) | 联系 |

### Footer resources

OEM Manufacturing, Shuttle Testing, Resource Center, Media Library — all localized.

---

## SEO

- Per-page `Seo` component uses locale-prefixed canonical URLs
- `document.documentElement.lang` set to `en` or `zh-Hans`
- `og:locale` meta: `en_US` or `zh_CN`
- Keywords moved to `common.seoKeywords` in content files
- `public/sitemap.xml` updated with EN + ZH URLs and `hreflang` on home

---

## Components Migrated to `useI18n()`

| Component | Change |
|-----------|--------|
| `Header.tsx` | `nav`, `site`, `common` + `LanguageSwitcher` |
| `Footer.tsx` | Localized links |
| `Seo.tsx` | Locale-aware canonical + og:locale |
| `ContactForm.tsx` | Form fields + success message |
| `DistributorLeadForm.tsx` | Full form i18n |
| `ShuttleTestingApplicationForm.tsx` | Full form i18n |
| `ContactChannels.tsx` | Button labels + WhatsApp prefill |
| `DownloadCatalogCta.tsx` | `LocalizedLink` to contact |
| `ClubTestingCta.tsx` | Localized CTA |
| `MarketsSection.tsx` | Region copy |
| `LocalizedLink.tsx` | **New** — locale-prefixed `Link` |

All 11 pages use `useI18n()` instead of direct `content/en` imports.

---

## Reserved Language Extension

`src/i18n/config.ts` defines `FUTURE_LOCALES` (not active):

```ts
th: { prefix: "/th", htmlLang: "th", nativeName: "ไทย" }
ms: { prefix: "/ms", htmlLang: "ms", nativeName: "Bahasa Melayu" }
vi: { prefix: "/vi", htmlLang: "vi", nativeName: "Tiếng Việt" }
```

**To add a new locale:**

1. Add code to `Locale` type in `types.ts`
2. Add entry to `LOCALES` in `config.ts`
3. Create `src/content/{locale}.ts` (+ product file if needed)
4. Register in `src/content/index.ts`
5. Add `<Route path="/{prefix}">` in `App.tsx`
6. Update `parseLocalePath()` in `paths.ts`
7. Add switcher option in `LanguageSwitcher.tsx`

---

## Build & Lint

```bash
npm run build   # ✅ tsc + vite — 61 modules
npm run lint    # ✅ eslint — no errors
```

**Package version:** `0.5.0`

---

## Files Added

| File | Purpose |
|------|---------|
| `src/i18n/*` | i18n core (7 files) |
| `src/content/zh.ts` | 简体中文 UI copy |
| `src/content/zh-products.ts` | 简体中文 product copy |
| `src/content/index.ts` | Content loader |
| `src/components/ui/LanguageSwitcher.tsx` | EN / 中文 toggle |
| `src/components/ui/LocalizedLink.tsx` | Locale-aware Link |
| `src/components/layout/LocaleLayout.tsx` | Route + I18nProvider wrapper |
| `src/pages/AboutFactory.tsx` | Restored bilingual factory page |

## Files Modified

- `src/App.tsx` — dual locale routing
- `src/content/en.ts` — `common` strings, nav update, `aboutFactory` fields
- All pages + layout + form components
- `public/sitemap.xml` — bilingual URLs
- `package.json` — v0.5.0

---

## Testing Checklist

- [ ] Visit `/` — English home, `lang="en"`
- [ ] Visit `/zh` — Chinese home, `lang="zh-Hans"`
- [ ] Switch EN ↔ 中文 on each core page — path preserved
- [ ] Forms show Chinese labels on `/zh/*` routes
- [ ] Mobile hamburger + language switcher usable
- [ ] Canonical URLs include `/zh` prefix when applicable

---

## Next Steps (post–Phase 4)

1. Add `hreflang` link tags in `Seo` component for all page pairs
2. Host separate OG images per locale (optional)
3. When ready: implement `th`, `ms`, `vi` using `FUTURE_LOCALES` scaffold
4. Connect forms to CRM with locale field in submission payload

---

*Phase 4 — Bilingual i18n — VANTAGE SPORTS v0.5.0*
