'use client'
import React, { useState } from 'react';
import QuantitySelector from '@/components/QuantitySelector';
import styles from '@/styles/product/productInfo/ProductInfo.module.css';
import qtystyles from '@/styles/quantityselector.module.css';

export default function ProductInfo({ product }) {
    const [hovered, setHovered] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width;
        const y = (e.pageY - top) / height;
        setPosition({ x, y });
    };

    const handleQuantityChange = (action) => {
        // Implement your quantity change logic here
        // For example:
        // if (action === 'decrement') {
        //     // Decrease quantity
        // } else if (action === 'increment') {
        //     // Increase quantity
        // }
    };

    return (
        <div className={styles.cartItem}>
            <div 
                className={styles.productImage} 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}
                style={{
                    backgroundImage: hovered ? `url(${product.image})` : 'none',
                    backgroundPosition: `${position.x * 100}% ${position.y * 100}%`,
                    backgroundSize: hovered ? '130%' : 'cover',
                    transition: 'background-size 0.3s',
                }}
            >
            {hovered ? null : (
                <img src={product.image} alt={product.name} />
            )}
            </div>
            <div className={styles.itemDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <div className={styles.priceContainer}>
                    <p className={styles.originalPrice}>₹{product.originalPrice}</p>
                    <p className={styles.discountedPrice}>₹{product.discountedPrice}</p>
                </div>
                <p className={styles.productDescription}>Description: {product.description}</p>
                <div className={styles.quantityContainer}>
                    <label htmlFor="quantity">Quantity: </label>
                    <QuantitySelector 
                        qtystyles={qtystyles} 
                        quantity={0} 
                        onDecrement={()=> handleQuantityChange('decrement')} 
                        onIncrement={()=> handleQuantityChange('increment')}
                    />
                </div>
                <p className={styles.productCategory}>Category: {product.category}</p>
                <p className={styles.productWeight}>Weight: {product.weight}</p>
                <p className={styles.productExpiry}>Expiry Date: {product.expiryDate}</p>
            </div>
        </div>
    );
}
