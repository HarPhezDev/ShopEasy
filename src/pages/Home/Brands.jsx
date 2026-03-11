import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const BrandSlider = () => {
  const [index, setIndex] = useState(0);

  const brands = [
    { id: 1, name: "Apple", color: "#555555", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    { id: 2, name: "Samsung", color: "#034EA2", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
    { id: 3, name: "Sony", color: "#000000", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
    { id: 4, name: "Dell", color: "#007DB8", logo: "https://upload.wikimedia.org/wikipedia/commons/4/48/Dell_Logo.svg" },
    { id: 5, name: "LG", color: "#A50034", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/LG_logo_%282015%29.svg" },
    { id: 6, name: "HP", color: "#0096D6", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg" },
    { id: 7, name: "Asus", color: "#00539B", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg" },
  ];

  const handleNext = () => setIndex((prev) => (prev + 1) % brands.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + brands.length) % brands.length);

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-gray-900 tracking-tighter"
          >
            THE LEADERS WE TRUST
          </motion.h2>
          <p className="text-gray-400 mt-4 uppercase text-xs font-bold tracking-[0.4em]">Official 2026 Partners</p>
        </div>

        
        <div className="relative flex items-center justify-center h-[300px]">
          <AnimatePresence mode="popLayout">
            <div className="flex items-center gap-4 md:gap-8">
             
              {[-2, -1, 0, 1, 2].map((offset) => {
                const brandIndex = (index + offset + brands.length) % brands.length;
                const brand = brands[brandIndex];
                const isActive = offset === 0;

                return (
                  <motion.div
                    key={`${brand.id}-${offset}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.4, 
                      scale: isActive ? 1.2 : 0.8,
                      x: offset * 20, // Slight spread
                      zIndex: isActive ? 10 : 0
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setIndex(brandIndex)}
                    className="cursor-pointer"
                  >
                    <motion.div 
                      className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] flex items-center justify-center p-8 transition-colors duration-500 shadow-2xl shadow-gray-200/50"
                      style={{ 
                        backgroundColor: isActive ? brand.color : "#F9FAFB",
                      }}
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className={`w-full h-full object-contain transition-all duration-500 ${
                          isActive ? "brightness-[100] grayscale-0" : "grayscale opacity-30"
                        }`}
                      />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>

          {/* Floating Navigation Controls */}
          <div className="absolute inset-x-0 flex justify-between px-2 md:-px-10">
             <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={handlePrev}
               className="bg-white p-4 rounded-full shadow-lg border border-gray-100 text-gray-800"
             >
               <FiArrowLeft size={24} />
             </motion.button>
             <motion.button 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={handleNext}
               className="bg-white p-4 rounded-full shadow-lg border border-gray-100 text-gray-800"
             >
               <FiArrowRight size={24} />
             </motion.button>
          </div>
        </div>

        {/* Brand Name Reveal */}
        <div className="text-center mt-12">
           <motion.h3 
             key={index}
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-2xl font-bold text-gray-800"
           >
             {brands[index].name}
           </motion.h3>
           <div className="flex justify-center gap-1.5 mt-4">
              {brands.map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    width: i === index ? 24 : 6,
                    backgroundColor: i === index ? brands[index].color : "#E5E7EB"
                  }}
                  className="h-1.5 rounded-full"
                />
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default BrandSlider;