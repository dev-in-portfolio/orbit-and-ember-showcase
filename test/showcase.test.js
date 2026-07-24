const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const netlify = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");

const labels = [
  "Original Site",
  "Level 0",
  "Level 0 + Brand Finish",
  "Level 0 + Menu Experience",
  "Level 0 + Photo Story",
  "Level 0 + Local Discovery",
  "Level 0 + Trust & Reputation",
  "Level 0 + Order & Reserve",
  "Level 0 + Catering & Private Events",
  "Level 0 + Guest Engagement",
  "Level 0 + Menu Collections",
  "Level 0 + Signature Interactive Experience",
  "Level 0 + Digital Menu Concierge",
  "Level 0 + Multi-Location Growth"
];

const routes = [
  "orbit-ember-before/index.html",
  "orbit-ember/index.html",
  "orbit-ember-1/index.html",
  "orbit-ember-2/menu.html",
  "orbit-ember-3/story.html",
  "orbit-ember-4/visit.html",
  "orbit-ember-5/story.html",
  "orbit-ember-6/index.html",
  "orbit-ember-7/experience.html",
  "orbit-ember-10/engagement.html",
  "orbit-ember-11/collections.html",
  "the-orbit-experience",
  "menu-concierge",
  "locations"
];

test("contains the canonical 14 entries in order", () => {
  let offset = 0;
  for (const label of labels) {
    const next = index.indexOf(`"${label}"`, offset);
    assert.notEqual(next, -1, `missing or out of order: ${label}`);
    offset = next + label.length;
  }
  assert.equal(new Set(labels).size, 14);
});

test("contains unique intentional routes and every file target exists", () => {
  assert.equal(new Set(routes).size, 14);
  for (const route of routes.filter(route => route.includes("."))) {
    assert.ok(fs.existsSync(path.join(root, route)), `missing ${route}`);
  }
  for (const cleanRoute of routes.filter(route => !route.includes("."))) {
    assert.match(netlify, new RegExp(`from = "/${cleanRoute}"`));
  }
});

test("invented packages are absent from the canonical registry", () => {
  const registry = index.slice(index.indexOf("const entries = ["), index.indexOf("const cards ="));
  for (const invented of ["Guest Follow-Up & Loyalty", "Performance & Insights", "Operations & Automation", "Launch, Maintenance & Growth"]) {
    assert.ok(!registry.includes(invented), invented);
  }
});

test("approved location model is present", () => {
  const locationData = fs.readFileSync(path.join(root, "orbit-ember-14", "locations-data.js"), "utf8");
  for (const location of ["South End", "Ballantyne", "Lake Norman"]) assert.ok(locationData.includes(location));
  for (const location of ["Raleigh", "Charleston"]) assert.ok(!locationData.includes(location));
});

test("signature, concierge, and collection implementations are substantive", () => {
  const interactive = fs.readFileSync(path.join(root, "orbit-ember-12", "orbit-interactive-engine.js"), "utf8");
  assert.match(interactive, /getContext\('webgl'/i);
  assert.match(interactive, /createShader|gl_FragColor/i);
  assert.match(interactive, /webglcontextlost/i);
  assert.match(fs.readFileSync(path.join(root, "orbit-ember-13", "concierge-engine.js"), "utf8"), /filter|score|recommend/i);
  const collections = fs.readFileSync(path.join(root, "orbit-ember-11", "collections-data.js"), "utf8");
  assert.match(collections, /Chef Julian/);
  assert.match(collections, /Private Dining Menus/);
});

test("Netlify routes legacy base paths and clean package URLs", () => {
  assert.match(netlify, /from = "\/restaurants\/\*"\s+to = "\/:splat"\s+status = 200/s);
  for (const route of ["/the-orbit-experience", "/menu-concierge", "/locations"]) {
    assert.match(netlify, new RegExp(`from = "${route}"`));
  }
});

test("concierge loads the shared authoritative menu source", () => {
  const concierge = fs.readFileSync(path.join(root, "orbit-ember-13", "concierge-engine.js"), "utf8");
  assert.match(concierge, /MENU_SOURCE = "\/data\/menu\.json"/);
  assert.ok(!concierge.includes("INLINE_SHOWCASE_MENU"));
  const menu = JSON.parse(fs.readFileSync(path.join(root, "data", "menu.json"), "utf8"));
  assert.ok(Array.isArray(menu.menu) && menu.menu.length >= 20);
  assert.equal(new Set(menu.menu.map(item => item.id)).size, menu.menu.length);
});

test("private event inquiry uses the required non-booking notice", () => {
  const events = fs.readFileSync(path.join(root, "orbit-ember-7", "experience.html"), "utf8");
  assert.match(events, /Submitting an inquiry does not reserve the space or confirm availability\./);
});
