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

export type ProductSku = keyof typeof phase6aMedia.products;
