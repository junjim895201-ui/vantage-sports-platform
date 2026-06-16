# Phase 6A Asset Inventory — Home · Products · OEM

**Source pack:** `~/Downloads/vantage_phase6a_assets`  
**Deployed to:** `public/media/phase6a/`  
**Registry:** `src/lib/media.ts`  
**Scope:** Homepage, Products, OEM Manufacturing only  
**Brand rule:** VANTAGE SPORTS = platform brand · INFIV = Manufacturing Partner only

---

## Summary

| Category | Assets in scope | Deployed | Used on target pages |
|----------|-----------------|----------|----------------------|
| Hero | 1 | 1 | Home |
| Products | 10 | 10 | Home, Products, OEM |
| Factory | 4 | 4 | Home, Products, OEM |
| Network | 1 | 1 | Home, OEM |
| Court (Home support) | 1 | 1 | Home audiences |
| **Total in scope** | **17** | **17** | — |

**Excluded from this phase:** `product_tube_G1.webp`, `source-renders/*`, Distributor / Shuttle Testing pages.

---

## 01 — Hero

| File | Size | Dimensions | Deployed path | Page | Section | Alt (EN) |
|------|------|------------|---------------|------|---------|----------|
| `hero_badminton_action_blue.webp` | 76 KB | 1600×1121 | `/media/phase6a/hero/hero_badminton_action_blue.webp` | **Home** | Hero background | Badminton athletes in competitive play |

**Source:** 精彩永恒招商手册, page 4 — action/lifestyle hero.

---

## 02 — Products

| File | Size | Dimensions | Deployed path | Page | Section | Alt (EN) |
|------|------|------------|---------------|------|---------|----------|
| `product_shuttlecock_floating.webp` | 32 KB | 1600×1121 | `/media/phase6a/products/product_shuttlecock_floating.webp` | **Products** | Hero background | Shuttlecock product hero |
| `product_tube_G4.webp` | 40 KB | 1600×1121 | `/media/phase6a/products/product_tube_G4.webp` | **Home**, **Products** | Product strip / G4 card | G4 tournament shuttlecock tube |
| `product_tube_G6.webp` | 56 KB | 1600×1121 | `/media/phase6a/products/product_tube_G6.webp` | **Home**, **Products** | Product strip / G6 card | G6 club training shuttlecock tube |
| `product_tube_G7.webp` | 48 KB | 1600×1121 | `/media/phase6a/products/product_tube_G7.webp` | **Home**, **Products** | Product strip / G7 card | G7 economy training shuttlecock tube |
| `G4_product_poster_top.webp` | 228 KB | 1200×4688 | `/media/phase6a/products/G4_product_poster_top.webp` | **Products** | Poster strip / G4 card | G4 tournament grade product poster |
| `G6_product_poster_top.webp` | 260 KB | 1200×4688 | `/media/phase6a/products/G6_product_poster_top.webp` | **Products** | Poster strip / G6 card | G6 club training product poster |
| `G7_product_poster_top.webp` | 256 KB | 1200×4688 | `/media/phase6a/products/G7_product_poster_top.webp` | **Products** | Poster strip / G7 card | G7 economy training product poster |
| `G4_product_detail_craft.webp` | 256 KB | 1200×5063 | `/media/phase6a/products/G4_product_detail_craft.webp` | **Products** | G4 card craft detail | G4 manufacturing detail |
| `G6_product_detail_craft.webp` | 204 KB | 1200×5063 | `/media/phase6a/products/G6_product_detail_craft.webp` | **Products** | G6 card craft detail | G6 manufacturing detail |
| `G7_product_detail_craft.webp` | 208 KB | 1200×5063 | `/media/phase6a/products/G7_product_detail_craft.webp` | **Products** | G7 card craft detail | G7 manufacturing detail |

**Not deployed:** `product_tube_G1.webp` (39 KB) — outside G4/G6/G7 ladder.

---

## 03 — Factory

| File | Size | Dimensions | Deployed path | Page | Section | Alt (EN) |
|------|------|------------|---------------|------|---------|----------|
| `factory_building_exterior.webp` | 124 KB | 1600×1121 | `/media/phase6a/factory/factory_building_exterior.webp` | **Home**, **OEM** | Visual card / OEM hero | Manufacturing partner factory exterior |
| `factory_masterplan_aerial.webp` | 164 KB | 1600×1121 | `/media/phase6a/factory/factory_masterplan_aerial.webp` | **Home**, **OEM** | Trust block / capacity | Manufacturing partner campus masterplan |
| `development_timeline_factory.webp` | 84 KB | 1600×990 | `/media/phase6a/factory/development_timeline_factory.webp` | **OEM** | OEM services section | Factory development timeline |
| `tech_quality_awards.webp` | 68 KB | 1600×990 | `/media/phase6a/factory/tech_quality_awards.webp` | **Home**, **Products**, **OEM** | Visual card / specs / QC | Manufacturing partner quality and technology credentials |

---

## 04 — Network

| File | Size | Dimensions | Deployed path | Page | Section | Alt (EN) |
|------|------|------------|---------------|------|---------|----------|
| `global_business_map.webp` | 68 KB | 1600×990 | `/media/phase6a/network/global_business_map.webp` | **Home**, **OEM** | Visual card / dealer support | Global supply network map |

---

## 05 — Court (Home support only)

| File | Size | Dimensions | Deployed path | Page | Section | Alt (EN) |
|------|------|------------|---------------|------|---------|----------|
| `lifestyle_group_badminton.webp` | 128 KB | 1600×1121 | `/media/phase6a/court/lifestyle_group_badminton.webp` | **Home** | Audiences section | Badminton club lifestyle scene |

**Note:** `badminton_court_venue_ecosystem.webp` is deployed but reserved for Shuttle Testing (out of scope).

---

## Page placement map

### Homepage (`/`)

| Section | Asset(s) | Loading |
|---------|----------|---------|
| Hero background | `hero_badminton_action_blue` | eager |
| KPI stats | (text only) | — |
| Product preview strip | `product_tube_G4`, `G6`, `G7` | lazy |
| Visual trust cards (×3) | `tech_quality_awards`, `global_business_map`, `factory_building_exterior` | lazy |
| Manufacturing trust | `factory_masterplan_aerial` | lazy |
| Audiences | `lifestyle_group_badminton` | lazy |

### Products (`/products`)

| Section | Asset(s) | Loading |
|---------|----------|---------|
| Hero background | `product_shuttlecock_floating` | eager |
| G4 / G6 / G7 cards | tube + craft + poster per SKU | lazy |
| Export standards | `tech_quality_awards` | lazy |

### OEM Manufacturing (`/oem-manufacturing`)

| Section | Asset(s) | Loading |
|---------|----------|---------|
| Hero background | `factory_building_exterior` | eager |
| Manufacturing capacity | `factory_masterplan_aerial` | lazy |
| Quality control | `tech_quality_awards` | lazy |
| OEM services | `development_timeline_factory` | lazy |
| Private label | `G4_product_poster_top` | lazy |
| Dealer support | `global_business_map` | lazy |

---

## Reference only (not in scope)

| File | Reason |
|------|--------|
| `source-renders/apparel_price_page_01.webp` | Dealer pricing reference — not public-facing |
| `source-renders/racket_price_page_05.webp` | Dealer pricing reference — not public-facing |
| `product_tube_G1.webp` | G1 SKU not in partner product ladder |
| `badminton_court_venue_ecosystem.webp` | Reserved for Shuttle Testing page |

---

## Components

| Component | Path | Used on |
|-----------|------|---------|
| `ResponsiveImage` | `src/components/ui/ResponsiveImage.tsx` | All 3 pages |
| `KpiStatGrid` | `src/components/ui/KpiStatGrid.tsx` | Home |
| `ProductVisualCard` | `src/components/ui/ProductVisualCard.tsx` | Products |
