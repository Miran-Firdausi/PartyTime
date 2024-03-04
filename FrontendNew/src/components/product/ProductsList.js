
"use client"
import React, { useState,useRef, useEffect  } from 'react';
import Product from './ProductItem';

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

  const Slider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 6; // Number of products visible at a time
  
    const handlePrev = () => {
      const newIndex = Math.max(0, startIndex - 1);
      setStartIndex(newIndex);
    };
  
    const handleNext = () => {
      const newIndex = Math.min(products.length - itemsPerPage, startIndex + 1);
      setStartIndex(newIndex);
    };
  
    return (
      <div className="product-slider">
        <div className="product-slider-inner" style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}>
          {products.map((product, index) => (
            <div className="product-item" key={index}>
              <Product
                name={product.name}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                image={product.image}
                details={product.details}
              />
            </div>
          ))}
        </div>
        <button className="prev-btn" onClick={handlePrev} disabled={startIndex === 0}>
          <img className="ButtonImg" src="/images/left-arrow.png" alt="Previous" />
        </button>
        <button className="next-btn" onClick={handleNext} disabled={startIndex === products.length - itemsPerPage}>
          <img className="ButtonImg" src="/images/right-arrow.png" alt="Next" />
        </button>
      </div>
    );
  };

  export default Slider