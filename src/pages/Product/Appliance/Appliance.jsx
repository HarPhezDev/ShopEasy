import React, { useState, useContext } from "react";
import { applianceProducts } from "./applianceProducts.js"; 
import { FiSearch, FiX, FiPlus, FiMinus, FiArrowRight, FiHeart, FiShoppingCart, FiCheck } from "react-icons/fi";
import { ShopContext } from "../../../context/ShopContext.jsx";

const categories = [
  "All", "Kettle", "Washing Machine", "Microwave Oven", "Refrigerator", 
  "Blender", "Toaster", "Air Fryer", "Generator"
];

const Appliances = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false); 

  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);

  const filteredProducts = applianceProducts.filter((p) => {
    const matchesSearch =
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (product, qty = 1) => {
    addToCart(product, qty);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div className="pt-40 pb-16 px-6 md:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="flex justify-between w-full md:w-auto items-center">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EF523E]">Premium Home Care</span>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 mt-2 tracking-tight">Appliances</h1>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search appliances..."
                className="w-full pl-12 pr-6 py-4 bg-white border border-gray-100 rounded-3xl text-sm outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E]"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-[#EF523E] text-white shadow-md shadow-red-200"
                  : "bg-white border border-gray-200 text-gray-500 hover:border-[#EF523E]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => product.inStock && setSelectedProduct(product)}
              className={`group bg-white rounded-[2.5rem] p-5 border border-gray-100 transition-all duration-500 ${
                product.inStock ? "hover:-translate-y-2 hover:shadow-2xl cursor-pointer" : "opacity-60"
              }`}
            >
              {/* Card Image */}
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-50 mb-6 relative">
                <button
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}
                  className="absolute top-4 left-4 text-red-500 bg-white p-2.5 rounded-full shadow-md z-10 hover:scale-110 transition-transform"
                >
                  <FiHeart size={18} className={wishlist.some(item => item.id === product.id) ? "fill-current" : ""} />
                </button>
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Card Info & Cart */}
              <div className="px-2">
                <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mb-1">{product.brand}</p>
                <h3 className="font-bold text-lg text-gray-800 truncate mb-3">{product.title}</h3>
                
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[11px] text-gray-300 line-through font-medium">
                      ₦{(product.price * 1500 * 1.2).toLocaleString()}
                    </span>
                    <span className="font-extrabold text-gray-900 text-base">
                      ₦{(product.price * 1500).toLocaleString()}
                    </span>
                  </div>

                  <button 
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(product, 1); }}
                    className="p-3 bg-gray-900 text-white rounded-xl hover:bg-[#EF523E] transition-colors shadow-lg active:scale-90"
                  >
                    <FiShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-4xl rounded-[3.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 z-50 p-3 bg-gray-100 hover:bg-[#EF523E] hover:text-white rounded-full transition-all">
              <FiX size={20} />
            </button>

            <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-12">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="max-h-[400px] w-full object-contain drop-shadow-2xl" />
            </div>

            <div className="md:w-1/2 p-12 flex flex-col justify-center gap-6">
              <div>
                <span className="text-[#EF523E] text-xs font-bold uppercase tracking-[0.3em]">{selectedProduct.brand}</span>
                <h2 className="text-4xl font-black text-gray-900 mt-2 tracking-tight leading-tight">{selectedProduct.title}</h2>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                <h4 className="text-[10px] font-black uppercase text-gray-400 tracking-widest mb-2">Product Overview</h4>
                <p className="text-gray-600 leading-relaxed text-sm font-medium">
                  {selectedProduct.desc || "High-performance appliance engineered for modern living."}
                </p>
              </div>

              <div className="flex flex-col gap-4 py-4 border-y border-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-gray-100 rounded-2xl p-1.5">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-[#EF523E]">
                      <FiMinus />
                    </button>
                    <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-[#EF523E]">
                      <FiPlus />
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-300 line-through font-bold">
                      ₦{(selectedProduct.price * 1500 * 1.2 * quantity).toLocaleString()}
                    </p>
                    <p className="text-3xl font-black text-gray-900">
                      ₦{(selectedProduct.price * 1500 * quantity).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleAddToCart(selectedProduct, quantity)}
                disabled={isAdding}
                className={`w-full py-5 rounded-[2.5rem] font-bold text-sm flex items-center justify-center gap-3 transition-all shadow-xl active:scale-95 ${
                  isAdding ? "bg-green-500 text-white" : "bg-gray-900 text-white hover:bg-[#EF523E]"
                }`}
              >
                {isAdding ? <FiCheck size={20} /> : <FiShoppingCart size={20} />}
                {isAdding ? "ADDED TO CART" : "ADD TO CART"}
                {!isAdding && <FiArrowRight className="ml-2" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appliances;