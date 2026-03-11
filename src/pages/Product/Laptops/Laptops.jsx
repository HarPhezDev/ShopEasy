import React, { useState, useContext } from "react";
import { laptopData } from "./laptopData.js"; 
import { FiSearch, FiX, FiPlus, FiMinus, FiHeart, FiShoppingCart, FiCheck, FiStar } from "react-icons/fi";
import { ShopContext } from "../../../Context/ShopContext.jsx";

const categories = ["All", "Ultrabook", "Gaming", "Business", "Workstation", "Student", "Chromebook", "Rugged"];

const Laptop = () => {
  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const data = laptopData || [];

  const filteredProducts = data.filter((p) => {
    const matchesSearch =
      p.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  const handleAddToCart = (e, product, qty = 1) => {
    if (e) e.stopPropagation();
    setIsAdding(true);
    
    addToCart(product, qty);

    setTimeout(() => {
      setIsAdding(false);
      if(!e) setSelectedProduct(null); 
    }, 800);
  };

  const getProductImages = (product) => {
    if (!product) return [];
    return Array.isArray(product.images) ? product.images : [product.image];
  };

  if (!data.length) {
    return <div className="flex h-screen items-center justify-center font-bold text-gray-400 uppercase tracking-widest">Initialising Collection...</div>;
  }

  return (
    <div className="pt-36 pb-16 px-6 md:px-12 min-h-screen bg-[#F8F9FA] font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#EF523E]">Premium Selection</span>
            <h1 className="text-5xl font-black text-black mt-2 tracking-tight">Laptops</h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search series..."
                className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border-none outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E]/20 transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat 
                ? "bg-gray-900 text-white shadow-lg" 
                : "bg-white text-gray-400 border border-gray-100 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setActiveImgIndex(0);
                setQuantity(1);
              }}
              className="group bg-white rounded-[2.5rem] p-4 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] cursor-pointer flex flex-col w-full"
            >
              {/* FIXED IMAGE CONTAINER */}
              <div className="relative w-full aspect-square overflow-hidden rounded-[2.2rem] bg-white flex items-center justify-center p-4 flex-shrink-0 mb-5 border border-gray-50">
                <div className="absolute top-4 left-4 z-10 bg-[#EF523E] text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-sm">
                  {Math.round((1 - (product.price / (product.price * 1.15))) * 100)}% OFF
                </div>
                
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    toggleWishlist(product); 
                  }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <FiHeart size={14} className={isInWishlist(product.id) ? "fill-[#EF523E] text-[#EF523E]" : "text-gray-400"} />
                </button>

                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Product Info */}
              <div className="px-1 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-[#EF523E] uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <FiStar key={i} size={10} fill="currentColor" />)}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-gray-900 leading-tight mb-4 group-hover:text-[#EF523E] transition-colors line-clamp-1">
                  {product.title}
                </h3>
                
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-300 line-through font-bold">
                      ₦{(product.price * 1650 * 1.15).toLocaleString()}
                    </span>
                    <span className="font-black text-gray-900 text-xl tracking-tighter">
                      ₦{(product.price * 1650).toLocaleString()}
                    </span>
                  </div>
                  <button 
                    onClick={(e) => handleAddToCart(e, product, 1)}
                    className="p-3.5 bg-[#0F172A] text-white rounded-2xl hover:bg-[#EF523E] transition-all shadow-md active:scale-90"
                  >
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-xl">
          <div className="bg-white w-full max-w-5xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 z-50 p-4 bg-gray-100 hover:bg-red-50 hover:text-[#EF523E] rounded-full transition-all">
              <FiX size={20} />
            </button>
            
            <div className="md:w-1/2 bg-gray-50 p-12 flex flex-col items-center justify-center">
              <img 
                src={getProductImages(selectedProduct)[activeImgIndex]} 
                alt="Main" 
                className="max-h-[350px] w-auto object-contain mix-blend-multiply drop-shadow-2xl transition-all duration-500" 
              />
              <div className="flex gap-3 mt-10">
                {getProductImages(selectedProduct).map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`w-16 h-16 rounded-2xl border-2 p-2 bg-white transition-all ${activeImgIndex === idx ? "border-[#EF523E] scale-105" : "border-transparent opacity-50"}`}
                  >
                    <img src={img} className="w-full h-full object-contain mix-blend-multiply" alt="thumb" />
                  </button>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 p-12 md:p-16 flex flex-col justify-center bg-white">
              <span className="text-[#EF523E] text-xs font-black uppercase tracking-[0.4em] mb-4">{selectedProduct.brand}</span>
              <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-tight mb-8">{selectedProduct.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-10 pl-6 border-l-4 border-gray-100">
                {selectedProduct.desc}
              </p>

              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center bg-gray-50 rounded-2xl p-2 border border-gray-100">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-400"><FiMinus /></button>
                  <span className="w-12 text-center font-black text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm text-gray-400"><FiPlus /></button>
                </div>
                <div className="text-right font-black text-3xl text-gray-900 tracking-tighter">
                  ₦{(selectedProduct.price * 1650 * quantity).toLocaleString()}
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(null, selectedProduct, quantity)}
                className="w-full py-5 bg-[#0F172A] text-white rounded-[1.5rem] font-bold text-sm tracking-widest flex items-center justify-center gap-4 hover:bg-[#EF523E] transition-all shadow-xl"
              >
                {isAdding ? <FiCheck size={18} /> : <FiShoppingCart size={18} />}
                {isAdding ? "ORDER ADDED" : "ADD TO CART"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laptop;