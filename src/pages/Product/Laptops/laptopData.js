export const laptopData = [
  // --- ULTRABOOKS & PREMIUM ---
  {
    id: 1,
    brand: "Apple",
    title: "MacBook Air M3",
    price: 1099,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop",
    inStock: true,
    category: "Ultrabook",
    desc: "Incredibly thin and fast, featuring the M3 chip and up to 18 hours of battery life."
  },
  {
    id: 2,
    brand: "Dell",
    title: "XPS 13 Plus",
    price: 1250,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1632&auto=format&fit=crop",
    inStock: true,
    category: "Ultrabook",
    desc: "Edge-to-edge display with a seamless haptic glass touchpad and 4K OLED touch option."
  },
  {
    id: 3,
    brand: "HP",
    title: "Spectre x360",
    price: 1350,
    image: "https://m.media-amazon.com/images/I/51CW9Mg54qL._AC_UF894,1000_QL80_.jpg",
    inStock: true,
    category: "Ultrabook",
    desc: "2-in-1 convertible laptop with a 3:2 aspect ratio for maximum productivity."
  },

  // --- GAMING LAPTOPS ---
  {
    id: 4,
    brand: "ASUS",
    title: "ROG Zephyrus G14",
    price: 1600,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Gaming",
    desc: "Compact 14-inch powerhouse with Ryzen 9 and RTX 40-series graphics."
  },
  {
    id: 5,
    brand: "Razer",
    title: "Blade 16",
    price: 2800,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Gaming",
    desc: "Dual-mode Mini-LED display with desktop-grade performance in a sleek aluminum chassis."
  },
  {
    id: 6,
    brand: "Lenovo",
    title: "Legion Pro 7i",
    price: 1950,
    image: "https://images.unsplash.com/photo-1629429408209-1f912961dbd8?q=80&w=1600&auto=format&fit=crop",
    inStock: false,
    category: "Gaming",
    desc: "AI-tuned cooling system with a 240Hz refresh rate display for competitive play."
  },

  // --- BUSINESS & PRODUCTIVITY ---
  {
    id: 7,
    brand: "Lenovo",
    title: "ThinkPad X1 Carbon",
    price: 1450,
    image: "https://preview.redd.it/x1-carbon-gen12-is-just-gorgeous-v0-3ocnumzbzu3d1.jpg?width=1080&crop=smart&auto=webp&s=419acd4bf45e35cb37dfbaa786b458d0e077c741",
    inStock: true,
    category: "Business",
    desc: "The gold standard for business: lightweight carbon fiber and world-class keyboard."
  },
  {
    id: 8,
    brand: "Microsoft",
    title: "Surface Laptop 6",
    price: 999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Business",
    desc: "Elegant design with PixelSense touch display and optimized for Windows 11 Pro."
  },

  // --- CONTENT CREATION & WORKSTATIONS ---
  {
    id: 9,
    brand: "Apple",
    title: "MacBook Pro 16-inch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop",
    inStock: true,
    category: "Workstation",
    desc: "The ultimate creative tool with Liquid Retina XDR and the powerful M3 Max chip."
  },
  {
    id: 10,
    brand: "MSI",
    title: "Creator Z17",
    price: 2200,
    image: "https://athenil.com/content/images/2023/10/Lenovo-Legion-Pro-7i-Review---Full-1.jpg",
    inStock: true,
    category: "Workstation",
    desc: "CNC-milled chassis with pen support and color-accurate True Pixel display."
  },
  {
    id: 11,
    brand: "Acer",
    title: "ConceptD 7",
    price: 1850,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Workstation",
    desc: "Quiet cooling and PANTONE Validated 4K display for serious designers."
  },

  // --- BUDGET & STUDENT ---
  {
    id: 12,
    brand: "Acer",
    title: "Swift Go 14",
    price: 650,
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Student",
    desc: "OLED brilliance at an affordable price, perfect for students on the move."
  },
  {
    id: 13,
    brand: "ASUS",
    title: "Vivobook S 15",
    price: 750,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Student",
    desc: "Bold colors and tactile design with long-lasting battery life for campus days."
  },

  // --- CHROMEBOOKS & LIGHTWEIGHT ---
  {
    id: 14,
    brand: "HP",
    title: "Dragonfly Pro Chromebook",
    price: 899,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1600&auto=format&fit=crop",
    inStock: true,
    category: "Chromebook",
    desc: "Premium Chromebook experience with high-quality webcam and speakers."
  },
  {
    id: 15,
    brand: "Google",
    title: "Pixelbook Go",
    price: 649,
    image: "https://cdn.mos.cms.futurecdn.net/PhstriZ5F43WDRHhyU6Mt8.jpg",
    inStock: true,
    category: "Chromebook",
    desc: "Grippable design and ultra-quiet Hush Keys for working anywhere."
  },

  // --- RUGGED & SPECIALTY ---
  {
    id: 16,
    brand: "Panasonic",
    title: "Toughbook 55",
    price: 2100,
    image: "https://www.thebarcodewarehouse.co.uk/Images/Product/Default/xlarge/TOUGHBOOK-55-mk2-front.jpg",
    inStock: true,
    category: "Rugged",
    desc: "Semi-rugged modular design built for extreme field environments."
  },

  // --- ADDITIONAL LAPTOPS (TO REACH 30) ---
  { id: 17, brand: "Dell", title: "Inspiron 16", price: 850, category: "Business", image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/dell-plus/db16255/media-gallery/non-touch/laptop-dell-plus-db16255nt-ice-bl-fpr-gallery-5.psd?fmt=png-alpha&pscan=auto&scl=1&hei=804&wid=979&qlt=100,1&resMode=sharp2&size=979,804&chrss=full", inStock: true, desc: "Large screen productivity with Intel Core i7." },
  { id: 18, brand: "Samsung", title: "Galaxy Book4 Ultra", price: 2100, category: "Ultrabook", image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Seamless integration with the Galaxy ecosystem." },
  { id: 19, brand: "Gigabyte", title: "Aorus 17X", price: 3200, category: "Gaming", image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Desktop replacement with mechanical keyboard." },
  { id: 20, brand: "LG", title: "Gram 17", price: 1500, category: "Ultrabook", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Large 17-inch display in a chassis that weighs under 3lbs." },
  { id: 21, brand: "Alienware", title: "m18 R2", price: 2900, category: "Gaming", image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienware-m18-mlk/spi/ng/notebook-alienware-m18-r2-nt-black-relsize-500-ng.psd?fmt=jpg&wid=500&hei=279", inStock: true, desc: "Iconic design with massive 18-inch display." },
  { id: 22, brand: "Framework", title: "Laptop 16", price: 1700, category: "Workstation", image: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24530306/Framework_Laptop_16_Graphics_Module.jpg?quality=90&strip=all&crop=0.011693171188028,0,99.976613657624,100", inStock: true, desc: "Fully modular and repairable professional laptop." },
  { id: 23, brand: "Fujitsu", title: "Lifebook U9311", price: 1300, category: "Business", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Secure business notebook with PalmSecure technology." },
  { id: 24, brand: "Huawei", title: "MateBook X Pro", price: 1400, category: "Ultrabook", image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Premium build with immersive 3.1K Real Color display." },
  { id: 25, brand: "Sager", title: "NP8870", price: 2500, category: "Gaming", image: "https://xoticpc.com/cdn/shop/files/NP9580T8.png?v=1741699346", inStock: true, desc: "Custom-built gaming rig with uncompromised power." },
  { id: 26, brand: "System76", title: "Pangolin", price: 1100, category: "Business", image: "https://www.phoronix.net/image.php?id=2024&image=system76_pangolin15_1", inStock: true, desc: "Linux-powered laptop optimized for developers." },
  { id: 27, brand: "Dynabook", title: "Portégé X30L", price: 1200, category: "Business", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop", inStock: true, desc: "Ultra-light magnesium alloy chassis for travelers." },
  { id: 28, brand: "VAIO", title: "SX14", price: 1600, category: "Ultrabook", image: "https://m.media-amazon.com/images/I/71tG3oczlfL.jpg", inStock: true, desc: "Premium Japanese craftsmanship with extensive ports." },
  { id: 29, brand: "Chuwi", title: "CoreBook X", price: 450, category: "Student", image: "https://m.media-amazon.com/images/I/81NZl5AXsiL.jpg", inStock: true, desc: "Entry-level productivity with high-res 2K screen." },
  { id: 30, brand: "Eurocom", title: "Sky Z7", price: 3500, category: "Workstation", image: "https://static.tweaktown.com/news/7/9/79845_04_eurocom-sky-z7-r2-laptop-core-i9-11900k-rtx-3080-costs-you-8200_full.jpg", inStock: true, desc: "Server-grade hardware in a portable form factor." }
];