export type ShuttleGrade = "tournament" | "club" | "economy";

export type ShuttleProduct = {
  sku: string;
  name: string;
  gradeLabel: string;
  series: string;
  manufacturingPartner: string;
  featherType: string;
  grade: ShuttleGrade;
  positioning: string;
  highlights: string[];
  specs: Record<string, string>;
  sellingPoints: string[];
  recommendedFor: string[];
  aseanNotes: string;
};

export const manufacturingPartners = [
  {
    name: "INFIV",
    role: "OEM Partner / Manufacturing Partner",
    desc: "精彩永恒 — feather shuttle R&D, intelligent manufacturing, 200,000 m² factory, 36 process patents.",
  },
];

export const shuttleProducts: ShuttleProduct[] = [
  {
    sku: "G4",
    name: "G4 Shuttlecock",
    gradeLabel: "Tournament Grade",
    series: "Partner Product Series · Goose Feather",
    manufacturingPartner: "INFIV (OEM Partner)",
    featherType: "Full-round goose feathers (patent-processed)",
    grade: "tournament",
    positioning: "Tournament-grade flight with top-tier control for competitive play and premium club events.",
    highlights: [
      "Patent feather processing",
      "Full-round selected goose feathers",
      "Tournament-grade flight trajectory",
      "Exceptional flight consistency",
    ],
    specs: {
      Process: "Fumigation-free certified export process",
      Feather: "Patent-processed full-round goose feathers",
      Flight: "Tournament-grade trajectory and control",
      QC: "49-step production control · 0.1% defect tolerance",
      Partner: "Manufactured by INFIV (OEM Partner)",
    },
    sellingPoints: [
      "Designed for players who demand predictable flight under match pressure",
      "Patent-processed goose feathers deliver uniform speed and stability",
      "Ideal upgrade shuttle for academies running league or tournament blocks",
      "Distributed by VANTAGE SPORTS with export-ready ASEAN packaging",
    ],
    recommendedFor: ["Distributors", "Tournament organizers", "Premium sports shops"],
    aseanNotes:
      "Best suited for humid markets (TH, MY, PH, VN). Request speed grades 77–79 based on venue altitude and AC conditions.",
  },
  {
    sku: "G6",
    name: "G6 Shuttlecock",
    gradeLabel: "Club Training",
    series: "Partner Product Series · Goose Feather",
    manufacturingPartner: "INFIV (OEM Partner)",
    featherType: "Goose back feathers · 0.15 mm thickness",
    grade: "club",
    positioning: "High-toughness goose shuttle for clubs and academies that need stable flight and extreme durability.",
    highlights: [
      "0.15 mm goose back feathers",
      "Strict screening + patented treatment",
      "Excellent toughness and elasticity",
      "Stable flight · extreme durability",
    ],
    specs: {
      Process: "Fumigation-free certified export process",
      Feather: "Goose back feathers, 0.15 mm thickness",
      Treatment: "Patented processing for toughness and elasticity",
      Flight: "Stable trajectory for multi-hour sessions",
      Partner: "Manufactured by INFIV (OEM Partner)",
    },
    sellingPoints: [
      "Balances flight quality with longer tube life — lower cost per session for clubs",
      "0.15 mm back feathers selected for resilience in daily academy training",
      "Strong repeat-order potential for clubs with 20+ active members",
      "Available through VANTAGE SPORTS club testing program",
    ],
    recommendedFor: ["Badminton clubs", "Academy chains", "Sports shops with club accounts"],
    aseanNotes:
      "Primary volume SKU for club partnerships. Apply for free sample tubes via Club Testing Program.",
  },
  {
    sku: "G7",
    name: "G7 Shuttlecock",
    gradeLabel: "Economy Training",
    series: "Partner Product Series · Duck Feather",
    manufacturingPartner: "INFIV (OEM Partner)",
    featherType: "Golden silk duck · full-round feathers",
    grade: "economy",
    positioning: "High-value training shuttle with excellent feel, precise flight, and strong durability at accessible MOQ.",
    highlights: [
      "Golden silk duck full-round feathers",
      "First-class feel and flight",
      "High durability",
      "Extreme value for professional training",
    ],
    specs: {
      Process: "Fumigation-free certified export process",
      Feather: "Golden silk duck, full-round construction",
      Flight: "Precise trajectory and landing point",
      Feel: "Smooth hit feedback for drills and sparring",
      Partner: "Manufactured by INFIV (OEM Partner)",
    },
    sellingPoints: [
      "Entry-friendly SKU for sports shops expanding badminton categories",
      "Precise flight and landing — ideal for multi-court training centers",
      "High durability reduces tube consumption in high-volume programs",
      "Strong margin opportunity for distributors in price-sensitive markets",
    ],
    recommendedFor: ["Sports shops", "School programs", "Distributors opening new territories"],
    aseanNotes:
      "Lead SKU for shop display and school/club trial packs. Bundle with rackets + grips for starter kits.",
  },
];

export const accessoryLines = [
  {
    category: "Rackets",
    partner: "INFIV (OEM Partner)",
    items: [
      "7500 series (24T monocoque · 3U)",
      "7100 series (24T monocoque · 4U)",
      "Space Hunter (30T shaft + head · 4U)",
      "A6 / A4 series (30T two-piece · 4U/5U)",
      "85 / 66 / 67 series",
    ],
  },
  {
    category: "Apparel",
    partner: "Selected manufacturers",
    items: ["Match jerseys", "Polo shirts", "Skirts & shorts", "Team kits"],
  },
  {
    category: "Bags & Accessories",
    partner: "Selected manufacturers",
    items: ["Backpacks & tournament bags", "Overgrips (retail & bulk)", "Socks (half/full terry)"],
  },
];

export const factoryCapabilities = {
  heritage: "20+ years of badminton industry experience (Weihai Jingcai Sports heritage via INFIV)",
  legalEntity: "Shandong Jingcai Sports Goods Co., Ltd. — INFIV / 精彩永恒 (OEM Partner)",
  annualFeatherVolume: "2 billion feathers processed per year",
  shuttleCapacity: "10 million dozen annual reserve · up to 1.2–1.5 million dozen/month at full scale",
  factorySize: "200,000 m² intelligent shuttle factory",
  qcNodes: "49 production control checkpoints",
  defectRate: "0.1% feather defect tolerance",
  patents: "36 exclusive process patents",
  rnd: "24-person materials R&D lab led by PhD researchers",
  globalMarkets: ["Japan", "Korea", "Malaysia", "Thailand", "Vietnam", "Brunei", "India", "United Kingdom"],
};
