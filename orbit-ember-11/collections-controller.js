/**
 * Orbit & Ember Kitchen + Bar — Package 9: Menu Collections Master Engine
 * Version: 6.0.0 (Master Michelin Design System with Dietary Filtering & Per-Guest Price Calculator)
 * Dynamically resolves collection item IDs against shared ORBIT_MENU_DATA and ORBIT_PAIRING_DATA.
 * Zero copied prices, descriptions, or dietary markers.
 */

(function() {
  'use strict';

  let itemMap = new Map();
  let pairingMap = new Map();

  function initDataMaps() {
    itemMap.clear();
    pairingMap.clear();
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

  function initCollectionsEngine() {
    initDataMaps();

    const config = window.ORBIT_COLLECTIONS_CONFIG;
    if (!config) return;

    const categoryNavContainer = document.getElementById('collections-category-nav');
    const container = document.getElementById('collections-container');
    const totalBadge = document.getElementById('dynamic-col-total');
    const magazineBtn = document.getElementById('view-magazine-btn');
    const gridBtn = document.getElementById('view-grid-btn');

    let activeCategory = 'all';
    let activeDiet = 'all';
    let currentViewMode = 'magazine';

    magazineBtn?.addEventListener('click', () => {
      currentViewMode = 'magazine';
      magazineBtn.classList.add('active');
      gridBtn?.classList.remove('active');
      container?.classList.remove('view-grid-mode');
      container?.classList.add('view-magazine');
      renderCollections();
    });

    gridBtn?.addEventListener('click', () => {
      currentViewMode = 'grid';
      gridBtn.classList.add('active');
      magazineBtn?.classList.remove('active');
      container?.classList.remove('view-magazine');
      container?.classList.add('view-grid-mode');
      renderCollections();
    });

    // Dietary Filter Pill Listeners
    document.querySelectorAll('.dietary-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.dietary-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDiet = btn.getAttribute('data-diet') || 'all';
        renderCollections();
      });
    });

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
          renderCollections();
        });
        categoryNavContainer.appendChild(btn);
      });
    }

    // 2. Render All 12 Collections
    function renderCollections() {
      if (!container) return;
      container.innerHTML = '';

      let filteredCols = config.collections;
      if (activeCategory !== 'all') {
        filteredCols = config.collections.filter(c => c.category === activeCategory);
      }

      if (totalBadge) {
        totalBadge.textContent = `${filteredCols.length} Curated Collections`;
      }

      filteredCols.forEach((col, idx) => {
        let resolvedItems = col.orderedItemIds.map(id => itemMap.get(id)).filter(Boolean);

        // Apply Dietary Filter if set
        if (activeDiet !== 'all') {
          resolvedItems = resolvedItems.filter(item => 
            (item.dietaryMarkers || []).includes(activeDiet)
          );
        }

        if (resolvedItems.length === 0) return; // Skip if no items match active diet

        // Calculate total collection price estimate
        const totalEstPrice = resolvedItems.reduce((sum, item) => sum + (item.pricing.baseAmount || 0), 0);

        const isSaved = getSavedCollections().includes(col.id);

        const resolvedPairings = (col.pairingIds || []).map(pid => {
          const p = pairingMap.get(pid);
          if (!p) return null;
          const food = itemMap.get(p.foodItemId);
          const drink = itemMap.get(p.drinkItemId);
          const zeroProof = p.zeroProofAlternativeItemId ? itemMap.get(p.zeroProofAlternativeItemId) : null;
          return { pairing: p, food, drink, zeroProof };
        }).filter(Boolean);

        const colArticle = document.createElement('article');
        colArticle.className = currentViewMode === 'grid' ? 'grid-collection-card' : 'master-collection-block';
        colArticle.id = col.slug;

        if (currentViewMode === 'grid') {
          colArticle.innerHTML = `
            <div class="grid-card-media">
              <img src="${col.heroImage}" alt="${col.title}" loading="lazy">
              <div class="inline-media-overlay"></div>
              <span class="inline-service-badge">${col.serviceLabel}</span>
              ${idx === 0 ? '<span class="inline-feat-badge">★ FEATURED</span>' : ''}
            </div>
            <div class="grid-card-body">
              <span class="subhead-tag-gold">${col.eyebrow}</span>
              <h3 class="grid-card-title">${col.title}</h3>
              <p class="grid-card-desc">${col.shortDescription}</p>

              <div class="grid-card-preview-box">
                <div style="font-size: 0.75rem; color: #aba296; font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem;">Curated Courses (${resolvedItems.length}):</div>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${resolvedItems.slice(0, 3).map(item => `
                    <li style="display: flex; justify-content: space-between; font-size: 0.88rem; color: #e6dfd5; padding: 0.2rem 0;">
                      <span>${item.shortName || item.name}</span>
                      <span style="color: #e0a868; font-weight: 700;">${item.pricing.display}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; color: #e0a868; font-weight: 700; margin-bottom: 1rem;">
                <span>Est. Total:</span>
                <span>$${totalEstPrice} / guest</span>
              </div>

              <div class="inline-col-actions" style="margin-top: auto;">
                <a href="${col.ctaUrl}" class="cta-btn" style="flex: 1; text-align: center;">${col.ctaLabel} &rsaquo;</a>
                <button class="btn-secondary save-col-btn" data-id="${col.id}">${isSaved ? '⭐' : '☆'}</button>
              </div>
            </div>
          `;
        } else {
          colArticle.innerHTML = `
            <div class="master-col-header">
              <div class="master-col-media">
                <img src="${col.heroImage}" alt="${col.title}" loading="lazy">
                <div class="inline-media-overlay"></div>
                <span class="inline-service-badge">${col.serviceLabel}</span>
                ${idx === 0 ? '<span class="inline-feat-badge">★ FEATURED MICHELIN COLLECTION</span>' : ''}
              </div>

              <div class="master-col-summary">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.6rem;">
                  <span class="subhead-tag-gold">${col.eyebrow} • ${resolvedItems.length} Curated Courses</span>
                  <span class="est-price-tag">Est. Progression: $${totalEstPrice} / guest</span>
                </div>
                
                <h2 class="master-col-title">${col.title}</h2>
                <p class="master-col-desc">${col.longIntroduction}</p>
                
                <div class="inline-col-actions">
                  <a href="${col.ctaUrl}" class="cta-btn">${col.ctaLabel} &rsaquo;</a>
                  <button class="btn-secondary save-col-btn" data-id="${col.id}">${isSaved ? '⭐ Saved' : '☆ Save Collection'}</button>
                  <button class="btn-secondary share-col-btn" data-slug="${col.slug}">🔗 Share Collection</button>
                </div>
              </div>
            </div>

            ${col.disclaimer ? `
              <div class="concierge-disclaimer-card" style="margin: 1.8rem 0 0 0;">
                <p>💡 <strong>Notice:</strong> ${col.disclaimer}</p>
              </div>
            ` : ''}

            <!-- Curated Menu Courses Grid -->
            <div class="inline-col-dishes-section">
              <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 1.2rem;">
                <h3 class="dishes-section-title">Curated Menu Courses (${resolvedItems.length})</h3>
                <span style="font-size: 0.85rem; color: #aba296;">Hover dish card for techniques &amp; flavor tags</span>
              </div>
              
              <div class="inline-dishes-grid">
                ${resolvedItems.map(item => `
                  <div class="master-dish-card">
                    <div class="dish-card-header">
                      <h4 class="dish-card-name">${item.name}</h4>
                      <span class="dish-card-price">${item.pricing.display}</span>
                    </div>
                    <p class="dish-card-desc">${item.description}</p>
                    <div class="dish-card-tags">
                      ${(item.dietaryMarkers || []).map(m => `<span class="dietary-chip">${m}</span>`).join('')}
                      ${(item.flavorTags || []).map(f => `<span class="flavor-chip">${f}</span>`).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Suggested Beverage Pairings Section -->
            ${resolvedPairings.length > 0 ? `
              <div class="inline-pairings-section">
                <h3 class="dishes-section-title" style="color: #e0a868;">Sommelier Beverage &amp; Cocktail Flights</h3>
                <div class="inline-pairings-grid">
                  ${resolvedPairings.map(rp => `
                    <div class="master-pairing-card">
                      <div style="font-size: 0.82rem; color: #e0a868; font-weight: 700; text-transform: uppercase; margin-bottom: 0.3rem;">Suggested Alongside</div>
                      <h4 style="font-size: 1.2rem; color: #fff; margin-bottom: 0.4rem;">${rp.food ? rp.food.name : ''}</h4>
                      <p style="color: #e6dfd5; font-size: 0.98rem; margin: 0.3rem 0;">🍷 <strong>Pairing:</strong> ${rp.drink ? rp.drink.name : ''} (${rp.drink ? rp.drink.pricing.display : ''})</p>
                      ${rp.zeroProof ? `<p style="color: #60a5fa; font-size: 0.92rem; margin-top: 0.2rem;">🌿 <strong>Zero-Proof Option:</strong> ${rp.zeroProof.name} (${rp.zeroProof.pricing.display})</p>` : ''}
                      <p style="font-size: 0.88rem; color: #aba296; margin-top: 0.5rem; font-style: italic;">"${rp.pairing.explanation}"</p>
                      <p style="font-size: 0.75rem; color: #888; margin-top: 0.3rem;">${rp.pairing.disclaimer}</p>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          `;
        }

        container.appendChild(colArticle);
      });

      bindButtonEvents();
    }

    // 3. Bind Event Listeners
    function bindButtonEvents() {
      document.querySelectorAll('.save-col-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const id = btn.getAttribute('data-id');
          if (id) {
            if (getSavedCollections().includes(id)) {
              removeSavedCollectionId(id);
              btn.textContent = currentViewMode === 'grid' ? '☆' : '☆ Save Collection';
            } else {
              saveCollectionId(id);
              btn.textContent = currentViewMode === 'grid' ? '⭐' : '⭐ Saved';
            }
          }
        });
      });

      document.querySelectorAll('.share-col-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const slug = btn.getAttribute('data-slug');
          const shareUrl = window.location.origin + window.location.pathname + '#' + slug;
          if (navigator.clipboard) {
            navigator.clipboard.writeText(shareUrl);
            alert("✅ Collection link copied to clipboard!\n" + shareUrl);
          } else {
            alert("Collection Link:\n" + shareUrl);
          }
        });
      });
    }

    // Init
    renderCategoryTabs();
    renderCollections();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCollectionsEngine);
  } else {
    initCollectionsEngine();
  }

  window.addEventListener('load', initCollectionsEngine);
})();
