/**
 * Orbit & Ember Kitchen + Bar — Package 9: Menu Collections Editorial Configuration
 * Version: 2.0.0 (Pure Editorial Config — References Stable Item IDs Only)
 * Contains NO copied prices, descriptions, dietary markers, or availability data.
 */

window.ORBIT_COLLECTIONS_CONFIG = {
  version: "2.0.0",
  lastReviewed: "2026-07-24",
  featuredCollectionId: "collection-signature",
  categories: [
    { id: "all", label: "All Collections" },
    { id: "signature", label: "Signature & Fire" },
    { id: "occasion", label: "Occasions & Sharing" },
    { id: "brunch", label: "Brunch & Daytime" },
    { id: "drinks", label: "Cocktails & Zero-Proof" },
    { id: "dessert", label: "Dessert & Nightcap" },
    { id: "private-dining", label: "Private Dining" }
  ],
  collections: [
    {
      id: "collection-signature",
      slug: "signature-orbit-and-ember",
      title: "Signature Orbit & Ember",
      eyebrow: "The Flagship Experience",
      category: "signature",
      shortDescription: "The definitive dishes, craft cocktails, and hearth finishes that define our kitchen.",
      longIntroduction: "Our signature collection highlights the pinnacle of open hearth wood-fired cooking and celestial mixology. From 14-hour black garlic braised short ribs to high-rye bourbon aged with flamed orange peel, these preparations embody the soul of Orbit & Ember.",
      heroImage: "images/featured-steak.jpg",
      serviceLabel: "Dinner & Drinks",
      orderedItemIds: [
        "menu-black-garlic-short-rib",
        "menu-copper-moon",
        "menu-wood-fired-mushrooms",
        "menu-burnt-honey-cheesecake"
      ],
      featuredItemId: "menu-black-garlic-short-rib",
      pairingIds: ["pair-short-rib-copper-moon", "pair-cheesecake-espresso-martini"],
      relatedCollectionIds: ["collection-around-the-fire", "collection-cocktails-after-dark", "collection-chef-julian-picks"],
      ctaLabel: "Reserve Signature Table",
      ctaUrl: "reserve.html"
    },
    {
      id: "collection-around-the-fire",
      slug: "around-the-fire",
      title: "Around the Fire",
      eyebrow: "Live Hearth Cooking",
      category: "signature",
      shortDescription: "Dishes defined by direct cured oak flame, char, smoke, roasting, and hearth embers.",
      longIntroduction: "Every plate in this collection touches our live-fire hearth. Cured oak firewood imparts a deep campfire finish to pasture-raised chicken, coal-roasted heirloom carrots, and hand-stretched sourdough flatbreads.",
      heroImage: "images/wood-fired-hearth.jpg",
      serviceLabel: "Dinner Service",
      orderedItemIds: [
        "menu-ember-roasted-chicken",
        "menu-charred-carrots",
        "menu-smoked-pepper-flatbread",
        "menu-fire-roasted-oysters"
      ],
      featuredItemId: "menu-ember-roasted-chicken",
      pairingIds: ["pair-chicken-first-light", "pair-carrots-solar-flare"],
      relatedCollectionIds: ["collection-signature", "collection-made-for-sharing"],
      ctaLabel: "View Hearth Menu",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-made-for-sharing",
      slug: "made-for-sharing",
      title: "Made for Sharing",
      eyebrow: "Shared Plates & Boards",
      category: "occasion",
      shortDescription: "Starters, flatbreads, oysters, and hearth sides designed to pass around the table.",
      longIntroduction: "Dining is best experienced as a communal event. These shareable plates are crafted for passing, pairing, and enjoying together across the table.",
      heroImage: "images/featured-flatbread.jpg",
      serviceLabel: "Dinner & Brunch",
      orderedItemIds: [
        "menu-smoked-pepper-flatbread",
        "menu-fire-roasted-oysters",
        "menu-charred-carrots",
        "menu-hearth-bread"
      ],
      featuredItemId: "menu-smoked-pepper-flatbread",
      pairingIds: ["pair-flatbread-solar-flare", "pair-oysters-first-light"],
      relatedCollectionIds: ["collection-gather-the-table", "collection-around-the-fire"],
      ctaLabel: "Explore Shared Dishes",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-weekend-brunch",
      slug: "weekend-brunch",
      title: "Weekend Brunch",
      eyebrow: "Saturday & Sunday Daytime",
      category: "brunch",
      shortDescription: "Hearth-poached eggs, brioche french toast, short rib hash, and morning spritzes.",
      longIntroduction: "Our weekend brunch merges wood-fired hearth techniques with morning favorites. Enjoy harissa hollandaise over pork belly benedict, smoked short rib skillet hash, and botanical morning spritzes.",
      heroImage: "images/wood-fired-hearth.jpg",
      serviceLabel: "Sat & Sun 10:00 AM – 2:30 PM",
      orderedItemIds: [
        "menu-ember-benedict",
        "menu-short-rib-hash",
        "menu-peach-french-toast",
        "menu-first-light-spritz"
      ],
      featuredItemId: "menu-ember-benedict",
      pairingIds: ["pair-chicken-first-light"],
      relatedCollectionIds: ["collection-zero-proof", "collection-made-for-sharing"],
      ctaLabel: "Book Brunch Table",
      ctaUrl: "reserve.html"
    },
    {
      id: "collection-cocktails-after-dark",
      slug: "cocktails-after-dark",
      title: "Cocktails After Dark",
      eyebrow: "Craft Spirits & Mixology",
      category: "drinks",
      shortDescription: "High-rye bourbon, smoked mezcal, espresso martinis, and botanical spritzes.",
      longIntroduction: "Curated mixology inspired by planetary alignment and smoky herbal botanicals. From wood-smoked rye to flamed citrus and cold brew espresso reductions.",
      heroImage: "images/cosmic-cocktail.jpg",
      serviceLabel: "Bar & Lounge Nightly",
      orderedItemIds: [
        "menu-copper-moon",
        "menu-solar-flare",
        "menu-first-light-spritz",
        "menu-espresso-martini"
      ],
      featuredItemId: "menu-copper-moon",
      pairingIds: ["pair-short-rib-copper-moon", "pair-cheesecake-espresso-martini"],
      relatedCollectionIds: ["collection-zero-proof", "collection-signature"],
      ctaLabel: "View Lounge Bar",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-zero-proof",
      slug: "zero-proof-fully-considered",
      title: "Zero-Proof, Fully Considered",
      eyebrow: "Crafted Non-Alcoholic Elixirs",
      category: "drinks",
      shortDescription: "Distilled botanical spirits, jasmine peach elixirs, ginger press, and smoked tea tonics.",
      longIntroduction: "Nonalcoholic beverages treated with the exact same rigor and nuance as our craft cocktail program. Every elixir is formulated with cold-pressed botanicals, smoked teas, and house-made syrups.",
      heroImage: "images/cosmic-cocktail.jpg",
      serviceLabel: "Available All Services",
      orderedItemIds: [
        "menu-lunar-bloom",
        "menu-garden-orbit",
        "menu-ember-tonic"
      ],
      featuredItemId: "menu-lunar-bloom",
      pairingIds: ["pair-short-rib-lunar-bloom"],
      relatedCollectionIds: ["collection-cocktails-after-dark", "collection-weekend-brunch"],
      ctaLabel: "Explore Zero-Proof",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-save-room",
      slug: "save-room-for-dessert",
      title: "Save Room for Dessert",
      eyebrow: "Sweet & Smoked Finishes",
      category: "dessert",
      shortDescription: "Caramelized honey cheesecake, smoked Valrhona dark chocolate torte, and espresso martinis.",
      longIntroduction: "Conclude your meal with hearth-smoked desserts that balance sweetness, rich cacao, Maldon sea salt, and aromatic espresso pairings.",
      heroImage: "images/lounge-ambiance.jpg",
      serviceLabel: "Nightly Dessert Service",
      orderedItemIds: [
        "menu-burnt-honey-cheesecake",
        "menu-dark-chocolate-torte",
        "menu-espresso-martini"
      ],
      featuredItemId: "menu-burnt-honey-cheesecake",
      pairingIds: ["pair-cheesecake-espresso-martini"],
      relatedCollectionIds: ["collection-cocktails-after-dark", "collection-signature"],
      ctaLabel: "View Dessert Menu",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-table-for-two",
      slug: "a-table-for-two",
      title: "A Table for Two",
      eyebrow: "Intimate Dining Progression",
      category: "occasion",
      shortDescription: "A curated 4-course progression for two guests featuring hearth bread, charred carrots, short rib, and cheesecake.",
      longIntroduction: "An intimate culinary progression tailored for date night or celebratory dining. Begin with sourdough hearth bread, move to coal-blistered carrots, savor black garlic braised short rib, and finish with burnt honey cheesecake.",
      heroImage: "images/lounge-ambiance.jpg",
      serviceLabel: "Dinner Service",
      orderedItemIds: [
        "menu-hearth-bread",
        "menu-charred-carrots",
        "menu-black-garlic-short-rib",
        "menu-burnt-honey-cheesecake"
      ],
      featuredItemId: "menu-black-garlic-short-rib",
      pairingIds: ["pair-short-rib-copper-moon", "pair-carrots-solar-flare"],
      relatedCollectionIds: ["collection-signature", "collection-around-the-fire"],
      ctaLabel: "Reserve Table for Two",
      ctaUrl: "reserve.html"
    },
    {
      id: "collection-gather-the-table",
      slug: "gather-the-table",
      title: "Gather the Table",
      eyebrow: "Large Group Dining",
      category: "occasion",
      shortDescription: "Group-friendly feast featuring roasted oysters, smoked flatbread, ember chicken, and charred mushrooms.",
      longIntroduction: "Designed for groups of four or more. Enjoy an abundant family-style spread of coal-roasted Atlantic oysters, smoked pepper flatbread, half ember chicken, and wild mushrooms.",
      heroImage: "images/featured-flatbread.jpg",
      serviceLabel: "Dinner & Large Groups",
      orderedItemIds: [
        "menu-fire-roasted-oysters",
        "menu-smoked-pepper-flatbread",
        "menu-ember-roasted-chicken",
        "menu-wood-fired-mushrooms"
      ],
      featuredItemId: "menu-fire-roasted-oysters",
      pairingIds: ["pair-oysters-first-light", "pair-flatbread-solar-flare"],
      relatedCollectionIds: ["collection-made-for-sharing", "collection-private-dining"],
      ctaLabel: "Reserve Group Table",
      ctaUrl: "reserve.html"
    },
    {
      id: "collection-current-season",
      slug: "the-current-season",
      title: "The Current Season",
      eyebrow: "Autumn Harvest Selections",
      category: "signature",
      shortDescription: "Limited-availability seasonal dishes highlighting autumn mushrooms and summer peach brioche.",
      longIntroduction: "Our culinary team adapts dishes continuously as local harvests peak. This collection features limited seasonal availability plates current to our kitchen hearth.",
      heroImage: "images/wood-fired-hearth.jpg",
      serviceLabel: "Seasonal Harvest",
      orderedItemIds: [
        "menu-wood-fired-mushrooms",
        "menu-peach-french-toast"
      ],
      featuredItemId: "menu-wood-fired-mushrooms",
      pairingIds: ["pair-mushrooms-copper-moon"],
      relatedCollectionIds: ["collection-chef-julian-picks", "collection-around-the-fire"],
      ctaLabel: "View Seasonal Menu",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-chef-julian-picks",
      slug: "chef-julians-current-picks",
      title: "Chef Julian’s Current Picks",
      eyebrow: "Executive Chef Feature",
      category: "signature",
      shortDescription: "Personal recommendations from Executive Chef Julian Reyes highlighting his favorite hearth pairings.",
      longIntroduction: "“These dishes showcase the exact harmony of smoke, acid, and earth that inspired Orbit & Ember. I invite you to sample my personal favorites from our hearth.” — Executive Chef Julian Reyes",
      heroImage: "images/featured-steak.jpg",
      serviceLabel: "Chef's Recommendations",
      orderedItemIds: [
        "menu-black-garlic-short-rib",
        "menu-charred-carrots",
        "menu-copper-moon"
      ],
      featuredItemId: "menu-black-garlic-short-rib",
      pairingIds: ["pair-short-rib-copper-moon"],
      relatedCollectionIds: ["collection-signature", "collection-current-season"],
      ctaLabel: "View Chef's Picks",
      ctaUrl: "menu.html"
    },
    {
      id: "collection-private-dining",
      slug: "private-dining-menus",
      title: "Private Dining Menus",
      eyebrow: "The Ember Room Direction",
      category: "private-dining",
      shortDescription: "Sample direction and curated multi-course menus for private events in The Ember Room.",
      longIntroduction: "Explore sample menu direction for host-curated private dining in The Ember Room. Custom course progressions, wine pairings, and zero-proof flights are designed during inquiry consultation.",
      heroImage: "images/lounge-ambiance.jpg",
      serviceLabel: "Private Events & Inquiries",
      orderedItemIds: [
        "menu-black-garlic-short-rib",
        "menu-ember-roasted-chicken",
        "menu-smoked-pepper-flatbread",
        "menu-burnt-honey-cheesecake"
      ],
      featuredItemId: "menu-black-garlic-short-rib",
      pairingIds: ["pair-short-rib-copper-moon"],
      relatedCollectionIds: ["collection-gather-the-table", "collection-signature"],
      ctaLabel: "Inquire for Private Events",
      ctaUrl: "reserve.html",
      disclaimer: "Submitting an inquiry does not reserve the space or confirm menu availability. Selections, pricing, and availability are confirmed during consultation."
    }
  ]
};
