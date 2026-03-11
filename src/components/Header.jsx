import React from 'react';
import { motion } from 'framer-motion';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';

const HeaderSuite = () => {
  const brandRed = "#EF523E";

  return (
    <header className="fixed top-0 left-0 w-full z-[100] shadow-md">
      <div className="h-12 flex items-center border-b border-white/10" style={{ backgroundColor: brandRed }}>
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">

          <div className="flex items-center">
            <span className="text-white font-black text-lg tracking-tighter uppercase">
              SHOP EASY
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <FiPhoneCall size={14} className="text-white" />
            <span className="text-[11px] font-bold text-white uppercase tracking-widest">
              Call Us: <span className="font-black">+234 (0) 8085939242</span>
            </span>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <FiShoppingBag size={22} className="text-white" />
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSuite;