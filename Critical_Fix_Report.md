# VANTAGE SPORTS — Critical Fix Implementation Plan

**Date:** 2026-06-17  
**Scope:** Critical + High issues from `Final_Audit_Report.md`  
**Mode:** Implementation plan only — no redesign, no code changes in this document

---

## Summary

| # | Issue | Severity | Effort | Files touched |
|---|-------|----------|--------|---------------|
| 1 | Placeholder WhatsApp | Critical | Small | 3–4 |
| 2 | Misleading form success copy | Critical | Small | 3 locale files |
| 3 | Temporary lead collection | Critical | Medium | 5–7 |
| 4 | Company information block | High | Small | 4–5 |
| 5 | Thai English blocks | High | Large | 1 main + optional splits |
| 6 | Email consistency | High | Small | 3 locale files + DNS |

**Recommended lead backend:** **Option A — Formspree** (keeps on-site forms, no redirect, minimal UI change).

**Estimated implementation:** 1 focused session (Critical + company + copy) + 1–2 sessions (Thai Phase 2 content).

---

## CRITICAL 1 — Replace Placeholder WhatsApp

### Current state

```12:14:src/content/en.ts
  whatsapp: "601137307654",
  whatsappDisplay: "+60 11-3730 7654",
```

Used by:

- `src/components/ui/ContactChannels.tsx` — header/footer/contact buttons
- `src/components/ui/ContactChannels.tsx` — `WhatsAppFab` (fixed FAB on every page)
- `src/pages/Contact.tsx` — displays `site.whatsappDisplay`

Comment in source: *"DEPLOYMENT DEMO: WhatsApp number must be replaced before real outreach."*

### Target behavior

- Production number supplied via **environment config**, not hardcoded in content files
- Same number used across EN / ZH / TH
- Display format human-readable; `wa.me` link uses digits-only E.164 (no `+`, spaces, or dashes)

### Implementation plan

**Step 1 — Add site config module**

Create `src/config/siteContact.ts`:

```ts
// Reads Vite env at build time; falls back to empty (hides WA buttons if unset)
export const WHATSAPP_E164 = import.meta.env.VITE_WHATSAPP_E164 ?? "";
export const WHATSAPP_DISPLAY = import.meta.env.VITE_WHATSAPP_DISPLAY ?? "";
```

**Step 2 — Wire into content**

In `src/content/en.ts`, `zh.ts`, `th.ts` — replace hardcoded `whatsapp` / `whatsappDisplay`:

```ts
import { WHATSAPP_E164, WHATSAPP_DISPLAY } from "../config/siteContact";

export const site = {
  ...
  whatsapp: WHATSAPP_E164,
  whatsappDisplay: WHATSAPP_DISPLAY,
};
```

**Step 3 — Guard UI when unset**

In `ContactChannels.tsx` and `WhatsAppFab`:

- If `!site.whatsapp`, do not render WhatsApp button/FAB (prevents accidental demo link in production)

**Step 4 — Environment files**

| File | Purpose |
|------|---------|
| `.env.example` | Document required vars (committed) |
| `.env.production.local` | Real number (not committed) |
| Vercel → Environment Variables | `VITE_WHATSAPP_E164`, `VITE_WHATSAPP_DISPLAY` |

**Example (replace with verified production number):**

```env
VITE_WHATSAPP_E164=66XXXXXXXXX
VITE_WHATSAPP_DISPLAY=+66 XX-XXX-XXXX
```

**Step 5 — Deploy checklist**

- [ ] Confirm number is active on WhatsApp Business (or personal WA for interim)
- [ ] Test `wa.me` link from mobile (FAB + contact page)
- [ ] Update Thailand launch kit QR layout (`scripts/build-thailand-launch-kit.py`) to read same env or shared config
- [ ] Remove "DEPLOYMENT DEMO" comment after verification

**No redesign:** button classes and FAB position unchanged.

---

## CRITICAL 2 — Replace Misleading Success Messages

### Current state (EN)

All three forms promise tracked leads and fixed response SLAs:

| Key | Current copy (abridged) |
|-----|-------------------------|
| `formSuccessContact` | "recorded and tracked in the VANTAGE lead system… follow up within **2 business days**" |
| `formSuccessDistributor` | "recorded and tracked… respond within **2 business days**" |
| `formSuccessTesting` | "recorded and tracked… review within **3 business days**" |

Thai/ZH variants repeat the same promises (lead system + 2–3 day SLA + WhatsApp urgency).

**Related misleading copy (update in same pass):**

| Location | Key | Issue |
|----------|-----|-------|
| Distributor page | `leadFormNote` | "บันทึกในระบบ lead ของ VANTAGE" |
| Shuttle testing | `applicationNote` | Same |
| Contact page | `formNote` | Same + 2-day SLA |
| Home CTA | `ctaDesc` | "เราตอบกลับภายใน 2 วันทำการ" |
| Distributor | `leadFormSubtitle` | 2-day SLA |

### New canonical message (EN)

Use **one message for all three forms** (per user spec):

```
Thank you. Your submission has been recorded.
We will review your information and contact you if appropriate.
```

### Proposed locale variants

**Thai (`th.ts`):**

```
ขอบคุณ ระบบได้บันทึกข้อมูลของคุณแล้ว
เราจะตรวจสอบข้อมูลและติดต่อกลับหากเหมาะสม
```

**Chinese (`zh.ts`):**

```
谢谢。您的提交已记录。
我们将审核您的信息，并在合适时与您联系。
```

### Implementation plan

**Step 1 — Unify success keys**

Option A (minimal): set all three keys to the same string:

```ts
formSuccessContact: "<new message>",
formSuccessDistributor: "<new message>",
formSuccessTesting: "<new message>",
```

Option B (cleaner): single `formSuccessMessage` in `common`; forms reference one key.

**Step 2 — Soften form notes (not success, but same trust issue)**

Replace "VANTAGE lead system" language:

| Key | EN replacement (draft) |
|-----|------------------------|
| `contact.formNote` | "Submissions are sent securely for review. We respond when your inquiry matches our partnership criteria." |
| `distributor.leadFormNote` | Same pattern |
| `testing.applicationNote` | Same pattern; keep eligibility note (20+ members) without SLA |

**Step 3 — CTA subtitle**

Change `home.ctaDesc` / `distributor.leadFormSubtitle` to remove guaranteed 2-day response unless operations can honor it.

**Files:** `src/content/en.ts`, `zh.ts`, `th.ts` only.

**No redesign:** existing green success card component unchanged.

---

## CRITICAL 3 — Temporary Lead Collection (Formspree vs Google Form)

### Requirement

- No CRM backend
- Capture Contact, Distributor, and Club Testing submissions
- Operators receive email notification

### Recommendation: **Option A — Formspree**

| Criterion | Formspree | Google Form |
|-----------|-----------|-------------|
| User stays on site | Yes | No (redirect or iframe) |
| Matches current React forms | Yes (fetch POST) | Requires rebuild or embed |
| Per-form routing | 3 endpoints or 1 + hidden `type` | 3 linked forms or 1 long form |
| Spam filtering | Built-in | Limited |
| Cost | Free tier (~50/mo) | Free |
| Code change | Small | Medium–large |

**Use Google Form only if** Formspree is unavailable in target market or email deliverability fails.

### Formspree setup (operator tasks — before coding)

1. Create account at [formspree.io](https://formspree.io)
2. Create **three forms** (clearer routing) or **one form** with hidden `lead_type`:

| Form | Suggested name | Notification email |
|------|----------------|-------------------|
| Contact | `vantage-contact` | ops inbox |
| Distributor | `vantage-distributor` | ops inbox |
| Club Testing | `vantage-testing` | ops inbox |

3. Copy form IDs → `https://formspree.io/f/{FORM_ID}`

### Implementation plan (code)

**Step 1 — Env vars**

```env
VITE_FORMSPREE_CONTACT=https://formspree.io/f/xxxx
VITE_FORMSPREE_DISTRIBUTOR=https://formspree.io/f/yyyy
VITE_FORMSPREE_TESTING=https://formspree.io/f/zzzz
```

**Step 2 — Extend `useLeadSubmit.ts`**

```
onSubmit:
  1. preventDefault
  2. captureFormData(form)
  3. append metadata: lead_type, locale, source_path, submitted_at
  4. POST to Formspree endpoint (fetch, Accept: application/json)
  5. on success → setSubmitted(true)
  6. on failure → show error state (new copy: "Submission failed. Please email …")
  7. optional: keep saveLead() to localStorage as dev backup (remove for production)
```

**Step 3 — Form components**

- `ContactForm.tsx`, `DistributorLeadForm.tsx`, `ShuttleTestingApplicationForm.tsx`
- Add `submitting` state + disable button during POST
- Add error banner (existing card styles — no redesign)

**Step 4 — Hidden fields in each form**

```html
<input type="hidden" name="lead_type" value="distributor" />
<input type="hidden" name="locale" value={locale} />
<input type="hidden" name="source_path" value={pathname} />
```

**Step 5 — Vercel**

- Add env vars to Production
- Redeploy

**Step 6 — Verification**

- [ ] Submit test from `/contact`, `/distributor-program#apply`, `/shuttle-testing#apply`
- [ ] Confirm email received with all fields
- [ ] Confirm success message matches Critical 2 copy
- [ ] Confirm no data loss on mobile Safari

### Option B — Google Form (fallback plan)

If Formspree rejected:

1. Create 3 Google Forms mirroring current field names
2. Replace React `onSubmit` with `window.location.href = GOOGLE_FORM_URL + prefill params` **or** embed via `<iframe>` on apply sections only
3. **Downside:** worse UX, harder bilingual support, loses styled success card

**Not recommended** unless Formspree blocked.

### Internal CRM pages (`/distributor-crm`, `/club-testing-database`)

**Out of scope for this fix** but note: after Formspree goes live, add `robots.txt` `Disallow` for these routes (High from audit, 5-minute change).

---

## HIGH 4 — Company Information Block

### Requirement

Display:

```
TAI FAITH NEW MATERIALS CO., LTD.
Thailand
```

### Placement (no redesign — text block only)

| Location | Priority |
|----------|----------|
| **Footer** | Required — below tagline, above contact channels |
| **Contact page** | Required — below hero or above quick contact |
| **Form success area** | Optional — one line under success message |

### Implementation plan

**Step 1 — Add to site config** (`en.ts` base, inherited by zh/th):

```ts
legalEntity: {
  name: "TAI FAITH NEW MATERIALS CO., LTD.",
  country: "Thailand",
},
```

**Step 2 — Footer.tsx**

Insert after `site.tagline`:

```tsx
<p className="mt-2 text-xs text-slate-500">
  {site.legalEntity.name}<br />
  {site.legalEntity.country}
</p>
```

Use existing `text-xs text-slate-500` — no new components.

**Step 3 — Contact.tsx**

Add same block under `PageHero` subtitle or in quick-contact section.

**Step 4 — Thai labels (optional)**

Legal name stays English (registered entity). Country label in Thai footer: `ประเทศไทย` via `th.ts` override if desired.

**Not in scope:** registered address, tax ID, phone — add when verified and publishable.

---

## HIGH 5 — Thai Pages: English Blocks + Fallback Text

### Strategy

**Phase 2A (quick — same PR as Critical):** Fix nav, footer, home mixed blocks, form notes, success copy.  
**Phase 2B (follow-up PR):** Replace `export const x = en.x` re-exports with Thai content objects (mirror `zh.ts` pattern).

Do **not** `noindex` Thai routes — user wants fallback text instead.

---

### 5A — Quick wins (inline in `th.ts`)

| Block | Current (EN) | Proposed Thai fallback |
|-------|--------------|------------------------|
| `nav[2].label` | Compare | เปรียบเทียบ |
| `nav[4].label` | Partners | พันธมิตรโรงงาน |
| `nav[5].label` | Downloads | ดาวน์โหลด |
| `footerNav[1].label` | OEM Manufacturing | บริการ OEM |
| `footerNav[2].label` | Download Center | ศูนย์ดาวน์โหลด |
| `footerNav[3].label` | Resource Center | ศูนย์ทรัพยากร |
| `home.productPreviewTitle` | Partner Product Series | ซีรีส์ผลิตภัณฑ์พันธมิตร |
| `home.kpiStats[1].label` | Smart Factory Phase I | โรงงานอัจฉริยะ เฟส I |
| `home.kpiStats[2].value` | Global | ทั่วโลก |
| `home.visualCards[0].title` | OEM Ready | พร้อม OEM |
| `home.visualCards[1].title` | Southeast Asia Distribution | จัดจำหน่ายเอเชียตะวันออกเฉียงใต้ |
| `home.visualCards[2].title` | Factory Direct Supply | ซัพพลายจากโรงงานโดยตรง |
| `products.visualTaglines.G4` | ลูกขนไก่ขนไก่… | ลูกขนไก่เกรดการแข่งขัน |
| `products.visualTaglines.G6` | ลูกขนไก่ขนไก่… | ลูกขนไก่ทนทานสูง |
| `testing.organizationTypes[1]` | Academy | สถาบัน |

**Files:** `src/content/th.ts` only.

---

### 5B — Full page re-exports (replace `en.*` imports)

These lines currently force **100% English page bodies** on `/th/*`:

```382:393:src/content/th.ts
export const oem = en.oem;
export const marketCoverage = en.marketCoverage;
export const factoryPartners = en.factoryPartners;
export const mediaLibrary = en.mediaLibrary;
export const distributorResources = en.distributorResources;
export const marketsSection = en.marketsSection;
export const aboutFactory = en.aboutFactory;
export const productComparison = en.productComparison;
export const downloadCenter = en.downloadCenter;
```

| Module | Route | Priority | Approach |
|--------|-------|----------|----------|
| `marketsSection` | Home (embedded) | **P0** | Thai object — powers market cards on `/th` home |
| `productComparison` | `/th/product-comparison` | **P0** | Thai table headers + rows (mirror `zh.ts`) |
| `downloadCenter` | `/th/download-center` | **P1** | Thai titles + nav already partially EN on home |
| `factoryPartners` | `/th/factory-partners` | **P1** | Thai SEO + hero + gallery captions |
| `oem` | `/th/oem-manufacturing` | **P1** | Thai SEO + process steps |
| `marketCoverage` | `/th/market-coverage` | **P2** | Thai region cards |
| `distributorResources` | `/th/distributor-resources` | **P2** | Thai resource list |
| `mediaLibrary` | `/th/media-library` | **P3** | Thai labels |
| `aboutFactory` | `/th/about-factory` | **P3** | Orphan page — lower traffic |

**Do not translate in this pass:** `distributorCrm`, `clubTestingDatabase` (internal English tools).

### `marketsSection` — draft Thai fallback (P0)

```ts
export const marketsSection = {
  title: "การพัฒนาตลาดเอเชียตะวันออกเฉียงใต้",
  subtitle: "VANTAGE SPORTS สร้างช่องทางจัดจำหน่ายในไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
  regions: [
    {
      country: "ประเทศไทย",
      code: "TH",
      highlight: "วัฒนธรรมสโมสรแข็งแกร่ง ฮับค้าส่งกรุงเทพฯ สถาบันในต่างจังหวัดเติบโต",
      channels: ["ค้าส่ง", "ร้านโปรช็อป", "เครือสโมสร", "อุปกรณ์ทัวร์นาเมนต์"],
    },
    // MY, PH, VN — translate from en.marketCoverage.regions
  ],
};
```

### `productComparison` — draft Thai fallback (P0)

Minimum viable: translate `title`, `subtitle`, `intro`, `tableHeaders`, each `rows[].label`, and `ctaTitle`/`ctaDesc`. Keep SKU names G4/G6/G7 in English.

### SEO blocks

Each replaced module needs `seo.title` + `seo.description` in Thai (pattern from existing `th.ts` products/distributor blocks).

### Effort estimate

| Phase | Items | Time |
|-------|-------|------|
| 5A quick wins | ~20 strings | 30 min |
| 5B P0 (markets + comparison) | 2 modules | 2–3 hrs |
| 5B P1–P3 | 6 modules | 4–6 hrs |

**Reference:** Copy `zh.ts` structure — Chinese Phase already fully translated same modules.

---

## HIGH 6 — Email Consistency

### Current state

| Item | Value |
|------|-------|
| Website domain | `vantagesports.asia` |
| `site.url` | `https://vantagesports.asia` |
| `site.email` | `partners@vantage-sports.com` (hyphenated domain) |
| Mailto subject | Localized via `common.emailSubject` |

**Mismatch:** email domain `vantage-sports.com` ≠ website `vantagesports.asia`

### Options analysis

| Option | Address | Pros | Cons |
|--------|---------|------|------|
| **A (recommended)** | `partners@vantagesports.asia` | Matches live brand URL; best trust for TH launch | Requires MX on `vantagesports.asia` |
| B | `hello@vantagesports.asia` | Common pattern | Less B2B-specific |
| C | Keep `partners@vantage-sports.com` | No DNS change | Confusing; looks like different company |
| D | `partners@tai-faith.com` | Ties to legal entity | Weak VANTAGE SPORTS brand link |

### Recommendation

**Production email: `partners@vantagesports.asia`**

Supporting addresses (optional later):

- `testing@vantagesports.asia` — club sample inquiries
- `distributors@vantagesports.asia` — wholesale applications

### Implementation plan

**Step 1 — DNS (operator)**

- Add MX records for `vantagesports.asia` (Google Workspace, Zoho, or domain registrar email)
- Add SPF, DKIM, DMARC for deliverability
- Create mailbox `partners@vantagesports.asia`
- Forward to operations inbox if needed

**Step 2 — Code**

Update `site.email` in `en.ts` (zh/th inherit via spread):

```ts
email: "partners@vantagesports.asia",
```

**Step 3 — Formspree**

Set notification destination to `partners@vantagesports.asia`

**Step 4 — Marketing collateral**

Update Thailand launch kit, brochures, audit screenshots references

**Step 5 — Redirect (optional)**

If `vantage-sports.com` is owned: forward `partners@vantage-sports.com` → `partners@vantagesports.asia` during transition

**Step 6 — Verification**

- [ ] Send/receive test from Contact form mailto link
- [ ] Confirm Formspree notifications arrive
- [ ] Check footer/contact page display

---

## Suggested PR Sequence

### PR 1 — Critical path (deploy first)

1. Env-based WhatsApp + hide if unset  
2. Formspree integration + submit/error states  
3. Unified success messages (EN/ZH/TH)  
4. Soften `formNote` / `leadFormNote` / `applicationNote`  
5. Company block in footer + contact  
6. Email → `partners@vantagesports.asia` (after DNS live)  
7. `.env.example` documentation  

**Files (~10):**

- `src/config/siteContact.ts` (new)
- `src/hooks/useLeadSubmit.ts`
- `src/components/ui/ContactChannels.tsx`
- `src/components/ui/ContactForm.tsx`
- `src/components/ui/DistributorLeadForm.tsx`
- `src/components/ui/ShuttleTestingApplicationForm.tsx`
- `src/components/layout/Footer.tsx`
- `src/pages/Contact.tsx`
- `src/content/en.ts`, `zh.ts`, `th.ts`
- `.env.example` (new)

### PR 2 — Thai Phase 2A (quick strings)

- Nav, footer, home mixed blocks, grammar fixes (`visualTaglines`)

### PR 3 — Thai Phase 2B (P0 pages)

- `marketsSection`, `productComparison` full Thai objects + SEO

### PR 4 — Thai Phase 2B (P1–P3)

- Remaining re-exported modules

---

## Pre-Launch Checklist (operator)

- [ ] Production WhatsApp number confirmed and entered in Vercel env
- [ ] `partners@vantagesports.asia` mailbox live
- [ ] Formspree forms created and env IDs set
- [ ] Test submissions on mobile + desktop
- [ ] Success copy reviewed in EN / ZH / TH
- [ ] Footer shows TAI FAITH NEW MATERIALS CO., LTD. · Thailand
- [ ] `/th` home market section displays Thai text
- [ ] `/th/product-comparison` displays Thai headers (after PR 3)

---

## Explicitly Out of Scope (per instructions)

- UI redesign
- New features (SSR, og:image, LINE integration, CRM backend)
- Database / CRM build-out
- Outreach or content marketing execution

---

## Dependencies & Blockers

| Blocker | Owner | Needed for |
|---------|-------|------------|
| Real WhatsApp number | Operations | Critical 1 |
| Formspree account + form IDs | Operations | Critical 3 |
| MX for vantagesports.asia | Operations | High 6 |
| Thai copy review (native speaker) | Marketing | High 5B |

---

*Plan derived from `Final_Audit_Report.md` and codebase review. Ready for implementation on approval.*
