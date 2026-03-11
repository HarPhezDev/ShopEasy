import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext"; 
import { FiHeart, FiShoppingBag, FiTrash2, FiArrowRight, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, toggleWishlist, addToCart } = useContext(ShopContext);

  // LOGIC: Updated to 1,650 multiplier to match your other product pages
  const totalWishlistAmount = wishlist.reduce((acc, product) => {
    return acc + (product.price * 1650);
  }, 0);

  return (
    <div className="pt-40 pb-24 px-6 md:px-12 min-h-screen bg-[#FBFBFB] font-['Poppins'] antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#EF523E]">
              Curated Selection
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter">
              Wishlist<span className="text-[#EF523E]">.</span>
            </h1>
          </div>
          <div className="text-right">
             <p className="text-gray-400 font-medium text-sm mb-1">
              {wishlist.length} item{wishlist.length !== 1 ? 's' : ''} saved
            </p>
            <p className="text-2xl font-black text-gray-900">
              Total: ₦{totalWishlistAmount.toLocaleString()}
            </p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[40px] border border-gray-100 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <FiHeart className="text-gray-200" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Your collection is empty</h2>
            <Link 
              to="/products" 
              className="group flex items-center gap-3 bg-black text-white px-10 py-5 rounded-full font-bold text-sm hover:bg-[#EF523E] transition-all"
            >
              BROWSE COLLECTIONS <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ) : (
          <>
          
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {wishlist.map((product) => (
                <div key={product.id} className="group relative flex flex-col">

                  <div className="relative aspect-square overflow-hidden rounded-[32px] bg-white border border-gray-100 mb-6 shadow-sm flex items-center justify-center p-6">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    
                   <button
                      onClick={() => toggleWishlist(product)}
                      className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-400 hover:text-[#EF523E] rounded-full shadow-lg transition-all z-10"
                    >
                      <FiTrash2 size={18} />
                    </button>

                    <div className="absolute inset-x-5 bottom-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full bg-black/90 backdrop-blur-md text-white py-4 rounded-2xl font-bold text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#EF523E]"
                      >
                        <FiShoppingCart size={14} /> ADD TO CART
                      </button>
                    </div>
                  </div>

                  {/* Info Block */}
                  <div className="px-2">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-[10px] font-black text-[#EF523E] uppercase tracking-widest">
                        {product.brand}
                      </p>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 group-hover:text-[#EF523E] transition-colors">
                      {product.title}
                    </h3>
                    <p className="font-black text-xl text-gray-900 tracking-tighter">
                      ₦{(product.price * 1650).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary Action Bar */}
            <div className="mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
               <div className="text-center md:text-left">
                <p className="text-gray-400 text-xs font-black uppercase tracking-widest mb-1">Estimated Investment</p>
                <h2 className="text-4xl font-black text-gray-900 tracking-tighter">₦{totalWishlistAmount.toLocaleString()}</h2>
              </div>
              <button 
                onClick={() => wishlist.forEach(item => addToCart(item, 1))}
                className="w-full md:w-auto bg-black text-white px-12 py-6 rounded-[24px] font-bold text-sm hover:bg-[#EF523E] transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                <FiShoppingBag /> MOVE ALL TO CART
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;