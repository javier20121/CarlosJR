// Asegura que el navegador no salte a una posición previa al recargar
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const PHONE_NUMBER = '5493757504214';
const BUSINESS_TIMEZONE = 'America/Argentina/Buenos_Aires';
const HERO_BEST_SELLER_IDS = [4, 3, 1];
const ITEM_BADGES = {
  3: [{ label: 'Más pedido', tone: 'popular' }],
  4: [{ label: 'Más pedido', tone: 'popular' }],
  17: [{ label: 'Nuevo', tone: 'new' }],
  20: [{ label: 'Nuevo', tone: 'new' }],
  27: [{ label: 'Promo', tone: 'promo' }],
  28: [{ label: 'Promo', tone: 'promo' }],
  29: [{ label: 'Promo', tone: 'promo' }],
  30: [{ label: 'Promo', tone: 'promo' }]
};
const FALLBACK_MENU_DATA = [
  {
    category: 'Hamburguesas Tradicionales',
    items: [
      { id: 1, name: 'Simple', price: 9500, desc: 'Pan, salsa JR, lechuga, tomate, carne y queso cheddar.', image: 'img/burguer-simple.png' },
      { id: 2, name: 'Completa', price: 10900, desc: 'Pan, salsa JR, lechuga, tomate, carne, queso cheddar, jamón y huevo.', image: 'img/burguer-completa.png' },
      { id: 3, name: 'Especial', price: 13900, desc: 'Pan, salsa JR, pepinos, cebolla, lechuga, tomate, carne, queso cheddar, jamón, huevo y panceta.', image: 'img/burguer-especial.png' }
    ]
  },
  {
    category: 'Dobles y Triples',
    items: [
      { id: 4, name: 'Carlos JR', price: 14900, desc: 'Pan, salsa JR, pepinos, cebolla, doble carne, doble queso cheddar y panceta.', image: 'img/burguer-carlo-junior.png' },
      { id: 5, name: 'Big JR', price: 12000, desc: 'Pan, salsa JR, pepinos, doble carne y doble queso cheddar.', image: 'img/burguer-big-junior.png' },
      { id: 6, name: 'Big Triple', price: 17200, desc: 'Pan, salsa JR, triple carne, triple queso cheddar, huevo y panceta.', image: 'img/burguer-big-triple.png' }
    ]
  },
  {
    category: 'Otras Opciones Gourmet',
    items: [
      { id: 7, name: 'Roma', price: 15500, desc: 'Pan, barbacoa, cebolla caramelizada, carne, doble queso cheddar y panceta.', image: 'img/burguer-roma.png' },
      { id: 8, name: 'Houston', price: 15500, desc: 'Pan, salsa de ajo, cebolla caramelizada, carne, queso azul y panceta.', image: 'img/burguer-houston.png' },
      { id: 9, name: 'Tokio', price: 15500, desc: 'Pan, salsa JR, carne y doble queso cheddar.', image: 'img/burguer-tokio.png' },
      { id: 10, name: 'Madrid', price: 15500, desc: 'Pan, ketchup, mostaza, cebolla, pepinos, carne y doble queso cheddar.', image: 'img/burguer-madrid.png' },
      { id: 17, name: 'Qatar', price: 15500, desc: 'Pan, salsa de ajo, lechuga, tomate, carne, doble queso cheddar y 4 nuggets de pollo frito.', image: 'img/burguer-qatar.png' },
      { id: 18, name: 'Chicago', price: 15500, desc: 'Pan, salsa JR, tomate, carne, doble queso cheddar, huevo y papas pay.', image: 'img/burguer-chicago.png' },
      { id: 19, name: 'Singapur', price: 15500, desc: 'Pan, salsa JR, lechuga, tomate, carne, doble queso cheddar y panceta.', image: 'img/burguer-singapur.png' },
      { id: 20, name: 'Oklahoma', price: 15500, desc: 'Pan, salsa de ajo, carne, doble queso cheddar y panceta.', image: 'img/burguer-oklahoma.png' }
    ]
  },
  {
    category: 'Vegetarianas',
    items: [
      { id: 21, name: 'Dakota', price: 9900, desc: 'Pan, salsa de ajo, pepinos, lechuga, tomate, medallón vegetariano y doble queso cheddar.' },
      { id: 22, name: 'Tijuana', price: 8700, desc: 'Pan, salsa JR, pepinos, medallón vegetariano y doble queso cheddar.' },
      { id: 23, name: 'Orlando', price: 9900, desc: 'Pan, salsa JR, cebolla caramelizada, medallón vegetariano y queso azul.' }
    ]
  },
  {
    category: 'Sandwich',
    items: [
      { id: 11, name: 'Milanesa Simple', price: 17300, desc: 'Pan artesanal, mayonesa, lechuga, tomate, milanesa y queso.' },
      { id: 12, name: 'Milanesa Completo', price: 18000, desc: 'Pan artesanal, mayonesa, lechuga, tomate, milanesa, queso, jamón y huevo.' },
      { id: 13, name: 'Lomito Simple', price: 17300, desc: 'Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno y queso.' },
      { id: 24, name: 'Lomito Completo', price: 18000, desc: 'Pan artesanal, mayonesa, lechuga, tomate, lomo vacuno, queso, jamón y huevo.' }
    ]
  },
  {
    category: 'Papas Fritas',
    items: [
      { id: 25, name: 'Porción Individual (con burger)', price: 1500, desc: 'Papa chica con precio especial acompañando una hamburguesa.' },
      { id: 26, name: 'Porción Individual (sola)', price: 2000, desc: 'Papa chica para pedir sola.' },
      { id: 16, name: 'Tradicional', price: 9300, desc: 'Papas fritas clásicas, porción para dos.' },
      { id: 14, name: 'Con Queso', price: 13200, desc: 'Papas fritas con queso cheddar o muzzarella.' },
      { id: 15, name: 'Queso y Bacon', price: 15900, desc: 'Papas fritas con queso cheddar o muzzarella y panceta picada.' }
    ]
  },
  {
    category: 'Promos y Combos',
    items: [
      { id: 27, name: 'Promo Simple', price: 11200, desc: 'Una hamburguesa completa más una porción de papas.' },
      { id: 28, name: 'Promo JR', price: 20900, desc: 'Dos hamburguesas completas más una porción de papas.' },
      { id: 29, name: 'Combo 1', price: 19100, desc: 'Una porción de nuggets más una porción de papas grandes.' },
      { id: 30, name: 'Combo 2', price: 22500, desc: 'Una porción de coxinhas (30 a 35 unidades) más una porción de papas grandes.' }
    ]
  },
  {
    category: 'Adicionales',
    items: [
      { id: 31, name: 'Adicional Cheddar', price: 2500, desc: 'Extra de cheddar bien fundido.' },
      { id: 32, name: 'Adicional Bacon', price: 2500, desc: 'Panceta crocante para sumar más sabor.' },
      { id: 33, name: 'Adicional Huevo', price: 2500, desc: 'Huevo a la plancha para completar tu burger.' },
      { id: 34, name: 'Adicional Carne y Queso', price: 2500, desc: 'Un plus de carne con queso cheddar.' }
    ]
  }
];

let MENU_DATA = [];
let activeCategoryId = '';
let cart = getStoredCart();
let featuredItems = [];
let featuredIndex = 0;
let featuredAutoplayId = null;
let lastFocusedElement = null;

const menuContainer = document.getElementById('menuContainer');
const menuSection = document.querySelector('.menu-section');
const menuHeading = menuSection?.querySelector('.section-heading');
const menuSearch = document.getElementById('menuSearch');
const cartToggle = document.getElementById('cartToggle');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeCartButton = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartSubtotalText = document.getElementById('cartSubtotalText');
const cartShippingText = document.getElementById('cartShippingText');
const cartShippingRow = document.getElementById('cartShippingRow');
const cartTotalText = document.getElementById('cartTotalText');
const checkoutButton = document.getElementById('checkoutBtn');
const orderNotes = document.getElementById('orderNotes');
const orderAddress = document.getElementById('orderAddress');
const addressField = document.getElementById('addressField');
const orderTypeInputs = document.querySelectorAll('input[name="orderType"]');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroSalesPanel = document.getElementById('heroSalesPanel');

function sanitizeStoredCart(storedCart) {
  if (!Array.isArray(storedCart)) return [];

  return storedCart.reduce((safeCart, item) => {
    const id = Number(item?.id);
    const qty = Math.min(99, Math.floor(Number(item?.qty)));

    if (!Number.isInteger(id) || !Number.isFinite(qty) || qty < 1) {
      return safeCart;
    }

    safeCart.push({ id, qty });
    return safeCart;
  }, []);
}

function getStoredCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem('cj_cart'));
    return sanitizeStoredCart(storedCart);
  } catch (error) {
    console.warn('No se pudo recuperar el carrito guardado.', error);
    return [];
  }
}

function cloneFallbackMenu() {
  return JSON.parse(JSON.stringify(FALLBACK_MENU_DATA));
}

async function loadMenu() {
  try {
    const response = await fetch('menu.json', { cache: 'no-store' });
    if (!response.ok) throw new Error('No se pudo cargar menu.json');
    MENU_DATA = await response.json();
  } catch (error) {
    console.warn('Se usa el menú integrado como respaldo.', error);
    MENU_DATA = cloneFallbackMenu();
  }
}

function formatMoney(value) {
  return Number(value).toLocaleString('es-AR');
}

function normalizeText(text = '') {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function slugify(text) {
  return normalizeText(text)
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function escapeHtml(text = '') {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCurrentOrderType() {
  return document.querySelector('input[name="orderType"]:checked')?.value || 'delivery';
}

function getAllItems() {
  return MENU_DATA.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.category }))
  );
}

function isBurgerCategory(category = '') {
  const nonBurgerCategories = new Set([
    'sandwiches',
    'papas fritas',
    'promos y combos',
    'adicionales'
  ]);

  return !nonBurgerCategories.has(normalizeText(category));
}

function getHeroBestSellers() {
  const burgerItems = getAllItems().filter(item => isBurgerCategory(item.category));
  const curatedItems = HERO_BEST_SELLER_IDS
    .map(id => burgerItems.find(item => item.id === id))
    .filter(Boolean);
  const fallbackItems = burgerItems.filter(item => !curatedItems.some(featured => featured.id === item.id));

  return [...curatedItems, ...fallbackItems].slice(0, 3);
}

function getHeroStartingPrice() {
  const burgerPrices = getAllItems()
    .filter(item => isBurgerCategory(item.category))
    .map(item => Number(item.price))
    .filter(price => Number.isFinite(price));

  return burgerPrices.length ? Math.min(...burgerPrices) : null;
}

function renderHeroSalesPanel() {
  if (!heroSalesPanel) return;

  const bestSellers = getHeroBestSellers();
  const startingPrice = getHeroStartingPrice();

  if (!bestSellers.length || !Number.isFinite(startingPrice)) {
    heroSalesPanel.hidden = true;
    heroSalesPanel.innerHTML = '';
    return;
  }

  heroSalesPanel.hidden = false;
  heroSalesPanel.innerHTML = `
    <div class="hero-sales-header">
      <div>
        <p class="hero-sales-kicker">Más vendidas</p>
        <h3>Entrá por una burger y resolvé la noche.</h3>
      </div>
      <p class="hero-sales-from">
        Burgers desde
        <strong>$${formatMoney(startingPrice)}</strong>
      </p>
    </div>
    <div class="hero-sales-list" role="list" aria-label="Productos más vendidos">
      ${bestSellers.map((item, index) => `
        <article class="hero-sales-item" role="listitem">
          <span class="hero-sales-rank">${String(index + 1).padStart(2, '0')}</span>
          <div class="hero-sales-item-copy">
            <strong>${escapeHtml(item.name)}</strong>
            <span>$${formatMoney(item.price)}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function reconcileCartWithMenu() {
  const itemsById = new Map(getAllItems().map(item => [item.id, item]));

  cart = cart.reduce((safeCart, storedItem) => {
    const currentItem = itemsById.get(storedItem.id);
    if (!currentItem) return safeCart;

    safeCart.push({ ...currentItem, qty: storedItem.qty });
    return safeCart;
  }, []);
}

function getBusinessStatus() {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: BUSINESS_TIMEZONE,
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23'
  });

  const parts = formatter.formatToParts(new Date()).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});

  const currentDay = parts.weekday.replace('.', '').trim(); // Limpia "Sun." a "Sun"
  const currentMinutes = parseInt(parts.hour, 10) * 60 + parseInt(parts.minute, 10);
  const openDays = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const isOpen = openDays.includes(currentDay) && currentMinutes >= (20 * 60) && currentMinutes < (23 * 60);

  return {
    isOpen,
    label: isOpen ? 'Abierto ahora &middot; Cierra 23:00' : 'Cerrado &middot; Abrimos de Miércoles a Domingo de 20:00 a 23:00'
  };
}

function renderStatusBadge() {
  const headerInfo = document.querySelector('.hero-copy');
  if (!headerInfo) return;

  const existingBadge = headerInfo.querySelector('.status-badge');
  existingBadge?.remove();

  const businessBadge = document.createElement('div');
  const { isOpen, label } = getBusinessStatus();
  businessBadge.className = 'status-badge';
  businessBadge.innerHTML = `
    <span class="status-dot ${isOpen ? 'is-open' : 'is-closed'}" aria-hidden="true"></span>
    <span>${label}</span>
  `;

  headerInfo.prepend(businessBadge);
}

function buildIngredientTags(description = '') {
  return description
    .replace(/\.$/, '')
    .split(',')
    .flatMap(part => part.split(/\sy\s/i))
    .map(part => part.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function stopFeaturedAutoplay() {
  if (featuredAutoplayId) {
    window.clearInterval(featuredAutoplayId);
    featuredAutoplayId = null;
  }
}

function startFeaturedAutoplay() {
  stopFeaturedAutoplay();

  if (prefersReducedMotion || featuredItems.length <= 1) return;

  featuredAutoplayId = window.setInterval(() => {
    updateFeaturedShowcase(featuredIndex + 1);
  }, 4800);
}

function updateFeaturedShowcase(nextIndex) {
  if (!featuredItems.length) return;

  featuredIndex = (nextIndex + featuredItems.length) % featuredItems.length;
  const currentItem = featuredItems[featuredIndex];
  const previousIndex = (featuredIndex - 1 + featuredItems.length) % featuredItems.length;
  const nextVisibleIndex = (featuredIndex + 1) % featuredItems.length;
  const showcase = menuSection.querySelector('.featured-showcase');
  if (!showcase) return;
  showcase.style.setProperty('--featured-image', `url("${currentItem.image}")`);

  const title = showcase.querySelector('[data-featured-title]');
  const description = showcase.querySelector('[data-featured-description]');
  const price = showcase.querySelector('[data-featured-price]');
  const category = showcase.querySelector('[data-featured-category]');
  const counter = showcase.querySelector('[data-featured-counter]');
  const tags = showcase.querySelector('[data-featured-tags]');
  const addButton = showcase.querySelector('[data-featured-add]');
  const viewButton = showcase.querySelector('[data-featured-view]');
  const slides = showcase.querySelectorAll('.featured-slide');
  const dots = showcase.querySelectorAll('.featured-dot');

  title.textContent = currentItem.name;
  description.textContent = currentItem.desc || 'Una burger pensada para romper la noche.';
  price.textContent = `$${formatMoney(currentItem.price)}`;
  category.textContent = currentItem.category;
  counter.textContent = `${featuredIndex + 1} / ${featuredItems.length}`;
  addButton.dataset.id = String(currentItem.id);
  addButton.dataset.action = 'add-to-cart';
  viewButton.dataset.target = slugify(currentItem.category);

  tags.innerHTML = buildIngredientTags(currentItem.desc)
    .map(ingredient => `<span class="featured-tag">${escapeHtml(ingredient)}</span>`)
    .join('');

  slides.forEach((slide, index) => {
    slide.classList.remove('is-active', 'is-prev', 'is-next');

    const isActive = index === featuredIndex;
    const isPrev = featuredItems.length > 2 && index === previousIndex;
    const isNext = index === nextVisibleIndex;

    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

    if (isActive) {
      slide.classList.add('is-active');
    } else if (isPrev) {
      slide.classList.add('is-prev');
    } else if (isNext) {
      slide.classList.add('is-next');
    }
  });

  dots.forEach((dot, index) => {
    const isActive = index === featuredIndex;
    dot.classList.toggle('is-active', isActive);
    dot.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function renderFeaturedShowcase() {
  stopFeaturedAutoplay();
  menuSection.querySelector('.featured-showcase')?.remove();

  featuredItems = getAllItems().filter(item => item.image);
  featuredIndex = 0;

  if (!featuredItems.length) return null;

  const showcase = document.createElement('section');
  showcase.className = 'featured-showcase';
  showcase.setAttribute('aria-label', 'Hamburguesas destacadas');
  showcase.innerHTML = `
    <div class="featured-shell">
      <div class="featured-copy">
        <p class="featured-kicker">Burgers destacadas</p>
        <div class="featured-meta">
          <span class="featured-category" data-featured-category></span>
          <span class="featured-counter" data-featured-counter></span>
        </div>
        <h3 class="featured-title" data-featured-title></h3>
        <p class="featured-description" data-featured-description></p>
        <p class="featured-price" data-featured-price></p>
        <div class="featured-tags" data-featured-tags></div>
        <div class="featured-actions">
          <button class="button button-primary" type="button" data-action="add-to-cart" data-featured-add>Agregar al pedido</button>
          <button class="featured-ghost-btn" type="button" data-featured-view>Ver en la carta</button>
        </div>
        <div class="featured-controls">
          <div class="featured-nav">
            <button class="featured-nav-btn" type="button" data-featured-prev aria-label="Ver burger anterior">&lsaquo;</button>
            <button class="featured-nav-btn" type="button" data-featured-next aria-label="Ver burger siguiente">&rsaquo;</button>
          </div>
          <div class="featured-dots" role="tablist" aria-label="Selector de burgers destacadas">
            ${featuredItems
              .map((item, index) => `
                <button class="featured-dot" type="button" data-featured-dot="${index}" aria-label="Ver ${escapeHtml(item.name)}">
                  <img src="${escapeHtml(item.image)}" alt="" loading="lazy" decoding="async">
                </button>
              `)
              .join('')}
          </div>
        </div>
      </div>
      <div class="featured-stage">
        <div class="featured-slides">
          ${featuredItems
            .map((item, index) => `
              <article class="featured-slide" data-featured-slide="${index}">
                <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async">
              </article>
            `)
            .join('')}
        </div>
      </div>
    </div>
  `;

  let pointerStartX = 0;
  const stage = showcase.querySelector('.featured-stage');

  showcase.querySelector('[data-featured-view]').addEventListener('click', event => {
    const targetId = event.currentTarget.dataset.target;
    if (!targetId) return;

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  showcase.querySelector('[data-featured-prev]').addEventListener('click', () => {
    updateFeaturedShowcase(featuredIndex - 1);
    startFeaturedAutoplay();
  });

  showcase.querySelector('[data-featured-next]').addEventListener('click', () => {
    updateFeaturedShowcase(featuredIndex + 1);
    startFeaturedAutoplay();
  });

  showcase.querySelectorAll('[data-featured-dot]').forEach(dot => {
    dot.addEventListener('click', event => {
      updateFeaturedShowcase(Number(event.currentTarget.dataset.featuredDot));
      startFeaturedAutoplay();
    });
  });

  stage.addEventListener('pointerdown', event => {
    pointerStartX = event.clientX;
  });

  stage.addEventListener('pointerup', event => {
    if (!pointerStartX) return;

    const deltaX = event.clientX - pointerStartX;
    pointerStartX = 0;

    if (Math.abs(deltaX) < 40) return;

    updateFeaturedShowcase(featuredIndex + (deltaX < 0 ? 1 : -1));
    startFeaturedAutoplay();
  });

  stage.addEventListener('pointerleave', () => {
    pointerStartX = 0;
  });

  showcase.addEventListener('mouseenter', stopFeaturedAutoplay);
  showcase.addEventListener('mouseleave', startFeaturedAutoplay);
  showcase.addEventListener('focusin', stopFeaturedAutoplay);
  showcase.addEventListener('focusout', event => {
    if (!showcase.contains(event.relatedTarget)) startFeaturedAutoplay();
  });

  updateFeaturedShowcase(0);
  startFeaturedAutoplay();

  return showcase;
}

function createMediaMarkup(item, category) {
  if (item.image) {
    return `
      <div class="item-media-shell">
        <img class="item-media" src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
        <span class="item-visual-tag">Imagen de referencia</span>
      </div>
    `;
  }

  // Lógica de búsqueda de referencia: busca el producto con foto más parecido por ingredientes
  const allItemsWithImages = getAllItems().filter(i => i.image);
  const targetIngredients = buildIngredientTags(item.desc || '');
  let referenceImage = null;
  let maxScore = -1;

  allItemsWithImages.forEach(refItem => {
    const refIngredients = buildIngredientTags(refItem.desc || '');
    let score = 0;
    targetIngredients.forEach(ing => {
      if (refIngredients.includes(ing)) score += 2;
    });
    if (refItem.category === category) score += 1;
    if (score > maxScore && score > 0) {
      maxScore = score;
      referenceImage = refItem.image;
    }
  });

  // Si no se encuentra nada parecido, generamos una imagen gourmet basada en la categoría
  if (!referenceImage) {
    const categoryLower = normalizeText(category);
    const keyword = categoryLower.includes('papas') ? 'fries' : 'burger';
    referenceImage = `https://loremflickr.com/400/300/${keyword},food/all?lock=${item.id}`;
  }

  return `
    <div class="item-media-shell">
      <img class="item-media item-media--reference" src="${escapeHtml(referenceImage)}" alt="${escapeHtml(item.name)}" loading="lazy" decoding="async">
      <span class="item-visual-tag item-visual-tag--placeholder">Imagen de referencia</span>
    </div>
  `;
}

function getItemBadges(item) {
  return ITEM_BADGES[item.id] || [];
}

function renderItemBadges(item) {
  const badges = getItemBadges(item);
  if (!badges.length) return '';

  return `
    <div class="item-badges" aria-label="Etiquetas destacadas">
      ${badges.map(badge => `
        <span class="item-badge item-badge--${badge.tone}">${escapeHtml(badge.label)}</span>
      `).join('')}
    </div>
  `;
}

function renderMenu() {
  const existingNav = menuSection.querySelector('.category-nav');
  const existingEmptyState = menuSection.querySelector('.menu-empty-state');
  existingNav?.remove();
  existingEmptyState?.remove();
  menuContainer.innerHTML = '';

  const navContainer = document.createElement('div');
  navContainer.className = 'category-nav';

  const emptyState = document.createElement('p');
  emptyState.className = 'menu-empty-state';
  emptyState.hidden = true;
  emptyState.textContent = 'No encontramos productos con ese nombre.';

  MENU_DATA.forEach(category => {
    const categoryId = slugify(category.category);

    const navLink = document.createElement('a');
    navLink.href = `#${categoryId}`;
    navLink.dataset.categoryId = categoryId;
    navLink.textContent = category.category;
    navContainer.appendChild(navLink);

    const categoryElement = document.createElement('section');
    categoryElement.className = 'menu-category-section';
    categoryElement.dataset.categoryId = categoryId;
    categoryElement.innerHTML = `<h3 class="category-title" id="${categoryId}">${escapeHtml(category.category)}</h3>`;

    const itemsGrid = document.createElement('div');
    itemsGrid.className = 'menu-items-grid';

    category.items.forEach(item => {
      const itemElement = document.createElement('article');
      itemElement.className = 'menu-item';
      itemElement.dataset.search = normalizeText(`${item.name} ${item.desc || ''} ${category.category}`);
      itemElement.innerHTML = `
        ${createMediaMarkup(item, category.category)}
        <div class="item-info">
          <h4>${escapeHtml(item.name)}</h4>
          <p class="item-desc">${escapeHtml(item.desc || 'Preparado con ingredientes frescos del día.')}</p>
          <div class="item-footer">
            <p class="item-price">$${formatMoney(item.price)}</p>
            <button class="add-btn" type="button" data-action="add-to-cart" data-id="${item.id}" aria-label="Agregar ${escapeHtml(item.name)} al pedido">+</button>
          </div>
        </div>
      `;
      itemElement.querySelector('.item-info')?.insertAdjacentHTML('afterbegin', renderItemBadges(item));
      itemsGrid.appendChild(itemElement);
    });

    categoryElement.appendChild(itemsGrid);
    menuContainer.appendChild(categoryElement);
  });

  const showcase = renderFeaturedShowcase();

  if (showcase) {
    menuHeading.after(showcase);
    showcase.after(navContainer);
  } else {
    menuHeading.after(navContainer);
  }

  navContainer.after(emptyState);

  setupScrollSpy();
}

function setActiveCategory(categoryId, shouldScroll = true) {
  if (!categoryId || categoryId === activeCategoryId) return;

  activeCategoryId = categoryId;
  document.querySelectorAll('.category-nav a').forEach(link => {
    const isActive = link.dataset.categoryId === categoryId;
    link.classList.toggle('active', isActive);

    // Solo hacemos scroll a la categoría en la barra de navegación 
    // si NO es la carga inicial, para evitar que la página principal salte.
    if (isActive && shouldScroll) {
      link.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest'
      });
    }
  });
}

function setupScrollSpy() {
  let isFirstRun = true;
  const handleScroll = () => {
    const visibleSections = [...document.querySelectorAll('.menu-category-section')].filter(section => !section.hidden);
    if (!visibleSections.length) return;

    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    let currentCategoryId = visibleSections[0].dataset.categoryId;

    visibleSections.forEach(section => {
      if (scrollPos >= section.offsetTop - 180) {
        currentCategoryId = section.dataset.categoryId;
      }
    });

    setActiveCategory(currentCategoryId, !isFirstRun);
    isFirstRun = false;
  };

  window.onscroll = handleScroll;
  requestAnimationFrame(handleScroll);
}

function syncOrderModeFields() {
  const orderType = getCurrentOrderType();
  const isDelivery = orderType === 'delivery';

  if (addressField) addressField.hidden = !isDelivery;
  if (orderAddress) {
    orderAddress.disabled = !isDelivery;
    orderAddress.required = isDelivery;
  }

  updateCart();
}

window.filterMenu = () => {
  const query = normalizeText(menuSearch.value);
  const sections = document.querySelectorAll('.menu-category-section');
  const emptyState = document.querySelector('.menu-empty-state');
  const categoryNav = document.querySelector('.category-nav');
  const showcase = document.querySelector('.featured-showcase');
  let visibleSectionCount = 0;

  sections.forEach(section => {
    const items = section.querySelectorAll('.menu-item');
    const navLink = document.querySelector(`.category-nav a[data-category-id="${section.dataset.categoryId}"]`);
    let hasVisibleItems = false;

    items.forEach(item => {
      const matches = item.dataset.search.includes(query);
      item.hidden = !matches;
      hasVisibleItems = hasVisibleItems || matches;
    });

    section.hidden = !hasVisibleItems;
    if (navLink) navLink.hidden = !hasVisibleItems;
    if (hasVisibleItems) visibleSectionCount += 1;
  });

  if (emptyState) {
    emptyState.hidden = visibleSectionCount !== 0;
  }

  if (categoryNav) {
    categoryNav.hidden = visibleSectionCount === 0;
  }

  if (showcase) {
    showcase.hidden = Boolean(query) || visibleSectionCount === 0;
  }

  const firstVisibleSection = [...sections].find(section => !section.hidden);
  if (firstVisibleSection) {
    setActiveCategory(firstVisibleSection.dataset.categoryId);
  }
}

function showToast(message) {
  let toast = document.querySelector('.toast');

  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => toast.classList.remove('show'), 2200);
}

function addToCart(id) {
  const item = getAllItems().find(product => product.id === id);
  if (!item) return;

  const existingItem = cart.find(product => product.id === id);
  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  cartToggle.classList.add('animate-pop');
  window.setTimeout(() => cartToggle.classList.remove('animate-pop'), 300);
  showToast(`${item.name} agregado al pedido.`);
  updateCart();
}

function changeQty(id, delta) {
  const item = cart.find(product => product.id === id);
  if (!item) return;

  const numericDelta = Number(delta);
  if (!Number.isFinite(numericDelta)) return;

  item.qty += numericDelta;
  if (item.qty <= 0) {
    cart = cart.filter(product => product.id !== id);
  }

  updateCart();
}

function getCartFocusableElements() {
  return [...cartModal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')]
    .filter(element => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
}

function updateCart() {
  try {
    const storedCart = cart.map(item => ({ id: item.id, qty: item.qty }));
    localStorage.setItem('cj_cart', JSON.stringify(storedCart));
  } catch (error) {
    console.warn('No se pudo guardar el carrito.', error);
  }

  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const orderType = getCurrentOrderType();
  const isDelivery = orderType === 'delivery';
  const total = subtotal;

  if (cartCount) {
    cartCount.textContent = count;
    cartCount.hidden = count === 0;
  }
  if (cartSubtotalText) cartSubtotalText.textContent = `$${formatMoney(subtotal)}`;
  if (cartShippingRow) cartShippingRow.hidden = true;
  if (cartTotalText) cartTotalText.textContent = `$${formatMoney(total)}`;
  if (checkoutButton) checkoutButton.disabled = cart.length === 0;

  if (!cart.length) {
    cartItemsContainer.innerHTML = '<div class="empty-cart">Tu carrito está vacío.<br>Agregá algo rico del menú.</div>';
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <span class="cart-item-name">${escapeHtml(item.name)}</span>
      <div class="qty-controls">
        <button class="qty-btn" type="button" data-action="change-qty" data-id="${item.id}" data-delta="-1" aria-label="Restar ${escapeHtml(item.name)}">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" type="button" data-action="change-qty" data-id="${item.id}" data-delta="1" aria-label="Sumar ${escapeHtml(item.name)}">+</button>
        <span class="item-subtotal">$${formatMoney(item.price * item.qty)}</span>
      </div>
    </div>
  `).join('');
}

function openCart() {
  if (cartModal.classList.contains('active')) return;

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : cartToggle;
  cartModal.classList.add('active');
  cartModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  cartToggle.setAttribute('aria-expanded', 'true');

  window.requestAnimationFrame(() => {
    (getCartFocusableElements()[0] || closeCartButton).focus();
  });
}

function closeCart() {
  if (!cartModal.classList.contains('active')) return;

  cartModal.classList.remove('active');
  cartModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  cartToggle.setAttribute('aria-expanded', 'false');

  const focusTarget = lastFocusedElement && typeof lastFocusedElement.focus === 'function'
    ? lastFocusedElement
    : cartToggle;

  lastFocusedElement = null;
  focusTarget.focus();
}

function handleModalKeydown(event) {
  if (!cartModal.classList.contains('active')) return;

  if (event.key === 'Escape') {
    event.preventDefault();
    closeCart();
    return;
  }

  if (event.key !== 'Tab') return;

  const focusableElements = getCartFocusableElements();
  if (!focusableElements.length) return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (!cartModal.contains(document.activeElement)) {
    event.preventDefault();
    firstElement.focus();
    return;
  }

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function handleCheckout() {
  if (!cart.length) {
    alert('El carrito está vacío.');
    return;
  }

  const orderType = getCurrentOrderType();
  const isDelivery = orderType === 'delivery';
  const address = orderAddress.value.trim();
  const notes = orderNotes.value.trim();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const total = subtotal;

  if (isDelivery && !address) {
    alert('Escribí la dirección de entrega para continuar.');
    orderAddress.focus();
    return;
  }

  let message = 'Hola Carlos JR! Quiero hacer un pedido:\n';
  message += `Modalidad: ${isDelivery ? 'Delivery' : 'Retiro en el local'}\n`;

  cart.forEach(item => {
    message += `- ${item.qty}x ${item.name}\n`;
  });

  message += `Subtotal productos: $${formatMoney(subtotal)}\n`;

  if (isDelivery) {
    message += `Total productos: $${formatMoney(total)}\n`;
    message += 'Envío: A coordinar por WhatsApp.\n';
    message += `Dirección de entrega: ${address}\n`;
  } else {
    message += `Total: $${formatMoney(total)}\n`;
    message += 'Paso a retirar por el local.\n';
  }

  if (notes) {
    message += `Notas: ${notes}\n`;
  }

  window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
}

async function init() {
  await loadMenu();
  reconcileCartWithMenu();
  renderStatusBadge();
  renderHeroSalesPanel();
  renderMenu();
  updateCart();
  syncOrderModeFields();

  // Forzar el scroll al inicio después de que todo el contenido se haya renderizado
  window.scrollTo(0, 0);

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  checkoutButton?.addEventListener('click', handleCheckout);
  menuSearch?.addEventListener('input', () => filterMenu());

  document.addEventListener('click', event => {
    const btn = event.target.closest('[data-action]');
    if (!btn) return;

    const id = Number(btn.dataset.id);
    const action = btn.dataset.action;

    if (action === 'add-to-cart') {
      addToCart(id);
    } else if (action === 'change-qty') {
      changeQty(id, Number(btn.dataset.delta));
    } else if (action === 'open-cart') {
      openCart();
    } else if (action === 'close-cart') {
      closeCart();
    }
  });

  cartModal.addEventListener('click', event => {
    if (event.target === cartModal) closeCart();
  });

  document.addEventListener('keydown', handleModalKeydown);

  orderTypeInputs.forEach(input => input.addEventListener('change', syncOrderModeFields));
}
function setupCounters() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    document.querySelectorAll('.stat-number').forEach(el => {
      el.textContent = el.dataset.target + (el.dataset.suffix || '');
    });
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1800;
      const startTime = performance.now();

      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

// Dentro de tu función init() existente, agregá esta línea:
// 
init().then(setupCounters);
