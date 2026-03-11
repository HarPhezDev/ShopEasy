import React, { useState, useMemo, useContext } from "react";
import { shoeProducts } from "./Shoe/shoeData.js";
import { bagProducts } from "./Bag/bagData.js";
import { wristwatchData } from "./Wristwatch/wristwatchData.js";
import { applianceProducts } from "./Appliance/applianceProducts.js";
import { laptopData } from "./Laptops/laptopData.js";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext.jsx";
import { FiSearch, FiX, FiArrowRight, FiShoppingBag } from "react-icons/fi";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const allProducts = useMemo(() => [
    ...(shoeProducts || []),
    ...(bagProducts || []),
    ...(wristwatchData || []),
    ...(applianceProducts || []),
    ...(laptopData || []),
  ], []);

  const categories = useMemo(() => ["All", ...new Set(allProducts.map((p) => p.category))], [allProducts]);

  const filteredProducts = useMemo(() => {
    const searchLower = searchTerm.toLowerCase();
    return allProducts.filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      const matchesSearch =
        (product.title?.toLowerCase().includes(searchLower)) ||
        (product.brand?.toLowerCase().includes(searchLower));
      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [allProducts, selectedCategory, selectedBrand, searchTerm]);

  const productsByCategory = useMemo(() => {
    const map = {};
    filteredProducts.forEach((p) => {
      if (!map[p.category]) map[p.category] = [];
      map[p.category].push(p);
    });
    return map;
  }, [filteredProducts]);

  return (
    
    <div className="min-h-screen bg-[#FBFBFB] flex flex-col md:flex-row font-['Poppins'] pt-24 md:pt-32 m-10">
      
      {/* SIDEBAR */}
      <aside 
        className={`fixed md:sticky top-32 left-0 z-40 w-72 h-[calc(100vh-8rem)] bg-white border-r border-gray-100 transition-transform duration-500 ease-in-out flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-20"}`}
      >
        <div className="p-8 border-b border-gray-50 flex justify-between items-center">
          {isSidebarOpen && <h2 className="text-xl font-black text-gray-900 italic">ShopEasy<span className="text-[#EF523E]">.</span></h2>}
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-gray-400"><FiX size={24}/></button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {categories.filter(cat => cat !== "All").map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedBrand(null);
              }}
              className={`w-full text-left px-4 py-4 rounded-2xl flex justify-between items-center transition-all
                ${selectedCategory === cat ? "bg-gray-900 text-white" : "text-gray-500 hover:bg-gray-50"}`}
            >
              <span className={`text-[11px] font-black uppercase tracking-widest ${!isSidebarOpen && "hidden"}`}>{cat}</span>
              <FiArrowRight size={14} />
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 md:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-center gap-8">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter">Catalog<span className="text-[#EF523E]">.</span></h1>
          <div className="relative w-full md:w-96">
            <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="w-full bg-white pl-14 pr-6 py-4 rounded-full border-none outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E]/10" 
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-24">
          {Object.keys(productsByCategory).map((cat) => (
            <section key={cat}>
              <h2 className="text-3xl font-black mb-8 text-gray-900">{cat}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {productsByCategory[cat].slice(0, 4).map((product) => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

const ProductCard = ({ product, addToCart }) => (
  <div className="group flex flex-col">
    <div className="relative aspect-[4/5] rounded-[2rem] bg-white border border-gray-100 overflow-hidden p-6 transition-all group-hover:shadow-xl group-hover:-translate-y-2">
      <img src={product.image} alt={product.title} className="w-full h-full object-contain mix-blend-multiply" />
      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-xl shadow-sm border border-gray-50">
        <p className="text-xs font-black text-gray-900">₦{(product.price * 1650).toLocaleString()}</p>
      </div>
      <button 
        onClick={() => addToCart(product, 1)}
        className="absolute bottom-4 right-4 w-12 h-12 bg-gray-900 text-white rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#EF523E]"
      >
        <FiShoppingBag size={18} />
      </button>
    </div>
    <div className="mt-4">
      <p className="text-[9px] font-black text-[#EF523E] uppercase tracking-widest">{product.brand}</p>
      <h3 className="text-md font-bold text-gray-900 line-clamp-1">{product.title}</h3>
    </div>
  </div>
);

export default ProductsPage;