import React from 'react';
import { FiArrowRight, FiCheckCircle, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion'; // 1. Import motion

const Advertise = () => {
    return (
        <section className="relative w-full h-[600px] md:h-[750px] overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2000ms] hover:scale-110"
                style={{ 
                    backgroundImage: `url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90 lg:bg-gradient-to-r"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 text-center lg:text-left"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/30 px-4 py-2 rounded-full text-green-400 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md"
                    >
                        <FiCheckCircle className="animate-pulse" /> Certified Quality Inspected
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]"
                    >
                        SHOP <br />
                        <span className="text-[#EF523E] drop-shadow-[0_10px_20px_rgba(239,82,62,0.4)]">PREMIUM</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-gray-200 text-lg md:text-xl max-w-lg font-light leading-relaxed"
                    >
                        Why settle for average? Access our <span className="text-white font-bold underline decoration-[#EF523E]">elite inventory</span> of world-class gadgets, sourced directly for those who demand nothing but the best.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                    >
                        <button className="group relative bg-[#EF523E] text-white px-12 py-5 rounded-2xl font-black text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_rgba(239,82,62,0.3)]">
                            <span className="relative z-10">SHOP NOW</span>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                        </button>
                        
                        <div className="flex items-center gap-3 text-white/80">
                            <div className="p-3 bg-white/10 rounded-full backdrop-blur-md">
                                <FiShield className="text-[#EF523E] text-2xl" />
                            </div>
                            <div className="text-left">
                                <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Guarantee</p>
                                <p className="font-bold">2-Year Warranty</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

              
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <div className="absolute -inset-4 bg-[#EF523E]/20 rounded-[50px] blur-3xl opacity-30"></div>
                    
                    <div className="relative z-10 border border-white/20 bg-black/40 backdrop-blur-2xl p-10 rounded-[48px] shadow-3xl border-t-white/40">
                        <div className="flex justify-between items-center mb-12">
                            <div className="px-4 py-1 bg-white/10 rounded-full border border-white/20">
                                <span className="text-white font-mono text-[10px] tracking-widest uppercase">Batch: QLTY-2026</span>
                            </div>
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 1 + (i * 0.1) }}
                                        className="w-1.5 h-1.5 rounded-full bg-[#EF523E]"
                                    ></motion.div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="space-y-6">
                            <h3 className="text-5xl font-black text-white italic tracking-tighter">ELITE GOODS.</h3>
                            <div className="space-y-3">
                                {[
                                    "100% Authentic Brands Only",
                                    "Rigid Multi-Point Inspection",
                                    "Premium Global Packaging"
                                ].map((text, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 1.2 + (idx * 0.2) }}
                                        className="flex items-center gap-4 text-gray-300"
                                    >
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <p className="text-sm font-medium tracking-wide">{text}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Satisfaction Rate</p>
                                <motion.p 
                                    initial={{ scale: 0.5 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 100, delay: 1.8 }}
                                    className="text-3xl font-black text-white"
                                >
                                    99.8%
                                </motion.p>
                            </div>
                            <FiArrowRight size={32} className="text-[#EF523E] animate-bounce-x" />
                        </div>
                    </div>
                    <motion.div 
                        animate={{ rotate: [12, 8, 12], y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center p-2 group hover:rotate-0 transition-transform duration-500"
                    >
                        <div className="w-full h-full border-4 border-dashed border-gray-100 rounded-full flex items-center justify-center text-center">
                            <span className="text-[10px] font-black leading-tight text-gray-900">QUALITY<br/>FIRST</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Advertise;