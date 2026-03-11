import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- EXPANDED DATA STRUCTURE ---
const BLOG_DATA = [
  {
    id: 1,
    title: "Top 10 Smartphones for Students",
    category: "Tech",
    author: "Admin",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    excerpt: "The best budget-friendly performance phones for the upcoming semester.",
    content: "Choosing a smartphone as a student requires balancing battery life, camera quality for projects, and processing power for multitasking. In 2026, the market has shifted towards AI-integrated chips that manage power more efficiently...",
    pros: ["Long battery", "Affordable"],
    cons: ["Plastic build"],
    product: { name: "ProMax Lite", price: "$499", img: "https://images.unsplash.com/photo-1592890288564-76628a30a657" }
  },
  {
    id: 2,
    title: "Summer Style: Linen & Loafers",
    category: "Fashion",
    author: "Ololade",
    date: "March 2026",
    image: "https://cdnimg.brunomarc.com/brunomarcs/image/article/20220818_79/3251314-mens-post-penny-loafers-with-chinos-0d1.jpg",
    excerpt: "Lightweight fabrics are taking over. Here is how to stay cool and sharp.",
    content: "Linen is the king of summer. This year's trends focus on relaxed silhouettes and earth tones. Pairing a linen shirt with leather loafers creates a timeless look...",
    pros: ["Breathable", "Timeless"],
    cons: ["Wrinkles easily"],
    product: { name: "Linen Button-Down", price: "$55", img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c" }
  },
  {
    id: 3,
    title: "Mechanical Keyboards: A Guide",
    category: "Gadgets",
    author: "Dev Team",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    excerpt: "Why the switch to mechanical will change your typing experience forever.",
    content: "The tactile feedback of a mechanical keyboard isn't just for gamers. Professionals are finding that the customization of switches significantly reduces typing fatigue...",
    pros: ["Tactile feel", "Durable"],
    cons: ["Can be loud"],
    product: { name: "Mechanical K1", price: "$129", img: "https://images.unsplash.com/photo-1595225476474-87563907a212" }
  },
  {
    id: 4,
    title: "Essential Everyday Carry",
    category: "Accessories",
    author: "Admin",
    date: "Feb 2026",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    excerpt: "What's in your pockets? These accessories define modern utility.",
    content: "Everyday Carry (EDC) is about being prepared for anything. From minimalist wallets to multi-tools...",
    pros: ["Compact", "Highly useful"],
    cons: ["Premium cost"],
    product: { name: "Slim Carbon Wallet", price: "$85", img: "https://images.unsplash.com/photo-1627123424574-724758594e93" }
  },
  {
    id: 5,
    title: "Best VS Code Extensions 2026",
    category: "Software",
    author: "Ololade",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159",
    excerpt: "Boost your productivity with these must-have coding tools.",
    content: "The right extensions turn VS Code from a text editor into a powerhouse IDE...",
    pros: ["Saves time", "Free"],
    cons: ["Memory heavy"],
    product: { name: "Dev Productivity Pack", price: "Free", img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713" }
  },
  {
    id: 6,
    title: "Wireless Audio: The New Era",
    category: "Gadgets",
    author: "Admin",
    date: "Jan 2026",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    excerpt: "Noise cancellation is getting smarter. Here are the top picks.",
    content: "The latest earbuds don't just block noise; they use spatial audio to create a 3D soundscape...",
    pros: ["No wires", "Smart ANC"],
    cons: ["Battery limited"],
    product: { name: "Air-Buds Pro", price: "$249", img: "https://images.unsplash.com/photo-1588449668365-d15e397f6787" }
  },
  {
    id: 7,
    title: "The Minimalist Watch Guide",
    category: "Accessories",
    author: "Lola",
    date: "Dec 2025",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314",
    excerpt: "Classic timepieces that work with any outfit.",
    content: "Minimalist designs with sapphire glass and Japanese movements are currently dominating...",
    pros: ["Elegant", "Durable"],
    cons: ["Simple features"],
    product: { name: "Bauhaus Watch", price: "$199", img: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3" }
  },
  {
    id: 8,
    title: "Sustainable Tech Habits",
    category: "Tech",
    author: "Admin",
    date: "Nov 2025",
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03",
    excerpt: "How to recycle your old gear and reduce your carbon footprint.",
    content: "E-waste is a growing problem. We discuss how to properly dispose of lithium batteries...",
    pros: ["Eco-friendly", "Earn credit"],
    cons: ["Extra effort"],
    product: { name: "Eco-Charge Hub", price: "$35", img: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0" }
  }
];

const categories = ["All", "Tech", "Gadgets", "Fashion", "Accessories", "Software"];

const Blog = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = activeTab === "All" 
    ? BLOG_DATA 
    : BLOG_DATA.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 pb-20">
      
      {/* 1. HEADER AREA */}
      <section className="mt-40 px-6 max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tighter">SHOPEASY <span className="text-orange-600">INSIGHTS</span></h1>
          <div className="flex flex-wrap gap-2 mt-6 pb-6 border-b border-gray-100">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-bold transition-all ${
                  activeTab === cat ? "bg-orange-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2. COMPACT GRID (8 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.div
                layout
                layoutId={`post-${post.id}`}
                key={post.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group cursor-pointer flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-40 overflow-hidden" onClick={() => setSelectedPost(post)}>
                  <img src={post.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <span className="text-[9px] font-black text-orange-600 uppercase tracking-widest">{post.category}</span>
                  <h3 className="text-sm font-bold mt-1 leading-tight line-clamp-2">{post.title}</h3>
                  <p className="text-gray-500 text-[10px] mt-2 line-clamp-2">{post.excerpt}</p>
                  
                  <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-[9px] text-gray-400 font-bold uppercase">{post.author} • {post.date}</span>
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="text-[10px] font-black text-black border-b-2 border-orange-600 hover:text-orange-600 transition-colors"
                    >
                      READ MORE
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 3. NEWSLETTER */}
      <section className="bg-orange-50 py-20 mt-24 px-6 text-center border-y border-orange-100">
        <h2 className="text-2xl font-black mb-2 uppercase text-orange-900">Get the Orange Edge</h2>
        <p className="text-gray-500 text-sm mb-8">Exclusive early access to ShopEasy drops and tech guides.</p>
        <form className="max-w-md mx-auto flex gap-2">
          <input type="email" placeholder="Your Email" className="flex-grow px-4 py-3 rounded-xl border-none ring-1 ring-orange-200 text-sm focus:ring-2 focus:ring-orange-600 outline-none" />
          <button className="bg-orange-600 text-white px-6 py-3 rounded-xl text-xs font-bold uppercase hover:bg-orange-700 transition-colors">Join Now</button>
        </form>
      </section>

     {/* 4. SLIM MODAL */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedPost(null)} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div layoutId={`post-${selectedPost.id}`} className="relative bg-white w-full max-w-xl max-h-[80vh] rounded-3xl overflow-hidden z-10 flex flex-col">
              <button onClick={() => setSelectedPost(null)} className="absolute top-4 right-4 bg-white/90 text-orange-600 w-8 h-8 rounded-full shadow-md z-20 font-bold">✕</button>
              <img src={selectedPost.image} className="h-48 w-full object-cover shrink-0" />
              <div className="p-6 md:p-10 overflow-y-auto">
                <span className="text-orange-600 font-black text-[9px] uppercase tracking-widest">{selectedPost.category}</span>
                <h2 className="text-2xl font-black mt-2 mb-4 leading-tight">{selectedPost.title}</h2>
                <div className="text-gray-700 text-sm leading-relaxed mb-8">{selectedPost.content}</div>

                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-4 mb-8">
                  <img src={selectedPost.product.img} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-grow">
                    <p className="font-bold text-xs">{selectedPost.product.name}</p>
                    <p className="text-orange-600 font-bold text-xs">{selectedPost.product.price}</p>
                  </div>
                  <button className="bg-orange-600 text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-orange-700">Buy Now</button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 italic text-[10px]">
                  <div><p className="font-black text-green-600 uppercase mb-1">Pros</p>{selectedPost.pros.map(p => <p key={p}>+ {p}</p>)}</div>
                  <div><p className="font-black text-red-600 uppercase mb-1">Cons</p>{selectedPost.cons.map(c => <p key={c}>- {c}</p>)}</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;