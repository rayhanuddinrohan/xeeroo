const products = [
  {
    id: "aurora-bag",
    category: "Accessories",
    price: "৳3,200",
    emoji: "🎒",
    coverImage: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Aurora Backpack", bn: "অরোরা ব্যাকপ্যাক" },
    description: {
      en: "A sporty and spacious companion for daily use.",
      bn: "দৈনন্দিন ব্যবহারের জন্য আরামদায়ক, স্পোর্টি ও roomy ব্যাকপ্যাক।"
    },
    features: {
      en: ["Water resistant", "Laptop sleeve", "Two color options"],
      bn: ["ওয়াটার রেজিস্ট্যান্ট", "ল্যাপটপ স্লিভ", "দুইটি রঙের অপশন"]
    },
    tag: { en: "Best Seller", bn: "সেরা বিক্রয়" }
  },
  {
    id: "luna-lamp",
    category: "Home Decor",
    price: "৳2,800",
    emoji: "💡",
    coverImage: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Luna Lamp", bn: "লুনা ল্যাম্প" },
    description: {
      en: "Soft lighting that makes your room feel calm and premium.",
      bn: "নরম আলো আপনার ঘরকে শান্ত ও প্রিমিয়াম অনুভব করে।"
    },
    features: {
      en: ["Warm light", "Minimal design", "USB powered"],
      bn: ["ওয়ার্ম লাইট", "মিনিমাল ডিজাইন", "ইউএসবি পাওয়ার"]
    },
    tag: { en: "New", bn: "নতুন" }
  },
  {
    id: "nova-jacket",
    category: "Fashion",
    price: "৳4,500",
    emoji: "🧥",
    coverImage: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Nova Jacket", bn: "নোভা জ্যাকেট" },
    description: {
      en: "A smart jacket for comfortable weather and polished style.",
      bn: "আরামদায়ক আবহাওয়ার জন্য স্মার্ট ও স্টাইলিশ জ্যাকেট।"
    },
    features: {
      en: ["Soft fabric", "Wind proof", "Unisex fit"],
      bn: ["নরম কাপড়", "উইন্ড প্রুফ", "ইউনিসেক্স ফিট"]
    },
    tag: { en: "Hot", bn: "হট" }
  },
  {
    id: "pulse-earbuds",
    category: "Tech",
    price: "৳5,200",
    emoji: "🎧",
    coverImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Pulse Earbuds", bn: "পালস ইয়ারবাড" },
    description: {
      en: "Powerful sound and long battery life for everyday listening.",
      bn: "দৈনন্দিন ব্যবহার উপযোগী শক্তিশালী সাউন্ড ও দীর্ঘ ব্যাটারি লাইফ।"
    },
    features: {
      en: ["Noise control", "30h battery", "Fast charging"],
      bn: ["নয়েজ কন্ট্রোল", "৩০ ঘন্টা ব্যাটারি", "ফাস্ট চার্জিং"]
    },
    tag: { en: "Popular", bn: "জনপ্রিয়" }
  },
  {
    id: "velvet-blanket",
    category: "Home Decor",
    price: "৳2,100",
    emoji: "🛋️",
    coverImage: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Velvet Blanket", bn: "ভেলভেট কম্বল" },
    description: {
      en: "A cozy and plush blanket for relaxing evenings.",
      bn: "শান্তি আর আরামের জন্য নরম ও প্রফুল্ল ভেলভেট কম্বল।"
    },
    features: {
      en: ["Soft texture", "Cozy feel", "Easy wash"],
      bn: ["নরম টেক্সচার", "আরামদায়ক অনুভূতি", "সহজ ধোয়া"]
    },
    tag: { en: "Comfort", bn: "আরাম" }
  },
  {
    id: "orbit-watch",
    category: "Fashion",
    price: "৳6,000",
    emoji: "⌚",
    coverImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80"
    ],
    title: { en: "Orbit Watch", bn: "অরবিট ওয়াচ" },
    description: {
      en: "A refined watch that complements your everyday style.",
      bn: "আপনার দৈনন্দিন লুকে মানানসই একটি পরিশীলিত ওয়াচ।"
    },
    features: {
      en: ["Smart display", "Water resistant", "Slim body"],
      bn: ["স্মার্ট ডিসপ্লে", "ওয়াটার রেজিস্ট্যান্ট", "স্লিম বডি"]
    },
    tag: { en: "Limited", bn: "সীমিত" }
  }
];

const PHONE_NUMBER = "8801712345678";
let currentLanguage = localStorage.getItem("xeeroo-lang") || "en";
let currentTheme = localStorage.getItem("xeeroo-theme") || "dark";

const translations = {
  en: {
    nav: { home: "Home", products: "Products", categories: "Categories", contact: "Contact" },
    cta: { shop: "Shop Now", howItWorks: "How it works", viewDetails: "View Details", buyNow: "Buy Now", orderNow: "Order Now", orderViaWhatsApp: "Order via WhatsApp", backToProducts: "← Back to products" },
    common: { all: "All", viewAll: "View all", backToProducts: "← Back to products" },
    categories: { accessories: "Accessories", homeDecor: "Home Decor", fashion: "Fashion", tech: "Tech" },
    hero: { eyebrow: "Smart · Fast · Elegant", title: "A polished storefront for your brand", text: "Launch a modern bilingual shopping experience with a professional layout, simple product browsing, and WhatsApp ordering built in.", badge1: "New Arrival", badge2: "Fast Order", cardTitle: "A premium online store for modern brands", point1: "Elegant landing experience", point2: "Category-based product browsing", point3: "WhatsApp order flow" },
    section: { categories: "Categories", chooseCategory: "Choose what fits your style", featured: "Featured products", featuredTitle: "Top picks for your customers", products: "Products", productsTitle: "Browse products by category", orderProcess: "Order process", orderTitle: "Simple and effortless" },
    steps: { oneTitle: "1. Choose your item", oneText: "Browse products, read details, and pick the item you love.", twoTitle: "2. Order on WhatsApp", twoText: "Tap Buy Now or Order Now and your request opens directly in WhatsApp.", threeTitle: "3. We confirm it", threeText: "We confirm your order and provide the next step for delivery." },
    footer: { text: "© 2026 Xeeroo. Built for GitHub Pages and custom domains." },
    product: { notFound: "Product not found", notFoundText: "Sorry, this product could not be found.", why: "Why customers love it", features: "Key features", noProducts: "No products found for this category." },
    actions: { viewDetails: "View Details", orderNow: "Order Now", buyNow: "Buy Now" }
  },
  bn: {
    nav: { home: "হোম", products: "পণ্য", categories: "ক্যাটাগরি", contact: "যোগাযোগ" },
    cta: { shop: "এখনই দেখুন", howItWorks: "কীভাবে কাজ করে", viewDetails: "বিস্তারিত দেখুন", buyNow: "এখনই কিনুন", orderNow: "অর্ডার করুন", orderViaWhatsApp: "WhatsApp-এ অর্ডার করুন", backToProducts: "← পণ্য তালিকায় ফিরে যান" },
    common: { all: "সব", viewAll: "সব দেখুন", backToProducts: "← পণ্য তালিকায় ফিরে যান" },
    categories: { accessories: "এক্সেসরিজ", homeDecor: "হোম ডেকর", fashion: "ফ্যাশন", tech: "টেক" },
    hero: { eyebrow: "স্মার্ট · ফাস্ট · প্রিমিয়াম", title: "আপনার ব্র্যান্ডের জন্য একটি পরিশীলিত স্টোরফ্রন্ট", text: "একটি আধুনিক দ্বিভাষিক শপিং অভিজ্ঞতা তৈরি করুন যেখানে প্রফেশনাল লেআউট, সহজ পণ্য ব্রাউজিং এবং WhatsApp অর্ডার একসাথে আছে।", badge1: "নতুন আসা", badge2: "দ্রুত অর্ডার", cardTitle: "আধুনিক ব্র্যান্ডের জন্য একটি প্রিমিয়াম অনলাইন স্টোর", point1: "স্মুথ ল্যান্ডিং এক্সপেরিয়েন্স", point2: "ক্যাটাগরি অনুযায়ি পণ্য ব্রাউজিং", point3: "WhatsApp অর্ডার ফ্লো" },
    section: { categories: "ক্যাটাগরি", chooseCategory: "আপনার স্টাইলে মানানসই বেছে নিন", featured: "ফিচার্ড পণ্য", featuredTitle: "আপনার কাস্টমারের জন্য সেরা পছন্দ", products: "পণ্যসমূহ", productsTitle: "ক্যাটাগরি অনুযায়ি পণ্য দেখুন", orderProcess: "অর্ডার প্রক্রিয়া", orderTitle: "সহজ ও নির্ভরযোগ্য" },
    steps: { oneTitle: "১. আপনার পণ্য বাছুন", oneText: "পণ্য দেখুন, বিস্তারিত পড়ুন এবং পছন্দের আইটেম বেছে নিন।", twoTitle: "২. WhatsApp-এ অর্ডার করুন", twoText: "Buy Now বা Order Now ক্লিক করলেই আপনার অনুরোধ সরাসরি WhatsApp-এ খুলে যাবে।", threeTitle: "৩. আমরা কনফার্ম করব", threeText: "আমরা আপনার অর্ডার কনফার্ম করব এবং পরবর্তী ধাপ জানাবো।" },
    footer: { text: "© ২০২৬ এক্সিরু। GitHub Pages ও কাস্টম ডোমেইনের জন্য তৈরি।" },
    product: { notFound: "পণ্যটি পাওয়া যায়নি", notFoundText: "দুঃখিত, এই পণ্যটি পাওয়া যায়নি।", why: "কেন গ্রাহকরা পছন্দ করেন", features: "মূল বৈশিষ্ট্য", noProducts: "এই ক্যাটাগরিতে কোন পণ্য নেই।" },
    actions: { viewDetails: "বিস্তারিত দেখুন", orderNow: "অর্ডার করুন", buyNow: "এখনই কিনুন" }
  }
};

function getLocalized(product, field) {
  if (product[field] && typeof product[field] === "object") {
    return product[field][currentLanguage] || product[field].en;
  }
  return product[field];
}

function getCategoryLabel(category) {
  const labels = translations[currentLanguage].categories;
  return category === "All" ? translations[currentLanguage].common.all : labels[category.toLowerCase().replace(/ /g, "")] || category;
}

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("xeeroo-lang", lang);
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const keys = element.dataset.i18n.split(".");
    let value = translations[lang];
    keys.forEach((key) => {
      value = value?.[key];
    });
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  if (document.getElementById("featured-products")) {
    renderFeaturedProducts();
  }
  if (document.getElementById("products-grid")) {
    renderProducts(new URLSearchParams(window.location.search).get("category") || "All");
  }
  if (document.getElementById("product-detail")) {
    renderProductDetails();
  }
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("xeeroo-theme", theme);
  document.body.classList.toggle("theme-light", theme === "light");
  document.body.classList.toggle("theme-dark", theme === "dark");
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "dark" ? "☀️" : "🌙";
  }
}

function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const toggle = document.getElementById("menu-toggle");
  if (!menu || !toggle) return;
  const isOpen = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
}

function getProductById(id) {
  return products.find((product) => product.id === id) || null;
}

function getCategoryList() {
  return ["All", ...new Set(products.map((product) => product.category))];
}

function getGalleryImages(product) {
  const images = Array.isArray(product.galleryImages) ? product.galleryImages : [];
  return images.slice(0, 10);
}

function getProductImage(product) {
  return product.coverImage || getGalleryImages(product)[0] || "";
}

function buildWhatsAppLink(product) {
  const title = getLocalized(product, "title");
  const message = currentLanguage === "bn"
    ? `হ্যালো! আমি ${title} অর্ডার করতে চাই। দাম: ${product.price}। অনুগ্রহ করে উপলব্ধতা নিশ্চিত করুন।`
    : `Hello! I want to order ${title}. Price: ${product.price}. Please confirm availability.`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  const featured = products.slice(0, 3);
  container.innerHTML = featured
    .map((product) => `
      <article class="card" onclick="window.location.href='product-details.html?product=${product.id}'">
        <div class="card-media">
          ${getProductImage(product)
            ? `<img class="product-image" src="${getProductImage(product)}" alt="${getLocalized(product, "title")}" />`
            : `<div class="card-emoji">${product.emoji}</div>`}
        </div>
        <p class="eyebrow">${getLocalized(product, "tag")}</p>
        <h3>${getLocalized(product, "title")}</h3>
        <p>${getLocalized(product, "description")}</p>
        <p class="price">${product.price}</p>
        <div class="card-actions">
          <a class="button button-secondary" href="product-details.html?product=${product.id}" onclick="event.stopPropagation()">${translations[currentLanguage].cta.viewDetails}</a>
          <a class="button button-primary" href="${buildWhatsAppLink(product)}" target="_blank" onclick="event.stopPropagation()">${translations[currentLanguage].cta.buyNow}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderCategoryBar(activeCategory = "All") {
  const container = document.getElementById("category-bar");
  if (!container) return;

  const categories = getCategoryList();
  container.innerHTML = categories
    .map((category) => {
      const isActive = category === activeCategory;
      return `<button class="chip ${isActive ? "active" : ""}" data-category="${category}">${getCategoryLabel(category)}</button>`;
    })
    .join("");

  container.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextCategory = button.getAttribute("data-category");
      const url = new URL(window.location.href);
      url.searchParams.set("category", nextCategory);
      window.history.replaceState({}, "", url);
      renderProducts(nextCategory);
    });
  });
}

function renderProducts(activeCategory = "All") {
  const container = document.getElementById("products-grid");
  if (!container) return;

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((product) => product.category === activeCategory);

  if (!filteredProducts.length) {
    container.innerHTML = `<p>${translations[currentLanguage].product.noProducts}</p>`;
    return;
  }

  container.innerHTML = filteredProducts
    .map((product) => `
      <article class="card" onclick="window.location.href='product-details.html?product=${product.id}'">
        <div class="card-media">
          ${getProductImage(product)
            ? `<img class="product-image" src="${getProductImage(product)}" alt="${getLocalized(product, "title")}" />`
            : `<div class="card-emoji">${product.emoji}</div>`}
        </div>
        <p class="eyebrow">${getLocalized(product, "tag")}</p>
        <h3>${getLocalized(product, "title")}</h3>
        <p>${getLocalized(product, "description")}</p>
        <p class="price">${product.price}</p>
        <div class="card-actions">
          <a class="button button-secondary" href="product-details.html?product=${product.id}" onclick="event.stopPropagation()">${translations[currentLanguage].cta.viewDetails}</a>
          <a class="button button-primary" href="${buildWhatsAppLink(product)}" target="_blank" onclick="event.stopPropagation()">${translations[currentLanguage].cta.orderNow}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderProductDetails() {
  const container = document.getElementById("product-detail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const productId = params.get("product");
  const product = getProductById(productId);

  if (!product) {
    container.innerHTML = `<div class="card"><h3>${translations[currentLanguage].product.notFound}</h3><p>${translations[currentLanguage].product.notFoundText}</p></div>`;
    return;
  }

  const galleryImages = getGalleryImages(product);
  const mainImage = getProductImage(product);

  container.innerHTML = `
    <div class="detail-top">
      <div>
        <p class="eyebrow">${getLocalized(product, "tag")}</p>
        <h2>${getLocalized(product, "title")}</h2>
      </div>
      <div class="price">${product.price}</div>
    </div>
    <div class="detail-grid">
      <div class="card detail-media-card">
        <div class="detail-media">
          <img id="main-product-image" class="detail-main-image" src="${mainImage}" alt="${getLocalized(product, "title")}" />
          ${galleryImages.length ? `<div class="gallery-thumbs">${galleryImages.map((image, index) => `<button class="thumb-btn ${index === 0 ? "active" : ""}" data-image="${image}" data-index="${index}" type="button"><img src="${image}" alt="${getLocalized(product, "title")} ${index + 1}" /></button>`).join("")}</div>` : ""}
        </div>
      </div>
      <div class="card">
        <h3>${translations[currentLanguage].product.why}</h3>
        <p>${getLocalized(product, "description")}</p>
        <h3>${translations[currentLanguage].product.features}</h3>
        <ul class="detail-list">
          ${(getLocalized(product, "features") || []).map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
        <div class="card-actions">
          <a class="button button-primary" href="${buildWhatsAppLink(product)}" target="_blank">${translations[currentLanguage].cta.orderViaWhatsApp}</a>
          <a class="button button-secondary" href="products.html">${translations[currentLanguage].cta.backToProducts}</a>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll(".thumb-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const mainImageElement = container.querySelector("#main-product-image");
      if (!mainImageElement) return;
      mainImageElement.src = button.dataset.image;
      container.querySelectorAll(".thumb-btn").forEach((thumb) => thumb.classList.toggle("active", thumb === button));
    });
  });
}

let lastScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
const headerHideThreshold = 80;
const headerScrollTolerance = 10;

function handleHeaderScroll() {
  const topbar = document.querySelector(".topbar");
  if (!topbar) return;

  const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  const delta = currentScroll - lastScrollY;

  if (Math.abs(delta) < headerScrollTolerance) {
    return;
  }

  if (currentScroll > lastScrollY && currentScroll > headerHideThreshold) {
    topbar.classList.add("hidden");
  } else {
    topbar.classList.remove("hidden");
  }

  lastScrollY = currentScroll;
}

function initPage() {
  const path = window.location.pathname.split("/").pop();
  const params = new URLSearchParams(window.location.search);

  setTheme(currentTheme);
  setLanguage(currentLanguage);

  if (path === "products.html") {
    const activeCategory = params.get("category") || "All";
    renderCategoryBar(activeCategory);
    renderProducts(activeCategory);
  } else if (path === "product-details.html") {
    renderProductDetails();
  } else {
    renderFeaturedProducts();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("mobile-menu")?.classList.remove("open");
      document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  initPage();
});
