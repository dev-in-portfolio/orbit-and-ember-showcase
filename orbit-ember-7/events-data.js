// Centralized Events & Private Dining Source of Truth for Orbit & Ember Kitchen + Bar

const EVENT_CONFIG = {
  roomName: "The Ember Room",
  tagline: "Host Your Gathering Around the Table",
  description: "The Ember Room offers a warm, design-forward setting for private dinners, celebrations, and business gatherings in Charlotte's South End.",
  roomFeatures: [
    "Long artisan walnut dining table",
    "Burgundy upholstered seating",
    "Charcoal walls & copper candleholders",
    "Warm amber pendant lighting",
    "View of central wood-fired hearth",
    "Private connected atmosphere"
  ],
  capacity: {
    seated: { ideal: "10-14", max: 16, note: "Plated or shared-table dinner" },
    reception: { ideal: "16-20", max: 24, note: "Passed hors d'oeuvres & cocktail station" },
    brunch: { max: 16, note: "Private weekend brunch" },
    presentation: { max: 14, note: "Quiet setup with screen & AV access" }
  },
  sampleMenus: [
    {
      id: "ember",
      name: "Ember Dinner Menu",
      price: "$68 / guest",
      style: "3-Course Plated Dinner",
      starters: ["Coal-Roasted Carrots", "Crispy Calamari", "Fire-Roasted Cauliflower", "Seasonal Greens"],
      entrees: ["Black Garlic Short Rib", "Cedar-Plank Salmon", "House-Made Pappardelle", "Fire-Roasted Cauliflower"],
      dessert: ["Burnt Honey Cheesecake", "Seasonal Chocolate Dessert"]
    },
    {
      id: "orbit",
      name: "Orbit Premium Menu",
      price: "$88 / guest",
      style: "Multi-Course Celebration",
      starters: ["House Bread & Cultured Butter", "Coal-Roasted Carrots", "Crispy Calamari", "Seasonal Greens"],
      entrees: ["Black Garlic Short Rib", "Cedar-Plank Salmon", "House-Made Pappardelle", "Dry-Aged Ribeye Supplement"],
      sides: ["Crispy Potatoes", "Charred Broccolini", "Roasted Mushrooms"],
      dessert: ["Burnt Honey Cheesecake", "Seasonal Dessert Duo"]
    },
    {
      id: "shared",
      name: "Shared-Table Menu",
      price: "$74 / guest",
      style: "Communal Family-Style",
      starters: ["House Bread", "Crispy Calamari", "Coal-Roasted Carrots"],
      entrees: ["Black Garlic Short Rib", "Cedar-Plank Salmon", "House-Made Pappardelle"],
      sides: ["Charred Broccolini", "Crispy Potatoes"],
      dessert: ["Burnt Honey Cheesecake"]
    },
    {
      id: "brunch",
      name: "Private Brunch Menu",
      price: "$52 / guest",
      style: "Weekend Brunch Gathering",
      welcome: ["Coffee Service", "Seasonal Pastry Board"],
      entrees: ["Ember Benedict", "Short Rib Hash", "Wood-Fired Peach French Toast", "Ember Burger"],
      dessert: ["Mini Burnt Honey Cheesecake"]
    }
  ],
  beveragePackages: [
    { name: "Hosted Beer & Wine", desc: "Two red wines, two white wines, sparkling wine, draft beers & zero-proof beverages." },
    { name: "Standard Hosted Bar", desc: "Selected spirits, house wines, craft beers, signature cocktails & zero-proof drinks." },
    { name: "Premium Hosted Bar", desc: "Full top-shelf spirit selection, signature cocktails, sparkling wine & zero-proof pairings." },
    { name: "Artisanal Zero-Proof Package", desc: "Craft nonalcoholic cocktails (Lunar Bloom, Citrus Spritz), house lemonades & coffee service." }
  ],
  showcaseNotice: "Orbit & Ember Kitchen + Bar is a fictional restaurant concept created to demonstrate Dark Star Consulting's restaurant branding, menu, photo storytelling, local discovery, trust-building, reservation, ordering, and private dining services."
};
