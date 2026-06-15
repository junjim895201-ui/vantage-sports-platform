/** Phase 6A visual assets — INFIV factory/product imagery (manufacturing partner only). */
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
    floating: "/media/phase6a/products/product_shuttlecock_floating.webp",
    G4: {
      tube: "/media/phase6a/products/product_tube_G4.webp",
      poster: "/media/phase6a/products/G4_product_poster_top.webp",
      craft: "/media/phase6a/products/G4_product_detail_craft.webp",
    },
    G6: {
      tube: "/media/phase6a/products/product_tube_G6.webp",
      poster: "/media/phase6a/products/G6_product_poster_top.webp",
      craft: "/media/phase6a/products/G6_product_detail_craft.webp",
    },
    G7: {
      tube: "/media/phase6a/products/product_tube_G7.webp",
      poster: "/media/phase6a/products/G7_product_poster_top.webp",
      craft: "/media/phase6a/products/G7_product_detail_craft.webp",
    },
  },
} as const;

export type ProductSku = keyof typeof phase6aMedia.products;
