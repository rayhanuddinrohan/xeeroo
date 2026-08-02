const products = [
  {
    id: "skin-care",
    category: "Beauty & Cosmetics",
    price: "৳1,399",
    emoji: "⌚",
    coverImage: "https://ae-pic-a1.aliexpress-media.com/kf/S90bc1d23acbc44dcb9993d038097ddcdr.jpg",
    galleryImages: [
      "https://ae-pic-a1.aliexpress-media.com/kf/Sec6cec7b3ca34a7a90cd47678762eaacx.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sb58c0f0ab7c646468c9eba5bd51e21804.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/Sbad78bc5ae6f44a68571f3f9d0d6b3a6N.jpg",
      "https://ae-pic-a1.aliexpress-media.com/kf/S3fb240f743204b15a01631134355a4dfM.png"
    ],
    title: { en: "Snail Collagen Day & Night Cream Set - 2-in-1 Brightening & Firming Restores Clarity & Elasticity", bn: "Snail Collagen Day & Night Cream Set - 2-in-1 Brightening & Firming Restores Clarity & Elasticity" },
    description: {
      en: "Moisturizing Formula for All-Day Hydration The moisturizing formula deeply hydrates the skin, ensuring a soft, supple feel throughout the day and night, ideal for maintaining a healthy, glowing complexion..",
      bn: "Moisturizing Formula for All-Day Hydration The moisturizing formula deeply hydrates the skin, ensuring a soft, supple feel throughout the day and night, ideal for maintaining a healthy, glowing complexion."
    },
    features: {
      en: ["20g Day Cream", "20g Night Cream", "Suitable for all skin types"],
      bn: ["20g দিনের ক্রিম", "20g রাতের ক্রিম", "সব ত্বকের জন্য উপযুক্ত"]
    },
    tag: { en: "Trending", bn: "ট্রেন্ডিং" }
  },
  {
    id: "799-razor",
    category: "Beauty & Cosmetics",
    price: "৳250",
    emoji: "⌚",
    coverImage: "https://assets.zipper.com.bd/uploads/products/1200/4g4gapiv-alshabab-shaving-razors-1.webp",
    galleryImages: [
      "https://assets.zipper.com.bd/uploads/products/1200/4g4gapiv-alshabab-shaving-razors.webp",
      "https://assets.zipper.com.bd/uploads/products/1200/4g4gapiv-alshabab-shaving-razors-2.webp"
      
    ],
    title: { en: "Double Edge Safety Razor for Men | Stainless Steel Razor", bn: "রেজার পুরুষ দের জন্য | স্টেইনলেস স্টিল রেজার" },
    description: {
      en: "Classic art of wet shaving with Alsabb Double Edge stainless steel safety razor. Comfortable and environmentally friendly Shaving Razors. Made with accurate and durability.",
      bn: "Alshabab ডাবল এজ স্টেইনলেস স্টিল সেফটি রেজার দিয়ে ভেজা শেভিং এর ক্লাসিক আর্ট। আরামদায়ক এবং পরিবেশ বান্ধব শেভিং রেজার। সঠিকতা এবং স্থায়িত্বের সাথে তৈরি।"
    },
    features: {
      en: ["Double edge design","High-quality stainless steel.", "Suitable for all skin types.", "Easy to use and maintain."],
      bn: ["ডাবল এজ ডিজাইন", "উচ্চ গুণসম্পন্ন স্টেইনলেস স্টিল।", "সব ত্বকের জন্য উপযুক্ত।", "ব্যবহার ও রক্ষণাবেদনে সহজ।"]
    },
    tag: { en: "Trending", bn: "ট্রেন্ডিং" }
  },
  {
    id: "fluffy-powder",
    category: "Men's Fashion",
    price: "৳350",
    emoji: "⌚",
    coverImage: "https://img.drz.lazcdn.com/static/bd/p/d6219f5e6a31824c4149c290de60c6d4.jpg_2200x2200q80.jpg_.webp",
    galleryImages: [
      "https://img.drz.lazcdn.com/static/bd/p/05a3281c4e3b584bd007fcfa33cb6c56.jpg_2200x2200q80.jpg_.webp",
      "https://img.drz.lazcdn.com/static/bd/p/69b81b23c46ffd625ac1febc9d01e1c1.jpg_2200x2200q80.jpg_.webp",
      "https://img.drz.lazcdn.com/static/bd/p/e0185b07cea2b0941eb0cf8b272cf95a.jpg_2200x2200q80.jpg_.webp",
      "https://img.drz.lazcdn.com/static/bd/p/7f8b4de5353c9bbef65bfcf7ca123152.jpg_2200x2200q80.jpg_.webp"
    ],
    title: { en: "Hair Fluffy Powder Bangs to Oil Fluffy Powder", bn: "Hair Fluffy Powder Bangs to Oil Fluffy Powder" },
    description: {
      en: "Instant Volume: Adds instant lift and volume to your hair with a natural matte finish.Lightweight Formula: Absorbs excess oil without leaving hair sticky or heavy, keeping your style in place all day.Easy to Use: Sprinkle a small amount onto dry hair roots and style with your fingers.Natural & Safe: Colorless, odorless, residue-free formula that's suitable for all hair types and colors. Vegan and cruelty-free.Travel-Friendly: Compact and portable design, perfect for quick styling anytime, anywhere. Suitable for both men and women.",

      bn: "ইনস্ট্যান্ট ভলিউম: আপনার চুলে প্রাকৃতিক ম্যাট ফিনিশ সহ তাৎক্ষণিক লিফট এবং ভলিউম যোগ করে। হালকা ওজনের সূত্র: অতিরিক্ত তেল শোষণ করে চুলকে আঠালো বা ভারী না রেখে, আপনার স্টাইল সারাদিন স্থানে রাখে। ব্যবহার করা সহজ: শুকনো চুলের মূলগুলিতে সামান্য পরিমাণ ছিটিয়ে দিন এবং আঙুল দিয়ে স্টাইল করুন। প্রাকৃতিক এবং নিরাপদ: রঙহীন, গন্ধহীন, অবশিষ্টাংশ-মুক্ত সূত্র যা সমস্ত চুলের ধরন এবং রঙের জন্য উপযুক্ত। ভেগান এবং নিষ্ঠুরতা-মুক্ত। ট্রাভেল-ফ্রেন্ডলি: কমপ্যাক্ট এবং পোর্টেবল ডিজাইন, যেকোনো সময়, যেকোনো জায়গায় দ্রুত স্টাইলিংয়ের জন্য উপযুক্ত। পুরুষ এবং মহিলাদের জন্য উপযুক্ত।"
    },
    features: {
      en: ["roduct Name: Hair Fluffy Powder Texturizing Powder","Color: Black, Red", "Product Type: Hair Fluffy Powder", "Product Weight: 10g", "Suitable for all hair types"],
      bn: [" পণ্যের নাম: হেয়ার ফ্লাফি পাউডার টেক্সচারাইজিং পাউডার", "পণ্যের ধরন: হেয়ার ফ্লাফি পাউডার", "পণ্যের ওজন: 10g", "সব ধরনের চুলের জন্য উপযুক্ত"]
    },
    tag: { en: "Trending", bn: "ট্রেন্ডিং" }
  },
  {
    id: "Black-Sunglass-1",
    category: "Men's Fashion",
    price: "৳219",
    emoji: "🕶️",
    coverImage: "https://img.drz.lazcdn.com/g/kf/Sefe6e471ca174cc683b2dba2b50d0785N.jpg_720x720q80.jpg_.webp",
    galleryImages: [
      "https://img.drz.lazcdn.com/g/kf/S2b29f934fc96490db2294b65205644e4v.jpg_720x720q80.jpg_.webp",
      "https://img.drz.lazcdn.com/g/kf/S3094d52188a94dada60f4c86b0cb4572X.jpg_720x720q80.jpg_.webp",
      "https://img.drz.lazcdn.com/g/kf/S51ec3389971542c08d736d52abd959d1k.jpg_720x720q80.jpg_.webp",
      "https://img.drz.lazcdn.com/g/kf/S9491e6464c1741169542007151d21e83e.jpg_720x720q80.jpg_.webp"
    ],
    title: { en: "Trendsetter -Upscale Living -New Trendy Look Very Stylish Black Sunglass for Men", bn: "Trendsetter -Upscale Living -New Trendy Look Very Stylish Black Sunglass for Men" },
    description: {
      en: "New Trendy Look Very Stylish Black Sunglass for Men 2022 polorizedBest quality polorized sunglassquality 100% Size:Standard(All face)Product Type: Very Stylish SunglassesMain Material: high quality  frameGender: MenColor: DEEP  BlacStandard size and 400 uv protectionOccasion Trendy lifestyle and regular fashionloocking like a picture",
      bn: "নতুন ট্রেন্ডি লুক খুব স্টাইলিশ কালো সানগ্লাস পুরুষদের জন্য 2022 পোলারাইজড সেরা মানের পোলারাইজড সানগ্লাস মানের 100% আকার: স্ট্যান্ডার্ড (সব মুখ) পণ্যের ধরন: খুব স্টাইলিশ সানগ্লাস প্রধান উপাদান: উচ্চ মানের ফ্রেম লিঙ্গ: পুরুষ রঙ: ডিপ ব্ল্যাক স্ট্যান্ডার্ড আকার এবং 400 ইউভি সুরক্ষা সুযোগ ট্রেন্ডি লাইফস্টাইল এবং নিয়মিত ফ্যাশন লুকিং একটি ছবির মতো"
    },
    features: {
      en: ["Best quality polorized sunglass", "Size:Standard(All face)", "Color:Black", "UV400 Protection", "Gender: Men"],
      bn: ["সেরা মানের পোলারাইজড সানগ্লাস", "আকার: স্ট্যান্ডার্ড (সব মুখ)", "রঙ: কালো", "UV400 সুরক্ষা", "লিঙ্গ: পুরুষ"]
    },
    tag: { en: "Fashion", bn: "ফ্যাশন" }
  },
  // {
  //   id: "skin-caree",
  //   category: "Cosmetics",
  //   price: "৳PRICE",
  //   emoji: "⌚",
  //   coverImage: "thumb image",
  //   galleryImages: [
  //     "img-1",
  //     "img-2",
  //     "img-3",
  //     "img-4"
  //   ],
  //   title: { en: "eng-title", bn: "bangle-title" },
  //   description: {
  //     en: "eng-desc",
  //     bn: "bangla-des"
  //   },
  //   features: {
  //     en: ["features in eng"],
  //     bn: ["bangla feature"]
  //   },
  //   tag: { en: "Trending", bn: "ট্রেন্ডিং" }
  // }
];

const PHONE_NUMBER = "8801570243005";
let currentLanguage = "en";
let currentTheme = "light";

const translations = {
  en: {
    nav: { home: "Home", products: "Products", categories: "Categories", contact: "Contact" },
    cta: { shop: "Shop Now", howItWorks: "How it works", viewDetails: "View Details", buyNow: "Buy Now", orderNow: "Order Now", orderViaWhatsApp: "Order via WhatsApp", backToProducts: "← Back to products" },
    common: { all: "All", viewAll: "View all", backToProducts: "← Back to products" },
    categories: { accessories: "Accessories", homeDecor: "Home Decor", fashion: "Fashion", tech: "Tech" },
    hero: { eyebrow: "Smart · Fast · Elegant", title: "A polished storefront for your brand", text: "Launch a modern bilingual shopping experience with a professional layout, simple product browsing, and WhatsApp ordering built in.", badge1: "New Arrival", badge2: "Fast Order", cardTitle: "A premium online store for modern brands", point1: "Elegant landing experience", point2: "Category-based product browsing", point3: "WhatsApp order flow" },
    section: { categories: "Categories", chooseCategory: "Choose what fits your style", featured: "Featured products", featuredTitle: "Top picks for your customers", products: "Products", productsTitle: "Browse products by category", orderProcess: "Order process", orderTitle: "Simple and effortless" },
    steps: { oneTitle: "1. Choose your item", oneText: "Browse products, read details, and pick the item you love.", twoTitle: "2. Order on WhatsApp", twoText: "Tap Buy Now or Order Now and your request opens directly in WhatsApp.", threeTitle: "3. We confirm it", threeText: "We confirm your order and provide the next step for delivery." },
    footer: { text: "Copyright © 2026 XEEROO. All rights reserved." },
    product: { notFound: "Product not found", notFoundText: "Sorry, this product could not be found.", why: "Why customers love it", features: "Key features", noProducts: "No products found for this category." },
    actions: { viewDetails: "View Details", orderNow: "Order Now", buyNow: "Buy Now" }
  },
  bn: {
    nav: { home: "হোম", products: "পণ্য", categories: "ক্যাটাগরি", contact: "যোগাযোগ" },
    cta: { shop: "এখনই দেখুন", howItWorks: "কীভাবে কাজ করে", viewDetails: "বিস্তারিত দেখুন", buyNow: "এখনই কিনুন", orderNow: "অর্ডার করুন", orderViaWhatsApp: "WhatsApp-এ অর্ডার করুন", backToProducts: "← পণ্য তালিকায় ফিরে যান" },
    common: { all: "সব", viewAll: "সব দেখুন", backToProducts: "← পণ্য তালিকায় ফিরে যান" },
    categories: { accessories: "এক্সেসরিজ", homeDecor: "হোম ডেকর", fashion: "ফ্যাশন", tech: "টেক" },
    hero: { eyebrow: "স্মার্ট · ফাস্ট · প্রিমিয়াম", title: "আপনার ব্র্যান্ডের জন্য একটি পরিশীলিত স্টোরফ্রন্ট", text: "একটি আধুনিক দ্বিভাষিক শপিং অভিজ্ঞতা তৈরি করুন যেখানে প্রফেশনাল লেআউট, সহজ পণ্য ব্রাউজিং এবং WhatsApp অর্ডার একসাথে আছে।", badge1: "নতুন আসা", badge2: "দ্রুত অর্ডার", cardTitle: "আধুনিক ব্র্যান্ডের জন্য একটি প্রিমিয়াম অনলাইন স্টোর", point1: "স্মুথ ল্যান্ডিং এক্সপেরিয়েন্স", point2: "ক্যাটাগরি অনুযায়ি পণ্য ব্রাউজিং", point3: "WhatsApp অর্ডার ফ্লো" },
    section: { categories: "ক্যাটাগরি", chooseCategory: "আপনার স্টাইলে মানানসই বেছে নিন", featured: "ফিচার্ড পণ্য", featuredTitle: "আপনার কাস্টমারের জন্য সেরা পছন্দ", products: "পণ্যসমূহ", productsTitle: "ক্যাটাগরি অনুযায়ি পণ্য দেখুন", orderProcess: "অর্ডার প্রক্রিয়া", orderTitle: "সহজ ও নির্ভরযোগ্য" },
    steps: { oneTitle: "১. আপনার পণ্য বাছুন", oneText: "পণ্য দেখুন, বিস্তারিত পড়ুন এবং পছন্দের আইটেম বেছে নিন।", twoTitle: "২. WhatsApp-এ অর্ডার করুন", twoText: "Buy Now বা Order Now ক্লিক করলেই আপনার অনুরোধ সরাসরি WhatsApp-এ খুলে যাবে।", threeTitle: "৩. আমরা কনফার্ম করব", threeText: "আমরা আপনার অর্ডার কনফার্ম করব এবং পরবর্তী ধাপ জানাবো।" },
    footer: { text: "Copyright © 2026 XEEROO. All rights reserved." },
    product: { notFound: "পণ্যটি পাওয়া যায়নি", notFoundText: "দুঃখিত, এই পণ্যটি পাওয়া যায়নি।", why: "কেন গ্রাহকরা পছন্দ করেন", features: "মূল বৈশিষ্ট্য", noProducts: "এই ক্যাটাগরিতে কোন পণ্য নেই।" },
    actions: { viewDetails: "বিস্তারিত দেখুন", orderNow: "অর্ডার করুন", buyNow: "এখনই কিনুন" }
  }
};

// --- Utility functions ---

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getProductSlug(product) {
  const title = getLocalized(product, "title");
  return slugify(title);
}

function getCategorySlug(category) {
  return slugify(category);
}

function getProductUrl(product) {
  const catSlug = getCategorySlug(product.category);
  const prodSlug = getProductSlug(product);
  return `/${catSlug}/${prodSlug}`;
}

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
    const params = parseUrl();
    renderProducts(params.category || "All");
  }
  if (document.getElementById("product-detail")) {
    const params = parseUrl();
    renderProductDetails(params.productId);
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
  const overlay = document.getElementById("mobile-overlay");
  if (!menu) return;
  const isOpen = menu.classList.toggle("open");
  if (overlay) overlay.classList.toggle("open", isOpen);
  document.getElementById("menu-toggle")?.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.getElementById("mobile-overlay");
  menu?.classList.remove("open");
  overlay?.classList.remove("open");
  document.getElementById("menu-toggle")?.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

function getProductById(id) {
  return products.find((product) => product.id === id) || null;
}

function getCategoryList() {
  return ["All", ...new Set(products.map((product) => product.category).filter(Boolean))];
}

function getGalleryImages(product) {
  const images = Array.isArray(product.galleryImages) ? product.galleryImages : [];
  const mainImage = product.coverImage || images[0] || "";
  const rest = images.filter((image) => image && image !== mainImage);
  return [mainImage, ...rest].filter(Boolean).slice(0, 10);
}

function getProductImage(product) {
  return product.coverImage || getGalleryImages(product)[0] || "";
}

function buildWhatsAppLink(product) {
  const title = getLocalized(product, "title");
  const productUrl = `${window.location.origin}${getProductUrl(product)}`;
  const message = currentLanguage === "bn"
    ? `হ্যালো! আমি ${title} অর্ডার করতে চাই। দাম: ${product.price}।\nপণ্যটি দেখুন: ${productUrl}\nঅনুগ্রহ করে উপলব্ধতা নিশ্চিত করুন।`
    : `Hello! I want to order ${title}. Price: ${product.price}.\nView product: ${productUrl}\nPlease confirm availability.`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

function buildFacebookLink(product) {
  return `https://www.facebook.com/XEEROO.0/`;
}

function buildInstagramLink(product) {
  return `https://www.instagram.com/XEEROO.0/`;
}

// --- SPA Router ---

function parseUrl() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  // Home page
  if (path === "/" || path === "/home" || path === "/index.html") {
    return { page: "home" };
  }

  // Products page (no category filter)
  if (path === "/products" || path === "/products.html") {
    return { page: "products", category: "All" };
  }

  // Contact page
  if (path === "/contact" || path === "/contact.html" || path === "/contact/") {
    return { page: "contact" };
  }

  const parts = path.split("/").filter(Boolean);

  // /products/category-slug/ — products page filtered by category
  if (parts.length >= 2 && parts[0] === "products") {
    const catSlug = parts[1];
    // Find the matching category from products
    for (const product of products) {
      if (getCategorySlug(product.category) === catSlug) {
        return { page: "products", category: product.category };
      }
    }
    // If category not found, show all products
    return { page: "products", category: "All" };
  }

  // /category-slug/product-slug — product detail page
  if (parts.length >= 2) {
    const catSlug = parts[0];
    const prodSlug = parts[1];

    // Find product by matching slugs
    for (const product of products) {
      if (getCategorySlug(product.category) === catSlug && getProductSlug(product) === prodSlug) {
        return { page: "product-detail", productId: product.id };
      }
    }

    // If we found a category but no product, show products page filtered by category
    const matchingCat = products.find(p => getCategorySlug(p.category) === catSlug);
    if (matchingCat) {
      return { page: "products", category: matchingCat.category };
    }

    // Fallback - try direct product lookup by id
    const productById = getProductById(parts[1]);
    if (productById) {
      return { page: "product-detail", productId: productById.id };
    }
  }

  // If we have a single part that could be a category
  if (parts.length === 1) {
    const catSlug = parts[0];
    const matchingCat = products.find(p => getCategorySlug(p.category) === catSlug);
    if (matchingCat) {
      return { page: "products", category: matchingCat.category };
    }
  }

  return { page: "home" };
}

function navigateTo(url) {
  window.history.pushState({}, "", url);
  handleRoute();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleRoute() {
  const params = parseUrl();
  const page = params.page;

  // Hide all pages
  document.querySelectorAll("[id^='page-']").forEach((el) => {
    el.style.display = "none";
  });

  // Show contact section only on home page
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.style.display = page === "home" ? "" : "none";
  }

  if (page === "home") {
    const pageEl = document.getElementById("page-home");
    if (pageEl) {
      pageEl.style.display = "";
      renderFeaturedProducts();
      renderHomeCategoryBar();
    }
  } else if (page === "products") {
    const pageEl = document.getElementById("page-products");
    if (pageEl) {
      pageEl.style.display = "";
      renderCategoryBar(params.category || "All");
      renderProducts(params.category || "All");
    }
  } else if (page === "product-detail") {
    const pageEl = document.getElementById("page-product-detail");
    if (pageEl) {
      pageEl.style.display = "";
      renderProductDetails(params.productId);
    }
  } else if (page === "contact") {
    const pageEl = document.getElementById("page-contact");
    if (pageEl) {
      pageEl.style.display = "";
    }
  }
}

// --- Render functions ---

function renderFeaturedProducts() {
  const container = document.getElementById("featured-products");
  if (!container) return;

  const featured = products.slice(0, 6);
  container.innerHTML = featured
    .map((product) => `
      <article class="card home-card" onclick="navigateTo('${getProductUrl(product)}')">
        <div class="card-media">
          ${getProductImage(product)
            ? `<img class="product-image" src="${getProductImage(product)}" alt="${getLocalized(product, "title")}" />`
            : `<div class="card-emoji">${product.emoji}</div>`}
        </div>
        <p class="eyebrow">${getLocalized(product, "tag")}</p>
        <h3>${getLocalized(product, "title")}</h3>
        
        <p class="price">${product.price}</p>
        <div class="card-actions">
          <a class="button button-secondary" href="${getProductUrl(product)}" onclick="event.stopPropagation(); navigateTo('${getProductUrl(product)}'); return false;">${translations[currentLanguage].cta.viewDetails}</a>
          <a class="button button-whatsapp button-icon" href="${buildWhatsAppLink(product)}" target="_blank" onclick="event.stopPropagation()" aria-label="WhatsApp"><img src="/whatsapp.png" alt="WhatsApp" /> ${translations[currentLanguage].cta.buyNow}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderHomeCategoryBar() {
  const container = document.getElementById("home-category-bar");
  if (!container) return;

  const categories = getCategoryList();
  container.innerHTML = categories
    .map((category) => {
      const isActive = category === "All";
      return `<button class="chip ${isActive ? "active" : ""}" data-category="${category}">${getCategoryLabel(category)}</button>`;
    })
    .join("");

  container.querySelectorAll("button[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextCategory = button.getAttribute("data-category");
      const catSlug = nextCategory === "All" ? "" : getCategorySlug(nextCategory);
      const url = catSlug ? `/products/${catSlug}/` : "/products/";
      navigateTo(url);
    });
  });
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
      const catSlug = nextCategory === "All" ? "" : getCategorySlug(nextCategory);
      const url = catSlug ? `/products/${catSlug}/` : "/products/";
      navigateTo(url);
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
      <article class="card" onclick="navigateTo('${getProductUrl(product)}')">
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
          <a class="button button-secondary" href="${getProductUrl(product)}" onclick="event.stopPropagation(); navigateTo('${getProductUrl(product)}'); return false;">${translations[currentLanguage].cta.viewDetails}</a>
          <a class="button button-whatsapp button-icon" href="${buildWhatsAppLink(product)}" target="_blank" onclick="event.stopPropagation()" aria-label="WhatsApp"><img src="/whatsapp.png" alt="WhatsApp" /> ${translations[currentLanguage].cta.orderNow}</a>
        </div>
      </article>
    `)
    .join("");
}

function renderProductDetails(productId) {
  const container = document.getElementById("product-detail");
  if (!container) return;

  const product = getProductById(productId);

  if (!product) {
    container.innerHTML = `<div class="card"><h3>${translations[currentLanguage].product.notFound}</h3><p>${translations[currentLanguage].product.notFoundText}</p></div>`;
    return;
  }

  const galleryImages = getGalleryImages(product);
  const mainImage = getProductImage(product);
  let currentImageIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;

  function openFullScreen(index) {
    currentImageIndex = index;
    const overlay = document.getElementById("gallery-overlay");
    const overlayImg = overlay.querySelector(".gallery-overlay-img");
    overlayImg.src = galleryImages[currentImageIndex];
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeFullScreen() {
    const overlay = document.getElementById("gallery-overlay");
    overlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  function navigateGallery(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
    if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
    const overlayImg = document.querySelector("#gallery-overlay .gallery-overlay-img");
    overlayImg.src = galleryImages[currentImageIndex];
  }

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        navigateGallery(1);
      } else {
        navigateGallery(-1);
      }
    }
  }

  // Get related products from same category (excluding current product)
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

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
          <img id="main-product-image" class="detail-main-image" src="${mainImage}" alt="${getLocalized(product, "title")}" style="cursor:pointer" />
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
          <a class="button button-whatsapp button-icon" href="${buildWhatsAppLink(product)}" target="_blank"><img src="/whatsapp.png" alt="WhatsApp" /> ${translations[currentLanguage].cta.orderViaWhatsApp}</a>
          <a class="button button-secondary" href="/products/" onclick="event.preventDefault(); navigateTo('/products/');">${translations[currentLanguage].cta.backToProducts}</a>
        </div>
      </div>
    </div>
    ${relatedProducts.length > 0 ? `
    <div class="related-products">
      <h3>${currentLanguage === "bn" ? "একই ক্যাটাগরির পণ্য" : "More from this category"}</h3>
      <div class="product-grid">
        ${relatedProducts.map((rp) => `
          <article class="card" onclick="navigateTo('${getProductUrl(rp)}')">
            <div class="card-media">
              ${getProductImage(rp) ? `<img class="product-image" src="${getProductImage(rp)}" alt="${getLocalized(rp, "title")}" />` : `<div class="card-emoji">${rp.emoji}</div>`}
            </div>
            <p class="eyebrow">${getLocalized(rp, "tag")}</p>
            <h3>${getLocalized(rp, "title")}</h3>
            <p class="price">${rp.price}</p>
            <div class="card-actions">
              <a class="button button-secondary" href="${getProductUrl(rp)}" onclick="event.stopPropagation(); navigateTo('${getProductUrl(rp)}'); return false;">${translations[currentLanguage].cta.viewDetails}</a>
              <a class="button button-whatsapp button-icon" href="${buildWhatsAppLink(rp)}" target="_blank" onclick="event.stopPropagation()" aria-label="WhatsApp"><img src="/whatsapp.png" alt="WhatsApp" /> ${translations[currentLanguage].cta.buyNow}</a>
            </div>
          </article>
        `).join("")}
      </div>
    </div>` : ""}
  `;

  const mainImageElement = container.querySelector("#main-product-image");
  if (mainImageElement) {
    mainImageElement.addEventListener("click", () => {
      const activeIndex = galleryImages.indexOf(mainImageElement.src);
      openFullScreen(activeIndex >= 0 ? activeIndex : 0);
    });
  }

  container.querySelectorAll(".thumb-btn").forEach((button) => {
    button.addEventListener("click", () => {
      if (!mainImageElement) return;
      mainImageElement.src = button.dataset.image;
      container.querySelectorAll(".thumb-btn").forEach((thumb) => thumb.classList.toggle("active", thumb === button));
    });
    button.addEventListener("dblclick", () => {
      const index = parseInt(button.dataset.index, 10);
      openFullScreen(index);
    });
  });

  // Full-screen overlay event listeners
  const overlay = document.getElementById("gallery-overlay");
  if (overlay) {
    overlay.querySelector(".close-btn").addEventListener("click", closeFullScreen);
    overlay.querySelector(".nav-btn.prev").addEventListener("click", () => navigateGallery(-1));
    overlay.querySelector(".nav-btn.next").addEventListener("click", () => navigateGallery(1));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeFullScreen();
    });
    document.addEventListener("keydown", (e) => {
      if (!overlay.classList.contains("open")) return;
      if (e.key === "Escape") closeFullScreen();
      if (e.key === "ArrowLeft") navigateGallery(-1);
      if (e.key === "ArrowRight") navigateGallery(1);
    });

    // Touch swipe support for gallery
    overlay.addEventListener("touchstart", handleTouchStart, { passive: true });
    overlay.addEventListener("touchend", handleTouchEnd, { passive: true });
  }
}

// Hide topbar on scroll down, show on scroll up - category bar stays fixed
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
  setTheme(currentTheme);
  setLanguage(currentLanguage);
  handleRoute();
}

document.addEventListener("DOMContentLoaded", () => {
  // Language buttons
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      setTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  // Mobile menu toggle (hamburger)
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Mobile menu close button
  const menuClose = document.getElementById("mobile-menu-close");
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  // Overlay click to close menu
  const overlay = document.getElementById("mobile-overlay");
  if (overlay) {
    overlay.addEventListener("click", closeMenu);
  }

  // Close menu on link click
  document.querySelectorAll(".mobile-menu-nav a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Intercept all navigation to use SPA routing
  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href) return;
    // Only intercept internal links (not external, not WhatsApp, not phone, not mailto, not hash)
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("http") && !href.startsWith("tel:") && !href.startsWith("mailto:") && !href.startsWith("#")) {
      e.preventDefault();
      navigateTo(href);
    }
  });

  // Handle browser back/forward
  window.addEventListener("popstate", handleRoute);

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  initPage();
});

// Make navigateTo globally accessible for onclick attributes
window.navigateTo = navigateTo;