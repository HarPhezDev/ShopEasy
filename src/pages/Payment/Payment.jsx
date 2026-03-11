import React, { useState, useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import { motion, AnimatePresence } from 'framer-motion';
import { FiLock, FiCheckCircle, FiCreditCard, FiCopy, FiInfo } from 'react-icons/fi';

const Payment = () => {
    const { cart, getCartTotal } = useContext(ShopContext);
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [copied, setCopied] = useState(false);
    const shopEasyColor = "#EF523E";

    // ₦1500 conversion rate
    const subtotal = getCartTotal() * 1500;
    const shipping = 0; 
    const total = subtotal + shipping;

    const handleCopy = () => {
        navigator.clipboard.writeText("123456789");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-7xl mx-auto mt-35 px-6 mb-20 font-['Poppins']">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* LEFT COLUMN: FORM */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-10"
                >
                    <div>
                        <h1 className="text-4xl font-black text-gray-900 mb-2">Checkout</h1>
                        <p className="text-gray-500">Complete your purchase securely.</p>
                    </div>

                    {/* Step 1: Shipping */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900">
                            <span className="w-8 h-8 rounded-full bg-[#EF523E] text-white flex items-center justify-center text-xs">1</span>
                            Shipping Information
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition" />
                            <input type="text" placeholder="Last Name" className="p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition" />
                            <input type="text" placeholder="Phone Number" className="col-span-2 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition" />
                            <input type="text" placeholder="Delivery Address" className="col-span-2 p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition" />
                        </div>
                    </section>

                    {/* Step 2: Payment Method */}
                    <section className="space-y-4">
                        <h2 className="text-lg font-bold flex items-center gap-2 text-gray-900">
                            <span className="w-8 h-8 rounded-full bg-[#EF523E] text-white flex items-center justify-center text-xs">2</span>
                            Payment Method
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            <button 
                                onClick={() => setPaymentMethod('card')}
                                className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 font-bold ${paymentMethod === 'card' ? 'border-[#EF523E] bg-[#EF523E]/5 text-[#EF523E]' : 'border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                            >
                                <FiCreditCard /> Debit Card
                            </button>
                            <button 
                                onClick={() => setPaymentMethod('transfer')}
                                className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 font-bold ${paymentMethod === 'transfer' ? 'border-[#EF523E] bg-[#EF523E]/5 text-[#EF523E]' : 'border-gray-100 text-gray-400 hover:bg-gray-50'}`}
                            >
                                <FiCheckCircle /> Bank Transfer
                            </button>
                        </div>

                        {/* CONDITIONAL RENDERING AREA */}
                        <div className="mt-6">
                            <AnimatePresence mode="wait">
                                {paymentMethod === 'card' ? (
                                    <motion.div 
                                        key="card"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-6 bg-gray-50 rounded-3xl border border-gray-100 space-y-4"
                                    >
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-500 ml-1">CARD NUMBER</label>
                                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full p-4 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition tracking-widest" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 ml-1">EXPIRY DATE</label>
                                                <input type="text" placeholder="MM / YY" className="w-full p-4 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition text-center" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold text-gray-500 ml-1">CVV</label>
                                                <input type="password" placeholder="***" className="w-full p-4 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-[#EF523E]/20 transition text-center" />
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div 
                                        key="transfer"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="p-8 bg-gray-900 rounded-3xl text-white space-y-6 relative overflow-hidden"
                                    >
                                        <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-[#EF523E] rounded-full blur-[60px] opacity-20" />
                                        
                                        <div className="flex items-start gap-3 text-gray-400">
                                            <FiInfo className="mt-1" />
                                            <p className="text-xs leading-relaxed">Transfer the exact amount to the account below. Your order will be processed automatically once detected.</p>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="flex justify-between border-b border-white/10 pb-3">
                                                <span className="text-gray-400 text-sm">Account Name</span>
                                                <span className="font-bold">Shop Easy</span>
                                            </div>
                                            <div className="flex justify-between border-b border-white/10 pb-3">
                                                <span className="text-gray-400 text-sm">Bank Name</span>
                                                <span className="font-bold text-[#EF523E]">EverTrust Bank</span>
                                            </div>
                                            <div className="flex justify-between items-center pt-2">
                                                <div>
                                                    <span className="text-gray-400 text-sm block mb-1">Account Number</span>
                                                    <span className="text-2xl font-mono font-black tracking-tighter">123456789</span>
                                                </div>
                                                <button 
                                                    onClick={handleCopy}
                                                    className={`px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold transition-all ${copied ? 'bg-green-500 text-white' : 'bg-white/10 hover:bg-white text-white hover:text-black'}`}
                                                >
                                                    {copied ? <FiCheckCircle /> : <FiCopy />} {copied ? 'COPIED' : 'COPY'}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </section>
                </motion.div>

                {/* RIGHT COLUMN: ORDER SUMMARY */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:sticky lg:top-32 h-fit"
                >
                    <div className="bg-gray-50 rounded-[3rem] p-10 border border-gray-100">
                        <h3 className="text-xl font-black mb-8 text-gray-900">Order Summary</h3>
                        
                        <div className="max-h-60 overflow-y-auto pr-2 space-y-4 mb-8 custom-scrollbar">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center group">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-white rounded-2xl p-2 border border-gray-100 group-hover:border-[#EF523E]/30 transition-colors">
                                            <img src={item.image} alt="" className="w-full h-full object-contain" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 line-clamp-1">{item.title}</p>
                                            <p className="text-xs text-gray-400 font-medium">Qty: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-sm font-bold text-gray-900">₦{(item.price * item.quantity * 1500).toLocaleString()}</p>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4 border-t border-gray-200 pt-8">
                            <div className="flex justify-between text-gray-500 text-sm">
                                <span>Subtotal</span>
                                <span className="font-bold text-gray-900">₦{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-500 text-sm">
                                <span>Delivery</span>
                                <span className="text-green-500 font-black text-xs tracking-widest uppercase">Free Delivery</span>
                            </div>
                            <div className="flex justify-between items-end pt-6">
                                <span className="text-gray-900 font-bold">Total Amount</span>
                                <span className="text-4xl font-black text-gray-900 tracking-tighter">₦{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <button 
                            className="w-full mt-10 py-6 rounded-3xl text-white font-black text-lg shadow-2xl shadow-[#EF523E]/20 flex items-center justify-center gap-3 transition-all active:scale-95 hover:brightness-110"
                            style={{ backgroundColor: shopEasyColor }}
                        >
                            <FiLock /> {paymentMethod === 'card' ? 'Pay Securely' : 'I Have Transferred'}
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Payment;