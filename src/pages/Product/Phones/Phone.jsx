import React, { useState, useMemo, useContext } from "react";
import { phoneData } from "./phoneData.js";
import { FiSearch, FiX, FiPlus, FiMinus, FiHeart, FiShoppingCart, FiCheck, FiStar } from "react-icons/fi";
import { ShopContext } from "../../../Context/ShopContext.jsx";

const categories = ["All", "Smartphone", "Audio", "Wearable", "Power", "Gimbal", "Photography", "Gaming", "Accessories", "Rugged"];

const Phone = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  
  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);

  const data = useMemo(() => {
    return (phoneData || []).map(product => ({
      ...product,
      price: Number(product.price) || 0 
    }));
  }, []);

  const filteredProducts = data.filter((p) => {
    const matchesSearch =
      (p.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.title?.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Helper to safely format price and prevent NaN in the UI
  const formatPrice = (price, multiplier = 1) => {
    const amount = (price || 0) * 1650 * multiplier;
    return amount.toLocaleString();
  };

  const handleAddToCart = (e, product, qty = 1) => {
    if (e) e.stopPropagation();
    setIsAdding(true);
    addToCart(product, qty);
    setTimeout(() => setIsAdding(false), 800);
  };

  if (!data.length) {
    return <div className="flex h-screen items-center justify-center font-bold text-gray-400 uppercase tracking-widest">Initialising Collection...</div>;
  }

  return (
    <div className="pt-36 pb-16 px-6 md:px-12 min-h-screen bg-[#F8F9FA] font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF523E]">Premium Selection</span>
            <h1 className="text-5xl font-black text-black mt-2 tracking-tight">Gadgets</h1>
          </div>

          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search gadgets..."
              className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border-none outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E]/20 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${selectedCategory === cat ? "bg-gray-900 text-white" : "bg-white text-gray-400 border border-gray-100"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => { setSelectedProduct(product); setActiveImgIndex(0); setQuantity(1); }}
              className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 transition-all duration-500 hover:shadow-xl cursor-pointer flex flex-col w-full"
            >
              <div className="relative w-full aspect-square overflow-hidden rounded-[2.2rem] bg-gray-50 mb-5">
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    toggleWishlist(product);
                  }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm z-10"
                >
                  <FiHeart 
                    size={14} 
                    className={wishlist?.some(item => item.id === product.id) ? "fill-[#EF523E] text-[#EF523E]" : "text-gray-400"} 
                  />
                </button>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="px-1 flex flex-col flex-grow">
                <span className="text-[10px] font-bold text-[#EF523E] uppercase tracking-wider">{product.brand}</span>
                <h3 className="font-bold text-lg text-gray-900 mb-4 line-clamp-1">{product.title}</h3>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 line-through font-bold">
                      ₦{formatPrice(product.price, 1.15)}
                    </span>
                    <span className="font-black text-gray-900 text-xl">
                      ₦{formatPrice(product.price)}
                    </span>
                  </div>
                  <button onClick={(e) => handleAddToCart(e, product, 1)} className="p-3.5 bg-[#0F172A] text-white rounded-2xl hover:bg-[#EF523E] active:scale-90 transition-all">
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl">
          <div className="bg-white w-full max-w-5xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 z-50 p-4 bg-gray-100 rounded-full hover:text-[#EF523E]">
              <FiX size={20} />
            </button>

            <div className="md:w-1/2 bg-gray-50 p-12 flex flex-col items-center justify-center">
              <img src={selectedProduct.image} alt="Main" className="max-h-[350px] object-contain drop-shadow-2xl" />
            </div>

            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <span className="text-[#EF523E] text-xs font-black uppercase tracking-[0.4em] mb-4">{selectedProduct.brand}</span>
              <h2 className="text-4xl font-black text-gray-900 mb-8 tracking-tighter">{selectedProduct.title}</h2>
              <p className="text-gray-500 text-sm mb-10 border-l-4 border-gray-100 pl-6">{selectedProduct.desc}</p>

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center bg-gray-50 rounded-2xl p-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center"><FiMinus /></button>
                  <span className="w-12 text-center font-black text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center"><FiPlus /></button>
                </div>
                <div className="text-right font-black text-3xl">
                   ₦{formatPrice(selectedProduct.price * quantity)}
                </div>
              </div>

              <button
                onClick={() => handleAddToCart(null, selectedProduct, quantity)}
                className="w-full py-5 bg-[#0F172A] text-white rounded-[1.5rem] font-bold flex items-center justify-center gap-4 hover:bg-[#EF523E] transition-all shadow-xl"
              >
                {isAdding ? <FiCheck size={18} /> : <FiShoppingCart size={18} />}
                {isAdding ? "ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Phone;