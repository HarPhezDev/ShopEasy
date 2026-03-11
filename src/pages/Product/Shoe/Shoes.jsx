import React, { useState, useContext } from "react";
import { shoeProducts } from "./shoeData.js"; // Updated import
import { FiSearch, FiX, FiPlus, FiMinus, FiArrowRight, FiHeart } from "react-icons/fi";
import { ShopContext } from "../../../Context/ShopContext.jsx";

const brands = [
  "All",
  "Nike",
  "Adidas",
  "Jordan",
  "Yeezy",
  "New Balance",
  "Puma",
  "Reebok",
  "Converse"
];

const Shoes = () => {
  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Filter logic updated for shoes
  const filteredShoes = shoeProducts.filter((p) => {
    const matchesSearch =
      p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.title.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesBrand = selectedBrand === "All" || p.brand === selectedBrand;

    return matchesSearch && matchesBrand;
  });

  const isInWishlist = (id) => wishlist.some(item => item.id === id);

  return (
    <div className="pt-40 pb-16 px-6 md:px-12 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#EF523E]">
              Elite Footwear
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-2">
              Shoes
            </h1>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by brand or model..."
              className="w-full pl-12 pr-6 py-4 bg-white border border-gray-200 rounded-3xl text-sm outline-none shadow-sm focus:ring-2 focus:ring-[#EF523E] focus:border-[#EF523E]"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </header>

        {/* Brand Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {brands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300
                ${selectedBrand === brand ? "bg-[#EF523E] text-white shadow-md" : "bg-white border border-gray-200 hover:bg-gray-50"}
              `}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredShoes.length === 0 ? (
          <p className="text-center text-gray-400 mt-20 text-lg">
            No footwear found matching your criteria.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredShoes.map((product) => (
              <div
                key={product.id}
                onClick={() => product.inStock && setSelectedProduct(product)}
                className={`group relative bg-white rounded-3xl p-5 transition-all duration-500 border border-gray-200
                  ${product.inStock ? "hover:-translate-y-2 hover:shadow-xl cursor-pointer" : "opacity-60 cursor-not-allowed"}
                `}
              >
                {/* Image Section */}
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gray-100 mb-6 relative">
                  
                  {/* Wishlist Button */}
                  {product.inStock && (
                    <button
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        toggleWishlist(product);
                      }}
                      className="absolute top-4 left-4 text-red-500 bg-white p-2 rounded-full shadow hover:scale-110 transition-transform z-10"
                    >
                      <FiHeart
                        size={18}
                        className={isInWishlist(product.id) ? "fill-current" : ""}
                      />
                    </button>
                  )}

                  {/* Stock Badge */}
                  <span
                    className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow uppercase
                      ${product.inStock ? "bg-green-500 text-white" : "bg-red-500 text-white"}
                    `}
                  >
                    {product.inStock ? "In Stock" : "Sold Out"}
                  </span>

                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x500?text=Shoe+Image"; }}
                  />

                  {product.inStock && (
                    <div className="absolute bottom-4 left-4 right-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="bg-white py-3 rounded-xl text-center text-xs font-bold uppercase shadow-md">
                        Quick View
                      </div>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="px-1">
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs font-bold text-gray-400 uppercase">{product.brand}</p>
                    <p className="font-bold text-sm">₦{(product.price * 1500).toLocaleString()}</p>
                  </div>
                  <h3 className="font-extrabold text-lg md:text-xl text-gray-800 truncate">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative">

            <button
              onClick={() => {
                setSelectedProduct(null);
                setQuantity(1);
              }}
              className="absolute top-4 right-4 z-50 p-3 bg-white hover:bg-[#EF523E] hover:text-white text-gray-800 rounded-full shadow-lg transition-all"
            >
              <FiX size={22} />
            </button>

            {/* Image Section */}
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title}
                className="max-h-[420px] w-full object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 overflow-y-auto flex flex-col justify-center gap-4">
              <span
                className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase
                  ${selectedProduct.inStock ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}
                `}
              >
                {selectedProduct.inStock ? "Ready to Ship" : "Unavailable"}
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold">{selectedProduct.title}</h2>
              <p className="text-gray-500 text-sm">{selectedProduct.desc}</p>

              {selectedProduct.inStock && (
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center bg-gray-100 rounded-xl p-1">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition"
                    >
                      <FiMinus />
                    </button>
                    <span className="w-12 text-center font-bold">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-black transition"
                    >
                      <FiPlus />
                    </button>
                  </div>

                  <p className="text-2xl font-extrabold">
                    ₦{(selectedProduct.price * 1500 * quantity).toLocaleString()}
                  </p>
                </div>
              )}

              <button
                disabled={!selectedProduct.inStock}
                onClick={() => {
                  addToCart(selectedProduct, quantity);
                  setSelectedProduct(null);
                  setQuantity(1);
                }}
                className={`w-full py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-3 mt-4 transition
                  ${selectedProduct.inStock ? "bg-black text-white hover:bg-[#EF523E]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}
                `}
              >
                {selectedProduct.inStock ? "ADD TO CART" : "OUT OF STOCK"}
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shoes;