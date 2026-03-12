import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom"; 
import Logo from "../img/Logo.png";
import { ShopContext } from "../Context/ShopContext.jsx"; 
import { motion, AnimatePresence } from "framer-motion";
import {
    FiSearch,
    FiShoppingCart,
    FiUser,
    FiChevronDown,
    FiMenu,
    FiX,
    FiChevronRight,
    FiMail,
    FiLock,
    FiEye,
    FiEyeOff
} from "react-icons/fi";

const AuthModal = ({ isOpen, onClose, initialMode, brandColor }) => {
    const [mode, setMode] = useState(initialMode);
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => setMode(initialMode), [initialMode]);
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 z-10">
                    <button onClick={onClose} className="absolute right-6 top-6 text-gray-400 hover:text-black"><FiX size={24} /></button>
                    <div className="text-center mb-8">
                        <img src={Logo} alt="Logo" className="h-10 mx-auto mb-4" />
                        <h2 className="text-2xl font-black">{mode === "login" ? "Welcome Back" : "Create Account"}</h2>
                    </div>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {mode === "register" && (
                            <div className="relative">
                                <FiUser className="absolute left-4 top-4 text-gray-400" />
                                <input type="text" placeholder="Full Name" className="w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2" style={{ "--tw-ring-color": brandColor }} />
                            </div>
                        )}
                        <div className="relative">
                            <FiMail className="absolute left-4 top-4 text-gray-400" />
                            <input type="email" placeholder="Email" className="w-full pl-11 pr-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2" style={{ "--tw-ring-color": brandColor }} />
                        </div>
                        <div className="relative">
                            <FiLock className="absolute left-4 top-4 text-gray-400" />
                            <input type={showPassword ? "text" : "password"} placeholder="Password" className="w-full pl-11 pr-12 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2" style={{ "--tw-ring-color": brandColor }} />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400">
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>
                        <button className="w-full py-4 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95" style={{ backgroundColor: brandColor }}>
                            {mode === "login" ? "Login" : "Register"}
                        </button>
                    </form>
                    <p className="text-center mt-6 text-sm text-gray-600">
                        {mode === "login" ? "New here?" : "Already have an account?"}
                        <button onClick={() => setMode(mode === "login" ? "register" : "login")} className="ml-2 font-bold" style={{ color: brandColor }}>
                            {mode === "login" ? "Create Account" : "Login Now"}
                        </button>
                    </p>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

const Navbar = () => {

    const { wishlist = [], cart = [] } = useContext(ShopContext);
    const location = useLocation();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState("login");
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isUserOpen, setIsUserOpen] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const cartCount = cart.length; 
    const wishlistCount = wishlist.length;

    const productRef = useRef(null);
    const userRef = useRef(null);
    const shopEasyColor = "#EF523E";

    const isActive = (path) => location.pathname === path;

    const productCategories = [
        { name: "Bag" },
        { name: "Electronics", subCategories: ["Laptops", "Phones", "Headset/Earpods", "Chargers"] },
        { name: "Appliances" }, 
        { name: "Shoes" },
        { name: "Wristwatch" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (productRef.current && !productRef.current.contains(e.target)) {
                setIsProductOpen(false);
                setActiveSubMenu(null);
            }
            if (userRef.current && !userRef.current.contains(e.target)) {
                setIsUserOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav className={`fixed left-0 z-[90] w-full font-sans transition-all duration-300 ${
                isScrolled ? "bg-white shadow-lg h-16 top-0" : "bg-white/90 backdrop-blur-md h-20 top-14"
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">

                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img className="h-10 md:h-12 w-auto object-contain" src={Logo} alt="Shop Easy" />
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden md:flex items-center gap-8 font-semibold text-gray-700">
                            <li><Link to="/" className="transition-colors duration-200" style={{ color: isActive("/") ? shopEasyColor : "inherit" }}>Home</Link></li>

                            <li className="relative" ref={productRef}>
                                <button onClick={() => setIsProductOpen(!isProductOpen)} className="flex items-center gap-1 transition-colors duration-200" style={{ color: location.pathname.includes("/category") ? shopEasyColor : "inherit" }}>
                                    Products <FiChevronDown className={`transition-transform duration-300 ${isProductOpen ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`absolute left-0 mt-3 w-60 bg-white border rounded-xl shadow-2xl py-3 transition-all duration-300 origin-top ${isProductOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}`}>
                                    {productCategories.map((item) => (
                                        <div key={item.name} className="relative" onMouseEnter={() => item.subCategories && setActiveSubMenu(item.name)} onMouseLeave={() => setActiveSubMenu(null)}>
                                            <div className="flex justify-between items-center px-5 py-2 text-sm hover:bg-[#FFF3EE] transition-colors duration-200 cursor-pointer">
                                                <Link to={`/category/${item.name.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setIsProductOpen(false)} className="flex-1" style={{ color: isActive(`/category/${item.name.toLowerCase().replace(/\s+/g, "-")}`) ? shopEasyColor : "inherit" }}>{item.name}</Link>
                                                {item.subCategories && <FiChevronRight size={14} className="text-gray-400" />}
                                            </div>
                                            {item.subCategories && activeSubMenu === item.name && (
                                                <div className="absolute top-0 left-full ml-1 w-56 bg-white border rounded-xl shadow-2xl py-3">
                                                    {item.subCategories.map((sub) => (
                                                        <Link key={sub} to={`/category/${sub.toLowerCase().replace(/\s+/g, "-")}`} className="block px-5 py-2 text-sm hover:bg-[#FFF3EE] transition-colors duration-200" style={{ color: isActive(`/category/${sub.toLowerCase().replace(/\s+/g, "-")}`) ? shopEasyColor : "inherit" }} onClick={() => { setIsProductOpen(false); setActiveSubMenu(null); }}>{sub}</Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </li>

                            <li><Link to="/blog" className="transition-colors duration-200" style={{ color: isActive("/blog") ? shopEasyColor : "inherit" }}>Blog</Link></li>
                            
                            <li className="relative">
                                <Link to="/wishlist" className="transition-colors duration-200" style={{ color: isActive("/wishlist") ? shopEasyColor : "inherit" }}>Wishlist</Link>
                                {wishlistCount > 0 && (
                                    <span className="absolute -top-1 -right-2 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                                    </span>
                                )}
                            </li>

                            <li><Link to="/about" className="transition-colors duration-200" style={{ color: isActive("/about") ? shopEasyColor : "inherit" }}>About Us</Link></li>

                            <li className="relative">
                                <Link to="/latest" className="px-4 py-2 rounded-lg font-semibold transition-all duration-200 inline-block" style={{ backgroundColor: isActive("/latest") ? shopEasyColor : "#FFF3EE", color: isActive("/latest") ? "white" : shopEasyColor }}>Latest</Link>
                                <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-2 py-0.5 text-[10px] font-bold text-white bg-red-500 rounded-full animate-pulse">HOT</span>
                            </li>

                            <li><Link to="/contact" className="transition-colors duration-200" style={{ color: isActive("/contact") ? shopEasyColor : "inherit" }}>Contact</Link></li>
                        </ul>

                        {/* Right Section Tools */}
                        <div className="flex items-center gap-5">
                            <div className="hidden lg:flex items-center relative w-60">
                                <FiSearch className="absolute left-4 text-gray-400" />
                                <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full outline-none text-sm focus:ring-1 transition" style={{ "--tw-ring-color": shopEasyColor }} />
                            </div>

                            {/* CART ICON */}
                            <Link 
                                to="/cart" 
                                className="relative p-2 text-gray-700 hover:text-[#EF523E] transition-colors duration-200" 
                                style={{ color: isActive("/cart") ? shopEasyColor : "inherit" }}>

                                <FiShoppingCart size={22} />
                                    <AnimatePresence mode="popLayout">
                                    {cartCount > 0 && (
                                        <motion.span 
                                            key={cartCount}
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="absolute -top-1 -right-1 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center" 
                                            style={{ backgroundColor: shopEasyColor }}
                                        >
                                            {cartCount}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </Link>

                            <div className="relative hidden md:block" ref={userRef}>
                                <button onClick={() => setIsUserOpen(!isUserOpen)} className="p-2 text-gray-700 flex items-center gap-1 hover:text-[#EF523E]" style={{ color: (isActive("/account") || isUserOpen) ? shopEasyColor : "inherit" }}>
                                    <FiUser size={22} />
                                    <FiChevronDown size={14} className={isUserOpen ? "rotate-180" : ""} />
                                </button>
                                <div className={`absolute right-0 mt-3 w-52 bg-white border rounded-xl shadow-2xl py-2 transition-all duration-300 ${isUserOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
                                    <Link to="/account" className="block px-5 py-2 text-sm hover:bg-[#FFF3EE]" style={{ color: isActive("/account") ? shopEasyColor : "inherit" }}>Your Account</Link>
                                    <button onClick={() => { setAuthMode("login"); setIsAuthModalOpen(true); setIsUserOpen(false); }} className="w-full text-left block px-5 py-2 text-sm hover:bg-[#FFF3EE]">Login</button>
                                    <button onClick={() => { setAuthMode("register"); setIsAuthModalOpen(true); setIsUserOpen(false); }} className="w-full text-left block px-5 py-2 text-sm font-semibold hover:bg-[#FFF3EE]" style={{ color: shopEasyColor }}>Register</button>
                                </div>
                            </div>

                            <button className="md:hidden" onClick={() => setIsMobileOpen(true)}><FiMenu size={28} /></button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`fixed inset-0 z-[9999] md:hidden transition-all duration-500 ${isMobileOpen ? "visible" : "invisible"}`}>
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-500 ${isMobileOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsMobileOpen(false)} />
                <div className={`absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-6 transition-transform duration-500 ${isMobileOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <img src={Logo} alt="Logo" className="h-8" />
                        <button onClick={() => setIsMobileOpen(false)}><FiX size={28} /></button>
                    </div>
                    <nav className="flex flex-col gap-6 text-xl font-bold text-gray-800">
                        <Link to="/" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/") ? shopEasyColor : "inherit" }}>Home</Link>
                        <Link to="/products" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/products") ? shopEasyColor : "inherit" }}>Products</Link>
                        <Link to="/blog" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/blog") ? shopEasyColor : "inherit" }}>Blog</Link>
                        <Link to="/wishlist" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/wishlist") ? shopEasyColor : "inherit" }} className="flex justify-between items-center">
                            Wishlist {wishlistCount > 0 && <span className="h-2 w-2 rounded-full bg-red-600" />}
                        </Link>
                        <Link to="/cart" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/cart") ? shopEasyColor : "inherit" }}>Cart ({cartCount})</Link>
                        <Link to="/about" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/about") ? shopEasyColor : "inherit" }}>About Us</Link>
                        <Link to="/contact" onClick={() => setIsMobileOpen(false)} style={{ color: isActive("/contact") ? shopEasyColor : "inherit" }}>Contact</Link>
                        <hr />
                        <button onClick={() => { setAuthMode("login"); setIsAuthModalOpen(true); setIsMobileOpen(false); }} className="flex items-center gap-2 text-left"><FiUser /> Login</button>
                    </nav>
                </div>
            </div>

            <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} initialMode={authMode} brandColor={shopEasyColor} />
        </>
    );
};

export default Navbar;