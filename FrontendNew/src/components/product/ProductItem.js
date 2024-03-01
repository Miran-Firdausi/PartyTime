import React from 'react';
import styles from '@/styles/product.module.css'; // Import CSS module for styling

const Product = ({ name, price, image }) => {
  return (
    <div className={styles.product}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.price}>${price}</p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
