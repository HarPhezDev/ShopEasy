export const phoneData = [
  // --- FLAGSHIPS ---
  {
    id: 1,
    brand: "Apple",
    title: "iPhone 16 Pro",
    price: 999,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/6867973/1.jpg?9252",
    inStock: true,
    category: "Flagship",
    desc: "A18 Pro chip, titanium design, and advanced camera control features."
  },
  {
    id: 2,
    brand: "Samsung",
    title: "Galaxy S25 Ultra",
    price: 1299,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    inStock: true,
    category: "Flagship",
    desc: "200MP camera system, integrated S-Pen, and a vibrant Dynamic AMOLED 2X display."
  },
  {
    id: 3,
    brand: "Google",
    title: "Pixel 10 Pro",
    price: 999,
    image: "https://www.senq.com.my/wp-content/uploads/2025/10/c68f8407-134d-4bf4-8e76-9e6fffa9f901.jpg",
    inStock: true,
    category: "Flagship",
    desc: "AI-integrated Tensor G5 processor with best-in-class computational photography."
  },

  // --- FOLDABLES ---
  {
    id: 4,
    brand: "Samsung",
    title: "Galaxy Z Fold 7",
    price: 1799,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/3127814/1.jpg?5557",
    inStock: true,
    category: "Foldable",
    desc: "Ultimate multitasking with a massive internal screen and slim hinge design."
  },
  {
    id: 5,
    brand: "Motorola",
    title: "Razr 50 Ultra",
    price: 999,
    image: "https://select.com.ng/media/catalog/product/cache/a38b917da5ab184066ddc7d1bf214715/1/1/112105381_1.jpg",
    inStock: true,
    category: "Foldable",
    desc: "Iconic flip design with an expansive, fully functional external cover display."
  },

  // --- BUDGET & MID-RANGE ---
  {
    id: 6,
    brand: "Google",
    title: "Pixel 9a",
    price: 499,
    image: "https://www.justfones.ng/media/catalog/product/cache/35e5be572ad353da1119d400a440fb3d/p/i/pixel9-1.png",
    inStock: true,
    category: "Budget",
    desc: "Flagship-level camera performance in an accessible, student-friendly package."
  },
  {
    id: 7,
    brand: "Samsung",
    title: "Galaxy A56",
    price: 449,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?q=80&w=800&auto=format&fit=crop",
    inStock: true,
    category: "Budget",
    desc: "Reliable performance, long battery life, and four years of OS updates."
  },
  {
    id: 8,
    brand: "Nothing",
    title: "Phone (3)",
    price: 599,
    image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/85/4031914/1.jpg?2758",
    inStock: true,
    category: "Mid-Range",
    desc: "Unique Glyph interface with a clean software experience and bold design."
  },

  // --- GAMING & PERFORMANCE ---
  {
    id: 9,
    brand: "Asus",
    title: "ROG Phone 9",
    price: 1099,
    image: "https://dlcdnwebimgs.asus.com/gain/0C812547-3EDA-4EE9-99E0-179317A468CC/w1000/h732",
    inStock: true,
    category: "Gaming",
    desc: "Advanced cooling system with side-mounted triggers for competitive mobile gaming."
  },
  {
    id: 10,
    brand: "Sony",
    title: "Xperia 1 VI",
    price: 1199,
    image: "https://sony.scene7.com/is/image/sonyglobalsolutions/3075_Primary_image_black-1200?$S7Product$&fmt=png-alpha",
    inStock: true,
    category: "Flagship",
    desc: "Creator-focused display with real-time autofocus and professional lens options."
  },

  // --- RUGGED ---
  {
    id: 11,
    brand: "CAT",
    title: "S75",
    price: 599,
    image: "https://m.media-amazon.com/images/I/416G5NDlq+L._SL500_.jpg",
    inStock: true,
    category: "Rugged",
    desc: "Military-grade toughness, drop-proof, and waterproof up to 5 meters."
  },

  // --- ADDITIONAL MODELS ---
  { id: 12, brand: "OnePlus", title: "OnePlus 13", price: 799, category: "Flagship", image: "https://tradingshenzhen.com/img/cms/smartphones/OnePlus13/tradingshenzhen_oneplus13_9.jpg", inStock: true, desc: "Fast-charging beast with the latest Snapdragon processor." },
  { id: 13, brand: "Xiaomi", title: "15 Pro", price: 899, category: "Flagship", image: "https://xiaomiplanet.sk/wp-content/uploads/2024/10/xiaomi-15-pro-real-2.jpg", inStock: true, desc: "Premium build with Leica-engineered lens system." },
  { id: 14, brand: "Apple", title: "iPhone 16", price: 799, category: "Flagship", image: "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/76/6867973/1.jpg?9252", inStock: true, desc: "The standard for reliability and sleek mobile performance." },
  { id: 15, brand: "Realme", title: "GT 7 Pro", price: 650, category: "Mid-Range", image: "https://heyupnow.com/cdn/shop/files/RealmeGT7PRO_600x600.png?v=1731381908", inStock: true, desc: "High performance with a focus on fast-charging speeds." },
  { id: 16, brand: "Oppo", title: "Find X8", price: 950, category: "Flagship", image: "https://uk.static.webuy.com/product_images/Phones/Phones%20Android/SOPPCPH2659512GBUNLB_l.jpg", inStock: true, desc: "Elegant aesthetics combined with flagship camera tech." },
  { id: 17, brand: "Vivo", title: "X200 Pro", price: 1050, category: "Flagship", image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=800&auto=format&fit=crop", inStock: true, desc: "Portrait photography powerhouse with ZEISS optics." },
  { id: 18, brand: "Fairphone", title: "Fairphone 5", price: 699, category: "Sustainable", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop", inStock: true, desc: "Modular, ethically sourced, and designed for easy repair." },
  { id: 19, brand: "Honor", title: "Magic 7", price: 900, category: "Flagship", image: "https://media.extra.com/i/aurora/100392313_100_12?fmt=auto&w=721", inStock: true, desc: "Ultra-slim design with high-end display tech." },
  { id: 20, brand: "Sony", title: "Xperia 5 VI", price: 999, category: "Compact", image: "https://i.ebayimg.com/images/g/Z-QAAOSw3olnz~cU/s-l1200.jpg", inStock: true, desc: "Flagship specs in a smaller, one-handed form factor." },
  { id: 21, brand: "Apple", title: "iPhone SE 4", price: 429, category: "Budget", image: "https://www.assuredzone.com/ng/wp-content/uploads/sites/13/2025/02/iPhone-SE-4-16e.jpg", inStock: true, desc: "The essential Apple experience at an affordable price." },
  { id: 22, brand: "Google", title: "Pixel Fold 2", price: 1799, category: "Foldable", image: "https://www.mcsteve.com/wp-content/uploads/2024/07/g-fold-1.jpeg", inStock: true, desc: "The foldable phone that bridges the gap between pocket and tablet." },
  { id: 23, brand: "ZTE", title: "Blade V60", price: 250, category: "Budget", image: "https://www.sales366.com/storage/2024/11/ZTE-Blade-V60-Design-LTE.webp", inStock: true, desc: "Entry-level productivity for daily tasks." },
  { id: 24, brand: "Huawei", title: "Pura 80", price: 1100, category: "Flagship", image: "https://www.mobileana.com/wp-content/uploads/2024/12/Huawei-Pura-80-Ultra-Gold.webp", inStock: true, desc: "Advanced imaging sensors and high-quality build." },
  { id: 25, brand: "Xiaomi", title: "Poco F7", price: 400, category: "Budget", image: "https://select.com.ng/media/catalog/product/cache/a38b917da5ab184066ddc7d1bf214715/p/o/poco_f7_ultra_1.jpg", inStock: true, desc: "Performance king for those on a tight budget." },
  { id: 26, brand: "Samsung", title: "Galaxy S25", price: 799, category: "Flagship", image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop", inStock: true, desc: "The perfect balance of power and design." },
  { id: 27, brand: "Asus", title: "Zenfone 12", price: 750, category: "Compact", image: "https://sota.store/image/cache/catalog/Asus/asus-zenfone-12-ultra-5g-blk-02-1600x1600.webp", inStock: true, desc: "Powerful compact flagship with a clean UI." },
  { id: 28, brand: "Motorola", title: "Edge 60", price: 550, category: "Mid-Range", image: "https://www.techspecs.info/_next/image/?url=https%3A%2F%2Fwww.techspecs.info%2Fuploads%2FMOTOROLA_EDGE_60_FUSION_2121213_2d29664ae1.png&w=3840&q=75", inStock: true, desc: "Sleek curves and smooth display for everyday use." },
  { id: 29, brand: "Nokia", title: "G42", price: 200, category: "Budget", image: "https://images.ctfassets.net/wcfotm6rrl7u/Gzm6kjyBvSXuTQn2vgAa3/3dc0015b4ae6ae8ebdde4157c3e911bf/nokia_G42_5G-og_image.jpg", inStock: true, desc: "Quick-fix design with easy-to-replace components." },
  { id: 30, brand: "Blackview", title: "BV9900 Pro", price: 450, category: "Rugged", image: "https://www.tradeinn.com/f/13863/138636545/blackview-bv9900-pro-8gb-128gb-5.9-refurbished.webp", inStock: true, desc: "Thermal camera integrated for extreme field work." }
];