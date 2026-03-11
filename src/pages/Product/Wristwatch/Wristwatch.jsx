import React, { useState, useContext } from "react";
import { wristwatchData } from "./wristwatchData.js"; 
import { FiSearch, FiX, FiPlus, FiMinus, FiArrowRight, FiHeart, FiShoppingCart, FiCheck } from "react-icons/fi";
import { ShopContext } from "../../../Context/ShopContext.jsx";

const categories = ["All", "Automatic", "Chronograph", "Quartz", "Luxury", "Digital", "Smartwatch"];

const Wristwatch = () => {
  
  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const data = wristwatchData || [];

  const filteredProducts = data.filter((p) => {
    const matchesSearch =
      p.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Helper to check if item is in global wishlist
  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  const handleAddToCartAction = (e, product, qty = 1) => {
    if (e) e.stopPropagation();
    setIsAdding(true);
    
    // Call the actual context function
    addToCart(product, qty);

    setTimeout(() => {
      setIsAdding(false);
      if (selectedProduct) setSelectedProduct(null); 
    }, 800);
  };

  if (!data.length) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-gray-100 border-t-[#EF523E] rounded-full animate-spin"></div>
          <p className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-400">Syncing Collection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-40 pb-16 px-6 md:px-12 min-h-screen bg-[#FBFBFB] font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF523E]">Timeless Luxury</span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mt-2 tracking-tighter">
              Timepieces<span className="text-[#EF523E]">.</span>
            </h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search brands or styles..."
                className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border-none outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E]/10 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                selectedCategory === cat 
                ? "bg-gray-900 text-white shadow-xl shadow-gray-200 scale-105" 
                : "bg-white text-gray-400 hover:text-gray-900 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setQuantity(1);
              }}
              className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] cursor-pointer flex flex-col h-full min-h-[480px]"
            >
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-white border border-gray-50 flex items-center justify-center p-8 flex-shrink-0">
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    toggleWishlist(product); 
                  }}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-sm z-10 transition-all active:scale-90 opacity-0 group-hover:opacity-100"
                >
                  <FiHeart 
                    size={16} 
                    className={isInWishlist(product.id) ? "fill-[#EF523E] text-[#EF523E]" : "text-gray-300"} 
                  />
                </button>
                
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                />

                <div className="absolute bottom-4 inset-x-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/90 backdrop-blur-md py-3 rounded-xl text-center text-[9px] font-black uppercase tracking-widest shadow-sm">
                    Quick View
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="mt-6 px-2 flex flex-col flex-grow">
                <span className="text-[10px] font-black text-[#EF523E] uppercase tracking-[0.3em] mb-1">
                  {product.brand}
                </span>
                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-4 group-hover:text-[#EF523E] transition-colors">
                  {product.title}
                </h3>
                
                {/* Locked Bottom Footer */}
                <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 line-through font-bold tracking-tighter">
                      ₦{(product.price * 1650 * 1.25).toLocaleString()}
                    </span>
                    <span className="font-black text-gray-900 text-xl tracking-tighter">
                      ₦{(product.price * 1650).toLocaleString()}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => handleAddToCartAction(e, product, 1)}
                    className="p-4 bg-gray-900 text-white rounded-2xl hover:bg-[#EF523E] transition-all shadow-lg active:scale-90"
                  >
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-gray-900/40 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            <button 
              onClick={() => setSelectedProduct(null)} 
              className="absolute top-8 right-8 z-50 p-4 bg-gray-50 hover:bg-red-50 hover:text-[#EF523E] rounded-full transition-all"
            >
              <FiX size={20} />
            </button>

            <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title} 
                className="max-h-[400px] w-auto object-contain mix-blend-multiply drop-shadow-2xl" 
              />
            </div>

            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <span className="text-[#EF523E] text-[10px] font-black uppercase tracking-[0.4em] mb-3">
                {selectedProduct.brand}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter leading-none mb-6">
                {selectedProduct.title}
              </h2>
              
              <p className="text-gray-500 text-sm leading-relaxed mb-10 border-l-4 border-gray-100 pl-6">
                {selectedProduct.desc || "Exquisite craftsmanship meets modern design. This timepiece is engineered for durability and styled for elegance."}
              </p>

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center bg-gray-50 rounded-2xl p-2 border border-gray-100">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-400 hover:text-gray-900"
                  >
                    <FiMinus />
                  </button>
                  <span className="w-12 text-center font-black text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)} 
                    className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-400 hover:text-gray-900"
                  >
                    <FiPlus />
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-black text-gray-900 tracking-tighter">
                    ₦{(selectedProduct.price * 1650 * quantity).toLocaleString()}
                  </p>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCartAction(null, selectedProduct, quantity)}
                className="w-full py-6 bg-gray-900 text-white rounded-[2rem] font-bold text-xs tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-[#EF523E] transition-all shadow-2xl disabled:opacity-70"
                disabled={isAdding}
              >
                {isAdding ? <FiCheck size={18} /> : <FiShoppingCart size={18} />}
                {isAdding ? "COLLECTION UPDATED" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wristwatch;