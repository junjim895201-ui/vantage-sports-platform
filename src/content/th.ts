/**
 * Thai (Phase 1) — localized: Home, Products, Distributor Program, Shuttle Testing, Contact.
 * All other sections fall back to English via re-export from en.ts.
 */
import * as en from "./en";

export const site = {
  ...en.site,
  whatsapp: "601137307654",
  whatsappDisplay: "+60 11-3730 7654",
  tagline: "แพลตฟอร์มจัดจำหน่ายกีฬาและ OEM สำหรับเอเชียตะวันออกเฉียงใต้",
  description:
    "VANTAGE SPORTS ช่วยตัวแทนจำหน่าย สโมสรแบดมินตัน ร้านกีฬา และผู้ซื้อ OEM เข้าถึงลูกขนไก่จากโรงงานโดยตรงและอุปกรณ์ Private Label ในประเทศไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
  markets: ["ประเทศไทย", "มาเลเซีย", "ฟิลิปปินส์", "เวียดนาม"],
  audiences: ["ตัวแทนจำหน่าย", "สโมสรแบดมินตัน", "ร้านกีฬา", "ผู้ซื้อ OEM"],
  coreBusiness: [
    "จัดจำหน่ายลูกขนไก่แบดมินตัน",
    "บริการ OEM / Private Label",
    "รับสมัครตัวแทนจำหน่าย",
    "โครงการทดลองใช้ลูกขนไก่สำหรับสโมสร",
    "พัฒนาตลาดเอเชียตะวันออกเฉียงใต้",
  ],
};

export const nav = [
  { label: "หน้าแรก", path: "/" },
  { label: "ผลิตภัณฑ์", path: "/products" },
  { label: "Compare", path: "/product-comparison" },
  { label: "ตัวแทนจำหน่าย", path: "/distributor-program" },
  { label: "Partners", path: "/factory-partners" },
  { label: "Downloads", path: "/download-center" },
];

export const footerNav = [
  { label: "ทดลองใช้ลูกขนไก่", path: "/shuttle-testing" },
  { label: "OEM Manufacturing", path: "/oem-manufacturing" },
  { label: "Download Center", path: "/download-center" },
  { label: "Resource Center", path: "/distributor-resources" },
  { label: "ติดต่อ", path: "/contact" },
];

export const home = {
  seo: {
    title: "VANTAGE SPORTS | แพลตฟอร์มจัดจำหน่ายกีฬาและ OEM เอเชียตะวันออกเฉียงใต้",
    description:
      "VANTAGE SPORTS — จัดจำหน่ายลูกขนไก่ OEM Private Label รับสมัครตัวแทนจำหน่าย และโครงการทดลองใช้สำหรับสโมสร ครอบคลุมไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
  },
  eyebrow: "เอเชียตะวันออกเฉียงใต้ · แพลตฟอร์ม B2B กีฬา",
  title: "ซัพพลายลูกขนไก่จากโรงงานโดยตรงสำหรับเอเชียตะวันออกเฉียงใต้",
  subtitle:
    "VANTAGE SPORTS คือแพลตฟอร์มจัดจำหน่ายและ OEM — ไม่ใช่ร้านค้าปลีก เราช่วยพันธมิตรเข้าถึงลูกขนไก่เกรดการแข่งขัน การผลิต Private Label และการพัฒนาตลาด ASEAN ผ่านพันธมิตรผู้ผลิตจากจีนที่คัดสรรแล้ว",
  ctaProducts: "ซีรีส์ลูกขนไก่",
  ctaDistributor: "โปรแกรมตัวแทนจำหน่าย",
  ctaTesting: "โครงการทดลองใช้สำหรับสโมสร",
  pillarsTitle: "ธุรกิจหลัก",
  pillars: [
    {
      title: "จัดจำหน่ายลูกขนไก่",
      desc: "ซีรีส์ G4, G6 และ G7 — ตั้งแต่เกรดการแข่งขันถึงฝึกซ้อมประหยัด — พร้อม QC ระดับส่งออก",
    },
    {
      title: "OEM / Private Label",
      desc: "ร่วมกับผู้ผลิตจากจีนที่คัดสรร เพื่อเปิดตัวแบรนด์ของคุณในตลาด ASEAN",
    },
    {
      title: "พัฒนาตลาด",
      desc: "รับสมัครตัวแทนจำหน่าย โครงการทดลองใช้สำหรับสโมสร และสนับสนุนช่องทางจำหน่ายในไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
    },
  ],
  audiencesTitle: "ลูกค้าเป้าหมาย",
  audiences: [
    { title: "ตัวแทนจำหน่าย", desc: "เข้าถึงโรงงานโดยตรง ราคาแบบ Tier และสนับสนุนการเปิดตลาดในพื้นที่" },
    { title: "สโมสรแบดมินตัน", desc: "โครงการทดลองใช้ตัวอย่างและซัพพลายลูกขนไก่รายเดือน" },
    { title: "ร้านกีฬา", desc: "SKU ที่ให้มาร์จิ้นดี ชุดสินค้า และบรรจุภัณฑ์พร้อมวางขาย" },
    { title: "ผู้ซื้อ OEM", desc: "ลูกขนไก่และอุปกรณ์ Private Label ผ่านพันธมิตรผู้ผลิตที่ผ่านการคัดกรอง" },
  ],
  ctaTitle: "พร้อมร่วมเป็นพันธมิตรกับ VANTAGE SPORTS?",
  ctaDesc: "แจ้งประเทศ ประเภทช่องทาง และปริมาณรายเดือน เราตอบกลับภายใน 2 วันทำการ",
  productPreviewTitle: "Partner Product Series",
  productPreviewSubtitle: "G4 เกรดการแข่งขัน · G6 ฝึกซ้อมสโมสร · G7 ฝึกซ้อมประหยัด — ผลิตโดยพันธมิตร OEM ที่คัดสรร",
  productPreview: [
    { sku: "G4", label: "เกรดการแข่งขัน" },
    { sku: "G6", label: "ฝึกซ้อมสโมสร" },
    { sku: "G7", label: "ฝึกซ้อมประหยัด" },
  ],
  kpiTitle: "ภาพรวมแพลตฟอร์ม",
  kpiStats: [
    { value: "20+", label: "ปีประสบการณ์ในอุตสาหกรรม" },
    { value: "7,000㎡", label: "Smart Factory Phase I" },
    { value: "Global", label: "ครอบคลุมตลาด" },
    { value: "OEM", label: "บริการผลิตพร้อมให้บริการ" },
  ],
  visualCardsTitle: "พันธมิตรที่ได้รับการสนับสนุนจากโรงงาน",
  visualCards: [
    {
      title: "OEM Ready",
      desc: "ลูกขนไก่ Private Label ดีไซน์หลอด และบรรจุภัณฑ์ ASEAN ผ่านพันธมิตรผู้ผลิตที่ผ่านการคัดกรอง",
    },
    {
      title: "Southeast Asia Distribution",
      desc: "รับสมัครตัวแทนจำหน่ายและเปิดช่องทางในไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
    },
    {
      title: "Factory Direct Supply",
      desc: "ซีรีส์ G4, G6 และ G7 พร้อม QC ระดับส่งออก — ไม่ใช่โมเดลแฟรนไชส์ในประเทศจีน",
    },
  ],
  trustTitle: "สร้างความเชื่อมั่นด้วยศักยภาพการผลิต",
  trustSubtitle: "VANTAGE SPORTS ดูแลการพัฒนาตลาด INFIV และพันธมิตรที่คัดสรรรับผิดชอบการผลิต",
  trustItems: ["ประสบการณ์ในอุตสาหกรรม 20+ ปี", "เครือข่ายซัพพลายทั่วโลก", "พันธมิตร OEM ด้านการผลิต"],
};

export const products = {
  seo: {
    title: "ซีรีส์ลูกขนไก่แบดมินตัน | VANTAGE SPORTS",
    description:
      "ลูกขนไก่ G4 เกรดการแข่งขัน G6 ฝึกซ้อมสโมสร และ G7 ฝึกซ้อมประหยัด — Partner Product Series ที่ VANTAGE SPORTS จัดจำหน่ายทั่วเอเชียตะวันออกเฉียงใต้",
  },
  title: "ซีรีส์ลูกขนไก่แบดมินตัน",
  subtitle:
    "G4, G6 และ G7 คือบันไดผลิตภัณฑ์พันธมิตร — ตั้งแต่เกรดการแข่งขันถึงฝึกซ้อมประหยัด ผลิตโดยพันธมิตร OEM ที่คัดสรร รวมถึง INFIV",
  partnerNote: "Partner Product Series · พันธมิตรด้านการผลิต: INFIV (精彩永恒) และโรงงานจากจีนที่คัดสรร",
  shuttleTitle: "Partner Product Series",
  accessoryTitle: "อุปกรณ์และเครื่องประกอบ",
  specs: [
    "กระบวนการส่งออกแบบปลอดการฆ่าเชื้อ (Fumigation-free)",
    "QC 49 ขั้นตอน · ค่าเผื่อข้อบกพร่องขน 0.1%",
    "ตรวจสอบด้วย AI + กล้องจุลทรรศน์ + มืออาชีพ",
    "มีความเร็วลูก 77–79 สำหรับสภาพอากาศ ASEAN",
    "หลอดตัวอย่างก่อนสั่งซื้อจำนวนมาก",
  ],
  note: "ราคาส่งออก VANTAGE SPORTS อ้างอิงตามตลาด ติดต่อเราเพื่อวางแผนต้นทุนถึงมือ (landed cost)",
  gradeLegend: [
    { sku: "G4", label: "เกรดการแข่งขัน", desc: "ขนไก่ Patent · การบินแข่งขัน" },
    { sku: "G6", label: "ฝึกซ้อมสโมสร", desc: "ขนไก่ 0.15 มม. · ทนทานสูง" },
    { sku: "G7", label: "ฝึกซ้อมประหยัด", desc: "ขนเป็ด Golden · คุณค่าสูง" },
  ],
  visualTaglines: {
    G4: "ลูกขนไก่ขนไก่เกรดการแข่งขัน",
    G6: "ลูกขนไก่ขนไก่ทนทานสูง",
    G7: "ลูกขนไก่ฝึกซ้อมแม่นยำ",
  },
  visualLabels: {
    feature: "รายละเอียดงานฝีมือ",
    usage: "การใช้งานในสนาม",
    packaging: "บรรจุภัณฑ์ค้าปลีก",
  },
  applicationLabel: "การใช้งาน",
  posterLabel: "โปสเตอร์สเปกผลิตภัณฑ์",
  warehouseTitle: "คลังสินค้าพร้อมส่งออก",
  warehouseDesc:
    "พันธมิตรผู้ผลิตมีคลังและพื้นที่เตรียมส่งออกสำหรับลูกขนไก่ที่มุ่งเป้า ASEAN — VANTAGE SPORTS ดูแลการวางแผนต้นทุนถึงมือ",
};

export const distributor = {
  seo: {
    title: "โปรแกรมตัวแทนจำหน่าย | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS ช่วยตัวแทนจำหน่ายเข้าถึงผลิตภัณฑ์แบดมินตันจากโรงงานโดยตรงในประเทศไทย มาเลเซีย ฟิลิปปินส์ และเวียดนาม",
  },
  title: "โปรแกรมตัวแทนจำหน่าย",
  subtitle:
    "เราช่วยตัวแทนจำหน่ายเข้าถึงผลิตภัณฑ์แบดมินตันจากโรงงานโดยตรง — ลูกขนไก่ อุปกรณ์ และสาย OEM — โดยไม่ต้องจัดการซัพพลายเชนจากจีนเพียงลำพัง",
  who: [
    "Wholesaler และ importer กีฬาระดับภูมิภาค",
    "ตัวแทนจำหน่ายแบดมินตันเฉพาะทาง",
    "เครือร้านกีฬาหลายสาขา",
    "ตัวแทนที่ครอบคลุมไทย มาเลเซีย ฟิลิปปินส์ หรือเวียดนาม",
  ],
  benefits: [
    {
      title: "เข้าถึงโรงงานโดยตรง",
      desc: "VANTAGE SPORTS เชื่อมต่อคุณกับพันธมิตรผู้ผลิตที่ผ่านการคัดกรอง พร้อมราคาส่งออกที่โปร่งใส",
    },
    {
      title: "SKU Ladder ชัดเจน",
      desc: "การวางตำแหน่ง G4 / G6 / G7 ช่วยให้ขายเข้าและสั่งซื้อซ้ำง่ายขึ้น",
    },
    {
      title: "Marketing Toolkit",
      desc: "Product sheet คู่มือการบิน และสื่อ POS สำหรับร้านและสโมสร",
    },
    {
      title: "คำแนะนำด้านโลจิสติกส์",
      desc: "ประสานงานขนส่งทางเรือ SEA และวางแผนต้นทุนถึงมือ",
    },
  ],
  steps: [
    "ส่งใบสมัครตัวแทนจำหน่ายพร้อมโปรไฟล์พื้นที่",
    "รับตัวอย่าง G-series และชั้นราคาส่งออก",
    "ลงนามข้อตกลงพันธมิตรกับ VANTAGE SPORTS",
    "เปิดตลาดพร้อมสนับสนุนช่องทางและการพัฒนาตลาด",
  ],
  leadFormTitle: "แบบฟอร์มสนใจเป็นตัวแทนจำหน่าย",
  leadFormSubtitle: "แนะนำธุรกิจของคุณ VANTAGE SPORTS ตอบกลับภายใน 2 วันทำการ",
  leadFormNote:
    "ข้อมูลจะบันทึกในระบบ lead ของ VANTAGE ทีมงานตอบกลับภายใน 2 วันทำการ — หรือติดต่อผ่าน WhatsApp เพื่อการติดตามที่รวดเร็วขึ้น",
  leadFormFields: {
    country: "ประเทศ",
    company: "บริษัท",
    contactPerson: "ผู้ติดต่อ",
    whatsapp: "WhatsApp",
    email: "อีเมล",
    facebookPage: "Facebook Page",
    currentBrands: "แบรนด์ที่จำหน่ายอยู่",
    monthlyVolume: "ปริมาณสั่งซื้อรายเดือน",
    interestedProducts: "ผลิตภัณฑ์ที่สนใจ",
    message: "หมายเหตุตลาด / ความต้องการ",
    submit: "ส่งใบสมัครตัวแทนจำหน่าย",
  },
  volumeOptions: [
    "ต่ำกว่า 500 หลอด / เดือน",
    "500 – 2,000 หลอด / เดือน",
    "2,000 – 10,000 หลอด / เดือน",
    "มากกว่า 10,000 หลอด / เดือน",
    "ยังไม่แน่ใจ",
  ],
  productOptions: [
    "G4 เกรดการแข่งขัน",
    "G6 ฝึกซ้อมสโมสร",
    "G7 ฝึกซ้อมประหยัด",
    "ไม้แบดมินตัน",
    "ชุดกีฬาและกระเป๋า",
    "OEM / Private Label",
  ],
  visualGalleryTitle: "เครือข่ายจัดจำหน่ายที่ได้รับการสนับสนุนจากโรงงาน",
  visualGalleryDesc:
    "ดูบันไดผลิตภัณฑ์ วิทยาเขตการผลิต และเครือข่ายส่งออกทั่วโลกที่อยู่เบื้องหลังทุกความร่วมมือตัวแทนจำหน่าย VANTAGE SPORTS",
};

export const testing = {
  seo: {
    title: "โครงการทดลองใช้ลูกขนไก่สำหรับสโมสร | VANTAGE SPORTS",
    description:
      "สมัครรับตัวอย่างลูกขนไก่ G4, G6 และ G7 ฟรีผ่าน VANTAGE SPORTS ทดสอบการบินและความทนทานก่อนสั่งซื้อจำนวนมาก",
  },
  title: "ทดลองใช้ลูกขนไก่ฟรี",
  subtitle:
    "ทดสอบลูกขนไก่ Partner Series ในสภาพความชื้น ระดับความสูง และระดับฝีมือผู้เล่นของคุณ ก่อนตัดสินใจสั่งซื้อเป็นตู้คอนเทนเนอร์",
  who: [
    "ผู้สมัครตัวแทนจำหน่ายที่ประเมินซัพพลายเออร์ใหม่",
    "สโมสรและสถาบันที่มีสมาชิกใช้งาน 20 คนขึ้นไป",
    "ร้านกีฬาที่เปิดหรือ upgrade หมวดแบดมินตัน",
    "แบรนด์ OEM ที่ต้องการ validate ผลผลิตจากโรงงานก่อน Private Label",
  ],
  includes: [
    "หลอดตัวอย่าง 2–4 หลอด ครอบคลุม G4 / G6 / G7 และความเร็วลูกต่างๆ",
    "Checklist ประเมินการบินและความทนทาน",
    "ตัวอย่างราคาส่งออกสำหรับตลาดของคุณ",
    "ติดตามผลจากทีมผลิตภัณฑ์ VANTAGE SPORTS",
  ],
  steps: [
    "ส่งใบสมัครพร้อมโปรไฟล์สโมสรหรือธุรกิจ",
    "ตรวจสอบภายใน 3 วันทำการ",
    "จัดส่งตัวอย่างไปยังที่อยู่ของคุณ",
    "แชร์ feedback — เราช่วยวางแผนออเดอร์แรก",
  ],
  note: "โควตารายเดือนจำกัดต่อประเทศ ให้ความสำคัญกับตัวแทนจำหน่าย สโมสร และร้านที่มีศักยภาพปริมาณจริง",
  ctaTitle: "โครงการทดลองใช้สำหรับสโมสร",
  ctaSubtitle: "สโมสรและสถาบันแบดมินตันที่มีสมาชิกใช้งาน 20 คนขึ้นไป สมัครรับหลอดตัวอย่าง G4, G6 และ G7 ฟรี",
  ctaButton: "สมัครทดลองใช้ลูกขนไก่ฟรี",
  visualGalleryTitle: "การทดสอบจริงในสโมสรและสนาม",
  visualGalleryDesc:
    "สนามและสโมสรพันธมิตร — ที่ตัวแทนจำหน่ายและสถาบัน validate ลูกขนไก่ G4, G6 และ G7 ก่อนสั่งซื้อจำนวนมาก",
  visualVenueLabel: "สนามพันธมิตร",
  visualCoachingLabel: "Coaching & Academy",
  visualTrainingLabel: "การฝึกซ้อมสโมสร",
  applicationTitle: "ใบสมัครทดลองใช้ลูกขนไก่ฟรี",
  applicationSubtitle: "กรอกแบบฟอร์มด้านล่าง สโมสร ตัวแทนจำหน่าย และร้านกีฬาที่ผ่านเกณฑ์จะได้รับหลอดตัวอย่าง 2–4 หลอด",
  applicationNote:
    "ใบสมัครจะบันทึกในระบบ lead ของ VANTAGE ให้ความสำคัญกับสโมสร 20 คนขึ้นไปและตัวแทนจำหน่ายที่ active — ติดต่อ WhatsApp เพื่อการตรวจสอบที่รวดเร็วขึ้น",
  organizationTypes: ["สโมสรแบดมินตัน", "Academy", "ร้านกีฬา", "ตัวแทนจำหน่าย", "แบรนด์ OEM", "อื่นๆ"],
  memberOptions: ["ต่ำกว่า 20 คน", "20 – 50 คน", "50 – 100 คน", "100 คนขึ้นไป", "N/A — ค้าปลีก/จัดจำหน่าย"],
  productTestOptions: [
    "G4 เกรดการแข่งขัน",
    "G6 ฝึกซ้อมสโมสร",
    "G7 ฝึกซ้อมประหยัด",
    "ชุด G4 + G6 + G7",
    "ยังไม่แน่ใจ",
  ],
  applicationFields: {
    organizationType: "ประเภทองค์กร",
    country: "ประเทศ",
    organizationName: "ชื่อสโมสร / บริษัท",
    contactPerson: "ผู้ติดต่อ",
    whatsapp: "WhatsApp",
    email: "อีเมล",
    memberCount: "สมาชิกใช้งาน / ขนาดธุรกิจ",
    productsInterested: "ผลิตภัณฑ์ที่ต้องการทดสอบ",
    courtsOrStores: "จำนวนสนามหรือสาขาร้าน",
    message: "รายละเอียดเพิ่มเติม",
    submit: "ส่งใบสมัครทดลองใช้",
  },
};

export const catalog = {
  title: "ดาวน์โหลดแคตตาล็อกผลิตภัณฑ์",
  subtitle: "ขอแคตตาล็อกลูกขนไก่และอุปกรณ์ VANTAGE SPORTS ฉบับเต็มสำหรับตลาดของคุณ",
  note: "มี PDF แคตตาล็อกตามคำขอ ส่งแบบฟอร์มแล้วเราจะอีเมลชั้นราคาส่งออกพร้อมแคตตาล็อก",
  ctaLabel: "ขอแคตตาล็อก",
  ctaPath: "/contact",
};

export const contact = {
  seo: {
    title: "ติดต่อ | VANTAGE SPORTS",
    description:
      "ติดต่อ VANTAGE SPORTS สำหรับตัวแทนจำหน่าย สโมสร ร้านกีฬา และ OEM ผ่าน WhatsApp, Facebook, อีเมล หรือแบบฟอร์ม",
  },
  title: "ติดต่อ",
  subtitle: "ติดต่อทีมพันธมิตร VANTAGE SPORTS ผ่าน WhatsApp, Facebook, อีเมล หรือแบบฟอร์มด้านล่าง",
  formTitle: "แบบฟอร์มติดต่อ VANTAGE SPORTS",
  formNote: "ข้อมูลจะบันทึกในระบบ lead ของ VANTAGE ทีมพันธมิตรตอบกลับภายใน 2 วันทำการ",
  fields: {
    company: "บริษัท / องค์กร",
    name: "ชื่อผู้ติดต่อ",
    email: "อีเมล",
    phone: "โทรศัพท์ / WhatsApp",
    country: "ประเทศ / ตลาด",
    interest: "ความสนใจ",
    message: "ข้อความ",
    submit: "ส่งแบบฟอร์ม",
  },
  interests: [
    "โปรแกรมตัวแทนจำหน่าย",
    "ซัพพลายลูกขนไก่สำหรับสโมสร",
    "พันธมิตรร้านกีฬา",
    "OEM Manufacturing",
    "ทดลองใช้ลูกขนไก่ฟรี",
    "แคตตาล็อกผลิตภัณฑ์",
    "อื่นๆ",
  ],
};

export const common = {
  ...en.common,
  contact: "ติดต่อ",
  contactUs: "ติดต่อเรา",
  quickContact: "ติดต่อด่วน",
  distributorApplication: "สมัครตัวแทนจำหน่าย",
  viewMarketCoverage: "ดูความครอบคลุมตลาดทั้งหมด",
  exportStandards: "มาตรฐานส่งออก",
  bestFor: "เหมาะสำหรับ",
  applyFreeShuttleTesting: "สมัครทดลองใช้ลูกขนไก่ฟรี",
  whoShouldApply: "ใครควรสมัคร",
  programBenefits: "สิทธิประโยชน์ของโปรแกรม",
  howToJoin: "ขั้นตอนการเข้าร่วม",
  eligibleApplicants: "ผู้มีสิทธิสมัคร",
  whatYouReceive: "สิ่งที่คุณจะได้รับ",
  applicationProcess: "ขั้นตอนการสมัคร",
  languageSwitcher: "ภาษา",
  selectType: "เลือกประเภท",
  selectCountry: "เลือกประเทศ",
  contactWhatsapp: "ติดต่อผ่าน WhatsApp",
  contactFacebook: "ติดต่อผ่าน Facebook",
  contactLine: "ติดต่อผ่าน LINE",
  contactEmail: "ติดต่อผ่านอีเมล",
  chatWhatsapp: "แชท WhatsApp",
  formSuccessContact:
    "ขอบคุณ! ข้อมูลของคุณถูกบันทึกในระบบ lead ของ VANTAGE ทีมงานจะติดตามภายใน 2 วันทำการ — หรือติดต่อ WhatsApp เพื่อการตอบกลับที่รวดเร็วขึ้น",
  formSuccessDistributor:
    "ขอบคุณ! ใบสมัครตัวแทนจำหน่ายถูกบันทึกแล้ว VANTAGE SPORTS จะตอบกลับภายใน 2 วันทำการ ติดต่อ WhatsApp เพื่อการติดตามที่รวดเร็วขึ้น",
  formSuccessTesting:
    "ขอบคุณ! ใบสมัครทดลองใช้ถูกบันทึกแล้ว VANTAGE SPORTS จะตรวจสอบภายใน 3 วันทำการ ติดต่อ WhatsApp เพื่อการติดตามที่รวดเร็วขึ้น",
  whatsappPrefill: "สวัสดี VANTAGE SPORTS สนใจร่วมเป็นพันธมิตร",
  emailSubject: "สอบถามความร่วมมือ VANTAGE SPORTS",
  countries: ["ประเทศไทย", "มาเลเซีย", "ฟิลิปปินส์", "เวียดนาม"],
  otherAsean: "ประเทศ ASEAN อื่นๆ",
  applyFreeShuttleTestingTitle: "สมัครทดลองใช้ลูกขนไก่ฟรี",
  distributorBrandsPlaceholder: "เช่น Yonex, Victor, แบรนด์ท้องถิ่น",
  courtsPlaceholder: "เช่น 4 สนาม, 2 สาขาร้าน",
  testingMessagePlaceholder:
    "แจ้งความต้องการทดสอบ แบรนด์ลูกขนไก่ปัจจุบัน ปริมาณรายเดือน...",
  seoKeywords: {
    ...en.common.seoKeywords,
    home: "VANTAGE SPORTS, ลูกขนไก่ G4 G6 G7, ตัวแทนจำหน่ายแบดมินตัน ASEAN",
    products: "VANTAGE SPORTS, ลูกขนไก่ G4 G6 G7, เกรดการแข่งขัน, ฝึกซ้อมสโมสร, แบดมินตันเอเชียตะวันออกเฉียงใต้",
    distributor: "VANTAGE SPORTS ตัวแทนจำหน่าย, ลูกขนไก่จากโรงงานโดยตรง, ไทย มาเลเซีย ฟิลิปปินส์ เวียดนาม",
    testing: "VANTAGE SPORTS ทดลองใช้ลูกขนไก่, ตัวอย่างฟรี G4 G6 G7, สโมสรแบดมินตัน",
    contact: "ติดต่อ VANTAGE SPORTS, ความร่วมมือแบดมินตัน ASEAN, WhatsApp ตัวแทนจำหน่าย",
  },
};

// Phase 1: remaining sections stay English
export const oem = en.oem;
export const marketCoverage = en.marketCoverage;
export const factoryPartners = en.factoryPartners;
export const mediaLibrary = en.mediaLibrary;
export const distributorResources = en.distributorResources;
export const marketsSection = en.marketsSection;
export const aboutFactory = en.aboutFactory;
export const distributorCrm = en.distributorCrm;
export const clubTestingDatabase = en.clubTestingDatabase;
export const productComparison = en.productComparison;
export const downloadCenter = en.downloadCenter;
