import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../src/img/loader.png'

const BrandLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
    >
      <motion.img 
        src={Logo} 
        alt="Logo" 
        className="w-24 h-auto"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
      <div className="mt-4 w-12 h-[2px] bg-gray-100 overflow-hidden relative">
        <motion.div 
          className="absolute inset-0 bg-[#EF523E]"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default BrandLoader;