import React, { useState } from "react";
import { FiShoppingCart, FiEye, FiHeart, FiX, FiStar, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const shopEasyColor = "#EF523E";

    const categories = [
        { name: "Shoes", count: "45 Items", icon: "👟", path: "/category/shoes" },
        { name: "Bags", count: "120 Items", icon: "👜", path: "/category/bag" },
        { name: "Appliances", count: "80 Items", icon: "🔌", path: "/category/appliances" },
        { name: "Wristwatches", count: "60 Items", icon: "⌚", path: "/category/wristwatch" },
        { name: "Laptops", count: "45 Items", icon: "💻", path: "/category/laptops" }, 
        { name: "Phones", count: "120 Items", icon: "📱", path: "/category/phones" }, 
    ];

    const products = [
        { id: 1, name: "MacBook Pro M2 13-inch", price: 1250000, oldPrice: 1350000, category: "Laptops", rating: 5, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1026&auto=format&fit=crop" },
        { id: 2, name: "iPhone 15 Pro Max", price: 1400000, oldPrice: 1550000, category: "Phones", rating: 5, img: "https://images.unsplash.com/photo-1709178295038-acbeec786fcf?w=600&auto=format&fit=crop" },
        { id: 3, name: "Samsung 65\" UHD Smart TV", price: 680000, oldPrice: 750000, category: "Smart TV", rating: 4, img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500" },
        { id: 4, name: "Double Door Refrigerator", price: 850000, oldPrice: 900000, category: "Appliances", rating: 4, img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500" },
        { id: 5, name: "Wristwatch with Leather Strap", price: 980000, oldPrice: 1100000, category: "Wristwatches", rating: 5, img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=600&auto=format&fit=crop" },
        { id: 6, name: "Air Conditioner 1.5HP", price: 15000, oldPrice: 25000, category: "Appliances", rating: 3, img: "https://plus.unsplash.com/premium_photo-1679943423706-570c6462f9a4?w=600&auto=format&fit=crop" },
        { id: 7, name: "Designer Bag", price: 20000, oldPrice: 30000, category: "Bag", rating: 4, img: "https://images.unsplash.com/photo-1691480150204-66dd1eb77391?w=600&auto=format&fit=crop" },
        { id: 8, name: "Headphones Pro", price: 35000, oldPrice: 45000, category: "Audio", rating: 5, img: "https://media.istockphoto.com/id/1185397331/photo/headphone-isolated.webp?a=1&b=1&s=612x612&w=0&k=20&c=08P6EmWqx_d2ps5zNhsNLzYWEkLpW2BDl0voGvl6g3o=" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-gray-900 mb-10 tracking-tight">
                        Shop by Category
                    </motion.h2>
                    
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {categories.map((cat) => (
                            <motion.div key={cat.name} variants={itemVariants}>
                                <Link 
                                    to={cat.path} 
                                    className="group flex flex-col items-center p-8 bg-gray-50 rounded-[2.5rem] hover:bg-white hover:shadow-2xl hover:ring-1 ring-gray-100 transition-all duration-500 cursor-pointer text-center"
                                >
                                    <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                                        {cat.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm tracking-wide">{cat.name}</h3>
                                    <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-tighter">{cat.count}</p>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* --- TRENDING PRODUCTS GRID --- */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4"
                >
                    <div>
                        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Trending Products</h2>
                        <div className="h-1.5 w-20 mt-3 rounded-full" style={{ backgroundColor: shopEasyColor }}></div>
                    </div>
                    <Link to="/products" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors">
                        Explore Full Collection <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
                >
                    {products.map((product) => {
                        const percentOff = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
                        return (
                            <motion.div
                                key={product.id}
                                variants={itemVariants}
                                onClick={() => setSelectedProduct(product)}
                                className="group bg-white rounded-[2rem] p-4 border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] cursor-pointer flex flex-col h-[450px]"
                            >
                                {/* Image Box - Fixed Height */}
                                <div className="relative h-[240px] w-full rounded-[1.5rem] overflow-hidden bg-gray-50 flex-shrink-0">
                                    <div className="absolute top-4 left-4 z-10 bg-[#EF523E] text-white text-[9px] font-black px-2.5 py-1 rounded-lg shadow-lg">
                                        {percentOff}% OFF
                                    </div>
                                    <img 
                                        src={product.img} 
                                        alt={product.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white p-4 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <FiEye size={20} />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Box - Grows to fill space */}
                                <div className="mt-6 flex flex-col flex-grow px-2">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-black text-[#EF523E] uppercase tracking-widest">{product.category}</span>
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => <FiStar key={i} size={10} fill={i < product.rating ? "currentColor" : "none"} />)}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg line-clamp-1 mb-4">{product.name}</h3>
                                    
                                    {/* Footer Box - Pushed to bottom */}
                                    <div className="mt-auto flex items-center justify-between pb-2">
                                        <div>
                                            <p className="text-[10px] text-gray-300 line-through font-bold tracking-tighter">₦{product.oldPrice.toLocaleString()}</p>
                                            <p className="text-xl font-black text-gray-900 tracking-tight">₦{product.price.toLocaleString()}</p>
                                        </div>
                                        <motion.button 
                                            whileTap={{ scale: 0.9 }} 
                                            className="p-4 rounded-2xl bg-gray-900 text-white hover:bg-[#EF523E] transition-all shadow-lg active:scale-95" 
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <FiShoppingCart size={18} />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>

            {/* --- PRODUCT MODAL --- */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-md"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 30 }}
                            className="relative bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        >
                            <button className="absolute top-6 right-6 z-10 p-3 bg-gray-50 hover:bg-red-50 hover:text-red-500 rounded-full transition-all" onClick={() => setSelectedProduct(null)}>
                                <FiX size={20} />
                            </button>
                            <div className="md:w-1/2 h-80 md:h-auto bg-gray-50 p-12 flex items-center justify-center">
                                <img src={selectedProduct.img} alt={selectedProduct.name} className="max-h-full object-contain drop-shadow-2xl" />
                            </div>
                            <div className="md:w-1/2 p-12 flex flex-col justify-center">
                                <span className="text-xs font-black text-[#EF523E] uppercase tracking-widest">{selectedProduct.category}</span>
                                <h2 className="text-4xl font-black text-gray-900 mt-4 mb-4 tracking-tight leading-tight">{selectedProduct.name}</h2>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">Premium quality craftsmanship meets modern technology. Experience excellence with the {selectedProduct.name}.</p>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-300 line-through font-bold">₦{selectedProduct.oldPrice.toLocaleString()}</p>
                                        <span className="text-4xl font-black text-gray-900 tracking-tighter">₦{selectedProduct.price.toLocaleString()}</span>
                                    </div>
                                    <button className="bg-gray-900 text-white px-8 py-5 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-[#EF523E] transition-all shadow-xl shadow-gray-200 active:scale-95">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Products;