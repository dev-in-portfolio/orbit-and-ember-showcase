import os

s12_dir = r"C:\Users\dtoro\.gemini\antigravity\scratch\orbit-and-ember-demo\orbit-ember-12"

# 1. High-Fidelity 3D Engine with Three.js embedded and smooth 3D restaurant mesh generation
engine_js = r'''/**
 * ORBIT & EMBER — PHOTOREALISTIC 3D RESTAURANT EXPERIENCE ENGINE
 * High-fidelity 3D meshes (Curved ceramics, crystal glassware, wood table, copper lamps, hearth fire).
 */

(function () {
  'use strict';

  class OrbitPhotoreal3DEngine {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      if (!this.canvas) return;

      this.isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.activeAtmosphere = 'candlelight';
      this.activeTableScale = 'two';

      this.initThree();
      this.buildLighting();
      this.buildEnvironment();
      this.buildModularTable();
      this.buildHearthFireAndEmbers();
      this.initCameraPositions();
      this.bindEvents();
      this.animate();
    }

    initThree() {
      if (typeof THREE === 'undefined') return;

      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.3;

      this.scene = new THREE.Scene();
      this.scene.fog = new THREE.FogExp2(0x080605, 0.038);

      this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
      this.clock = new THREE.Clock();

      this.mouseX = 0;
      this.mouseY = 0;
      this.targetMouseX = 0;
      this.targetMouseY = 0;
    }

    initCameraPositions() {
      this.cameraPresets = {
        entry: { pos: new THREE.Vector3(0, 3.4, 9.2), target: new THREE.Vector3(0, 1.15, 0) },
        step1: { pos: new THREE.Vector3(-2.4, 2.2, 6.4), target: new THREE.Vector3(0.4, 1.1, 0) },
        step2: { pos: new THREE.Vector3(2.2, 2.0, 5.5), target: new THREE.Vector3(-0.3, 1.0, 0) },
        step3: { pos: new THREE.Vector3(0, 1.45, 2.85), target: new THREE.Vector3(0, 0.9, 0.1) },
        step4: { pos: new THREE.Vector3(0, 4.4, 6.8), target: new THREE.Vector3(0, 0.55, 0) },
        result: { pos: new THREE.Vector3(-1.5, 2.4, 5.2), target: new THREE.Vector3(0, 1.05, 0) }
      };

      this.currentCamPos = this.cameraPresets.entry.pos.clone();
      this.targetCamPos = this.cameraPresets.entry.pos.clone();
      this.currentCamTarget = this.cameraPresets.entry.target.clone();
      this.targetCamTarget = this.cameraPresets.entry.target.clone();

      this.camera.position.copy(this.currentCamPos);
      this.camera.lookAt(this.currentCamTarget);
    }

    buildLighting() {
      this.ambientLight = new THREE.AmbientLight(0x2d211a, 1.4);
      this.scene.add(this.ambientLight);

      // Key Hearth Fire Light
      this.hearthLight = new THREE.PointLight(0xff5500, 5.8, 22);
      this.hearthLight.position.set(0, 2.2, -4.5);
      this.hearthLight.castShadow = true;
      this.hearthLight.shadow.mapSize.width = 1024;
      this.hearthLight.shadow.mapSize.height = 1024;
      this.scene.add(this.hearthLight);

      // Burnished Copper Overhead Lamps
      this.pendantLight1 = new THREE.PointLight(0xf5b975, 3.6, 14);
      this.pendantLight1.position.set(-1.2, 3.9, 0.5);
      this.scene.add(this.pendantLight1);

      this.pendantLight2 = new THREE.PointLight(0xf5b975, 3.6, 14);
      this.pendantLight2.position.set(1.2, 3.9, 0.5);
      this.scene.add(this.pendantLight2);

      // Sun Light
      this.sunLight = new THREE.DirectionalLight(0xfde047, 0.0);
      this.sunLight.position.set(8, 10, -5);
      this.scene.add(this.sunLight);
    }

    buildEnvironment() {
      // Polished Dark Floor
      const floorGeo = new THREE.PlaneGeometry(32, 32);
      const floorMat = new THREE.MeshStandardMaterial({
        color: 0x080605,
        roughness: 0.18,
        metalness: 0.2
      });
      this.floor = new THREE.Mesh(floorGeo, floorMat);
      this.floor.rotation.x = -Math.PI / 2;
      this.floor.receiveShadow = true;
      this.scene.add(this.floor);

      // Back Wall
      const wallGeo = new THREE.PlaneGeometry(32, 16);
      const wallMat = new THREE.MeshStandardMaterial({
        color: 0x100d0b,
        roughness: 0.88
      });
      this.backWall = new THREE.Mesh(wallGeo, wallMat);
      this.backWall.position.set(0, 8, -6);
      this.scene.add(this.backWall);

      // Steel Oven Structure
      const ovenGeo = new THREE.BoxGeometry(5.4, 3.9, 1.4);
      const ovenMat = new THREE.MeshStandardMaterial({
        color: 0x161311,
        roughness: 0.45,
        metalness: 0.55
      });
      this.ovenMesh = new THREE.Mesh(ovenGeo, ovenMat);
      this.ovenMesh.position.set(0, 1.95, -5.4);
      this.ovenMesh.castShadow = true;
      this.ovenMesh.receiveShadow = true;
      this.scene.add(this.ovenMesh);

      // Oven Fire Interior Chamber
      const chamberGeo = new THREE.BoxGeometry(3.8, 2.1, 0.9);
      const chamberMat = new THREE.MeshBasicMaterial({ color: 0x280900 });
      const chamber = new THREE.Mesh(chamberGeo, chamberMat);
      chamber.position.set(0, 1.35, -5.1);
      this.scene.add(chamber);

      // Copper Pendant Lamps
      const copperMat = new THREE.MeshStandardMaterial({
        color: 0xd9954a,
        metalness: 0.96,
        roughness: 0.15
      });

      const shadeGeo = new THREE.CylinderGeometry(0.12, 0.58, 0.48, 32);
      const lamp1 = new THREE.Mesh(shadeGeo, copperMat);
      lamp1.position.set(-1.2, 4.2, 0.5);
      this.scene.add(lamp1);

      const lamp2 = new THREE.Mesh(shadeGeo, copperMat);
      lamp2.position.set(1.2, 4.2, 0.5);
      this.scene.add(lamp2);
    }

    buildModularTable() {
      this.tableGroup = new THREE.Group();

      // Dark Walnut Tabletop
      const topGeo = new THREE.BoxGeometry(3.9, 0.14, 1.95);
      const topMat = new THREE.MeshStandardMaterial({
        color: 0x1c130f,
        roughness: 0.28,
        metalness: 0.1
      });
      this.tableTop = new THREE.Mesh(topGeo, topMat);
      this.tableTop.position.set(0, 0.85, 0);
      this.tableTop.castShadow = true;
      this.tableTop.receiveShadow = true;
      this.tableGroup.add(this.tableTop);

      // Steel Legs
      const legGeo = new THREE.BoxGeometry(0.16, 0.85, 1.5);
      const legMat = new THREE.MeshStandardMaterial({ color: 0x0a0807, metalness: 0.88 });

      const leg1 = new THREE.Mesh(legGeo, legMat);
      leg1.position.set(-1.55, 0.425, 0);
      this.tableGroup.add(leg1);

      const leg2 = new THREE.Mesh(legGeo, legMat);
      leg2.position.set(1.55, 0.425, 0);
      this.tableGroup.add(leg2);

      this.placeSettingsGroup = new THREE.Group();
      this.tableGroup.add(this.placeSettingsGroup);

      this.scene.add(this.tableGroup);
      this.updateTableSettings('two');
    }

    updateTableSettings(tableType) {
      if (!this.placeSettingsGroup) return;

      while (this.placeSettingsGroup.children.length > 0) {
        this.placeSettingsGroup.remove(this.placeSettingsGroup.children[0]);
      }

      let count = 2;
      let scaleX = 3.9;

      if (tableType === 'solo') { count = 1; scaleX = 2.6; }
      else if (tableType === 'two') { count = 2; scaleX = 3.9; }
      else if (tableType === 'friends') { count = 4; scaleX = 4.9; }
      else if (tableType === 'group' || tableType === 'celebration') { count = 6; scaleX = 6.2; }
      else if (tableType === 'business') { count = 4; scaleX = 4.5; }

      this.tableTop.scale.set(scaleX / 3.9, 1, 1);

      const plateMat = new THREE.MeshStandardMaterial({ color: 0xf6f1eb, roughness: 0.15 });
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.52,
        roughness: 0.03,
        transmission: 0.94,
        thickness: 0.28
      });

      const plateGeo = new THREE.CylinderGeometry(0.35, 0.31, 0.04, 32);
      const glassGeo = new THREE.CylinderGeometry(0.12, 0.1, 0.4, 24);

      const positions = [];
      if (count === 1) {
        positions.push({ x: 0, z: 0.3 });
      } else if (count === 2) {
        positions.push({ x: -1.0, z: 0.3 }, { x: 1.0, z: 0.3 });
      } else if (count === 4) {
        positions.push({ x: -1.35, z: 0.4 }, { x: 1.35, z: 0.4 }, { x: -1.35, z: -0.4 }, { x: 1.35, z: -0.4 });
      } else {
        positions.push(
          { x: -2.0, z: 0.4 }, { x: 0, z: 0.4 }, { x: 2.0, z: 0.4 },
          { x: -2.0, z: -0.4 }, { x: 0, z: -0.4 }, { x: 2.0, z: -0.4 }
        );
      }

      positions.forEach(p => {
        const plate = new THREE.Mesh(plateGeo, plateMat);
        plate.position.set(p.x, 0.94, p.z);
        plate.castShadow = true;
        this.placeSettingsGroup.add(plate);

        const glass = new THREE.Mesh(glassGeo, glassMat);
        glass.position.set(p.x + 0.33, 1.14, p.z - 0.15);
        this.placeSettingsGroup.add(glass);
      });

      const candleGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.25, 16);
      const candleMat = new THREE.MeshStandardMaterial({ color: 0xfff6ea, roughness: 0.35 });
      const candle = new THREE.Mesh(candleGeo, candleMat);
      candle.position.set(0, 1.03, 0);
      this.placeSettingsGroup.add(candle);
    }

    buildHearthFireAndEmbers() {
      const particleCount = 160;
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const speeds = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 3.6;
        positions[i * 3 + 1] = Math.random() * 2.8 + 0.5;
        positions[i * 3 + 2] = -5.0 + (Math.random() - 0.5) * 0.8;
        speeds[i] = Math.random() * 0.018 + 0.006;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      this.emberSpeeds = speeds;

      const pMaterial = new THREE.PointsMaterial({
        color: 0xff6611,
        size: 0.15,
        transparent: true,
        opacity: 0.92,
        blending: THREE.AdditiveBlending
      });

      this.emberParticles = new THREE.Points(geometry, pMaterial);
      this.scene.add(this.emberParticles);
    }

    setAtmosphere(theme) {
      this.activeAtmosphere = theme;
      if (!this.scene) return;

      if (theme === 'golden-hour') {
        this.scene.fog.color.setHex(0x1a130c);
        this.ambientLight.color.setHex(0x3e2b1a);
        this.sunLight.intensity = 3.0;
        this.hearthLight.intensity = 2.4;
        this.pendantLight1.color.setHex(0xfde047);
        this.pendantLight2.color.setHex(0xfde047);
      } else if (theme === 'by-the-fire') {
        this.scene.fog.color.setHex(0x1d0a07);
        this.ambientLight.color.setHex(0x340e08);
        this.sunLight.intensity = 0.0;
        this.hearthLight.intensity = 7.5;
        this.hearthLight.color.setHex(0xff3300);
      } else if (theme === 'at-the-bar') {
        this.scene.fog.color.setHex(0x0e0b1c);
        this.ambientLight.color.setHex(0x1c1236);
        this.sunLight.intensity = 0.0;
        this.hearthLight.intensity = 3.5;
        this.pendantLight1.color.setHex(0xa855f7);
        this.pendantLight2.color.setHex(0xa855f7);
      } else if (theme === 'brighter-brunch') {
        this.scene.fog.color.setHex(0x281f17);
        this.ambientLight.color.setHex(0x4e3d2c);
        this.sunLight.intensity = 4.5;
        this.hearthLight.intensity = 1.8;
        this.pendantLight1.color.setHex(0xfff8ee);
        this.pendantLight2.color.setHex(0xfff8ee);
      } else {
        this.scene.fog.color.setHex(0x060504);
        this.ambientLight.color.setHex(0x2d211a);
        this.sunLight.intensity = 0.0;
        this.hearthLight.intensity = 5.8;
        this.hearthLight.color.setHex(0xff5500);
        this.pendantLight1.color.setHex(0xf5b975);
        this.pendantLight2.color.setHex(0xf5b975);
      }
    }

    setCameraStep(stepKey) {
      const preset = this.cameraPresets ? this.cameraPresets[stepKey] : null;
      if (!preset) return;

      this.targetCamPos.copy(preset.pos);
      this.targetCamTarget.copy(preset.target);
    }

    bindEvents() {
      window.addEventListener('resize', () => {
        if (!this.renderer || !this.camera) return;
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
      });

      window.addEventListener('mousemove', (e) => {
        this.targetMouseX = (e.clientX / window.innerWidth - 0.5) * 0.35;
        this.targetMouseY = (e.clientY / window.innerHeight - 0.5) * 0.35;
      });
    }

    animate() {
      requestAnimationFrame(() => this.animate());
      if (!this.renderer || !this.scene || !this.camera) return;

      const delta = this.clock.getDelta();
      const time = this.clock.getElapsedTime();

      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

      if (!this.isReducedMotion) {
        this.currentCamPos.lerp(this.targetCamPos, 0.045);
        this.currentCamTarget.lerp(this.targetCamTarget, 0.045);
      } else {
        this.currentCamPos.copy(this.targetCamPos);
        this.currentCamTarget.copy(this.targetCamTarget);
      }

      this.camera.position.set(
        this.currentCamPos.x + this.mouseX,
        this.currentCamPos.y - this.mouseY,
        this.currentCamPos.z
      );
      this.camera.lookAt(this.currentCamTarget);

      if (this.hearthLight) {
        this.hearthLight.intensity += Math.sin(time * 9.0) * 0.45;
      }

      if (this.emberParticles) {
        const positions = this.emberParticles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length / 3; i++) {
          positions[i * 3 + 1] += this.emberSpeeds[i];
          positions[i * 3] += Math.sin(time + i) * 0.0035;
          if (positions[i * 3 + 1] > 4.6) {
            positions[i * 3 + 1] = 0.5;
            positions[i * 3] = (Math.random() - 0.5) * 3.4;
          }
        }
        this.emberParticles.geometry.attributes.position.needsUpdate = true;
      }

      this.renderer.render(this.scene, this.camera);
    }
  }

  // Scoring Engine & Result Data
  const ORBIT_RESULTS = {
    candlelit: {
      id: "candlelit",
      name: "The Candlelit Orbit",
      eyebrow: "A Slow Evening Near the Fire",
      intro: "Warm light, a measured pace, and a dinner that leaves room for one more course around the hearth.",
      beginWith: "Copper Moon (Cocktail) & Hearth Bread",
      bringToTable: "Charred Carrots & Black Garlic Short Rib",
      finishWith: "Burnt Honey Cheesecake",
      zeroProof: "Lunar Bloom (Wild Blackberry & Lime)",
      collection: "Signature Orbit & Ember",
      primaryCta: "Reserve a Table for Two",
      primaryUrl: "reserve.html"
    },
    fire: {
      id: "fire",
      name: "Around the Fire",
      eyebrow: "Built Around Flame and Char",
      intro: "Start with plates made to move around the table, then follow the fire into the main course.",
      beginWith: "Fire-Roasted Oysters & Smoked Pepper Flatbread",
      bringToTable: "Ember-Roasted Chicken & Wood-Fired Mushrooms",
      finishWith: "Wood-Fired Peach Dessert",
      zeroProof: "Bright Ash (Smoked Tea & Ginger)",
      collection: "Around the Fire Collection",
      primaryCta: "View Fire-Cooked Dishes",
      primaryUrl: "menu.html"
    },
    bar: {
      id: "bar",
      name: "The Bar Orbit",
      eyebrow: "Start with the Glass",
      intro: "Begin at the bar with a drink and a few smaller hearth plates, then decide whether the evening wants to stay there.",
      beginWith: "Solar Flare & Crispy Potatoes",
      bringToTable: "Wood-Fired Mushrooms & Smoked Flatbread",
      finishWith: "Event Horizon Espresso Martini",
      zeroProof: "Ember Tonic (Charred Citrus)",
      collection: "Cocktails After Dark",
      primaryCta: "Explore Cocktail Menu",
      primaryUrl: "menu.html"
    },
    golden: {
      id: "golden",
      name: "Golden Hour at Orbit & Ember",
      eyebrow: "A Brighter Beginning",
      intro: "Citrus, herbs, a little daylight, and a table that can move naturally into dinner.",
      beginWith: "First Light Spritz & Charred Carrots",
      bringToTable: "Ember-Roasted Half Chicken & Dressed Greens",
      finishWith: "Seasonal Fruit Crumble",
      zeroProof: "Garden Orbit (Cucumber & Basil)",
      collection: "The Current Season",
      primaryCta: "Reserve a Table",
      primaryUrl: "reserve.html"
    },
    shared: {
      id: "shared",
      name: "The Shared Table",
      eyebrow: "More Plates, Fewer Boundaries",
      intro: "Build the evening across several shared plates and let the table decide what comes next.",
      beginWith: "Hearth Bread, Oysters & Charred Carrots",
      bringToTable: "Black Garlic Short Rib & Half Chicken",
      finishWith: "Burnt Honey Cheesecake & Dark Chocolate Torte",
      zeroProof: "Lunar Bloom Spritz",
      collection: "Made for Sharing",
      primaryCta: "Build a Shared Table",
      primaryUrl: "menu.html"
    },
    brunch: {
      id: "brunch",
      name: "A Brighter Brunch",
      eyebrow: "Coffee First, Then Everything Else",
      intro: "Brunch moves at a different speed: something warm, something bright, and enough time to decide between sweet and savory.",
      beginWith: "House Specialty Coffee & First Light Spritz",
      bringToTable: "Ember Benedict & Short Rib Hash",
      finishWith: "Wood-Fired Peach French Toast",
      zeroProof: "House Citrus Soda",
      collection: "Weekend Brunch Collection",
      primaryCta: "Reserve for Brunch",
      primaryUrl: "reserve.html"
    },
    occasion: {
      id: "occasion",
      name: "The Occasion",
      eyebrow: "Give the Evening a Reason",
      intro: "A gathering with a little more shape: a first drink, a table built to share, and a finish worth staying for.",
      beginWith: "Welcome Champagne Toast & Oysters",
      bringToTable: "Oak-Grilled Ribeye & Short Rib",
      finishWith: "Celebration Dessert Board",
      zeroProof: "Lunar Bloom (Zero-Proof)",
      collection: "Private Dining & Events",
      primaryCta: "Explore Private Events",
      primaryUrl: "experience.html"
    },
    focused: {
      id: "focused",
      name: "The Focused Table",
      eyebrow: "Clear, Considered, and Unhurried",
      intro: "A more direct path through the menu, with enough room for conversation.",
      beginWith: "Garden Orbit Zero-Proof & Shared Flatbread",
      bringToTable: "Ember-Roasted Half Chicken",
      finishWith: "Specialty Coffee & Dark Chocolate Torte",
      zeroProof: "Garden Orbit",
      collection: "Signature Collection",
      primaryCta: "Reserve a Table",
      primaryUrl: "reserve.html"
    },
    spiritfree: {
      id: "spiritfree",
      name: "The Spirit-Free Orbit",
      eyebrow: "A Complete Evening Without Spirits",
      intro: "Bright acidity, herbs, tea, fruit, bitterness, and texture carry the evening without alcohol.",
      beginWith: "Lunar Bloom & Charred Carrots",
      bringToTable: "Wood-Fired Mushrooms & Crispy Potatoes",
      finishWith: "Burnt Honey Cheesecake",
      zeroProof: "Ember Tonic & Bright Ash",
      collection: "Zero-Proof Collection",
      primaryCta: "Explore Zero-Proof Menu",
      primaryUrl: "menu.html"
    },
    dessert: {
      id: "dessert",
      name: "Save Room",
      eyebrow: "The Evening Is Not Over Yet",
      intro: "Begin wherever you like, but leave the final part of the night open for dark chocolate, burnt honey, coffee, and warm spice.",
      beginWith: "Event Horizon Espresso Martini",
      bringToTable: "Burnt Honey Cheesecake & Dark Chocolate Torte",
      finishWith: "Wood-Fired Fruit & Affogato",
      zeroProof: "House Citrus Soda",
      collection: "Save Room for Dessert",
      primaryCta: "Explore Dessert Menu",
      primaryUrl: "menu.html"
    }
  };

  function calculateOrbitResult(choices) {
    const { atmosphere, pace, flavor, table } = choices;

    if (atmosphere === 'brighter-brunch') return ORBIT_RESULTS.brunch;
    if (flavor === 'fresh-zero-proof') return ORBIT_RESULTS.spiritfree;
    if (flavor === 'sweet-finish') return ORBIT_RESULTS.dessert;
    if (table === 'celebration' || pace === 'occasion') return ORBIT_RESULTS.occasion;
    if (table === 'business' || pace === 'focused') return ORBIT_RESULTS.focused;
    if (atmosphere === 'at-the-bar' || pace === 'drinks-first') return ORBIT_RESULTS.bar;
    if (atmosphere === 'by-the-fire' || flavor === 'smoky-charred') return ORBIT_RESULTS.fire;
    if (pace === 'shared' || table === 'friends' || table === 'group') return ORBIT_RESULTS.shared;
    if (atmosphere === 'golden-hour' || flavor === 'bright-herbal') return ORBIT_RESULTS.golden;

    return ORBIT_RESULTS.candlelit;
  }

  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('orbit-webgl-canvas') && typeof THREE !== 'undefined') {
      window.photorealOrbitEngine = new OrbitPhotoreal3DEngine('orbit-webgl-canvas');
    }
  });

  window.calculateOrbitResult = calculateOrbitResult;
})();
'''

with open(os.path.join(s12_dir, "orbit-interactive-engine.js"), "w", encoding="utf-8") as f:
    f.write(engine_js)

print("Mastered photorealistic 3D engine script for Sandbox 12!")
