import React, { createContext, useState, useEffect } from 'react';

// 1️⃣ Create the context (the “cloud” where data lives)
export const ShopContext = createContext();

// 2️⃣ Create the provider component
export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // 3️⃣ Load saved cart/wishlist from localStorage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem('shopeasy_cart');
    const savedWish = localStorage.getItem('shopeasy_wishlist');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWish) setWishlist(JSON.parse(savedWish));
  }, []);

  // 4️⃣ Save cart/wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopeasy_cart', JSON.stringify(cart));
    localStorage.setItem('shopeasy_wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // 5️⃣ Wishlist logic: toggle add/remove
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id) // remove if exists
        : [...prev, product] // add if not exists
    );
  };

  // 6️⃣ Cart logic: add with quantity
  const addToCart = (product, qty = 1) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        // Increase quantity if already in cart
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }

      // Add new product to cart
      return [...prev, { ...product, quantity: qty }];
    });
  };

  // 7️⃣ Remove from cart completely
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // 8️⃣ Calculate total price
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // 9️⃣ Calculate total number of items in cart
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // 10️⃣ Provide all state & functions to children
  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        toggleWishlist,
        addToCart,
        removeFromCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children} {/* <- everything inside ShopProvider will render here */}
    </ShopContext.Provider>
  );
};