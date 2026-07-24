/**
 * Orbit & Ember Kitchen + Bar — Package 9: Menu Collections Michelin Controller Engine
 * Version: 2.5.0 (Ultra-Luxury Editorial Design System)
 * Dynamically resolves collection item IDs against shared ORBIT_MENU_DATA and ORBIT_PAIRING_DATA.
 * Zero copied prices, descriptions, or dietary markers.
 */

(function() {
  'use strict';

  let itemMap = new Map();
  let pairingMap = new Map();

  function initDataMaps() {
    if (window.ORBIT_MENU_DATA && window.ORBIT_MENU_DATA.items) {
      window.ORBIT_MENU_DATA.items.forEach(item => {
        itemMap.set(item.id, item);
      });
    }
    if (window.ORBIT_PAIRING_DATA && window.ORBIT_PAIRING_DATA.pairings) {
      window.ORBIT_PAIRING_DATA.pairings.forEach(p => {
        pairingMap.set(p.id, p);
      });
    }
  }

  function getSavedCollections() {
    try {
      return JSON.parse(localStorage.getItem('orbit_saved_collections') || '[]');
    } catch(e) {
      return [];
    }
  }

  function saveCollectionId(colId) {
    let saved = getSavedCollections();
    if (!saved.includes(colId)) {
      saved.push(colId);
      localStorage.setItem('orbit_saved_collections', JSON.stringify(saved));
    }
  }

  function removeSavedCollectionId(colId) {
    let saved = getSavedCollections().filter(id => id !== colId);
    localStorage.setItem('orbit_saved_collections', JSON.stringify(saved));
  }

  document.addEventListener('DOMContentLoaded', () => {
    initDataMaps();

    const config = window.ORBIT_COLLECTIONS_CONFIG;
    if (!config) return;

    const categoryNavContainer = document.getElementById('collections-category-nav');
    const featuredSectionContainer = document.getElementById('featured-collection-container');
    const gridContainer = document.getElementById('collections-grid');
    const detailDrawer = document.getElementById('collection-detail-drawer');
    const detailModalContent = document.getElementById('collection-modal-content');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');

    let activeCategory = 'all';

    // 1. Render Category Filter Tabs
    function renderCategoryTabs() {
      if (!categoryNavContainer) return;
      categoryNavContainer.innerHTML = '';

      config.categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-tab-btn ${cat.id === activeCategory ? 'active' : ''}`;
        
        let count = 0;
        if (cat.id === 'all') {
          count = config.collections.length;
        } else {
          count = config.collections.filter(c => c.category === cat.id).length;
        }

        btn.innerHTML = `${cat.label} <span class="cat-count">${count}</span>`;
        btn.addEventListener('click', () => {
          activeCategory = cat.id;
          renderCategoryTabs();
          renderCollectionsGrid();
        });
        categoryNavContainer.appendChild(btn);
      });
    }

    // 2. Render Featured Collection Spotlight (Michelin Editorial Design)
    function renderFeaturedCollection() {
      if (!featuredSectionContainer) return;
      const featId = config.featuredCollectionId;
      const featCol = config.collections.find(c => c.id === featId) || config.collections[0];

      if (!featCol) return;

      const resolvedItems = featCol.orderedItemIds.map(id => itemMap.get(id)).filter(Boolean);
      const isSaved = getSavedCollections().includes(featCol.id);

      // Primary pairing lookup
      let pairingNote = "";
      if (featCol.pairingIds && featCol.pairingIds.length > 0) {
        const p = pairingMap.get(featCol.pairingIds[0]);
        if (p) {
          const drink = itemMap.get(p.drinkItemId);
          if (drink) pairingNote = `🍷 Suggested Beverage: ${drink.name} (${drink.pricing.display})`;
        }
      }

      featuredSectionContainer.innerHTML = `
        <div class="featured-michelin-card">
          <div class="featured-michelin-media">
            <img src="${featCol.heroImage}" alt="${featCol.title}">
            <div class="featured-media-overlay"></div>
            <span class="feat-michelin-badge">★ FEATURED EDITORIAL COLLECTION</span>
            <span class="feat-service-pill">${featCol.serviceLabel}</span>
          </div>
          <div class="featured-michelin-body">
            <span class="subhead-tag">${featCol.eyebrow} • ${resolvedItems.length} Curated Courses</span>
            <h2 class="featured-michelin-title">${featCol.title}</h2>
            <p class="featured-michelin-desc">${featCol.longIntroduction}</p>

            ${pairingNote ? `<div class="featured-pairing-bar">${pairingNote}</div>` : ''}

            <div class="featured-items-preview">
              <div class="preview-header">Featured Menu Courses:</div>
              <ul class="preview-items-list">
                ${resolvedItems.map(item => `
                  <li>
                    <span class="preview-item-name">${item.name}</span>
                    <span class="preview-item-dots"></span>
                    <span class="preview-item-price">${item.pricing.display}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <div class="featured-col-actions">
              <button class="cta-btn open-col-btn" data-slug="${featCol.slug}">Explore Full Collection &rsaquo;</button>
              <button class="btn-secondary save-col-btn" data-id="${featCol.id}">${isSaved ? '⭐ Saved' : '☆ Save Collection'}</button>
            </div>
          </div>
        </div>
      `;
    }

    // 3. Render 12 Collections Grid
    function renderCollectionsGrid() {
      if (!gridContainer) return;
      gridContainer.innerHTML = '';

      let filteredCols = config.collections;
      if (activeCategory !== 'all') {
        filteredCols = config.collections.filter(c => c.category === activeCategory);
      }

      filteredCols.forEach(col => {
        const resolvedItems = col.orderedItemIds.map(id => itemMap.get(id)).filter(Boolean);
        const card = document.createElement('article');
        card.className = 'collection-michelin-card';

        const isSaved = getSavedCollections().includes(col.id);

        // Pairing badge string
        let pairingPill = "";
        if (col.pairingIds && col.pairingIds.length > 0) {
          const p = pairingMap.get(col.pairingIds[0]);
          if (p) {
            const drink = itemMap.get(p.drinkItemId);
            if (drink) pairingPill = `🍷 ${drink.shortName || drink.name}`;
          }
        }

        card.innerHTML = `
          <div class="col-michelin-media">
            <img src="${col.heroImage}" alt="${col.title}" loading="lazy">
            <div class="col-media-overlay"></div>
            <span class="col-service-badge">${col.serviceLabel}</span>
            ${pairingPill ? `<span class="col-pairing-badge">${pairingPill}</span>` : ''}
          </div>
          <div class="col-michelin-body">
            <span class="subhead-tag">${col.eyebrow}</span>
            <h3 class="col-michelin-title">${col.title}</h3>
            <p class="col-michelin-desc">${col.shortDescription}</p>

            <div class="col-card-preview-box">
              <div class="preview-mini-title">Highlights:</div>
              <ul class="preview-mini-list">
                ${resolvedItems.slice(0, 3).map(item => `
                  <li>
                    <span>${item.shortName || item.name}</span>
                    <span class="mini-price">${item.pricing.display}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <div class="col-card-meta">
              <span>🍽️ ${resolvedItems.length} Dishes</span>
              <span>⭐ Dark Star Selection</span>
            </div>

            <div class="col-card-actions">
              <button class="cta-btn open-col-btn" data-slug="${col.slug}" style="flex: 1;">Explore Collection</button>
              <button class="btn-secondary save-col-btn" data-id="${col.id}" title="Save Collection">${isSaved ? '⭐' : '☆'}</button>
            </div>
          </div>
        `;
        gridContainer.appendChild(card);
      });

      bindCollectionButtons();
    }

    // 4. Bind Button Listeners
    function bindCollectionButtons() {
      document.querySelectorAll('.open-col-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const slug = btn.getAttribute('data-slug');
          openCollectionDetailBySlug(slug);
        });
      });

      document.querySelectorAll('.save-col-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const id = btn.getAttribute('data-id');
          if (getSavedCollections().includes(id)) {
            removeSavedCollectionId(id);
          } else {
            saveCollectionId(id);
          }
          renderFeaturedCollection();
          renderCollectionsGrid();
        });
      });
    }

    // 5. Open Collection Detail Drawer
    function openCollectionDetailBySlug(slug) {
      const col = config.collections.find(c => c.slug === slug || c.id === slug);
      if (!col) return;

      window.location.hash = col.slug;

      const resolvedItems = col.orderedItemIds.map(id => itemMap.get(id)).filter(Boolean);
      const isSaved = getSavedCollections().includes(col.id);

      const resolvedPairings = (col.pairingIds || []).map(pid => {
        const p = pairingMap.get(pid);
        if (!p) return null;
        const food = itemMap.get(p.foodItemId);
        const drink = itemMap.get(p.drinkItemId);
        const zeroProof = p.zeroProofAlternativeItemId ? itemMap.get(p.zeroProofAlternativeItemId) : null;
        return { pairing: p, food, drink, zeroProof };
      }).filter(Boolean);

      detailModalContent.innerHTML = `
        <header class="modal-col-header">
          <span class="subhead-tag">${col.eyebrow} • ${col.serviceLabel}</span>
          <h1 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2.8rem; color: #fff; margin: 0.4rem 0;">${col.title}</h1>
          <p style="color: #e6dfd5; font-size: 1.1rem; line-height: 1.6; max-width: 720px; margin-bottom: 1.5rem;">${col.longIntroduction}</p>
          
          <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="${col.ctaUrl}" class="cta-btn">${col.ctaLabel}</a>
            <button class="btn-secondary save-col-btn-modal" data-id="${col.id}">${isSaved ? '⭐ Saved' : '☆ Save Collection'}</button>
            <button class="btn-secondary share-col-btn" data-slug="${col.slug}">🔗 Share Link</button>
          </div>
        </header>

        ${col.disclaimer ? `
          <div class="concierge-disclaimer-card" style="margin-bottom: 2rem;">
            <p>💡 <strong>Notice:</strong> ${col.disclaimer}</p>
          </div>
        ` : ''}

        <section class="modal-col-items">
          <h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; color: #e0a868; margin-bottom: 1.2rem; border-bottom: 1px solid rgba(224, 168, 104, 0.3); padding-bottom: 0.5rem;">Curated Menu Courses</h2>
          <div class="col-detail-items-grid">
            ${resolvedItems.map(item => `
              <div class="col-item-card">
                <div class="col-item-header">
                  <h3 class="col-item-name">${item.name}</h3>
                  <span class="col-item-price">${item.pricing.display}</span>
                </div>
                <p class="col-item-desc">${item.description}</p>
                <div class="col-item-tags">
                  ${(item.dietaryMarkers || []).map(m => `<span class="dietary-chip">${m}</span>`).join('')}
                  ${(item.flavorTags || []).map(f => `<span class="flavor-chip">${f}</span>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        ${resolvedPairings.length > 0 ? `
          <section class="modal-col-pairings" style="margin-top: 3rem;">
            <h2 style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 2rem; color: #e0a868; margin-bottom: 1.2rem; border-bottom: 1px solid rgba(224, 168, 104, 0.3); padding-bottom: 0.5rem;">Beverage &amp; Cocktail Pairings</h2>
            <div class="col-detail-pairings-grid">
              ${resolvedPairings.map(rp => `
                <div class="pairing-card">
                  <div style="font-size: 0.85rem; color: #e0a868; font-weight: 700; text-transform: uppercase; margin-bottom: 0.4rem;">Suggested Alongside</div>
                  <h4 style="font-size: 1.2rem; color: #fff;">${rp.food ? rp.food.name : ''}</h4>
                  <p style="color: #e6dfd5; font-size: 0.95rem; margin: 0.4rem 0;">🍷 <strong>Pairing:</strong> ${rp.drink ? rp.drink.name : ''} (${rp.drink ? rp.drink.pricing.display : ''})</p>
                  ${rp.zeroProof ? `<p style="color: #60a5fa; font-size: 0.9rem;">🌿 <strong>Zero-Proof Alternative:</strong> ${rp.zeroProof.name} (${rp.zeroProof.pricing.display})</p>` : ''}
                  <p style="font-size: 0.85rem; color: #aba296; margin-top: 0.6rem; font-style: italic;">"${rp.pairing.explanation}"</p>
                  <p style="font-size: 0.75rem; color: #888; margin-top: 0.4rem;">${rp.pairing.disclaimer}</p>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <div style="margin-top: 3rem; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 2rem;">
          <a href="menu.html" class="btn-secondary">View Complete Standard Menu</a>
        </div>
      `;

      detailDrawer.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      document.querySelector('.save-col-btn-modal')?.addEventListener('click', (e) => {
        if (getSavedCollections().includes(col.id)) {
          removeSavedCollectionId(col.id);
          e.target.textContent = '☆ Save Collection';
        } else {
          saveCollectionId(col.id);
          e.target.textContent = '⭐ Saved';
        }
        renderFeaturedCollection();
        renderCollectionsGrid();
      });

      document.querySelector('.share-col-btn')?.addEventListener('click', () => {
        const shareUrl = window.location.origin + window.location.pathname + '#' + col.slug;
        if (navigator.clipboard) {
          navigator.clipboard.writeText(shareUrl);
          alert("✅ Link copied to clipboard!
" + shareUrl);
        } else {
          alert("Collection Link:
" + shareUrl);
        }
      });
    }

    closeDrawerBtn?.addEventListener('click', () => {
      detailDrawer.style.display = 'none';
      document.body.style.overflow = '';
      window.location.hash = '';
    });

    function checkHashRoute() {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        openCollectionDetailBySlug(hash);
      }
    }

    // Init
    renderCategoryTabs();
    renderFeaturedCollection();
    renderCollectionsGrid();
    checkHashRoute();

    window.addEventListener('hashchange', checkHashRoute);
  });
})();
