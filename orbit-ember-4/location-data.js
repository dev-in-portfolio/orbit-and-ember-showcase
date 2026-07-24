// Master Business Information & Real-Time Local Engine V3 for Orbit & Ember Kitchen + Bar

const BUSINESS_INFO = {
  name: "Orbit & Ember Kitchen + Bar",
  legalName: "Orbit & Ember LLC",
  tagline: "Wood-Fired Hearth Cooking & Craft Spirits in Charlotte",
  address: {
    streetAddress: "300 S Tryon St",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "28202",
    addressCountry: "US",
    neighborhood: "South End / Uptown Charlotte",
    formatted: "300 S Tryon St, Charlotte, NC 28202"
  },
  phone: "(704) 555-0198",
  telLink: "tel:+17045550198",
  email: "hospitality@orbitandember.com",
  geo: {
    latitude: 35.2265,
    longitude: -80.8431
  },
  urls: {
    website: "http://localhost:8082/restaurants/orbit-ember-4/",
    menu: "http://localhost:8082/restaurants/orbit-ember-4/menu.html",
    reservation: "http://localhost:8082/restaurants/orbit-ember-4/reserve.html",
    googleMaps: "https://maps.google.com/?q=300+S+Tryon+St,+Charlotte,+NC+28202",
    appleMaps: "https://maps.apple.com/?q=300+S+Tryon+St,+Charlotte,+NC+28202",
    waze: "https://waze.com/ul?q=300+S+Tryon+St+Charlotte+NC"
  },
  hours: [
    { day: "Monday", hours: "4:30 PM - 10:00 PM", openHour: 16.5, closeHour: 22.0, service: "Dinner & Spirits" },
    { day: "Tuesday", hours: "4:30 PM - 10:00 PM", openHour: 16.5, closeHour: 22.0, service: "Dinner & Spirits" },
    { day: "Wednesday", hours: "4:30 PM - 10:00 PM", openHour: 16.5, closeHour: 22.0, service: "Dinner & Spirits" },
    { day: "Thursday", hours: "4:30 PM - 10:00 PM", openHour: 16.5, closeHour: 22.0, service: "Dinner & Spirits" },
    { day: "Friday", hours: "4:30 PM - 11:00 PM", openHour: 16.5, closeHour: 23.0, service: "Dinner & Late Bar" },
    { day: "Saturday", hours: "10:00 AM - 2:30 PM, 4:30 PM - 11:00 PM", openHour: 10.0, closeHour: 23.0, service: "Weekend Brunch & Dinner" },
    { day: "Sunday", hours: "10:00 AM - 2:30 PM, 4:30 PM - 9:30 PM", openHour: 10.0, closeHour: 21.5, service: "Weekend Brunch & Dinner" }
  ],
  landmarks: [
    { name: "Knight Theater", distance: "2 Min Walk", desc: "Perfect for pre-theater wood-fired dinner & craft cocktails." },
    { name: "Mint Museum Uptown", distance: "3 Min Walk", desc: "Located directly across Tryon Street." },
    { name: "Bank of America Stadium", distance: "8 Min Walk", desc: "Ideal for game-day dining & post-match drinks." },
    { name: "3rd St / Convention Center Light Rail", distance: "2 Blocks", desc: "LYNX Blue Line rapid transit access." }
  ]
};

// Calculate real-time status with countdown
function getRealtimeStatusV3() {
  const now = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[now.getDay()];
  const currentHour = now.getHours() + (now.getMinutes() / 60);

  const todayInfo = BUSINESS_INFO.hours.find(h => h.day === currentDayName);

  if (!todayInfo) return { isOpen: false, text: "Closed Today", badgeClass: "is-closed" };

  if (currentDayName === "Saturday" || currentDayName === "Sunday") {
    const isBrunch = currentHour >= 10.0 && currentHour <= 14.5;
    const isDinner = currentHour >= 16.5 && currentHour <= todayInfo.closeHour;
    if (isBrunch) return { isOpen: true, text: "🟢 Open Now • Weekend Brunch (Until 2:30 PM)", badgeClass: "is-open" };
    if (isDinner) return { isOpen: true, text: `🟢 Open Now • Dinner Service (Until ${currentDayName === "Sunday" ? "9:30 PM" : "11:00 PM"})`, badgeClass: "is-open" };
    if (currentHour < 10.0) return { isOpen: false, text: "🟡 Closed Now • Brunch Opens at 10:00 AM", badgeClass: "is-closed" };
    if (currentHour > 14.5 && currentHour < 16.5) return { isOpen: false, text: "🟡 Afternoon Prep • Dinner Opens at 4:30 PM", badgeClass: "is-closed" };
    return { isOpen: false, text: "🟡 Closed Now • Opens Tomorrow at 10:00 AM", badgeClass: "is-closed" };
  } else {
    if (currentHour >= todayInfo.openHour && currentHour <= todayInfo.closeHour) {
      return { isOpen: true, text: "🟢 Open Now • Wood-Fired Dinner & Bar", badgeClass: "is-open" };
    }
    if (currentHour < todayInfo.openHour) return { isOpen: false, text: "🟡 Closed Now • Dinner Opens Today at 4:30 PM", badgeClass: "is-closed" };
    return { isOpen: false, text: "🟡 Closed Now • Opens Tomorrow at 4:30 PM", badgeClass: "is-closed" };
  }
}

// Copy Address Helper
function copyAddressToClipboard() {
  const addr = BUSINESS_INFO.address.formatted;
  navigator.clipboard.writeText(addr).then(() => {
    const toast = document.createElement('div');
    toast.className = 'copy-address-toast';
    toast.textContent = `📋 Copied "${addr}" to clipboard!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }).catch(err => {
    alert(`Address: ${addr}`);
  });
}
