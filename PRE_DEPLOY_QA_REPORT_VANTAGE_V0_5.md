# Pre-Deploy QA Report — VANTAGE SPORTS v0.5.0

Date: 2026-06-15  
Workspace: `/Users/jun-330/workspace/Badminton_SEA`  
QA scope: English/Chinese copy, routes, language switching, mobile header/menu/footer, SEO metadata, forms, brand hierarchy, build, and lint.

## Executive Status

Result: **Pass after fixes**

The site is ready for pre-deploy review. VANTAGE SPORTS is the primary customer-facing brand. INFIV is retained only as a Manufacturing Partner / OEM Partner in live site content.

## Auto-Fixes Applied

| Area | Issue | Fix |
|---|---|---|
| Chinese copy | `羽毛羽毛球` duplicate wording appeared in Chinese content | Replaced with `羽毛球` |
| Factory capacity | Factory capacity was overstated as `12–15 million dozen/month` / `1200–1500 万打/月` | Corrected to `1.2–1.5 million dozen/month` / `120–150 万打/月` |
| Distributor form | Distributor lead form lacked email and market notes fields | Added required `email` field and `message` textarea in EN/ZH |
| Marketing copy | Legacy customer-facing `INFIV Southeast Asia` wording remained in marketing templates | Rewritten to VANTAGE SPORTS primary brand, with INFIV only as Manufacturing Partner context |
| Product database | Product database title positioned INFIV as primary | Reframed as Manufacturing Partner Product Database and added VANTAGE SPORTS primary-brand note |
| Legacy snapshot | Old phase snapshot still used INFIV as current brand | Marked as legacy phase and documented current VANTAGE SPORTS brand rule |

## 1. English / Chinese Copy

Status: **Pass**

Checks performed:

- Scanned source for mojibake and replacement characters.
- Reviewed EN/ZH core content files.
- Verified no visible `INFIV Southeast Asia` legacy brand text in rendered pages.
- Verified Chinese pages render Chinese titles and copy.

No unresolved乱码, obvious Chinese typo, or uncontrolled EN/ZH copy mixing found in live pages.

## 2. Route Accessibility

Status: **Pass**

Checked all production routes by HTTP and browser render:

| English | Chinese |
|---|---|
| `/` | `/zh` |
| `/products` | `/zh/products` |
| `/market-coverage` | `/zh/market-coverage` |
| `/factory-partners` | `/zh/factory-partners` |
| `/about-factory` | `/zh/about-factory` |
| `/oem-manufacturing` | `/zh/oem-manufacturing` |
| `/distributor-program` | `/zh/distributor-program` |
| `/distributor-resources` | `/zh/distributor-resources` |
| `/shuttle-testing` | `/zh/shuttle-testing` |
| `/media-library` | `/zh/media-library` |
| `/contact` | `/zh/contact` |

Compatibility redirects checked:

- `/about`
- `/oem-service`
- `/zh/about`
- `/zh/oem-service`

All returned valid SPA responses and rendered successfully in browser QA.

## 3. LanguageSwitcher

Status: **Pass**

Browser-verified language switching on:

- `/`
- `/products`
- `/oem-manufacturing`
- `/factory-partners`
- `/contact`

Expected behavior confirmed:

- EN to ZH preserves the current route path.
- ZH to EN returns to the matching English route.
- Query/hash preservation remains implemented in `LanguageSwitcher`.

## 4. Mobile Header / Menu / Footer

Status: **Pass**

Browser-verified at 390px mobile viewport:

- Header visible.
- Language switcher visible.
- Mobile menu opens and closes.
- Mobile navigation is visible after menu click.
- Footer renders.
- No horizontal overflow detected on tested routes.

Tested mobile routes:

- `/`
- `/products`
- `/distributor-program`
- `/shuttle-testing`
- `/contact`
- `/zh`
- `/zh/products`
- `/zh/contact`

## 5. SEO Title / Description

Status: **Pass**

Browser-verified all pages set route-specific document titles and meta descriptions. Titles include VANTAGE SPORTS.

Representative titles:

| Route | Title |
|---|---|
| `/` | `VANTAGE SPORTS | Southeast Asia Sports Distribution & OEM Platform` |
| `/products` | `Badminton Shuttlecock Series | VANTAGE SPORTS` |
| `/oem-manufacturing` | `OEM Manufacturing | VANTAGE SPORTS` |
| `/distributor-program` | `Distributor Program | VANTAGE SPORTS` |
| `/shuttle-testing` | `Club Testing Program | VANTAGE SPORTS` |
| `/zh/products` | `羽毛球产品系列 | VANTAGE SPORTS` |
| `/zh/contact` | `联系 | VANTAGE SPORTS` |

Note: Chinese meta descriptions are shorter by character count than English descriptions but are semantically complete and appropriate for Chinese search snippets.

## 6. Form Fields

Status: **Pass after fix**

Forms reviewed:

| Form | Required fields | Optional fields |
|---|---|---|
| Contact form | Company, name, email, country, message | Phone, interest |
| Distributor lead form | Country, company, contact person, WhatsApp, email, monthly volume, interested products | Facebook page, current brands, market notes |
| Shuttle testing form | Organization type, country, organization name, contact person, WhatsApp, email, products interested | Member/business scale, courts/stores, additional details |

The distributor form now has both WhatsApp and email, which is required for serious B2B follow-up.

## 7. INFIV Main-Brand Check

Status: **Pass**

Live site content checked:

- Header: VANTAGE SPORTS only.
- Footer: VANTAGE SPORTS only.
- Page titles: VANTAGE SPORTS only.
- Contact/form CTAs: VANTAGE SPORTS only.
- INFIV appears only in Manufacturing Partner / OEM Partner context.

Known remaining INFIV references:

- `src/content/products.ts`
- `src/content/zh-products.ts`
- `src/content/en.ts`
- `src/content/zh.ts`
- `src/pages/FactoryPartners.tsx`
- `PRODUCT_DATABASE.md`
- `REBRANDING_REPORT_VANTAGE_SPORTS.md`
- `PROJECT_SNAPSHOT_2026_06_BADMINTON_V1.md`
- `MARKETING_COPY_EN.md`

These are acceptable because they either describe INFIV as a Manufacturing Partner / OEM Partner or document a legacy pre-rebrand phase.

## 8. Brand Hierarchy Confirmation

Status: **Confirmed**

Current hierarchy:

- Primary brand: **VANTAGE SPORTS**
- Manufacturing Partner / OEM Partner: **INFIV / 精彩永恒**
- Future partners: shown as onboarding / pipeline manufacturing partners

Policy confirmed:

- Do not use INFIV as site name, hero headline, navigation brand, contact sender, or primary CTA.
- Use INFIV only when explaining manufacturing partner capability, product origin, or OEM partner network.

## 9. Build

Status: **Pass**

Command:

```bash
npm run build
```

Result:

```text
tsc -b && vite build
✓ built successfully
```

## 10. Lint

Status: **Pass**

Command:

```bash
npm run lint
```

Result:

```text
eslint .
no errors
```

## Browser QA

Status: **Pass**

Local preview:

```text
http://127.0.0.1:4173/
```

Browser QA covered:

- Desktop render for all EN/ZH routes.
- SEO title/meta description checks.
- EN/ZH LanguageSwitcher path preservation.
- Mobile 390px header/menu/footer.
- Mobile horizontal overflow.
- Visible legacy brand leakage.

Failures: **0**

## Remaining Pre-Deploy Notes

These are not blockers but should be confirmed before public launch:

- Replace placeholder WhatsApp, email, and Facebook values with production accounts.
- Confirm final Vercel domain and update `site.url` if using a custom domain.
- Replace placeholder media assets once product/factory photos are ready.
- Confirm whether the legacy documentation files should remain in repo or be moved to an archive folder later.

## Final Decision

**VANTAGE SPORTS v0.5.0 passes pre-deploy QA after automatic fixes.**

The site can proceed to deployment review with VANTAGE SPORTS as the primary brand and INFIV limited to Manufacturing Partner / OEM Partner positioning.
