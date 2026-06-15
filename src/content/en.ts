import { factoryCapabilities } from "./products";

export const site = {
  name: "VANTAGE SPORTS",
  brand: "VANTAGE SPORTS",
  tagline: "Southeast Asia Sports Distribution & OEM Platform",
  description:
    "VANTAGE SPORTS helps distributors, badminton clubs, sports shops, and OEM buyers access factory-direct shuttlecocks and private-label equipment across Thailand, Malaysia, Philippines, and Vietnam.",
  url: "https://vantage-sports.vercel.app",
  email: "partners@vantage-sports.com",
  whatsapp: "66812345678",
  whatsappDisplay: "+66 81 234 5678",
  facebook: "https://www.facebook.com/vantage.sports.sea",
  markets: ["Thailand", "Malaysia", "Philippines", "Vietnam"],
  audiences: ["Distributors", "Badminton Clubs", "Sports Shops", "OEM Buyers"],
  coreBusiness: [
    "Badminton Shuttlecock Distribution",
    "OEM / Private Label Service",
    "Distributor Recruitment",
    "Club Testing Program",
    "Southeast Asia Market Development",
  ],
};

export const nav = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "OEM", path: "/oem-manufacturing" },
  { label: "Distributors", path: "/distributor-program" },
  { label: "Shuttle Testing", path: "/shuttle-testing" },
  { label: "About Factory", path: "/about-factory" },
];

export const footerNav = [
  { label: "OEM Manufacturing", path: "/oem-manufacturing" },
  { label: "Shuttle Testing", path: "/shuttle-testing" },
  { label: "Resource Center", path: "/distributor-resources" },
  { label: "Media Library", path: "/media-library" },
];

export const home = {
  seo: {
    title: "VANTAGE SPORTS | Southeast Asia Sports Distribution & OEM Platform",
    description:
      "VANTAGE SPORTS — badminton shuttlecock distribution, OEM private label, distributor recruitment, and club testing across Thailand, Malaysia, Philippines, and Vietnam.",
  },
  eyebrow: "Southeast Asia · B2B Sports Platform",
  title: "Factory-Direct Badminton Supply for Southeast Asia",
  subtitle:
    "VANTAGE SPORTS is a distribution and OEM platform — not a retail store. We help partners access tournament-grade shuttlecocks, private-label manufacturing, and ASEAN market development through selected Chinese manufacturing partners.",
  ctaProducts: "Shuttlecock Series",
  ctaDistributor: "Distributor Program",
  ctaTesting: "Club Testing Program",
  pillarsTitle: "Core Business",
  pillars: [
    {
      title: "Shuttlecock Distribution",
      desc: "G4, G6, and G7 partner product series — tournament to economy training — with export-ready QC.",
    },
    {
      title: "OEM / Private Label",
      desc: "We work with selected Chinese manufacturers to launch your brand across ASEAN markets.",
    },
    {
      title: "Market Development",
      desc: "Distributor recruitment, club testing, and channel support in Thailand, Malaysia, Philippines, and Vietnam.",
    },
  ],
  audiencesTitle: "Who We Serve",
  audiences: [
    { title: "Distributors", desc: "Factory-direct access, tiered pricing, and territory launch support." },
    { title: "Badminton Clubs", desc: "Sample testing programs and recurring shuttlecock supply." },
    { title: "Sports Shops", desc: "Margin-friendly SKUs, bundles, and retail-ready packaging." },
    { title: "OEM Buyers", desc: "Private-label shuttles and equipment via vetted manufacturing partners." },
  ],
  ctaTitle: "Ready to partner with VANTAGE SPORTS?",
  ctaDesc: "Tell us your country, channel type, and monthly volume. We respond within 2 business days.",
};

export const products = {
  seo: {
    title: "Badminton Shuttlecock Series | VANTAGE SPORTS",
    description:
      "G4 Tournament Grade, G6 Club Training, and G7 Economy Training shuttlecocks — partner product series distributed by VANTAGE SPORTS across Southeast Asia.",
  },
  title: "Badminton Shuttlecock Series",
  subtitle:
    "G4, G6, and G7 form our partner product ladder — from tournament to economy training. Manufactured by selected OEM partners including INFIV.",
  partnerNote: "Partner Product Series · Manufacturing Partner: INFIV (精彩永恒) and selected Chinese factories",
  shuttleTitle: "Partner Product Series",
  accessoryTitle: "Equipment & Accessories",
  specs: [
    "Fumigation-free export process",
    "49-step QC · 0.1% feather defect tolerance",
    "AI + microscopy + manual inspection",
    "Speed grades 77–79 available for ASEAN climates",
    "Sample tubes before bulk orders",
  ],
  note: "Export pricing quoted per market by VANTAGE SPORTS. Contact us for landed-cost planning.",
  gradeLegend: [
    { sku: "G4", label: "Tournament Grade", desc: "Patent goose · competition flight" },
    { sku: "G6", label: "Club Training", desc: "0.15 mm goose · extreme durability" },
    { sku: "G7", label: "Economy Training", desc: "Golden duck · best value" },
  ],
};

export const oem = {
  seo: {
    title: "OEM Manufacturing | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS OEM and private label service — we work with selected Chinese manufacturers for shuttlecock and equipment production in ASEAN markets.",
  },
  title: "OEM Manufacturing",
  subtitle:
    "We work with selected Chinese manufacturers — including INFIV as an OEM partner — to launch private-label shuttlecocks, custom packaging, and co-branded equipment for Southeast Asia.",
  partnerIntro:
    "VANTAGE SPORTS does not own factories. We source, qualify, and manage production through vetted manufacturing partners with export-grade QC and ASEAN packaging support.",
  scopes: [
    { title: "Shuttle OEM", desc: "Tube design, logo, speed grades, and multilingual ASEAN packaging." },
    { title: "Racket OEM", desc: "Frame specs, paint, logo placement, grip, and stringing for private label." },
    { title: "Accessory OEM", desc: "Bags, grips, socks, and team kits for channel-exclusive bundles." },
  ],
  steps: [
    "Share brand brief, target market, and volume forecast with VANTAGE SPORTS",
    "Factory sampling via selected manufacturing partners",
    "QC sign-off and packaging localization",
    "Production scheduling and export documentation",
  ],
  moq: [
    "Shuttle OEM: from 500 tubes per speed grade",
    "Racket OEM: from 300 units per model",
    "Accessory OEM: MOQ varies — contact for quote",
  ],
  brandTypes: [
    {
      title: "Private Label",
      desc: "Your brand on factory output — shuttles, tubes, and speed grades tailored to your market positioning.",
    },
    {
      title: "Custom Packaging",
      desc: "Multilingual tube design, barcodes, and retail-ready boxes for Thailand, Malaysia, Philippines, and Vietnam.",
    },
    {
      title: "Distributor Brand",
      desc: "Exclusive co-brand or white-label lines for regional distributors — protect territory and margin.",
    },
    {
      title: "Academy Brand",
      desc: "Club or academy logo on shuttles and team kits — recurring supply programs with factory QC backing.",
    },
  ],
};

export const distributor = {
  seo: {
    title: "Distributor Program | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS helps distributors access factory-direct badminton products in Thailand, Malaysia, Philippines, and Vietnam.",
  },
  title: "Distributor Program",
  subtitle:
    "We help distributors access factory-direct badminton products — shuttlecocks, equipment, and OEM lines — without navigating Chinese supply chains alone.",
  who: [
    "Regional sports wholesalers and importers",
    "Badminton specialty distributors",
    "Multi-store sports retail groups",
    "Agents covering Thailand, Malaysia, Philippines, or Vietnam",
  ],
  benefits: [
    { title: "Factory-Direct Access", desc: "VANTAGE SPORTS connects you to vetted manufacturing partners with transparent export pricing." },
    { title: "Clear SKU Ladder", desc: "G4 / G6 / G7 positioning simplifies sell-in and repeat orders." },
    { title: "Marketing Toolkit", desc: "Product sheets, flight guides, and POS assets for shops and clubs." },
    { title: "Logistics Guidance", desc: "SEA freight coordination and landed-cost planning." },
  ],
  steps: [
    "Submit distributor application with territory profile",
    "Receive G-series samples and export price tiers",
    "Sign partnership agreement with VANTAGE SPORTS",
    "Launch with channel and market development support",
  ],
  leadFormTitle: "Distributor Lead Form",
  leadFormSubtitle: "Tell us about your business. VANTAGE SPORTS responds within 2 business days.",
  leadFormNote: "Static form — CRM integration coming soon. Also reach us on WhatsApp for faster response.",
  leadFormFields: {
    country: "Country",
    company: "Company",
    contactPerson: "Contact Person",
    whatsapp: "WhatsApp",
    email: "Email",
    facebookPage: "Facebook Page",
    currentBrands: "Current Brands",
    monthlyVolume: "Monthly Purchase Volume",
    interestedProducts: "Interested Products",
    message: "Market Notes / Requirements",
    submit: "Submit Distributor Application",
  },
  volumeOptions: [
    "Under 500 tubes / month",
    "500 – 2,000 tubes / month",
    "2,000 – 10,000 tubes / month",
    "10,000+ tubes / month",
    "Not sure yet",
  ],
  productOptions: ["G4 Tournament Grade", "G6 Club Training", "G7 Economy Training", "Rackets", "Apparel & Bags", "OEM / Private Label"],
};

export const testing = {
  seo: {
    title: "Club Testing Program | VANTAGE SPORTS",
    description:
      "Apply for free G4, G6, and G7 shuttlecock samples through VANTAGE SPORTS. Validate flight and durability before bulk orders.",
  },
  title: "Free Shuttle Testing",
  subtitle:
    "Test partner-series shuttlecocks in your humidity, altitude, and player level before committing to container volumes.",
  who: [
    "Distributor applicants evaluating new supplier lines",
    "Clubs and academies with 20+ active members",
    "Sports shops launching or upgrading badminton categories",
    "OEM brands validating factory output before private label runs",
  ],
  includes: [
    "2–4 sample tubes across G4 / G6 / G7 and speed grades",
    "Flight and durability evaluation checklist",
    "Export pricing preview for your market",
    "Follow-up with VANTAGE SPORTS product team",
  ],
  steps: [
    "Submit application with business or club profile",
    "Review within 3 business days",
    "Samples shipped to your location",
    "Share feedback — we help plan your first bulk order",
  ],
  note: "Limited monthly quota per country. Priority for distributors, clubs, and shops with serious volume potential.",
  ctaTitle: "Club Testing Program",
  ctaSubtitle: "Badminton clubs and academies with 20+ active members can apply for free G4, G6, and G7 sample tubes.",
  ctaButton: "Apply Free Shuttle Testing",
  applicationTitle: "Free Shuttle Testing Application",
  applicationSubtitle: "Complete the form below. Qualified clubs, distributors, and sports shops receive 2–4 sample tubes.",
  applicationNote: "Static form — CRM integration coming soon. Priority for 20+ member clubs and active distributors.",
  organizationTypes: ["Badminton Club", "Academy", "Sports Shop", "Distributor", "OEM Brand", "Other"],
  memberOptions: ["Under 20", "20 – 50", "50 – 100", "100+", "N/A — Retail/Distributor"],
  productTestOptions: ["G4 Tournament Grade", "G6 Club Training", "G7 Economy Training", "G4 + G6 + G7 Mix", "Not sure"],
  applicationFields: {
    organizationType: "Organization Type",
    country: "Country",
    organizationName: "Club / Company Name",
    contactPerson: "Contact Person",
    whatsapp: "WhatsApp",
    email: "Email",
    memberCount: "Active Members / Business Scale",
    productsInterested: "Products to Test",
    courtsOrStores: "Courts or Store Locations",
    message: "Additional Details",
    submit: "Submit Testing Application",
  },
};

export const catalog = {
  title: "Download Product Catalog",
  subtitle: "Request the full VANTAGE SPORTS shuttlecock and equipment catalog for your market.",
  note: "PDF catalog available upon request. Submit the form and we email export pricing tiers with the catalog.",
  ctaLabel: "Request Catalog",
  ctaPath: "/contact",
};

export const common = {
  contact: "Contact",
  contactUs: "Contact Us",
  quickContact: "Quick Contact",
  pages: "Pages",
  resources: "Resources",
  distributorApplication: "Distributor Application",
  viewMarketCoverage: "View Full Market Coverage",
  exploreMarketCoverage: "Explore Market Coverage",
  exportStandards: "Export Standards",
  bestFor: "Best for",
  applyFreeShuttleTesting: "Apply Free Shuttle Testing",
  startOemDiscussion: "Start OEM Discussion",
  oemBrandSolutions: "OEM Brand Solutions",
  oemBrandSolutionsDesc: "Four partnership models for ASEAN distributors, academies, and retail brands.",
  oemScope: "OEM Scope",
  oemWorkflow: "OEM Workflow",
  moqGuidance: "MOQ Guidance",
  whoShouldApply: "Who Should Apply",
  programBenefits: "Program Benefits",
  howToJoin: "How to Join",
  eligibleApplicants: "Eligible Applicants",
  whatYouReceive: "What You Receive",
  applicationProcess: "Application Process",
  applyForMarket: "Apply for Your Market",
  discussOemPartnership: "Discuss OEM Partnership",
  factoryCapabilities: "Factory Capabilities (INFIV OEM Partner)",
  activeManufacturingPartners: "Active Manufacturing Partners",
  marketEntryServices: "Market Entry Services",
  opportunityLabel: "Opportunity",
  recommendedSkus: "Recommended SKUs",
  productLines: "Product Lines",
  languageSwitcher: "Language",
  facebookPlaceholder: "https://facebook.com/...",
  selectType: "Select type",
  selectCountry: "Select country",
  toggleMenu: "Toggle menu",
  mainNav: "Main",
  mobileNav: "Mobile",
  chatWhatsapp: "Chat on WhatsApp",
  contactWhatsapp: "Contact via WhatsApp",
  contactFacebook: "Contact via Facebook",
  contactEmail: "Contact via Email",
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  email: "Email",
  mediaComingSoon: "Media coming soon",
  requestMediaAccess: "Request Media Access",
  heritage: "Heritage",
  featherVolume: "Feather Volume",
  capacity: "Capacity",
  factory: "Factory",
  qc: "QC",
  patents: "Patents",
  copyrightMarkets: "Markets",
  formSuccessContact:
    "Thank you! Your lead has been recorded. CRM integration coming soon — please also contact VANTAGE SPORTS via WhatsApp or Facebook for faster response.",
  formSuccessDistributor:
    "Thank you! Your distributor application has been recorded. VANTAGE SPORTS will respond within 2 business days. Message us on WhatsApp for faster follow-up.",
  formSuccessTesting:
    "Thank you! Your shuttle testing application has been recorded. VANTAGE SPORTS will review within 3 business days. Message us on WhatsApp for faster follow-up.",
  whatsappPrefill: "Hello VANTAGE SPORTS, I am interested in partnership.",
  emailSubject: "VANTAGE SPORTS Partnership Inquiry",
  countries: ["Thailand", "Malaysia", "Philippines", "Vietnam"],
  otherAsean: "Other ASEAN",
  applyFreeShuttleTestingTitle: "Apply Free Shuttle Testing",
  distributorBrandsPlaceholder: "e.g. Yonex, Victor, local brands",
  courtsPlaceholder: "e.g. 4 courts, 2 retail locations",
  testingMessagePlaceholder:
    "Tell us about your testing needs, current shuttle brands, monthly volume...",
  seoKeywords: {
    home: "VANTAGE SPORTS, G4 G6 G7 shuttlecock, badminton distributor ASEAN",
    products:
      "VANTAGE SPORTS, G4 G6 G7 shuttlecock, tournament grade, club training, economy training, badminton Southeast Asia",
    oem: "VANTAGE SPORTS OEM, private label shuttlecock, custom packaging, selected Chinese manufacturers",
    distributor:
      "VANTAGE SPORTS distributor, factory-direct badminton Thailand Malaysia Philippines Vietnam",
    testing: "VANTAGE SPORTS club testing, free shuttle samples, G4 G6 G7 test application",
    aboutFactory: "VANTAGE SPORTS factory, INFIV OEM partner, badminton manufacturing China",
    contact: "contact VANTAGE SPORTS, badminton partnership ASEAN, WhatsApp distributor",
    marketCoverage: "VANTAGE SPORTS Thailand Malaysia Philippines Vietnam, badminton market development ASEAN",
    factoryPartners: "VANTAGE SPORTS factory partners, INFIV OEM partner, badminton manufacturing China",
    mediaLibrary: "VANTAGE SPORTS media, badminton factory photos, product images, shuttlecock video",
    distributorResources:
      "VANTAGE SPORTS distributor resources, product catalog, badminton B2B assets ASEAN",
  },
};

export const marketCoverage = {
  seo: {
    title: "Market Coverage | VANTAGE SPORTS Southeast Asia",
    description:
      "VANTAGE SPORTS market development in Thailand, Malaysia, Philippines, and Vietnam — distributor recruitment, club programs, and shuttlecock distribution.",
  },
  title: "Market Coverage",
  subtitle: "VANTAGE SPORTS builds badminton distribution channels across four priority ASEAN markets.",
  intro:
    "We focus on wholesale, club, and retail channel development — not direct consumer retail. Each market has dedicated launch playbooks, sample programs, and landed-cost planning.",
  services: [
    "Distributor screening and territory matching",
    "Club testing program coordination",
    "Shuttle speed grade guidance by climate",
    "Export documentation and freight support",
    "OEM and private-label launch assistance",
  ],
  regions: [
    {
      country: "Thailand",
      code: "TH",
      status: "Active Development",
      highlight: "Strong club culture with Bangkok-centric wholesale and expanding provincial academies.",
      opportunity: "High club density, tournament supply demand, pro shop network growth.",
      channels: ["Wholesalers", "Pro shops", "Club chains", "Tournament supply"],
      products: ["G6 Club Training", "G4 Tournament Grade", "G7 Economy Training"],
    },
    {
      country: "Malaysia",
      code: "MY",
      status: "Active Development",
      highlight: "Mature badminton market with established retail, school programs, and state-level distributors.",
      opportunity: "Stable repeat orders, academy chains, specialty retail expansion.",
      channels: ["Specialty retailers", "State distributors", "Academy networks", "School programs"],
      products: ["G4 Tournament Grade", "G6 Club Training", "OEM Private Label"],
    },
    {
      country: "Philippines",
      code: "PH",
      status: "Growth Market",
      highlight: "Rising participation with Manila and Cebu as primary distribution corridors.",
      opportunity: "Price-sensitive training segment, school programs, retail category build-out.",
      channels: ["Sports retailers", "Club suppliers", "Schools", "Regional agents"],
      products: ["G7 Economy Training", "G6 Club Training", "Starter bundles"],
    },
    {
      country: "Vietnam",
      code: "VN",
      status: "Growth Market",
      highlight: "Fast-growing player base in Ho Chi Minh City and Hanoi with emerging OEM interest.",
      opportunity: "Wholesale development, club accounts, private-label brand launches.",
      channels: ["Wholesalers", "Club accounts", "OEM brands", "Sports chains"],
      products: ["G6 Club Training", "G7 Economy Training", "OEM Shuttle Lines"],
    },
  ],
};

export const factoryPartners = {
  seo: {
    title: "Factory Partners | VANTAGE SPORTS Manufacturing Network",
    description:
      "VANTAGE SPORTS manufacturing partners including INFIV (OEM Partner) and future OEM partners — vetted Chinese badminton factories with export-grade QC.",
  },
  title: "Factory Partners",
  subtitle: "VANTAGE SPORTS qualifies and manages production through a vetted manufacturing partner network.",
  intro:
    "We do not own factories. We partner with selected Chinese manufacturers for shuttlecock production, equipment sourcing, and OEM programs — so ASEAN distributors and brands can focus on market development.",
  activeTitle: "Active Manufacturing Partners",
  futureTitle: "Future OEM Partners",
  futureNote: "VANTAGE SPORTS is onboarding additional manufacturing partners for rackets, apparel, and specialty OEM lines. Contact us for early partnership discussions.",
  partners: [
    {
      name: "INFIV",
      role: "OEM Partner / Manufacturing Partner",
      status: "Active",
      desc: "精彩永恒 — Shandong Jingcai Sports Goods Co., Ltd. Feather shuttle R&D, intelligent manufacturing, 200,000 m² factory capacity.",
      products: ["G4 Tournament Grade", "G6 Club Training", "G7 Economy Training", "Rackets", "Apparel", "Bags & Grips"],
      highlights: [
        "20+ years industry heritage",
        "2 billion feathers processed annually",
        "49-step QC · 0.1% defect tolerance",
        "36 patented process technologies",
      ],
    },
    {
      name: "Future OEM Partner",
      role: "Manufacturing Partner (Onboarding)",
      status: "Coming Soon",
      desc: "Additional vetted factory for carbon racket OEM, apparel production, and specialty accessory lines.",
      products: ["Racket OEM", "Team Apparel", "Custom Accessories"],
      highlights: [
        "Qualification in progress",
        "Export-grade QC standards required",
        "ASEAN packaging localization",
        "Contact VANTAGE SPORTS for early access",
      ],
    },
    {
      name: "Future OEM Partner",
      role: "Manufacturing Partner (Pipeline)",
      status: "Planned",
      desc: "Second shuttle manufacturing line to expand capacity and speed-grade options for high-volume ASEAN distributors.",
      products: ["Feather Shuttles", "Nylon Training Shuttles"],
      highlights: [
        "Capacity expansion planned",
        "Multi-factory redundancy for supply stability",
        "Distributor inquiries welcome",
      ],
    },
  ],
};

export const mediaLibrary = {
  seo: {
    title: "Media Library | VANTAGE SPORTS",
    description:
      "Factory photos, product images, and videos from VANTAGE SPORTS manufacturing partners. Media assets for distributors and marketing.",
  },
  title: "Media Library",
  subtitle: "Factory imagery, product photos, and videos — for distributors, clubs, and marketing teams.",
  intro: "Assets are being added. Distributors and approved partners can request high-resolution files via the Resource Center.",
  categories: [
    { id: "factory", title: "Factory & Production", desc: "Manufacturing lines, QC processes, feather processing", count: "Coming soon" },
    { id: "products", title: "Product Photography", desc: "G4, G6, G7 shuttles, rackets, equipment", count: "Coming soon" },
    { id: "events", title: "Events & Testing", desc: "Club testing sessions, tournaments, partner launches", count: "Coming soon" },
    { id: "videos", title: "Video Library", desc: "Factory tours, product demos, flight testing", count: "Coming soon" },
  ],
  placeholderNote: "Upload assets to public/media/ or brand-assets/ to populate this library.",
};

export const distributorResources = {
  seo: {
    title: "Distributor Resource Center | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS distributor resources — product sheets, catalog downloads, application forms, and marketing assets for ASEAN partners.",
  },
  title: "Distributor Resource Center",
  subtitle: "Tools, forms, and assets for VANTAGE SPORTS distribution partners.",
  intro: "Access applications, request catalogs, and download marketing materials. Approved distributors receive expanded asset packs.",
  resources: [
    {
      title: "Distributor Application",
      desc: "Apply for factory-direct badminton distribution in your territory.",
      cta: "Apply Now",
      path: "/distributor-program#apply",
      type: "Form",
    },
    {
      title: "Free Shuttle Testing",
      desc: "Request G4, G6, G7 sample tubes for evaluation.",
      cta: "Apply for Testing",
      path: "/shuttle-testing#apply",
      type: "Form",
    },
    {
      title: "Product Catalog",
      desc: "Full shuttlecock and equipment catalog with export tiers.",
      cta: "Request Catalog",
      path: "/contact",
      type: "Download",
    },
    {
      title: "Product Data Sheets",
      desc: "G4, G6, G7 specs, flight guides, and grade positioning.",
      cta: "View Products",
      path: "/products",
      type: "Reference",
    },
    {
      title: "Media Library",
      desc: "Factory photos, product images, and video assets.",
      cta: "Browse Media",
      path: "/media-library",
      type: "Assets",
    },
    {
      title: "Brand Assets",
      desc: "VANTAGE SPORTS logos, colors, and partner co-brand guidelines.",
      cta: "Contact for Assets",
      path: "/contact",
      type: "Brand",
    },
  ],
};

export const marketsSection = {
  title: "Southeast Asia Market Development",
  subtitle: "VANTAGE SPORTS builds distribution channels in Thailand, Malaysia, Philippines, and Vietnam.",
  regions: [
    {
      country: "Thailand",
      code: "TH",
      highlight: "Strong club culture, Bangkok wholesale hub, growing provincial academies.",
      channels: ["Wholesalers", "Pro shops", "Club chains"],
    },
    {
      country: "Malaysia",
      code: "MY",
      highlight: "Mature badminton market with established retail and school programs.",
      channels: ["Specialty retailers", "State distributors", "Academies"],
    },
    {
      country: "Philippines",
      code: "PH",
      highlight: "Rising participation — Manila and Cebu distribution corridors.",
      channels: ["Sports retailers", "Club suppliers", "Schools"],
    },
    {
      country: "Vietnam",
      code: "VN",
      highlight: "Fast-growing player base in Ho Chi Minh City and Hanoi.",
      channels: ["Wholesalers", "Club accounts", "OEM brands"],
    },
  ],
};

export const aboutFactory = {
  seo: {
    title: "About Factory | VANTAGE SPORTS Manufacturing Partners",
    description:
      "VANTAGE SPORTS works with selected Chinese manufacturing partners including INFIV — 20+ years heritage, 2B feathers/year, 49-step QC, 36 patents.",
  },
  title: "About Factory",
  subtitle: "Manufacturing partners behind VANTAGE SPORTS — scale, science, and export discipline.",
  intro:
    "VANTAGE SPORTS qualifies and manages production through selected Chinese manufacturers. Our primary OEM partner INFIV (精彩永恒), produced by Shandong Jingcai Sports Goods Co., Ltd., brings 20+ years of badminton industry heritage and intelligent shuttle manufacturing.",
  partnersTitle: "Manufacturing Partners",
  stats: [
    { label: "Heritage", value: factoryCapabilities.heritage },
    { label: "Feather Processing", value: factoryCapabilities.annualFeatherVolume },
    { label: "Shuttle Capacity", value: factoryCapabilities.shuttleCapacity },
    { label: "Factory Scale", value: factoryCapabilities.factorySize },
    { label: "QC System", value: `${factoryCapabilities.qcNodes} · ${factoryCapabilities.defectRate} tolerance` },
    { label: "Patents", value: `${factoryCapabilities.patents} exclusive process patents` },
  ],
  technology: [
    "10,000-hit durability simulation before batch release",
    "4K microscopy screening and LAB color consistency control",
    "Bending strength ≥1200 MPa (exceeds EU benchmark)",
    "Molecular-level reverse wash — +40% durability, 72h whiteness stability",
    "AI color grading + microscopy + manual review across 16 feather indicators",
  ],
  globalTitle: "Global Export Footprint",
  globalText:
    "Manufacturing partners supply markets including Japan, Korea, Malaysia, Thailand, Vietnam, Brunei, India, and the United Kingdom. VANTAGE SPORTS focuses on Southeast Asia market development — distributor recruitment, club testing, and OEM programs.",
  chain: [
    "VANTAGE SPORTS: ASEAN market development, distributor recruitment, and OEM program management",
    "Manufacturing partners: feather sourcing, shuttle production, and patented R&D",
    "Channel partners: distributors, clubs, sports shops, and OEM brands own local sales",
  ],
  excludedNote:
    "VANTAGE SPORTS does not operate China domestic franchise programs or retail pricing. ASEAN partners work through export distribution and OEM channels only.",
  technologyTitle: "Technology & QC",
  valueChainTitle: "Value Chain",
};

export const contact = {
  seo: {
    title: "Contact | VANTAGE SPORTS",
    description:
      "Contact VANTAGE SPORTS for distributor, club, sports shop, and OEM inquiries. WhatsApp, Facebook, email, or lead form.",
  },
  title: "Contact",
  subtitle: "Reach the VANTAGE SPORTS partnership team via WhatsApp, Facebook, email, or the lead form below.",
  formTitle: "VANTAGE SPORTS Lead Form",
  formNote: "Form is for inquiry collection only. CRM integration coming soon.",
  fields: {
    company: "Company / Organization",
    name: "Contact Name",
    email: "Email",
    phone: "Phone / WhatsApp",
    country: "Country / Market",
    interest: "Interest",
    message: "Message",
    submit: "Submit Lead Form",
  },
  interests: [
    "Distributor Program",
    "Badminton Club Supply",
    "Sports Shop Partnership",
    "OEM Manufacturing",
    "Free Shuttle Testing",
    "Product Catalog",
    "Other",
  ],
};
