import React, { createContext, useContext, useReducer } from 'react';

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
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
