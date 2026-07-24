// Centralized Action & Order & Reserve Source of Truth for Orbit & Ember Kitchen + Bar

const ACTION_CONFIG = {
  restaurantName: "Orbit & Ember Kitchen + Bar",
  phone: "(704) 555-0198",
  telLink: "tel:+17045550198",
  address: "300 S Tryon St, Charlotte, NC 28202",
  googleMapsUrl: "https://maps.google.com/?q=300+S+Tryon+St,+Charlotte,+NC+28202",

  actions: {
    reserve: {
      id: "reserve",
      label: "Reserve a Table",
      shortLabel: "Reserve",
      provider: "Resy",
      href: "https://resy.com/cities/clt/orbit-and-ember",
      enabled: true,
      partyLimitOnline: 8,
      holdTimeMinutes: 15,
      releaseWindowDays: 30
    },
    waitlist: {
      id: "waitlist",
      label: "Join the Waitlist",
      shortLabel: "Waitlist",
      provider: "Resy Live",
      href: "https://resy.com/cities/clt/orbit-and-ember/waitlist",
      enabled: true
    },
    orderPickup: {
      id: "orderPickup",
      label: "Order Takeout",
      shortLabel: "Order Pickup",
      provider: "Toast Online",
      href: "https://order.toasttab.com/online/orbit-and-ember",
      enabled: true,
      leadTimeMinutes: "25-40 mins",
      pickupLocation: "Host Stand at Main Entrance"
    },
    orderDelivery: {
      id: "orderDelivery",
      label: "Order Delivery",
      shortLabel: "Delivery",
      provider: "DoorDash Drive",
      href: "https://www.doordash.com/store/orbit-and-ember-charlotte-28202/",
      enabled: true
    },
    giftCards: {
      id: "giftCards",
      label: "Buy a Gift Card",
      shortLabel: "Gift Cards",
      provider: "Toast Gift Cards",
      href: "https://www.toasttab.com/orbit-and-ember/giftcards",
      enabled: true
    },
    privateDining: {
      id: "privateDining",
      label: "Plan a Private Event",
      shortLabel: "Private Dining",
      enabled: true,
      maxSeated: 16,
      maxReception: 24
    }
  },

  showcaseNotice: "Orbit & Ember Kitchen + Bar is a fictional restaurant concept created to demonstrate Dark Star Consulting's restaurant branding, menu, photo storytelling, local discovery, trust-building, reservation, and ordering services."
};
