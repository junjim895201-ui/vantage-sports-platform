import { factoryCapabilities } from "./products";

export const site = {
  name: "VANTAGE SPORTS",
  brand: "VANTAGE SPORTS",
  tagline: "Southeast Asia Sports Distribution & OEM Platform",
  description:
    "VANTAGE SPORTS helps distributors, badminton clubs, sports shops, and OEM buyers access factory-direct shuttlecocks and private-label equipment across Thailand, Malaysia, Philippines, and Vietnam.",
  url: "https://vantagesports.asia",
  email: "partners@vantage-sports.com",
  // DEPLOYMENT DEMO: WhatsApp number must be replaced before real outreach.
  whatsapp: "60123456789",
  whatsappDisplay: "+60 12-345 6789",
  facebook: "https://www.facebook.com/vantage.sports.sea",
  line: "https://line.me/R/ti/p/@vantagesports", // Disabled in UI — link returns 404 until official LINE is live
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
  { label: "Compare", path: "/product-comparison" },
  { label: "Distributors", path: "/distributor-program" },
  { label: "Partners", path: "/factory-partners" },
  { label: "Downloads", path: "/download-center" },
];

export const footerNav = [
  { label: "Shuttle Testing", path: "/shuttle-testing" },
  { label: "OEM Manufacturing", path: "/oem-manufacturing" },
  { label: "Download Center", path: "/download-center" },
  { label: "Resource Center", path: "/distributor-resources" },
  { label: "Contact", path: "/contact" },
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
  kpiTitle: "Platform at a Glance",
  kpiStats: [
    { value: "20+", label: "Years Industry Experience" },
    { value: "7,000㎡", label: "Smart Factory Phase I" },
    { value: "Global", label: "Market Coverage" },
    { value: "OEM", label: "Manufacturing Available" },
  ],
  visualCardsTitle: "Factory-Backed Partnership",
  visualCards: [
    {
      title: "OEM Ready",
      desc: "Private-label shuttlecocks, tube design, and ASEAN packaging through vetted manufacturing partners.",
    },
    {
      title: "Southeast Asia Distribution",
      desc: "Distributor recruitment and channel launch across Thailand, Malaysia, Philippines, and Vietnam.",
    },
    {
      title: "Factory Direct Supply",
      desc: "G4, G6, and G7 partner series with export-grade QC — no China domestic franchise model.",
    },
  ],
  trustTitle: "Built on Manufacturing Credibility",
  trustSubtitle: "VANTAGE SPORTS manages market development. INFIV and selected partners supply production.",
  trustItems: [
    "20+ Years Industry Experience",
    "Global Supply Network",
    "OEM Manufacturing Partner",
  ],
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
  visualTaglines: {
    G4: "Tournament Grade Goose Feather",
    G6: "High Durability Goose Feather",
    G7: "Training Grade Precision Shuttle",
  },
  applicationLabel: "Application",
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
  visualSections: {
    capacity: {
      title: "Manufacturing Capacity",
      desc: "Selected manufacturing partners operate intelligent production campuses with scalable shuttle output for ASEAN export programs.",
    },
    quality: {
      title: "Quality Control",
      desc: "49-step QC, patent-processed feathers, and technology awards underpin every partner product series distributed by VANTAGE SPORTS.",
    },
    services: {
      title: "OEM Services",
      desc: "Tube design, speed grades, multilingual packaging, and sampling managed by VANTAGE SPORTS through vetted factory partners.",
    },
    privateLabel: {
      title: "Private Label",
      desc: "Launch your own shuttle brand with MOQ-friendly private label programs — backed by INFIV as OEM manufacturing partner.",
    },
    dealerSupport: {
      title: "Dealer Support",
      desc: "Export documentation, landed-cost planning, and distributor onboarding for Southeast Asia channel partners.",
    },
  },
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
  leadFormNote:
    "Submissions are recorded in the VANTAGE lead system. Our team responds within 2 business days — also reach us on WhatsApp for faster follow-up.",
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
  visualGalleryTitle: "Factory-Backed Distribution Network",
  visualGalleryDesc:
    "See the product ladder, manufacturing campus, and global export footprint behind every VANTAGE SPORTS distributor partnership.",
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
  applicationNote:
    "Applications are recorded in the VANTAGE lead system. Priority for 20+ member clubs and active distributors — message us on WhatsApp for faster review.",
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
  contactLine: "Contact via LINE",
  contactEmail: "Contact via Email",
  whatsapp: "WhatsApp",
  facebook: "Facebook",
  line: "LINE",
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
    "Thank you! Your lead has been recorded and tracked in the VANTAGE lead system. Our team will follow up within 2 business days — also reach us on WhatsApp for faster response.",
  formSuccessDistributor:
    "Thank you! Your distributor application has been recorded and tracked. VANTAGE SPORTS will respond within 2 business days. Message us on WhatsApp for faster follow-up.",
  formSuccessTesting:
    "Thank you! Your shuttle testing application has been recorded and tracked. VANTAGE SPORTS will review within 3 business days. Message us on WhatsApp for faster follow-up.",
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
    distributorCrm: "VANTAGE SPORTS distributor CRM, lead tracking, ASEAN partner recruitment",
    clubTestingDatabase: "VANTAGE SPORTS club testing database, shuttle sample applications ASEAN",
    productComparison: "G4 G6 G7 shuttlecock comparison, tournament club economy training VANTAGE SPORTS",
    downloadCenter: "VANTAGE SPORTS download center, product catalog datasheets distributor assets",
  },
  leadsTable: {
    date: "Date",
    type: "Type",
    country: "Country",
    contact: "Contact",
    status: "Status",
    source: "Source",
    noData: "No leads recorded yet. Submit a form to see entries here.",
    exportJson: "Export JSON",
    refresh: "Refresh",
    total: "Total Leads",
    newLeads: "New",
    viewCrm: "View in CRM",
    viewDatabase: "View Database",
    localStorageNote:
      "Leads are stored locally in this browser until backend CRM sync is connected. Export JSON for manual import.",
  },
  leadTypes: {
    contact: "Contact",
    distributor: "Distributor",
    testing: "Club Testing",
  },
  leadStatuses: {
    new: "New",
    reviewing: "Reviewing",
    qualified: "Qualified",
    closed: "Closed",
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
  recruitmentTitle: "Partner with VANTAGE SPORTS",
  recruitmentDesc:
    "We recruit ASEAN distributors, clubs, and sports shops — not end consumers. Factory partners supply production; VANTAGE SPORTS owns market development, lead tracking, and channel launch.",
  recruitmentCtas: [
    { label: "Apply as Distributor", path: "/distributor-program#apply" },
    { label: "Request Factory Tour", path: "/contact" },
    { label: "Download Partner Kit", path: "/download-center" },
  ],
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
  subtitle:
    "Reach the VANTAGE SPORTS partnership team via WhatsApp, Facebook, email, or the lead form below.",
  formTitle: "VANTAGE SPORTS Lead Form",
  formNote:
    "Submissions are recorded in the VANTAGE lead system. Our partnership team responds within 2 business days.",
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

export const distributorCrm = {
  seo: {
    title: "Distributor CRM | VANTAGE SPORTS Partner Recruitment",
    description:
      "VANTAGE SPORTS distributor CRM — track partnership leads, distributor applications, and ASEAN recruitment pipeline in one place.",
  },
  title: "Distributor CRM",
  subtitle: "Track distributor and partnership leads across Thailand, Malaysia, Philippines, and Vietnam.",
  intro:
    "The VANTAGE SPORTS recruitment platform captures every distributor inquiry, application, and contact lead. Use this dashboard to review pipeline status before full CRM backend sync.",
  features: [
    { title: "Lead Capture", desc: "All distributor, contact, and testing forms write to a unified lead store." },
    { title: "Pipeline Status", desc: "New → Reviewing → Qualified → Closed workflow for recruitment follow-up." },
    { title: "Export Ready", desc: "Export JSON for import into HubSpot, Salesforce, or custom CRM." },
    { title: "Locale Tracking", desc: "Each lead records EN or ZH locale and source page for market attribution." },
  ],
  pipelineTitle: "Recruitment Pipeline",
  pipelineSteps: ["New inquiry received", "Territory & volume review", "Sample shipment & pricing", "Partnership signed"],
};

export const clubTestingDatabase = {
  seo: {
    title: "Club Testing Database | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS club testing database — view shuttle testing applications from clubs, academies, and sports shops across ASEAN.",
  },
  title: "Club Testing Database",
  subtitle: "Central registry of free G4, G6, and G7 shuttle testing applications.",
  intro:
    "Every club testing application submitted on the site is indexed here. Review organization type, market, and product interest before approving sample shipments.",
  columns: {
    organization: "Organization",
    type: "Type",
    country: "Country",
    products: "Products",
    members: "Scale",
    submitted: "Submitted",
  },
  statsLabels: {
    total: "Total Applications",
    clubs: "Clubs & Academies",
    shops: "Sports Shops",
    distributors: "Distributors",
  },
};

export const productComparison = {
  seo: {
    title: "G4 G6 G7 Product Comparison | VANTAGE SPORTS",
    description:
      "Compare G4 Tournament Grade, G6 Club Training, and G7 Economy Training shuttlecocks — specs, positioning, and recommended channels for ASEAN distributors.",
  },
  title: "Product Comparison",
  subtitle: "Side-by-side G-series shuttlecock comparison for distributor sell-in and club procurement.",
  intro:
    "Use this matrix to position G4, G6, and G7 across tournament, club training, and economy segments. All SKUs manufactured by INFIV (OEM Partner), distributed by VANTAGE SPORTS.",
  tableHeaders: {
    attribute: "Attribute",
    g4: "G4 — Tournament",
    g6: "G6 — Club Training",
    g7: "G7 — Economy",
  },
  rows: [
    { label: "Grade", g4: "Tournament Grade", g6: "Club Training", g7: "Economy Training" },
    { label: "Feather", g4: "Patent goose · full-round", g6: "Goose back · 0.15 mm", g7: "Golden duck · full-round" },
    { label: "Primary Channel", g4: "Tournaments · premium shops", g6: "Clubs · academies", g7: "Shops · schools · new territories" },
    { label: "Durability", g4: "Competition flight priority", g6: "Extreme session durability", g7: "High value per tube" },
    { label: "MOQ Profile", g4: "Mid-high tier orders", g6: "High-volume club supply", g7: "Entry-friendly starter MOQ" },
    { label: "ASEAN Fit", g4: "Humid markets · speed 77–79", g6: "Daily academy training", g7: "Price-sensitive growth markets" },
  ],
  ctaTitle: "Ready to order samples?",
  ctaDesc: "Apply for free shuttle testing or submit a distributor application.",
};

export const downloadCenter = {
  seo: {
    title: "Download Center | VANTAGE SPORTS",
    description:
      "VANTAGE SPORTS download center — product catalog, G-series datasheets, distributor application forms, and partner marketing assets.",
  },
  title: "Download Center",
  subtitle: "Catalogs, datasheets, and partner assets for distributors, clubs, and sports shops.",
  intro:
    "Request or download VANTAGE SPORTS partner materials. PDF catalog available on request — submit the contact form and we email export pricing tiers.",
  categories: [
    {
      title: "Product Catalog",
      desc: "Full G4 / G6 / G7 shuttlecock and equipment catalog with export tiers.",
      type: "Catalog",
      cta: "Request Catalog",
      path: "/contact",
    },
    {
      title: "G-Series Data Sheets",
      desc: "Individual SKU specs, flight guides, and grade positioning.",
      type: "Datasheet",
      cta: "View Comparison",
      path: "/product-comparison",
    },
    {
      title: "Distributor Application Pack",
      desc: "Application form, program overview, and market coverage summary.",
      type: "Form",
      cta: "Apply Now",
      path: "/distributor-program#apply",
    },
    {
      title: "Club Testing Application",
      desc: "Free G4, G6, G7 sample tube request form and evaluation checklist.",
      type: "Form",
      cta: "Apply for Testing",
      path: "/shuttle-testing#apply",
    },
    {
      title: "Factory Partner Overview",
      desc: "Manufacturing partner network, INFIV OEM capabilities, and QC standards.",
      type: "Reference",
      cta: "View Partners",
      path: "/factory-partners",
    },
    {
      title: "Media & Brand Assets",
      desc: "Factory photos, product images, and VANTAGE SPORTS brand guidelines.",
      type: "Assets",
      cta: "Browse Media",
      path: "/media-library",
    },
  ],
  exportNote: "Need bulk asset access? Contact partners@vantage-sports.com with your distributor profile.",
};
