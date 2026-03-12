import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingBag, FiArrowLeft, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
    const context = useContext(ShopContext) || {};
    const {
        cart = [],
        removeFromCart = () => { },
        addToCart = () => { },
        getCartTotal = () => 0
    } = context;

    const shopEasyColor = "#EF523E";

    // Fix 1: Ensure total is never negative by using Math.max or your context helper
    // We multiply by 1500 for your Naira conversion rate
    const total = Math.max(0, getCartTotal() * 1500);

    if (!context || Object.keys(context).length === 0) {
        return <div className="mt-40 text-center text-gray-400 font-bold">Connecting to Store...</div>;
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 pt-20">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-gray-50 p-10 rounded-full mb-6"
                >
                    <FiShoppingBag size={80} className="text-gray-200" />
                </motion.div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Your cart is empty</h2>
                <p className="text-gray-500 mb-8 max-w-xs mx-auto">Looks like you haven't discovered our premium collection yet.</p>
                <Link
                    to="/products"
                    className="px-10 py-4 rounded-2xl text-white font-bold transition-all active:scale-95 shadow-xl shadow-red-100"
                    style={{ backgroundColor: shopEasyColor }}
                >
                    Start Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto mt-40 px-6 mb-20 font-['Poppins']">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EF523E]">Your Selection</span>
                    <h1 className="text-5xl font-black text-gray-900 mt-2">Shopping Cart</h1>
                </div>
                <button
                    onClick={() => cart.forEach(item => removeFromCart(item.id))}
                    className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2"
                >
                    <FiTrash2 /> Clear Entire Cart
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    <AnimatePresence>
                        {cart.map((item, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                key={item.id || index}
                                className="flex flex-col sm:flex-row items-center gap-6 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm"
                            >
                                <div className="h-32 w-32 bg-gray-50 rounded-[1.5rem] overflow-hidden flex-shrink-0 p-2">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                        onError={(e) => e.target.src = "https://via.placeholder.com/150"}
                                    />
                                </div>

                                <div className="flex-1 text-center sm:text-left">
                                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">{item.brand || 'Premium Item'}</p>
                                    <h3 className="font-bold text-xl text-gray-900 mb-1">{item.title}</h3>
                                    <p className="font-black text-lg" style={{ color: shopEasyColor }}>
                                        ₦{(Number(item.price) * 1500).toLocaleString()}
                                    </p>
                                </div>

                                {/* QUANTITY SECTION: Fixed to prevent negatives */}
                                <div className="flex items-center bg-gray-50 rounded-2xl p-1 border border-gray-100">
                                    <button
                                        onClick={() => {
                                            if (item.quantity > 1) {
                                                addToCart(item, -1);
                                            } else {
                                                removeFromCart(item.id);
                                            }
                                        }}
                                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-[#EF523E] transition-colors"
                                    >
                                        <FiMinus size={14} />
                                    </button>
                                    <span className="w-12 text-center font-bold">
                                        {Math.max(1, item.quantity)}
                                    </span>
                                    <button
                                        onClick={() => addToCart(item, 1)}
                                        className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm hover:text-[#EF523E] transition-colors"
                                    >
                                        <FiPlus size={14} />
                                    </button>
                                </div>

                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="p-4 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                                >
                                    <FiTrash2 size={22} />
                                </button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold mt-4 text-gray-400 hover:text-black transition-colors">
                        <FiArrowLeft /> Back to Shop
                    </Link>
                </div>

                <div className="lg:sticky lg:top-32 h-fit">
                    <div className="bg-gray-900 rounded-[3rem] p-8 text-white shadow-2xl">
                        <h2 className="text-2xl font-bold mb-8">Summary</h2>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400">
                                <span className="text-sm">Subtotal</span>
                                <span className="font-bold text-white">₦{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400">
                                <span className="text-sm">Delivery</span>
                                <span className="text-green-400 font-bold uppercase text-[10px] tracking-widest bg-green-400/10 px-2 py-1 rounded">Free</span>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-white/10 mb-10">
                            <div className="flex justify-between items-end">
                                <span className="text-gray-400 text-sm">Total Amount</span>
                                <span className="text-3xl font-black">₦{total.toLocaleString()}</span>
                            </div>
                        </div>
                        <Link
                            to="/payment" // Ensure this matches the path in your App.js routes
                            className="w-full py-5 rounded-[2rem] font-bold shadow-xl transition-all active:scale-95 hover:brightness-110 flex items-center justify-center text-white"
                            style={{ backgroundColor: shopEasyColor }}
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;