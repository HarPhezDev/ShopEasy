import React from 'react';
import { FiPackage, FiArrowRight, FiActivity, FiTruck } from 'react-icons/fi';
import { motion } from 'framer-motion'; 

const Warehouse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative bg-[#0F1115] py-20 lg:py-32 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-[#EF523E] blur-[120px] rounded-full"
      ></motion.div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Global Logistics Active</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-black text-white leading-[1.1]">
              The Mega <br />
              <span className="text-[#EF523E]">Inventory</span> Hub.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-lg leading-relaxed">
              Direct access to our central fulfillment center. Over 500,000 units ready for immediate dispatch. No middlemen, just pure speed.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 bg-[#EF523E] hover:bg-[#d44130] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#EF523E]/20">
                Browse Full Stock <FiArrowRight />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold transition-all">
                Track Shipment
              </button>
            </motion.div>

            {/* Warehouse Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
              {[
                { val: "2.4M", label: "Sq. Ft Space" },
                { val: "99.9%", label: "Stock Accuracy" },
                { val: "< 12h", label: "Processing" }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-2xl font-bold text-white">{stat.val}</p>
                  <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Warehouse Visual Grid */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]">
              {/* Main Large Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-8 row-span-4 rounded-3xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Warehouse shelves" 
                />
              </motion.div>

              {/* Secondary Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-4 row-span-3 rounded-3xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Inventory" 
                />
              </motion.div>

              {/* Feature Box */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-4 row-span-3 bg-[#EF523E] rounded-3xl p-6 flex flex-col justify-between text-white"
              >
                <FiPackage size={32} />
                <p className="font-bold text-sm">Automated Sorting Enabled</p>
              </motion.div>

              {/* Bottom Large Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-8 row-span-2 rounded-3xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=1000" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Logistics" 
                />
              </motion.div>
            </div>

            {/* Floating Status Card */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                x: { duration: 0.6, delay: 0.8 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -bottom-4 -left-8 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4"
            >
              <div className="bg-orange-100 p-3 rounded-2xl text-[#EF523E]">
                <FiTruck size={24} />
              </div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase">In Transit</p>
                <p className="text-sm font-black text-gray-900">4,821 Shipments</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Warehouse;