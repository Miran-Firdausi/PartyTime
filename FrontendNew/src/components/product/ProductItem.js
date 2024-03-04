"use client"
import React, { useState } from 'react';
import styles from '@/styles/product.module.css'; // Import CSS module for styling

const Product = ({ name, originalPrice, discountedPrice, image, details }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} ${name}(s) to cart`);
  };

  return (
    <div className={styles.productList}>
      <div className={styles.product}>
        <img className={styles.productImage} src={image} alt={name} />
        <div className={styles.info}>
          <div className={styles.distance}>
            <span>200m</span>
          </div>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.productDetails}>{details}</p>
          <div className={styles.priceContainer}>
            <div>
              <p className={styles.originalPrice}>₹ {originalPrice}</p>
              <p className={styles.discountedPrice}>₹ {discountedPrice}</p>
            </div>
            <div className={styles.quantity}>
              {!showQuantitySelector ? (
                <button className={styles.addButton} onClick={() => setShowQuantitySelector(true)}>
                  Add
                </button>
              ) : (
                <div className={styles.quantitySelector}>
                  <button onClick={() => setQuantity(quantity - 1)}>-</button>
                  <button onClick={() => setShowQuantitySelector(false)}>{quantity}</button>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              )}
            </div>
          </div>
          {showQuantitySelector && (
            <p>Total Price: ₹ {discountedPrice * quantity}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
