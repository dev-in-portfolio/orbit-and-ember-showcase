// Centralized Menu Collections Source of Truth for Orbit & Ember Kitchen + Bar

const COLLECTIONS_CONFIG = {
  hubTitle: "Menu Collections",
  promise: "More ways to explore the menu, without losing the menu itself.",
  collections: [
    {
      id: "signature",
      name: "Signature Orbit & Ember",
      type: "Signature",
      eyebrow: "Featured Collection",
      tag: "Dinner & Drinks",
      desc: "The plates, cocktails, and desserts that most clearly express Orbit & Ember's live-fire character.",
      items: [
        { name: "Black Garlic Short Rib", price: "$34", note: "Slow-braised with parsnip purée & red wine reduction" },
        { name: "Ember-Roasted Chicken", price: "$29", note: "Half chicken with roasted garlic jus & fingerlings" },
        { name: "Charred Carrots with Whipped Feta", price: "$14", note: "Fire-charred with toasted seeds & warm-spice honey" },
        { name: "Copper Moon Cocktail", price: "$15", note: "Bourbon, amaro, orange & black walnut bitters" },
        { name: "Lunar Bloom (Zero-Proof)", price: "$10", note: "Hibiscus, blackberry, lime & rosemary soda" },
        { name: "Burnt Honey Cheesecake", price: "$12", note: "Cultured cream, roasted pear & oat crumble" }
      ]
    },
    {
      id: "fire",
      name: "Around the Fire",
      type: "Dinner",
      eyebrow: "Wood-Fired Cuisine",
      tag: "Live-Fire Roasting",
      desc: "Dishes shaped by direct flame, char, smoke, and live embers in our open kitchen hearth.",
      items: [
        { name: "Wood-Fired Mushrooms", price: "$17", note: "Black garlic, farro, herbs & aged cheese" },
        { name: "Fire-Roasted Oysters", price: "$18", note: "Herb butter, breadcrumbs & smoked chile" },
        { name: "Smoked Pepper Flatbread", price: "$16", note: "Caramelized onion, roasted tomato & aged cheese" }
      ]
    },
    {
      id: "sharing",
      name: "Made for Sharing",
      type: "Shared",
      eyebrow: "Table Plates",
      tag: "Starters & Boards",
      desc: "Starters, small plates, and table-centered dishes built for more than one fork.",
      items: [
        { name: "Hearth Bread & Cultured Butter", price: "$8", note: "House sourdough with smoked sea salt & jam" },
        { name: "Crispy Potatoes & Charred Onion Dip", price: "$11", note: "Triple-cooked with herbs & chile oil" },
        { name: "Seasonal Cheese & Preserve Board", price: "$19", note: "Regional cheeses, spiced nuts & toasted bread" }
      ]
    },
    {
      id: "brunch",
      name: "Weekend Brunch",
      type: "Brunch",
      eyebrow: "Daytime Service",
      tag: "Sat & Sun 10am-2:30pm",
      desc: "Savory Benedicts, sweet brioche French toast, specialty coffee, and morning spritzes.",
      items: [
        { name: "Ember Benedict", price: "$18", note: "Poached eggs, smoked ham & charred hollandaise" },
        { name: "Short Rib Hash", price: "$19", note: "Braised rib, roasted peppers, potatoes & 2 eggs" },
        { name: "Wood-Fired Peach French Toast", price: "$17", note: "Mascarpone, toasted pecans & warm maple" }
      ]
    },
    {
      id: "cocktails",
      name: "Cocktails After Dark",
      type: "Drinks",
      eyebrow: "Craft Spirits",
      tag: "Nightly Service",
      desc: "Rich, bright, smoky, and classic drinks crafted for the evening side of Orbit & Ember.",
      items: [
        { name: "Solar Flare", price: "$15", note: "Reposado tequila, smoked chile, grapefruit & agave" },
        { name: "Event Horizon Espresso Martini", price: "$16", note: "Vodka, fresh espresso, cacao & sea salt" },
        { name: "Ash & Orchard", price: "$15", note: "Apple brandy, rye, smoked tea & spiced honey" }
      ]
    },
    {
      id: "zeroproof",
      name: "Zero-Proof, Fully Considered",
      type: "Zero-Proof",
      eyebrow: "Spirit-Free",
      tag: "Non-Alcoholic",
      desc: "Spirit-free drinks crafted with acidity, bitterness, aroma, and balance.",
      items: [
        { name: "Ember Tonic", price: "$9", note: "Charred citrus, gentian, rosemary & smoked salt" },
        { name: "Garden Orbit", price: "$9", note: "Cucumber, basil, green tea & sparkling water" },
        { name: "Bright Ash", price: "$10", note: "Pineapple, smoked tea, ginger & lime" }
      ]
    },
    {
      id: "dessert",
      name: "Save Room for Dessert",
      type: "Desserts",
      eyebrow: "Sweet Finish",
      tag: "Pastry & Coffee",
      desc: "Dark caramel, fruit, chocolate, warm spice, and cultured dairy for a refined finish.",
      items: [
        { name: "Dark Chocolate Torte", price: "$12", note: "Espresso cream, cocoa nib & sea salt" },
        { name: "Wood-Fired Fruit", price: "$11", note: "Cultured cream, toasted grain & warm spice" },
        { name: "Brown Butter Custard", price: "$11", note: "Caramelized apple, oat crumble & cider reduction" }
      ]
    }
  ],
  pairings: [
    { food: "Black Garlic Short Rib", drink: "Copper Moon Cocktail", note: "The drink's orange & amaro bitterness cuts through the braised rib's richness." },
    { food: "Wood-Fired Chicken", drink: "Solar Flare Cocktail", note: "Smoked chile and grapefruit highlight the citrus-marinated chicken skin." },
    { food: "Charred Carrots", drink: "Lunar Bloom (Zero-Proof)", note: "Tart berry & lime provide a crisp, refreshing contrast to warm-spice honey." }
  ],
  showcaseNotice: "Orbit & Ember Kitchen + Bar is a fictional restaurant concept created to demonstrate Dark Star Consulting's restaurant branding, menu, photo storytelling, local discovery, trust-building, reservation, ordering, private dining, guest follow-up, loyalty, performance-reporting, operations, guest-engagement, and menu-collection services."
};
