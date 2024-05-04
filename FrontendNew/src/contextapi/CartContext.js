import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Step 1: Create a context for the cart
const CartContext = createContext();

// Step 2: Define a reducer function to manage the cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      // Add the product to the cart
      return [...state, action.payload];
    case 'REMOVE_FROM_CART':
      // Remove the product from the cart
      return state.filter(item => item.id !== action.payload.id);
    case 'UPDATE_QUANTITY':
      // Update the quantity of a product in the cart
      return state.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
    default:
      return state;
  }
};

// Step 4: Create a custom hook to access cart context
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Step 5: Use useEffect to watch for changes in the cart and post data
  useEffect(() => {
    
    const postData = async () => {
      try {
        const formattedCart = cart.map(item => ({
          product: {
            id: item.id
          },
          quantity: item.quantity
        }));

        const totalAmount = cart.reduce((total, item) => total + (item.quantity * item.discountedPrice), 0);
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        console.log(totalAmount);
        console.log(totalItems);
        const data = {
          items: formattedCart,
          total_amount: totalAmount,
          total_items: totalItems
        };
        console.log(JSON.stringify(data));
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch('http://127.0.0.1:8000/cart/add/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data),
          credentials: 'include' // Include credentials in the request
        });
        if (!response.ok) {
          throw new Error('Failed to post cart data');
        }
      } catch (error) {
        console.error('Error posting cart data:', error);
      }
    };

    postData();
  }, [cart]); // Watch for changes in the cart

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
