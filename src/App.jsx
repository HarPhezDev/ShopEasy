import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'; 
import { ShopProvider } from './Context/ShopContext.jsx'

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Blog from './pages/Blog/Blog.jsx';
import Latest from './pages/Latest/Latest.jsx'; 
import Contact from './pages/Contact/Contact.jsx'; 
import Cart from './pages/Cart/Cart.jsx'; 
import Products from './pages/Product/productsPage.jsx';
import Shoes from './pages/Product/Shoe/Shoes.jsx';
import Bags from './pages/Product/Bag/Bags.jsx';
import Appliance from './pages/Product/Appliance/Appliance.jsx';
import Wristwatch from './pages/Product/Wristwatch/Wristwatch.jsx';
import Laptop from './pages/Product/Laptops/Laptops.jsx';
import Phone from './pages/Product/Phones/Phone.jsx';
import Wishlist from './pages/Wishlist/Wishlist.jsx'; 
import About from './pages/About/About.jsx'; 
import Payment from './pages/Payment/Payment.jsx'; 
import Privacy from './pages/PrivacyPolicy.jsx'; 
import BrandLoader from './BrandLoader.jsx'; 


const PageWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
   
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <BrandLoader key="loader" />}
      </AnimatePresence>
      <div className={isLoading ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
        {children}
      </div>
    </>
  );
};

const App = () => {
  return (
    <ShopProvider> 
      <Router>
        <PageWrapper> {/* 2. Wrap everything inside the logic */}
          <Header />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/shoes" element={<Shoes />} />
            <Route path="/category/bag" element={<Bags />} />
            <Route path="/category/wristwatch" element={<Wristwatch />} />
            <Route path="/category/laptops" element={<Laptop />} />
            <Route path="/category/appliances" element={<Appliance />} />
            <Route path="/category/phones" element={<Phone />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/privacy" element={<Privacy />} />

            {/* 404 Page */}
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
                <div className="text-center">
                  <h1 className="text-9xl font-black text-gray-200 tracking-tighter">404</h1>
                  <div className="relative -mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Lost in Time?</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                      The page you're looking for doesn't exist or has been moved.
                    </p>
                    <Link to="/" className="inline-flex items-center gap-2 bg-[#EF523E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-900 transition-all">
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            } />
          </Routes>

          <Footer />
        </PageWrapper>
      </Router>
    </ShopProvider>
  );
};

export default App;