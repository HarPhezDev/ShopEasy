import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiLayers, FiAnchor } from 'react-icons/fi';

const SubscribeSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const brandRed = "#EF523E";

  const bgImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="py-10 bg-white px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-[2.5rem] overflow-hidden min-h-[380px] md:min-h-[420px] flex items-center shadow-lg border border-gray-100">
          
          {/* Background Layer */}
          <div className="absolute inset-0">
            <img 
              src={bgImage} 
              alt="Fulfillment Center" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          </div>

          {/* Content Layer */}
          <div className="relative z-10 w-full lg:w-3/5 p-8 md:p-14">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[9px] font-black uppercase tracking-[0.2em] mb-4">
                    <FiLayers className="text-[#EF523E]" /> Real-Time Inventory
                  </div>

                  <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tighter uppercase">
                    Direct From Our <br />
                    <span style={{ color: brandRed }}>Warehouse</span> To You.
                  </h2>

                  <p className="text-gray-300 text-sm md:text-base mb-8 max-w-sm leading-relaxed">
                    Join the inner circle for restock alerts, flash sales, 
                    and an instant <span className="text-white font-bold">10% discount</span>.
                  </p>

                  <form 
                    onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                    className="flex flex-col sm:flex-row gap-2 bg-white/5 backdrop-blur-2xl p-1.5 rounded-2xl border border-white/10 max-w-md"
                  >
                    <input
                      type="email"
                      placeholder="Email address"
                      required
                      className="flex-grow bg-transparent px-4 py-3 outline-none text-white placeholder:text-gray-500 font-medium text-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-[#EF523E] text-white px-8 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2"
                    >
                      Subscribe <FiArrowRight />
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 text-center max-w-xs"
                >
                  <div className="w-12 h-12 bg-[#EF523E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheck size={24} className="text-white" strokeWidth={3} />
                  </div>
                  <h2 className="text-xl font-black text-white mb-2 uppercase">Verified</h2>
                  <p className="text-gray-300 text-xs">Your discount is in your inbox.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Minimal Tag for that "Suite" look */}
          <div className="absolute top-8 right-8 hidden md:block">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
               <p className="text-[9px] font-black text-white/60 uppercase tracking-widest">Global Hub 01</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;