"use client"
import React, { useState } from 'react';
import styles from '@/styles/product.module.css'; // Import CSS module for styling

const Product = ({ name, originalPrice, discountedPrice, image, weight }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const handleAddToCart = () => {
    setQuantity(1); // Reset quantity to 1 when 'Add' button is clicked
    setShowQuantitySelector(true); // Show quantity selector when 'Add' button is clicked
    console.log(`Added ${quantity} ${name}(s) to cart`);
  };

  const handleQuantityChange = (newQuantity) => {
    // Ensure quantity is positive
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      // If quantity becomes 0, switch back to add button
      if (newQuantity === 0) {
        setShowQuantitySelector(false);
      }
    }
  };

  const handleQuantityButtonClick = () => {
    if (showQuantitySelector) {
      // If quantity selector is visible, reset quantity to zero and switch to add button
      setQuantity(0);
      setShowQuantitySelector(false);
    }
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
          <p className={styles.productWeight}>{weight}</p>
          <div className={styles.priceContainer}>
            <div>
              <p className={styles.originalPrice}>₹{originalPrice}</p>
              <p className={styles.discountedPrice}>₹{discountedPrice}</p>
            </div>
            <div className={styles.quantity}>
              {!showQuantitySelector ? (
                <button className={styles.addButton} onClick={handleAddToCart}>
                  Add
                </button>
              ) : (
                <div className={styles.quantitySelector}>
                  <button className={styles.minus} onClick={() => handleQuantityChange(quantity - 1)}>-</button>
                  <button className={styles.qty} onClick={handleQuantityButtonClick}>{quantity}</button>
                  <button className={styles.plus} onClick={() => handleQuantityChange(quantity + 1)}>+</button>
                </div>
              )}
            </div>
          </div>
          {showQuantitySelector && (
            <p className={styles.totalPrice}>Total Price: ₹{discountedPrice * quantity}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
