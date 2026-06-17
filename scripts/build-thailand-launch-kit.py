#!/usr/bin/env python3
"""VANTAGE SPORTS — Thailand Launch Kit (PDF-ready, no outreach)."""

from __future__ import annotations

import base64
import io
import shutil
import subprocess
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "marketing" / "thailand-launch-kit"

SITE_URL = "https://vantagesports.asia/th"
SITE_URL_EN = "https://vantagesports.asia/en"
FACEBOOK_URL = "https://www.facebook.com/vantage.sports.sea"
WHATSAPP_NUMBER = "601137307654"
WHATSAPP_DISPLAY = "+60 11-3730 7654"
WHATSAPP_URL = (
    f"https://wa.me/{WHATSAPP_NUMBER}"
    "?text=" + "สวัสดี%20VANTAGE%20SPORTS%20สนใจร่วมเป็นพันธมิตร"
)
EMAIL = "partners@vantage-sports.com"
PREPARED = date.today().isoformat()
DISCLAIMER = "PREPARATION ONLY — NO OUTREACH"

BASE_CSS = """
@page { size: A4 portrait; margin: 10mm; }
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: "Sarabun", "Noto Sans Thai", "Segoe UI", system-ui, sans-serif;
  color: #0f172a;
  background: #fff;
  font-size: 9.5pt;
  line-height: 1.45;
}
.page {
  width: 190mm;
  min-height: 277mm;
  margin: 0 auto;
  padding: 0;
  page-break-after: always;
}
.brand-bar {
  background: linear-gradient(135deg, #0a1628 0%, #132337 100%);
  color: #fff;
  padding: 14px 18px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.brand-bar h1 {
  font-size: 22pt;
  letter-spacing: 0.06em;
  font-weight: 700;
}
.brand-bar .tagline { font-size: 10pt; opacity: 0.92; margin-top: 4px; }
.brand-bar .meta { font-size: 7.5pt; opacity: 0.7; margin-top: 8px; }
.eyebrow {
  font-size: 8pt;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #b8860b;
  font-weight: 700;
  margin-bottom: 6px;
}
h2 { font-size: 13pt; margin: 10px 0 6px; color: #0a1628; }
h3 { font-size: 10pt; margin: 8px 0 4px; color: #1e3a5f; }
p { margin-bottom: 6px; }
.grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; margin: 10px 0; }
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
.card {
  border: 1px solid #d4dce8;
  border-radius: 6px;
  padding: 10px;
  background: #f8fafc;
}
.card .sku {
  font-size: 16pt;
  font-weight: 800;
  color: #0a1628;
  line-height: 1;
}
.card .grade { font-size: 8.5pt; color: #b8860b; font-weight: 700; margin: 4px 0 6px; }
.card ul { margin-left: 14px; font-size: 8pt; }
.bullets { margin: 6px 0 6px 16px; font-size: 8.5pt; }
.bullets li { margin-bottom: 3px; }
.specs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px 12px;
  font-size: 8pt;
  margin: 8px 0;
  padding: 8px 10px;
  background: #eef2f7;
  border-radius: 4px;
}
.specs div strong { color: #0a1628; }
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 8pt;
  margin: 8px 0;
}
th, td {
  border: 1px solid #cbd5e1;
  padding: 5px 6px;
  text-align: left;
  vertical-align: top;
}
th { background: #0a1628; color: #fff; font-weight: 600; }
tr:nth-child(even) td { background: #f8fafc; }
.footer {
  margin-top: 12px;
  padding-top: 8px;
  border-top: 2px solid #0a1628;
  font-size: 7.5pt;
  color: #475569;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}
.footer strong { color: #0a1628; }
.cta-box {
  background: #0a1628;
  color: #fff;
  padding: 10px 14px;
  border-radius: 6px;
  margin-top: 10px;
  font-size: 8.5pt;
}
.cta-box a { color: #fbbf24; text-decoration: none; }
.disclaimer {
  font-size: 7pt;
  color: #94a3b8;
  text-align: center;
  margin-top: 6px;
}
.qr-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 20px 0;
  text-align: center;
}
.qr-item img { width: 38mm; height: 38mm; }
.qr-item .label { font-size: 11pt; font-weight: 700; margin-top: 8px; color: #0a1628; }
.qr-item .url { font-size: 7pt; color: #64748b; word-break: break-all; margin-top: 4px; }
.bilingual { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.bilingual .col { padding: 8px; border: 1px solid #e2e8f0; border-radius: 4px; }
.bilingual .lang { font-size: 7pt; font-weight: 700; color: #b8860b; text-transform: uppercase; margin-bottom: 4px; }
@media print {
  body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .page { width: auto; min-height: auto; }
}
"""


def ensure_qrcode():
    try:
        import qrcode  # noqa: F401
    except ImportError:
        subprocess.check_call(
            [sys.executable, "-m", "pip", "install", "qrcode[pil]", "-q", "--break-system-packages"]
        )


def qr_data_uri(url: str) -> str:
    ensure_qrcode()
    import qrcode

    img = qrcode.make(url, box_size=8, border=2)
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    return f"data:image/png;base64,{b64}"


def wrap_page(title: str, body: str, lang: str = "th") -> str:
    return f"""<!DOCTYPE html>
<html lang="{lang}">
<head>
  <meta charset="utf-8"/>
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600;700&display=swap" rel="stylesheet"/>
  <style>{BASE_CSS}</style>
</head>
<body>
<div class="page">
{body}
</div>
</body>
</html>"""


def brochure_th() -> str:
    return wrap_page(
        "VANTAGE SPORTS — โบรชัวร์ประเทศไทย",
        f"""
  <div class="brand-bar">
    <h1>VANTAGE SPORTS</h1>
    <div class="tagline">แพลตฟอร์มจัดจำหน่ายกีฬาและ OEM สำหรับเอเชียตะวันออกเฉียงใต้</div>
    <div class="meta">ประเทศไทย · Partner Product Series · ผลิตโดย INFIV (OEM Partner)</div>
  </div>

  <div class="eyebrow">ซัพพลายลูกขนไก่จากโรงงานโดยตรง</div>
  <h2>ลูกขนไก่แบดมินตัน G4 · G6 · G7 สำหรับตัวแทนจำหน่าย สโมสร และร้านกีฬา</h2>
  <p>VANTAGE SPORTS คือแพลตฟอร์ม B2B — ไม่ใช่ร้านค้าปลีก เราช่วยพันธมิตรในประเทศไทยเข้าถึงลูกขนไก่เกรดการแข่งขัน การผลิต Private Label และการพัฒนาตลาด ASEAN ผ่านพันธมิตรผู้ผลิตที่คัดสรรแล้ว</p>

  <div class="grid-3">
    <div class="card">
      <div class="sku">G4</div>
      <div class="grade">เกรดการแข่งขัน</div>
      <ul>
        <li>ขนไก่ Patent-processed ทรงกลม</li>
        <li>วิถีการบินระดับการแข่งขัน</li>
        <li>เหมาะลีก ทัวร์นาเมนต์ สโมสรพรีเมียม</li>
      </ul>
    </div>
    <div class="card">
      <div class="sku">G6</div>
      <div class="grade">ฝึกซ้อมสโมสร</div>
      <ul>
        <li>ขนไก่ด้านหลัง 0.15 มม.</li>
        <li>ทนทานสูง · การบินคงที่</li>
        <li>SKU ปริมาณหลักสำหรับสถาบัน 20+ คน</li>
      </ul>
    </div>
    <div class="card">
      <div class="sku">G7</div>
      <div class="grade">ฝึกซ้อมประหยัด</div>
      <ul>
        <li>ขนเป็ด Golden silk ทรงกลม</li>
        <li>การบินแม่นยำ · คุณค่าสูง</li>
        <li>เหมาะร้านกีฬา โรงเรียน ตลาดเน้นราคา</li>
      </ul>
    </div>
  </div>

  <div class="specs">
    <div><strong>กระบวนการ:</strong> ส่งออกแบบปลอดการฆ่าเชื้อ (Fumigation-free)</div>
    <div><strong>QC:</strong> 49 ขั้นตอน · ค่าเผื่อข้อบกพร่อง 0.1%</div>
    <div><strong>ความเร็วลูก:</strong> 77–79 สำหรับสภาพอากาศ ASEAN</div>
    <div><strong>พันธมิตร:</strong> INFIV (OEM Partner) · จัดจำหน่ายโดย VANTAGE SPORTS</div>
  </div>

  <h3>ลูกค้าเป้าหมาย</h3>
  <div class="grid-2">
    <ul class="bullets">
      <li><strong>ตัวแทนจำหน่าย</strong> — ราคา Tier สนับสนุนเปิดตลาดในพื้นที่</li>
      <li><strong>สโมสรแบดมินตัน</strong> — โครงการทดลองใช้และซัพพลายรายเดือน</li>
    </ul>
    <ul class="bullets">
      <li><strong>ร้านกีฬา</strong> — SKU มาร์จิ้นดี บรรจุภัณฑ์พร้อมวางขาย</li>
      <li><strong>ผู้ซื้อ OEM</strong> — Private Label ผ่านพันธมิตรที่ผ่านการคัดกรอง</li>
    </ul>
  </div>

  <div class="cta-box">
    <strong>เริ่มต้นความร่วมมือ</strong><br/>
    ผลิตภัณฑ์: <a href="{SITE_URL}/products">{SITE_URL}/products</a><br/>
    ตัวแทนจำหน่าย: <a href="{SITE_URL}/distributor-program">{SITE_URL}/distributor-program</a><br/>
    ทดลองใช้ลูกขนไก่ฟรี: <a href="{SITE_URL}/shuttle-testing">{SITE_URL}/shuttle-testing</a>
  </div>

  <div class="footer">
    <div>
      <strong>vantagesports.asia/th</strong><br/>
      {EMAIL} · {DISCLAIMER}
    </div>
    <div style="text-align:right">
      <img src="{qr_data_uri(SITE_URL)}" alt="QR Website" style="width:22mm;height:22mm"/>
      <div style="font-size:7pt;margin-top:2px">สแกนเว็บไซต์</div>
    </div>
  </div>
  <div class="disclaimer">เตรียมเอกสารเท่านั้น · ยังไม่ติดต่อลูกค้า · {PREPARED}</div>
""",
        lang="th",
    )


def brochure_en() -> str:
    return wrap_page(
        "VANTAGE SPORTS — Thailand Brochure (EN)",
        f"""
  <div class="brand-bar">
    <h1>VANTAGE SPORTS</h1>
    <div class="tagline">Southeast Asia Sports Distribution &amp; OEM Platform</div>
    <div class="meta">Thailand · Partner Product Series · Manufactured by INFIV (OEM Partner)</div>
  </div>

  <div class="eyebrow">Factory-Direct Badminton Supply</div>
  <h2>G4 · G6 · G7 Shuttlecocks for Distributors, Clubs &amp; Sports Shops</h2>
  <p>VANTAGE SPORTS is a B2B distribution and OEM platform — not a retail store. We help Thailand partners access tournament-grade shuttlecocks, private-label manufacturing, and ASEAN market development through vetted manufacturing partners.</p>

  <div class="grid-3">
    <div class="card">
      <div class="sku">G4</div>
      <div class="grade">Tournament Grade</div>
      <ul>
        <li>Patent-processed full-round goose feathers</li>
        <li>Tournament-grade flight trajectory</li>
        <li>Leagues, tournaments, premium clubs</li>
      </ul>
    </div>
    <div class="card">
      <div class="sku">G6</div>
      <div class="grade">Club Training</div>
      <ul>
        <li>0.15 mm goose back feathers</li>
        <li>Extreme durability · stable flight</li>
        <li>Primary volume SKU for 20+ member clubs</li>
      </ul>
    </div>
    <div class="card">
      <div class="sku">G7</div>
      <div class="grade">Economy Training</div>
      <ul>
        <li>Golden silk duck full-round feathers</li>
        <li>Precise flight · high value per tube</li>
        <li>Sports shops, schools, price-sensitive markets</li>
      </ul>
    </div>
  </div>

  <div class="specs">
    <div><strong>Process:</strong> Fumigation-free certified export</div>
    <div><strong>QC:</strong> 49-step production · 0.1% defect tolerance</div>
    <div><strong>Speed grades:</strong> 77–79 for ASEAN climates</div>
    <div><strong>Partner:</strong> INFIV (OEM) · Distributed by VANTAGE SPORTS</div>
  </div>

  <h3>Who We Serve</h3>
  <div class="grid-2">
    <ul class="bullets">
      <li><strong>Distributors</strong> — Tiered pricing and territory launch support</li>
      <li><strong>Badminton Clubs</strong> — Sample testing and recurring supply</li>
    </ul>
    <ul class="bullets">
      <li><strong>Sports Shops</strong> — Margin-friendly SKUs and retail packaging</li>
      <li><strong>OEM Buyers</strong> — Private-label via vetted partners</li>
    </ul>
  </div>

  <div class="cta-box">
    <strong>Start a Partnership</strong><br/>
    Products: <a href="{SITE_URL_EN}/products">{SITE_URL_EN}/products</a><br/>
    Distributor Program: <a href="{SITE_URL_EN}/distributor-program">{SITE_URL_EN}/distributor-program</a><br/>
    Free Shuttle Testing: <a href="{SITE_URL_EN}/shuttle-testing">{SITE_URL_EN}/shuttle-testing</a>
  </div>

  <div class="footer">
    <div>
      <strong>vantagesports.asia/th</strong><br/>
      {EMAIL} · {DISCLAIMER}
    </div>
    <div style="text-align:right">
      <img src="{qr_data_uri(SITE_URL)}" alt="QR Website" style="width:22mm;height:22mm"/>
      <div style="font-size:7pt;margin-top:2px">Scan website</div>
    </div>
  </div>
  <div class="disclaimer">Document preparation only · No customer contact · {PREPARED}</div>
""",
        lang="en",
    )


def qr_layout() -> str:
    channels = [
        ("Website", "เว็บไซต์", SITE_URL),
        ("Facebook", "Facebook", FACEBOOK_URL),
        ("WhatsApp", "WhatsApp", WHATSAPP_URL),
    ]
    items = "\n".join(
        f"""    <div class="qr-item">
      <img src="{qr_data_uri(url)}" alt="{label_en}"/>
      <div class="label">{label_en} / {label_th}</div>
      <div class="url">{url}</div>
    </div>"""
        for label_en, label_th, url in channels
    )
    return wrap_page(
        "VANTAGE SPORTS — Thailand QR Layout",
        f"""
  <div class="brand-bar">
    <h1>VANTAGE SPORTS</h1>
    <div class="tagline">Thailand Launch · QR Contact Layout / เลย์เอาต์ QR ประเทศไทย</div>
    <div class="meta">Print at 100% scale · Cut along card borders · {PREPARED}</div>
  </div>

  <p style="text-align:center;margin:12px 0 4px;font-size:10pt">
    <strong>Scan to connect</strong> — สแกนเพื่อเข้าถึงช่องทาง VANTAGE SPORTS
  </p>
  <p style="text-align:center;font-size:8pt;color:#64748b;margin-bottom:16px">
    {DISCLAIMER} · Materials for print/POS only — do not send unsolicited messages
  </p>

  <div class="qr-grid">
{items}
  </div>

  <div class="grid-2" style="margin-top:24px">
    <div class="card">
      <h3>Usage / การใช้งาน</h3>
      <ul class="bullets">
        <li>Brochure back panel / ด้านหลังโบรชัวร์</li>
        <li>Sample shipment insert / ใบแทรกในกล่องตัวอย่าง</li>
        <li>Trade show booth / บูธงานแสดงสินค้า</li>
        <li>Distributor POS counter card / การ์ดเคาน์เตอร์ร้าน</li>
      </ul>
    </div>
    <div class="card">
      <h3>Brand / แบรนด์</h3>
      <p><strong>VANTAGE SPORTS</strong></p>
      <p>OEM Partner: INFIV (精彩永恒)</p>
      <p>Email: {EMAIL}</p>
      <p>Thailand site: {SITE_URL}</p>
      <p>Products: G4 · G6 · G7</p>
    </div>
  </div>

  <div class="footer">
    <div><strong>vantagesports.asia/th</strong></div>
    <div style="text-align:right;font-size:7pt">{DISCLAIMER}</div>
  </div>
""",
        lang="th",
    )


def product_comparison() -> str:
    rows = [
        ("Grade / เกรด", "Tournament Grade / เกรดการแข่งขัน", "Club Training / ฝึกซ้อมสโมสร", "Economy Training / ฝึกซ้อมประหยัด"),
        ("Feather / ขน", "Patent goose · full-round / ขนไก่ Patent ทรงกลม", "Goose back · 0.15 mm / ขนไก่ด้านหลัง 0.15 มม.", "Golden duck · full-round / ขนเป็ด Golden ทรงกลม"),
        ("Best For / เหมาะสำหรับ", "Tournaments · premium shops / ลีก ทัวร์นาเมนต์", "Clubs · academies · 20+ members / สถาบัน 20+ คน", "Shops · schools · new territories / ร้าน โรงเรียน"),
        ("Durability / ความทนทาน", "Competition flight priority / เน้นการบินแข่งขัน", "Extreme session durability / ทนทานสูงสุด", "High value per tube / คุณค่าสูงต่อหลอด"),
        ("MOQ Profile", "Mid-high tier orders", "High-volume club supply", "Entry-friendly starter MOQ"),
        ("ASEAN Fit", "Humid markets · speed 77–79", "Daily academy training", "Price-sensitive growth markets"),
        ("Series", "Partner Product Series · Goose", "Partner Product Series · Goose", "Partner Product Series · Duck"),
        ("OEM Partner", "INFIV", "INFIV", "INFIV"),
    ]
    table_rows = "\n".join(
        f"<tr><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>"
        for r in rows
    )
    return wrap_page(
        "VANTAGE SPORTS — G4 G6 G7 Product Comparison",
        f"""
  <div class="brand-bar">
    <h1>VANTAGE SPORTS</h1>
    <div class="tagline">Product Comparison Sheet / ตารางเปรียบเทียบผลิตภัณฑ์</div>
    <div class="meta">G4 · G6 · G7 · Thailand Market · {PREPARED}</div>
  </div>

  <p>Side-by-side G-series shuttlecock comparison for distributor sell-in and club procurement. ใช้จัดวาง SKU ตามช่องทางขายในประเทศไทย</p>

  <table>
    <thead>
      <tr>
        <th style="width:18%">Attribute</th>
        <th style="width:27%">G4 — Tournament</th>
        <th style="width:27%">G6 — Club Training</th>
        <th style="width:28%">G7 — Economy</th>
      </tr>
    </thead>
    <tbody>
{table_rows}
    </tbody>
  </table>

  <div class="specs">
    <div><strong>Export QC:</strong> Fumigation-free · 49-step control · AI + microscope inspection</div>
    <div><strong>Speed grades:</strong> 77 / 78 / 79 — request by venue humidity &amp; altitude</div>
    <div><strong>Distribution:</strong> VANTAGE SPORTS — factory-direct ASEAN export packaging</div>
    <div><strong>Sample program:</strong> Free club testing via vantagesports.asia/th/shuttle-testing</div>
  </div>

  <h3>Channel Positioning / การวางตำแหน่งช่องทาง</h3>
  <div class="grid-3">
    <div class="card"><div class="sku">G4</div><p style="font-size:8pt">Premium sell-in · tournament supply · elite academy upgrade path</p></div>
    <div class="card"><div class="sku">G6</div><p style="font-size:8pt">Club volume driver · academy repeat orders · Bangkok + provincial belts</p></div>
    <div class="card"><div class="sku">G7</div><p style="font-size:8pt">Shop entry SKU · school programs · margin-friendly starter orders</p></div>
  </div>

  <div class="cta-box">
    Compare online: <a href="{SITE_URL}/product-comparison">{SITE_URL}/product-comparison</a> ·
    Request samples: <a href="{SITE_URL}/shuttle-testing">{SITE_URL}/shuttle-testing</a>
  </div>

  <div class="footer">
    <div><strong>vantagesports.asia/th</strong> · {EMAIL}</div>
    <div style="text-align:right;font-size:7pt">{DISCLAIMER}</div>
  </div>
""",
        lang="en",
    )


def sample_handout() -> str:
    return wrap_page(
        "VANTAGE SPORTS — Thailand Sample Program Handout",
        f"""
  <div class="brand-bar">
    <h1>VANTAGE SPORTS</h1>
    <div class="tagline">Thailand Shuttle Testing Program / โครงการทดลองใช้ลูกขนไก่ ประเทศไทย</div>
    <div class="meta">Partner Product Series · G4 · G6 · G7 · INFIV (OEM Partner) · Campaign TH-SAMPLE-2026-Q2</div>
  </div>

  <div class="bilingual">
    <div class="col">
      <div class="lang">English</div>
      <p>VANTAGE SPORTS invites qualified <strong>badminton clubs, academies, and distributors</strong> in Thailand to test G4, G6, and G7 shuttlecocks before bulk orders.</p>
      <p>Samples validate <strong>flight, durability, and speed-grade fit</strong> for your humidity, altitude, and player level. B2B partnership program — not a consumer retail offer.</p>
    </div>
    <div class="col">
      <div class="lang">ไทย</div>
      <p>VANTAGE SPORTS เชิญ <strong>สโมสร สถาบัน และตัวแทนจำหน่าย</strong> ที่ผ่านเกณฑ์ในประเทศไทย ทดสอบลูกขนไก่ G4, G6 และ G7 ก่อนสั่งซื้อจำนวนมาก</p>
      <p>ตัวอย่างใช้ validate <strong>การบิน ความทนทาน และความเหมาะสมของความเร็วลูก</strong> โครงการ B2B — ไม่ใช่ข้อเสนอค้าปลีก</p>
    </div>
  </div>

  <table>
    <thead>
      <tr><th>SKU</th><th>EN Grade</th><th>TH Grade</th><th>Best For</th></tr>
    </thead>
    <tbody>
      <tr><td><strong>G4</strong></td><td>Tournament Grade</td><td>เกรดการแข่งขัน</td><td>Leagues · tournaments · premium clubs</td></tr>
      <tr><td><strong>G6</strong></td><td>Club Training</td><td>ฝึกซ้อมสโมสร</td><td>Daily academy · 20+ members</td></tr>
      <tr><td><strong>G7</strong></td><td>Economy Training</td><td>ฝึกซ้อมประหยัด</td><td>Shops · schools · price-sensitive programs</td></tr>
    </tbody>
  </table>

  <div class="bilingual">
    <div class="col">
      <div class="lang">What You Receive</div>
      <ul class="bullets">
        <li>2–4 sample tubes (G4 / G6 / G7 mix)</li>
        <li>Flight &amp; durability evaluation checklist</li>
        <li>Export pricing preview for Thailand</li>
        <li>Follow-up from VANTAGE SPORTS product team</li>
      </ul>
    </div>
    <div class="col">
      <div class="lang">สิ่งที่ได้รับ</div>
      <ul class="bullets">
        <li>หลอดตัวอย่าง 2–4 หลอด (G4 / G6 / G7)</li>
        <li>Checklist ประเมินการบินและความทนทาน</li>
        <li>ตัวอย่างราคาส่งออกสำหรับตลาดไทย</li>
        <li>ติดตามผลจากทีมผลิตภัณฑ์ VANTAGE SPORTS</li>
      </ul>
    </div>
  </div>

  <h3>Testing Protocol / ขั้นตอนการทดสอบ</h3>
  <table>
    <thead><tr><th>#</th><th>EN</th><th>TH</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>Store dry; acclimate 24h before opening</td><td>เก็บแห้ง ปล่อยอุณหภูมิห้อง 24 ชม.</td></tr>
      <tr><td>2</td><td>Test min. 3 sessions · different player levels</td><td>ทดสอบอย่างน้อย 3 เซสชัน ระดับฝีมือต่างกัน</td></tr>
      <tr><td>3</td><td>Record speed, drift, feather integrity, tube life</td><td>บันทึกความเร็ว การเคลื่อนที่ สภาพขน อายุหลอด</td></tr>
      <tr><td>4</td><td>Submit feedback within 14 days of receipt</td><td>ส่ง feedback ภายใน 14 วันหลังรับตัวอย่าง</td></tr>
    </tbody>
  </table>

  <div class="grid-2">
    <div class="card">
      <h3>Eligibility / ผู้มีสิทธิ</h3>
      <p style="font-size:8pt">Club 20+ members OR active distributor · Reviewed within 3 business days · Limited monthly quota per country</p>
    </div>
    <div class="cta-box" style="margin-top:0">
      <strong>Apply / สมัคร</strong><br/>
      <a href="{SITE_URL}/shuttle-testing">{SITE_URL}/shuttle-testing</a><br/>
      <a href="{SITE_URL}/distributor-program">{SITE_URL}/distributor-program</a>
    </div>
  </div>

  <div class="footer">
    <div><strong>vantagesports.asia/th</strong> · {EMAIL}</div>
    <div style="text-align:right;font-size:7pt">{DISCLAIMER} · {PREPARED}</div>
  </div>
""",
        lang="th",
    )


def write_report(files: list[tuple[str, str]]) -> None:
    lines = [
        "# VANTAGE SPORTS — Thailand Launch Kit",
        "",
        f"**Prepared:** {PREPARED}  ",
        f"**{DISCLAIMER}**",
        "",
        "## Contents",
        "",
        "| # | Document | Format |",
        "|---|----------|--------|",
    ]
    for i, (name, _) in enumerate(files, 1):
        html = OUT / "html" / f"{name}.html"
        pdf = OUT / "pdf" / f"{name}.pdf"
        fmt = "HTML"
        if pdf.exists():
            fmt = "HTML + PDF"
        lines.append(f"| {i} | {name.replace('_', ' ')} | {fmt} |")
    lines += [
        "",
        "## Source",
        "",
        f"- Website: [{SITE_URL}]({SITE_URL})",
        f"- Products: G4, G6, G7 (INFIV OEM Partner)",
        f"- Facebook: {FACEBOOK_URL}",
        f"- WhatsApp: {WHATSAPP_DISPLAY} · wa.me/{WHATSAPP_NUMBER}",
        "",
        "## Export to PDF",
        "",
        "1. Open any `.html` file in Chrome or Edge",
        "2. Print → Save as PDF → Paper A4 → Margins Default → Background graphics ON",
        "3. Or run: `python3 scripts/build-thailand-launch-kit.py --pdf` (requires Chrome)",
        "",
        "## Notes",
        "",
        "- No outreach, no messaging, no CRM or database changes",
        "- QR codes encode live site/social URLs for print materials only",
        "- WhatsApp number matches site config (`en.ts`) — update before production use",
    ]
    (OUT / "THAILAND_LAUNCH_KIT_REPORT.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def html_to_pdf(html_path: Path, pdf_path: Path) -> bool:
    chrome_paths = [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
        shutil.which("google-chrome") or "",
        shutil.which("chromium") or "",
    ]
    chrome = next((p for p in chrome_paths if p and Path(p).exists()), None)
    if not chrome:
        return False
    pdf_path.parent.mkdir(parents=True, exist_ok=True)
    cmd = [
        chrome,
        "--headless=new",
        "--disable-gpu",
        f"--print-to-pdf={pdf_path}",
        "--no-pdf-header-footer",
        f"file://{html_path.resolve()}",
    ]
    try:
        subprocess.run(cmd, check=True, capture_output=True, timeout=30)
        return pdf_path.exists() and pdf_path.stat().st_size > 0
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
        return False


def main() -> None:
    generate_pdf = "--pdf" in sys.argv

    files = [
        ("Thailand_Brochure_TH", brochure_th()),
        ("Thailand_Brochure_EN", brochure_en()),
        ("Thailand_QR_Layout", qr_layout()),
        ("Thailand_Product_Comparison", product_comparison()),
        ("Thailand_Sample_Program_Handout", sample_handout()),
    ]

    html_dir = OUT / "html"
    pdf_dir = OUT / "pdf"
    html_dir.mkdir(parents=True, exist_ok=True)

    for name, content in files:
        html_path = html_dir / f"{name}.html"
        html_path.write_text(content, encoding="utf-8")
        if generate_pdf:
            pdf_path = pdf_dir / f"{name}.pdf"
            ok = html_to_pdf(html_path, pdf_path)
            status = "PDF" if ok else "HTML only (Chrome not found)"
            print(f"  {name}: {status}")
        else:
            print(f"  {name}.html")

    write_report(files)

    print(f"\nThailand Launch Kit → {OUT}")
    print(f"  html/  — 5 PDF-ready HTML files")
    if generate_pdf:
        print(f"  pdf/   — PDF exports (where Chrome available)")
    print(f"  THAILAND_LAUNCH_KIT_REPORT.md")
    if not generate_pdf:
        print("\nTip: run with --pdf to auto-export PDFs via headless Chrome")


if __name__ == "__main__":
    main()
