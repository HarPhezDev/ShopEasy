import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiInstagram, FiTwitter, FiYoutube, FiFacebook, FiArrowUp } from 'react-icons/fi';
import Logo from '../img/Logo.png';

const Footer = () => {
  const brandRed = "#EF523E";

  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Laptops", path: "/category/laptops" },
        { name: "Smartphones", path: "/category/phones" },
        { name: "Accessories", path: "/accessories" },
        { name: "Best Sellers", path: "/best-sellers" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/contact" },
        { name: "Order Tracking", path: "/*" },
        { name: "Returns", path: "/*" },
        { name: "Shipping Info", path: "/*" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About ShopEasy", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Privacy Policy", path: "/privacy" }
      ]
    }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Link to="/">
                <img src={Logo} alt="ShopEasy Logo" className="w-15 h-10 object-contain" />
              </Link>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-8">
              ShopEasy is your trusted destination for tech, gadgets, and lifestyle essentials. 
              Discover quality products, smooth shopping, and reliable delivery all in one place.
            </p>

            <div className="flex gap-4">
              {[FiInstagram, FiTwitter, FiYoutube, FiFacebook].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="https://social-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: brandRed }}
                  className="text-gray-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((group, idx) => (
            <div key={idx}>
              <h4 className="font-black text-xs uppercase tracking-[0.2em] text-gray-900 mb-6">
                {group.title}
              </h4>

              <ul className="space-y-4">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path} 
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-xs font-medium text-gray-400">
            © 2026 ShopEasy. All Rights Reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 bg-gray-50 px-5 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            Back to Top <FiArrowUp style={{ color: brandRed }} />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;