// Master Menu Controller JavaScript V3 for Orbit & Ember Kitchen + Bar

document.addEventListener('DOMContentLoaded', () => {
  let currentMenuKey = 'dinner';
  let activeDietaryFilter = 'ALL';
  let searchQuery = '';
  let viewMode = 'grid'; // 'grid' or 'list'

  const menuSelectorNav = document.getElementById('primary-menu-tabs');
  const secondaryNav = document.getElementById('secondary-section-nav');
  const serviceNotice = document.getElementById('menu-service-notice');
  const menuContentContainer = document.getElementById('menu-content-container');
  const dietaryFilterContainer = document.getElementById('dietary-filter-pills');
  const searchInput = document.getElementById('menu-search-input');

  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');

  const dishModal = document.getElementById('dish-detail-modal');
  const closeDishModalBtn = document.getElementById('close-dish-modal-btn');
  const dishModalBody = document.getElementById('dish-modal-body');

  const qrModal = document.getElementById('qr-modal');
  const openQrBtn = document.getElementById('open-qr-btn');
  const closeQrBtn = document.getElementById('close-qr-btn');
  const printMenuBtn = document.getElementById('print-menu-btn');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  // View Mode Switching (Grid / List)
  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      viewMode = 'grid';
      viewGridBtn.classList.add('active');
      viewListBtn.classList.remove('active');
      if (menuContentContainer) {
        menuContentContainer.classList.remove('list-mode');
        menuContentContainer.classList.add('grid-mode');
      }
      renderActiveMenu();
    });

    viewListBtn.addEventListener('click', () => {
      viewMode = 'list';
      viewListBtn.classList.add('active');
      viewGridBtn.classList.remove('active');
      if (menuContentContainer) {
        menuContentContainer.classList.remove('grid-mode');
        menuContentContainer.classList.add('list-mode');
      }
      renderActiveMenu();
    });
  }

  // Floating Back to Top Button Listener
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Dish Detail Modal Toggle
  function openDishModal(item) {
    if (!dishModal || !dishModalBody) return;
    const markersHtml = renderItemMarkers(item.markers);

    dishModalBody.innerHTML = `
      ${item.image ? `<div class="dish-modal-image"><img src="${item.image}" alt="${item.name}"></div>` : ''}
      <div class="dish-modal-header">
        <h3 class="dish-modal-name">${item.name}</h3>
        <span class="dish-modal-price">${item.price}</span>
      </div>
      <p class="dish-modal-desc">${item.desc}</p>
      ${item.pairing ? `
        <div class="dish-modal-pairing">
          <strong>🍷 Suggested Pairing:</strong> ${item.pairing}
        </div>
      ` : ''}
      <div class="dish-modal-tags">
        ${markersHtml}
      </div>
    `;

    dishModal.classList.add('active');
    dishModal.setAttribute('aria-hidden', 'false');
  }

  if (closeDishModalBtn && dishModal) {
    closeDishModalBtn.addEventListener('click', () => {
      dishModal.classList.remove('active');
      dishModal.setAttribute('aria-hidden', 'true');
    });

    dishModal.addEventListener('click', (e) => {
      if (e.target === dishModal) {
        dishModal.classList.remove('active');
        dishModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // QR Modal Toggle
  if (openQrBtn && qrModal && closeQrBtn) {
    openQrBtn.addEventListener('click', () => {
      qrModal.classList.add('active');
      qrModal.setAttribute('aria-hidden', 'false');
    });
    closeQrBtn.addEventListener('click', () => {
      qrModal.classList.remove('active');
      qrModal.setAttribute('aria-hidden', 'true');
    });
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.classList.remove('active');
        qrModal.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Print Action
  if (printMenuBtn) {
    printMenuBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Live Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderActiveMenu();
    });
  }

  // Render Primary Menu Selector Tabs
  function renderPrimaryTabs() {
    if (!menuSelectorNav) return;
    menuSelectorNav.innerHTML = '';

    const menuKeys = [
      { key: 'dinner', label: 'Dinner', badge: 'Primary' },
      { key: 'breakfast', label: 'Breakfast', badge: '7am-11am' },
      { key: 'brunch', label: 'Brunch', badge: 'Weekend' },
      { key: 'lunch', label: 'Lunch', badge: '11am-3pm' },
      { key: 'specialty', label: 'Specialty', badge: 'Chef Table' },
      { key: 'drinks', label: 'Drinks', badge: 'Craft Cocktails' },
      { key: 'happyhour', label: 'Happy Hour', badge: '4:30-6:30' },
      { key: 'kids', label: 'Kids', badge: 'Under 12' }
    ];

    menuKeys.forEach(item => {
      const btn = document.createElement('button');
      btn.className = `primary-tab-pill ${item.key === currentMenuKey ? 'active' : ''}`;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', item.key === currentMenuKey ? 'true' : 'false');
      btn.setAttribute('data-menu', item.key);
      btn.innerHTML = `<span>${item.label}</span>${item.badge ? `<small class="tab-badge-pill">${item.badge}</small>` : ''}`;
      
      btn.addEventListener('click', () => {
        if (currentMenuKey !== item.key) {
          currentMenuKey = item.key;
          activeDietaryFilter = 'ALL';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          renderPrimaryTabs();
          renderDietaryFilters();
          renderActiveMenu();
        }
      });
      menuSelectorNav.appendChild(btn);
    });
  }

  // Render Dietary Filter Pills
  function renderDietaryFilters() {
    if (!dietaryFilterContainer) return;
    dietaryFilterContainer.innerHTML = '';

    const filters = [
      { code: 'ALL', label: 'Show All' },
      { code: 'CF', label: '⭐ Chef Favorites' },
      { code: 'V', label: 'Vegetarian' },
      { code: 'VG', label: 'Vegan' },
      { code: 'GF', label: 'Gluten-Free' },
      { code: 'SP', label: '🌶️ Spicy' },
      { code: 'SE', label: '🌱 Seasonal' }
    ];

    filters.forEach(f => {
      const pill = document.createElement('button');
      pill.className = `filter-pill ${activeDietaryFilter === f.code ? 'active' : ''}`;
      pill.textContent = f.label;
      pill.addEventListener('click', () => {
        activeDietaryFilter = f.code;
        renderDietaryFilters();
        renderActiveMenu();
      });
      dietaryFilterContainer.appendChild(pill);
    });
  }

  // Render Secondary Section Jump Pills
  function renderSecondaryNav(sections) {
    if (!secondaryNav) return;
    secondaryNav.innerHTML = '';

    sections.forEach((sec) => {
      const secId = `section-${sec.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
      const anchor = document.createElement('a');
      anchor.className = 'sec-pill-link';
      anchor.href = `#${secId}`;
      anchor.textContent = sec.name;
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetEl = document.getElementById(secId);
        if (targetEl) {
          const offset = 140;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = targetEl.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
      secondaryNav.appendChild(anchor);
    });
  }

  // Helper for rendering dietary tag pills
  function renderItemMarkers(markers) {
    if (!markers || markers.length === 0) return '';
    return markers.map(m => {
      const info = MENU_DATA.dietaryLegend.find(l => l.code === m);
      const label = info ? info.label : m;
      return `<span class="item-tag tag-${m.toLowerCase()}" title="${label}">${m} • ${label}</span>`;
    }).join(' ');
  }

  // Render Active Menu Page Content
  function renderActiveMenu() {
    const menuObj = MENU_DATA.menus[currentMenuKey];
    if (!menuObj) return;

    if (serviceNotice) {
      serviceNotice.innerHTML = `
        <div class="service-notice-inner">
          <div class="notice-clock-badge">🕒 Service Hours</div>
          <div class="notice-hours-text">${menuObj.hours}</div>
        </div>
      `;
    }

    renderSecondaryNav(menuObj.sections);

    let html = '';

    menuObj.sections.forEach(sec => {
      const secId = `section-${sec.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

      // Filter by dietary marker & search query
      let filteredItems = sec.items.filter(item => {
        let passesDietary = true;
        if (activeDietaryFilter !== 'ALL') {
          if (activeDietaryFilter === 'CF') {
            passesDietary = item.featured || (item.markers && item.markers.includes('CF'));
          } else {
            passesDietary = item.markers && item.markers.includes(activeDietaryFilter);
          }
        }

        let passesSearch = true;
        if (searchQuery) {
          const matchName = item.name.toLowerCase().includes(searchQuery);
          const matchDesc = item.desc.toLowerCase().includes(searchQuery);
          const matchPairing = item.pairing && item.pairing.toLowerCase().includes(searchQuery);
          passesSearch = matchName || matchDesc || matchPairing;
        }

        return passesDietary && passesSearch;
      });

      if (filteredItems.length === 0) return;

      html += `
        <section id="${secId}" class="menu-category-section">
          <div class="category-header-row">
            <h2 class="category-name">${sec.name}</h2>
            <div class="category-divider-line"></div>
          </div>
          <div class="menu-cards-grid ${viewMode === 'list' ? 'list-layout' : 'grid-layout'}">
      `;

      filteredItems.forEach(item => {
        const isFeatured = item.featured;
        const itemJson = JSON.stringify(item).replace(/"/g, '&quot;');
        
        html += `
          <article class="menu-item-card ${isFeatured ? 'featured-chef-card' : ''}" data-item="${itemJson}">
            ${item.image ? `
              <div class="card-item-image-wrapper">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                ${isFeatured ? '<span class="image-featured-badge">⭐ Chef’s Signature</span>' : ''}
              </div>
            ` : ''}
            <div class="card-item-content">
              ${isFeatured && !item.image ? '<div class="chef-featured-label">✨ Chef’s Signature Dish</div>' : ''}
              <div class="card-item-top">
                <h3 class="card-item-title">${item.name}</h3>
                <div class="card-item-price">${item.price}</div>
              </div>
              <p class="card-item-desc">${item.desc}</p>
              ${item.pairing ? `
                <div class="card-pairing-note">
                  <span>🍷 Pairing Suggestion:</span> ${item.pairing}
                </div>
              ` : ''}
              <div class="card-item-tags">
                ${renderItemMarkers(item.markers)}
              </div>
            </div>
          </article>
        `;
      });

      html += `
          </div>
        </section>
      `;
    });

    if (html === '') {
      html = `
        <div class="no-results-box">
          <h3>No matching menu items found</h3>
          <p>Try searching for a different term or selecting "Show All" on dietary filters.</p>
        </div>
      `;
    }

    // Add Add-ons Section for food menus
    if (['dinner', 'breakfast', 'brunch', 'lunch'].includes(currentMenuKey)) {
      html += `
        <section class="addons-section-block">
          <div class="category-header-row">
            <h2 class="category-name">Add-ons &amp; Substitutions</h2>
            <div class="category-divider-line"></div>
          </div>
          <div class="addons-cards-row">
            <div class="addon-info-card">
              <h4>Protein Additions</h4>
              <ul class="addon-list">
                ${MENU_DATA.addons.proteins.map(p => `<li><span>${p.name}</span><strong>${p.price}</strong></li>`).join('')}
              </ul>
            </div>
            <div class="addon-info-card">
              <h4>Substitutions &amp; Extras</h4>
              <ul class="addon-list">
                ${MENU_DATA.addons.substitutions.map(s => `<li><span>${s.name}</span><strong>${s.price}</strong></li>`).join('')}
              </ul>
            </div>
          </div>
        </section>
      `;
    }

    if (menuContentContainer) {
      menuContentContainer.innerHTML = html;

      // Attach click listeners to cards to open Dish Detail Modal
      const cards = menuContentContainer.querySelectorAll('.menu-item-card');
      cards.forEach(c => {
        c.addEventListener('click', () => {
          const jsonStr = c.getAttribute('data-item');
          if (jsonStr) {
            try {
              const itemData = JSON.parse(jsonStr.replace(/&quot;/g, '"'));
              openDishModal(itemData);
            } catch(e) {}
          }
        });
      });
    }
  }

  // Initial Render
  renderPrimaryTabs();
  renderDietaryFilters();
  renderActiveMenu();
});
