/** Phase 6A/6B/6C visual assets — brand product visuals + real factory/club photography. */
export type ProductVisualSet = {
  hero: string;
  feature: string;
  usage: string;
  packaging: string;
};

const realBase = "/media/phase6b/real-assets";
const phase6cCompareBase = "/media/phase6c/comparisons";

/** Phase 6C before/after factory enhancement comparisons. */
export const phase6cComparisons = {
  heroCampus: `${phase6cCompareBase}/hero_campus_aerial_15_compare.webp`,
  campusAerial: `${phase6cCompareBase}/campus_aerial_10_compare.webp`,
  factoryAerial: `${phase6cCompareBase}/factory_aerial_5_compare.webp`,
  building02089: `${phase6cCompareBase}/factory_building_02089_compare.webp`,
  building02007: `${phase6cCompareBase}/factory_building_02007_compare.webp`,
  workers02084: `${phase6cCompareBase}/factory_workers_02084_compare.webp`,
  workers02082: `${phase6cCompareBase}/factory_workers_02082_compare.webp`,
} as const;

/** Real photography from VANTAGE_FACTORY_ASSETS — not PDF extractions. */
export const phase6bMedia = {
  hero: `${realBase}/hero_campus_aerial_15.webp`,
  campus: {
    aerial10: `${realBase}/campus_aerial_10.webp`,
    aerial15: `${realBase}/hero_campus_aerial_15.webp`,
  },
  factory: {
    aerial: `${realBase}/factory_aerial_5.webp`,
    building02089: `${realBase}/factory_building_02089.webp`,
    building02007: `${realBase}/factory_building_02007.webp`,
    workers02084: `${realBase}/factory_workers_02084.webp`,
    workers02082: `${realBase}/factory_workers_02082.webp`,
    qc02006: `${realBase}/factory_qc_02006.webp`,
    warehouse01971: `${realBase}/factory_warehouse_01971.webp`,
  },
  club: {
    venue: `${realBase}/club_venue_04.webp`,
    coaching: `${realBase}/club_coaching_54025.webp`,
    training: `${realBase}/club_training_60208.webp`,
  },
} as const;

export const realAssets = {
  homepage: {
    hero: phase6bMedia.hero,
    trustCards: [
      phase6bMedia.factory.aerial,
      phase6bMedia.factory.building02089,
      phase6bMedia.factory.building02007,
    ],
    trustCampus: phase6bMedia.campus.aerial10,
  },
  oem: {
    hero: phase6bMedia.hero,
    capacity: phase6bMedia.hero,
    quality: phase6bMedia.factory.building02089,
    production: phase6bMedia.factory.workers02084,
  },
  distributor: {
    production: phase6bMedia.factory.workers02084,
    team: phase6bMedia.factory.workers02082,
    campus: phase6bMedia.campus.aerial10,
    court: phase6bMedia.club.venue,
  },
  club: phase6bMedia.club,
  products: {
    qualityControl: phase6bMedia.factory.qc02006,
    warehouse: phase6bMedia.factory.warehouse01971,
  },
} as const;

/** SEO alt text — VANTAGE SPORTS primary; INFIV as manufacturing partner only. */
export const mediaAlt = {
  homepageHero:
    "Aerial campus view of INFIV manufacturing partner facility supplying VANTAGE SPORTS Southeast Asia distribution",
  trustAerial:
    "Aerial factory complex of VANTAGE SPORTS OEM manufacturing partner INFIV in China",
  trustBuilding:
    "INFIV manufacturing partner production building — factory-backed supply for VANTAGE SPORTS",
  trustFacility:
    "INFIV factory infrastructure — OEM manufacturing partner for VANTAGE SPORTS export programs",
  trustCampus:
    "Drone overview of INFIV smart manufacturing campus — OEM partner for VANTAGE SPORTS shuttlecock supply",
  oemHero:
    "INFIV manufacturing campus aerial — OEM production partner for VANTAGE SPORTS private label programs",
  oemCapacity:
    "VANTAGE SPORTS OEM partner campus scale — INFIV intelligent manufacturing facility",
  oemQuality:
    "INFIV factory production line — quality-controlled OEM manufacturing for VANTAGE SPORTS",
  oemProduction:
    "INFIV production team at shuttlecock manufacturing line — VANTAGE SPORTS supply chain partner",
  distributorProduction:
    "Factory-direct shuttlecock production at INFIV — VANTAGE SPORTS distributor supply program",
  distributorTeam:
    "INFIV manufacturing workforce — reliable OEM partner for VANTAGE SPORTS ASEAN distribution",
  distributorCampus:
    "Aerial view of INFIV manufacturing campus — VANTAGE SPORTS factory-direct distributor program",
  distributorCourt:
    "Badminton venue ecosystem — club and distributor channels supported by VANTAGE SPORTS",
  clubVenue:
    "Professional badminton venue for VANTAGE SPORTS club testing program sample evaluation",
  clubCoaching:
    "Badminton club coaching session — VANTAGE SPORTS free shuttle testing program for academies",
  clubTraining:
    "Club training session on court — VANTAGE SPORTS G-series shuttlecock evaluation program",
  productQc:
    "Quality control inspection at INFIV manufacturing partner — export standards for VANTAGE SPORTS",
  productWarehouse:
    "Finished goods warehouse at INFIV OEM partner — VANTAGE SPORTS ASEAN export readiness",
} as const;

export const phase6aMedia = {
  hero: realAssets.homepage.hero,
  court: {
    venue: realAssets.club.venue,
    lifestyle: realAssets.club.training,
  },
  factory: {
    exterior: realAssets.oem.hero,
    masterplan: realAssets.homepage.trustCampus,
    timeline: realAssets.oem.production,
    quality: realAssets.products.qualityControl,
  },
  network: realAssets.distributor.campus,
  products: {
    floating: "/media/phase6b/products/G4/hero.webp",
    G4: {
      hero: "/media/phase6b/products/G4/hero.webp",
      feature: "/media/phase6b/products/G4/feature.webp",
      usage: "/media/phase6b/products/G4/usage.webp",
      packaging: "/media/phase6b/products/G4/packaging.webp",
    },
    G6: {
      hero: "/media/phase6b/products/G6/hero.webp",
      feature: "/media/phase6b/products/G6/feature.webp",
      usage: "/media/phase6b/products/G6/usage.webp",
      packaging: "/media/phase6b/products/G6/packaging.webp",
    },
    G7: {
      hero: "/media/phase6b/products/G7/hero.webp",
      feature: "/media/phase6b/products/G7/feature.webp",
      usage: "/media/phase6b/products/G7/usage.webp",
      packaging: "/media/phase6b/products/G7/packaging.webp",
    },
  },
} as const;

export type ProductSku = keyof typeof phase6aMedia.products;
