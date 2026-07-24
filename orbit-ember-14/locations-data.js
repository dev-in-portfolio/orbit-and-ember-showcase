/**
 * ORBIT & EMBER — MULTI-LOCATION GROWTH DATA ENGINE
 * Authoritative Location Registry, Status Control Matrix, and Menu Inheritance Engine.
 */

(function () {
  'use strict';

  const LOCATIONS_REGISTRY = [
    {
      id: "location-south-end",
      slug: "south-end",
      publicName: "Orbit & Ember South End",
      shortName: "South End",
      role: "flagship",
      status: "open",
      statusLabel: "Open Flagship",
      market: "Charlotte",
      neighborhood: "South End",
      state: "North Carolina",
      country: "United States",
      timeZone: "America/New_York",
      publicAddress: "2250 Camden Ember Way, Charlotte, NC 28203",
      phone: "704-555-0148",
      email: "southend@orbitandember.example",
      heroImage: "images/featured-steak.jpg",
      tagline: "The original Orbit & Ember experience featuring open wood-fired hearth cooking, craft mixology, weekend brunch, and The Ember Room.",
      hours: {
        dinner: {
          "Mon - Thu": "5:00 PM – 10:00 PM",
          "Fri - Sat": "5:00 PM – 11:00 PM",
          "Sun": "5:00 PM – 9:00 PM"
        },
        brunch: {
          "Sat - Sun": "10:00 AM – 2:30 PM"
        },
        bar: "Open through dinner close"
      },
      features: ["Full Dinner Menu", "Weekend Brunch", "Craft Cocktail Bar", "Zero-Proof Mixology", "The Ember Room (Private Dining)", "Takeout", "Reservations"],
      actions: {
        canReserve: true,
        canOrder: true,
        canCall: true,
        canGetDirections: true,
        canViewMenu: true,
        canRequestPrivateDining: true
      },
      fictionalShowcase: true
    },
    {
      id: "location-ballantyne",
      slug: "ballantyne",
      publicName: "Orbit & Ember Ballantyne",
      shortName: "Ballantyne",
      role: "future-growth",
      status: "opening-soon",
      statusLabel: "Opening Soon",
      market: "Charlotte",
      neighborhood: "Ballantyne",
      state: "North Carolina",
      country: "United States",
      timeZone: "America/New_York",
      publicAddress: "Ballantyne, Charlotte, NC (Address unannounced)",
      phone: null,
      email: "ballantyne@orbitandember.example",
      heroImage: "images/wood-fired-hearth.jpg",
      tagline: "A new Orbit & Ember experience being developed for Ballantyne, bringing wood-fired cooking and seasonal mixology to South Charlotte.",
      openingTarget: "Expected 2027",
      features: ["Expanded Cocktail Lounge", "Private Dining Suite", "Spacious Patio", "Weekday Lunch Consideration"],
      actions: {
        canReserve: false,
        canOrder: false,
        canCall: false,
        canGetDirections: false,
        canViewMenu: false, // Menu preview only
        canGetUpdates: true,
        canRequestPrivateDining: false
      },
      fictionalShowcase: true
    },
    {
      id: "location-lake-norman",
      slug: "lake-norman",
      publicName: "Orbit & Ember Lake Norman",
      shortName: "Lake Norman",
      role: "future-market",
      status: "planned",
      statusLabel: "Planned Market Concept",
      market: "Lake Norman",
      neighborhood: "Lake Norman Region",
      state: "North Carolina",
      country: "United States",
      timeZone: "America/New_York",
      publicAddress: null,
      phone: null,
      email: null,
      heroImage: "images/lounge-ambiance.jpg",
      tagline: "Exploring future growth opportunities in the Lake Norman area. No site or opening date has been confirmed.",
      features: ["Market Exploration", "Waterfront Hospitality Concept"],
      actions: {
        canReserve: false,
        canOrder: false,
        canCall: false,
        canGetDirections: false,
        canViewMenu: false,
        canGetUpdates: false,
        canRequestPrivateDining: false
      },
      fictionalShowcase: true
    }
  ];

  class MultiLocationEngine {
    constructor() {
      this.locations = LOCATIONS_REGISTRY;
      this.preferredLocationId = localStorage.getItem('orbit_preferred_location') || 'location-south-end';
    }

    getLocations() {
      return this.locations;
    }

    getLocationBySlug(slug) {
      return this.locations.find(l => l.slug === slug) || this.locations[0];
    }

    getLocationById(id) {
      return this.locations.find(l => l.id === id) || this.locations[0];
    }

    getPreferredLocation() {
      return this.getLocationById(this.preferredLocationId);
    }

    setPreferredLocation(locationId) {
      this.preferredLocationId = locationId;
      localStorage.setItem('orbit_preferred_location', locationId);
      window.dispatchEvent(new CustomEvent('orbit_location_changed', { detail: { locationId } }));
    }

    calculateNearestLocation(query) {
      if (!query) return this.getLocationById('location-south-end');
      const q = query.toLowerCase().trim();
      if (q.includes('ballantyne')) return this.getLocationById('location-ballantyne');
      if (q.includes('lake') || q.includes('norman')) return this.getLocationById('location-lake-norman');
      return this.getLocationById('location-south-end');
    }
  }

  window.orbitMultiLocation = new MultiLocationEngine();
})();
