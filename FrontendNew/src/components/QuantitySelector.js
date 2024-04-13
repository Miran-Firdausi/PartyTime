import React from 'react';
import styles from '@/styles/quantityselector.module.css'; // Import CSS module for styling

const QuantitySelector = ({ quantity, onDecrement, onIncrement, onClick }) => {
  return (
    <div className={styles.quantitySelector}>
      <button className={styles.minus} onClick={onDecrement}>-</button>
      <button className={styles.qty} onClick={onClick}>{quantity}</button>
      <button className={styles.plus} onClick={onIncrement}>+</button>
    </div>
  );
};

export default QuantitySelector;
