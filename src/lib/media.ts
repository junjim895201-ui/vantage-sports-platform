/** Phase 6A/6B visual assets — manufacturing partner imagery + brand product visuals. */
export type ProductVisualSet = {
  hero: string;
  feature: string;
  usage: string;
  packaging: string;
};

export const phase6aMedia = {
  hero: "/media/phase6a/hero/hero_badminton_action_blue.webp",
  court: {
    venue: "/media/phase6a/court/badminton_court_venue_ecosystem.webp",
    lifestyle: "/media/phase6a/court/lifestyle_group_badminton.webp",
  },
  factory: {
    exterior: "/media/phase6a/factory/factory_building_exterior.webp",
    masterplan: "/media/phase6a/factory/factory_masterplan_aerial.webp",
    timeline: "/media/phase6a/factory/development_timeline_factory.webp",
    quality: "/media/phase6a/factory/tech_quality_awards.webp",
  },
  network: "/media/phase6a/network/global_business_map.webp",
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

/** Phase 6B real photography — factory, drone, and club assets. */
export const phase6bMedia = {
  hero: "/media/phase6b/real-assets/hero_campus_aerial_15.webp",
  campus: {
    aerial10: "/media/phase6b/real-assets/campus_aerial_10.webp",
    aerial15: "/media/phase6b/real-assets/hero_campus_aerial_15.webp",
  },
  factory: {
    aerial: "/media/phase6b/real-assets/factory_aerial_5.webp",
    building02089: "/media/phase6b/real-assets/factory_building_02089.webp",
    building02007: "/media/phase6b/real-assets/factory_building_02007.webp",
    workers02084: "/media/phase6b/real-assets/factory_workers_02084.webp",
    workers02082: "/media/phase6b/real-assets/factory_workers_02082.webp",
    qc02006: "/media/phase6b/real-assets/factory_qc_02006.webp",
    warehouse01971: "/media/phase6b/real-assets/factory_warehouse_01971.webp",
  },
  club: {
    venue: "/media/phase6b/real-assets/club_venue_04.webp",
    coaching: "/media/phase6b/real-assets/club_coaching_54025.webp",
    training: "/media/phase6b/real-assets/club_training_60208.webp",
  },
} as const;

export type ProductSku = keyof typeof phase6aMedia.products;
