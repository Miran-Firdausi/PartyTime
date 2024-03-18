"use client"
import React, { useState } from 'react';
import styles from '@/styles/product.module.css'; // Import CSS module for styling

const Product = ({ name, originalPrice, discountedPrice, image, weight, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantitySelector, setShowQuantitySelector] = useState(false);

  const handleAddToCart = (isAdded) => {
      addToCart(1, discountedPrice, isAdded)
  };

  const handleQuantityChange = (operation) => {
    if (operation === 'increment') {
      handleAddToCart('increment');
      setQuantity(quantity + 1);
    } else if (operation === 'decrement') {
      handleAddToCart('decrement');
      if (quantity > 0) {
        setQuantity(quantity - 1);
      }
      if(quantity === 1){
        setQuantity(0);
        setShowQuantitySelector(false);
      }
    }
  };
  

  const handleQuantityButtonClick = () => {
    if (showQuantitySelector) {
      // If quantity selector is visible, reset quantity to zero and switch to add button
      handleAddToCart(quantity);
      setQuantity(0);
      setShowQuantitySelector(false);
    }
    else {
      handleAddToCart('increment');
      setQuantity(1);
      setShowQuantitySelector(true);
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
                <button className={styles.addButton} onClick={handleQuantityButtonClick}>
                  Add
                </button>
              ) : (
                <div className={styles.quantitySelector}>
                  <button className={styles.minus} onClick={() => handleQuantityChange('decrement')}>-</button>
                  <button className={styles.qty} onClick={handleQuantityButtonClick}>{quantity}</button>
                  <button className={styles.plus} onClick={() => handleQuantityChange('increment')}>+</button>
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
