import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext();
export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load saved cart/wishlist from localStorage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem('shopeasy_cart');
    const savedWish = localStorage.getItem('shopeasy_wishlist');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWish) setWishlist(JSON.parse(savedWish));
  }, []);

  // Save cart/wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shopeasy_cart', JSON.stringify(cart));
    localStorage.setItem('shopeasy_wishlist', JSON.stringify(wishlist));
  }, [cart, wishlist]);

  // Wishlist logic: toggle add/remove
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id) // remove if exists
        : [...prev, product] // add if not exists
    );
  };

  // Cart logic: add with quantity
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

  // Remove from cart completely
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Calculate total price
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Calculate total number of items in cart
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Provide all state & functions to children
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
      {children} 
    </ShopContext.Provider>
  );
};