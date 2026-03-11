import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight, HiOutlineShoppingBag, HiOutlineBolt, HiCheckCircle } from 'react-icons/hi2';

const Latest = ({ allProducts = [], addToCart }) => {
  const [addedItem, setAddedItem] = useState(null);

  const latestProducts = useMemo(() => {
    if (!Array.isArray(allProducts)) return [];
    return [...allProducts]
      .filter(p => p.id && p.name) 
      .sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0))
      .slice(0, 8);
  }, [allProducts]);


  const handleAddToCart = (e, product) => {
    e.preventDefault(); 
    if (addToCart) {
      addToCart(product);
      
      setAddedItem(product.name);
      setTimeout(() => setAddedItem(null), 3000);
    }
  };

  return (
    <div className="min-h-screen mt-20 bg-white pt-28 pb-20 text-slate-900 relative">
 
      {/* --- SUCCESS TOAST NOTIFICATION --- */}
      <AnimatePresence>
        {addedItem && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-orange-600/50 min-w-[300px]"
          >
            <HiCheckCircle className="text-orange-500 text-2xl" />
            <span className="text-sm font-bold truncate">Added {addedItem} to bag!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-orange-600/10 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-6 max-w-xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-orange-500">
                <HiOutlineBolt className="animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest">Live Updates</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                THE LATEST <br /> <span className="text-orange-600 italic">DROPS.</span>
              </h1>
              <Link 
                to="/shop" 
                className="inline-flex bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-orange-600/20 items-center gap-3 group"
              >
                View Full Catalog <HiOutlineArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            
            <div className="hidden lg:flex flex-col items-end text-right">
                <span className="text-8xl font-black text-white/5 select-none uppercase">ShopEasy</span>
                <span className="text-orange-600 font-mono text-sm tracking-tighter">EST. 2026 // NEW_ARRIVALS</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-black tracking-tighter uppercase italic">Just In</h2>
          <div className="text-xs font-bold bg-slate-100 px-4 py-2 rounded-full text-slate-500 uppercase tracking-widest">
            Showing {latestProducts.length} Items
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestProducts.map((product) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square bg-slate-50 rounded-[2rem] overflow-hidden mb-5 border border-slate-100 flex items-center justify-center">
                  <img 
                    src={product.image || 'https://via.placeholder.com/400'} 
                    alt={product.name}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white text-[9px] font-black px-3 py-1.5 rounded-lg shadow-lg uppercase">
                      New
                    </span>
                  </div>

                  {/* Functional Quick Add */}
                  <div className="absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-[2px]">
                    <motion.button 
                      onClick={(e) => handleAddToCart(e, product)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-slate-900 p-5 rounded-2xl shadow-2xl hover:bg-orange-600 hover:text-white transition-colors"
                    >
                      <HiOutlineShoppingBag size={24} />
                    </motion.button>
                  </div>
                </div>
              </Link>

              <div className="px-2 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-black text-orange-600 uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">
                      {product.name}
                    </h3>
                  </div>
                  <span className="text-lg font-black text-slate-900 ml-4">
                    ${Number(product.price || 0).toLocaleString()}
                  </span>
                </div>
                <div className="h-1 w-full bg-slate-100 overflow-hidden rounded-full">
                  <div className="h-full w-0 group-hover:w-full bg-orange-600 transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Latest;