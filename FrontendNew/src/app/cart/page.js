"use client"
import React, { useState } from 'react';
import styles from '@/styles/cart.module.css'; // Import CSS module for styling

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <ul className={styles.cartItemsList}>
          {cartItems.map((item, index) => (
            <li key={index} className={styles.cartItem}>
              <span className={styles.itemName}>{item.name}</span> - <span className={styles.itemPrice}>₹{item.price}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
