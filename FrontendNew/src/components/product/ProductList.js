"use client"
import React, { useState } from 'react';
import Product from "@/components/product/ProductItem"; // Adjust the import path as per your project structure
import styles from "@/styles/productList.module.css";

const products = [
  {
    name: "Lays 1",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 2",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 3",
    originalPrice: 20,
    discountedPrice: 18,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 4",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 5",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 6",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 7",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 8",
    originalPrice: 20,
    discountedPrice: 18,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 9",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  },
  {
    name: "Lays 10",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
  }
];


export default function ProductList() {
    const [startIdx, setStartIdx] = useState(0);
  
    const scrollLeft = () => {
      if (startIdx > 0) {
        setStartIdx(startIdx - 1);
      }
    };
  
    const scrollRight = () => {
      if (startIdx < products.length - 5) {
        setStartIdx(startIdx + 1);
      }
    };
  
    return (
      <div className={styles.carouselContainer}>
        <button className={styles.scrollButton} onClick={scrollLeft}>&lt;</button>
        <div className={styles.productListContainer}>
          <div className={styles.productList} style={{ transform: `translateX(-${startIdx * 20}%)` }}>
            {products.slice(startIdx, startIdx + 5).map((product, index) => (
              <Product key={index} {...product} />
            ))}
          </div>
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>&gt;</button>
      </div>
    );
  }