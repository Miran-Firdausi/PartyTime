// components/CartItem.js
"use client"
import React from 'react';
import styles from '@/styles/CartItem.module.css';

const CartItem = ({ product }) => {
  const handleChange = (event) => {
    // Handle quantity change here
  };

  return (
    <div className={styles.cartItem}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.priceContainer}>
          <p className={styles.originalPrice}>₹{product.originalPrice}</p>
          <p className={styles.discountedPrice}>₹{product.discountedPrice}</p>
        </div>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.quantityContainer}>
          <label htmlFor="quantity">Quantity: </label>
          <select id="quantity" name="quantity" onChange={handleChange} className={styles.quantitySelect} value={product.quantity}>
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </div>
        <button className={styles.removeButton}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
