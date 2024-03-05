
"use client"
import React, { useState, useEffect, useRef } from 'react';
import Product from './ProductItem';
import styles from "@/styles/productsList.module.css"

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
    },
    {
      name: "Lays 11",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Lays.png',
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non sollicitudin nunc."
    }
  ];

  const Slider = (props) => {
  const sliderRef = useRef(null);
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Initialize with 1
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (sliderRef.current) {
        const sliderWidth = sliderRef.current.offsetWidth;
        const itemWidth = sliderRef.current.querySelector(`.${styles["product-item"]}`).offsetWidth;
        const maxItemsPerPage = Math.floor(sliderWidth / itemWidth);
        setItemsPerPage(maxItemsPerPage || 1); // Ensure at least one item per page
      }
    };

    updateItemsPerPage(); // Initial calculation
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      setScrollWidth(sliderRef.current.scrollWidth - sliderRef.current.offsetWidth);
    }
  }, [startIndex]);

  const handlePrev = () => {
    const newIndex = Math.max(0, startIndex - 1);
    setStartIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(products.length - itemsPerPage, startIndex + 1);
    setStartIndex(newIndex);
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const deltaX = e.deltaX;
    const deltaY = e.deltaY;

    // Check if horizontal scrolling is significant compared to vertical scrolling
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Adjust scrolling speed by multiplying deltaX
      const scrollSpeed = 0.1; // Adjust the value for desired speed
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += deltaX * scrollSpeed;
      }
    }
  };

  return (
    <div className={styles["slider-container"]}>
      <h2 className={styles.title}>{props.title}</h2>
      <div className={styles["slider-wrapper"]} onWheel={handleWheel}>
        <div className={styles["product-slider"]} ref={sliderRef}>
          <div className={styles["product-slider-inner"]} style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}>
            {products.map((product, index) => (
              <div className={styles["product-item"]} key={index}>
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
        </div>
        <div className={styles["button-container"]}>
          <button className={styles["prev-btn"]} onClick={handlePrev} disabled={startIndex === 0}>
            <img className={styles["ButtonImg"]} src="/images/left-arrow.png" alt="Previous" />
          </button>
          <button className={styles["next-btn"]} onClick={handleNext} disabled={startIndex === products.length - itemsPerPage || scrollWidth === sliderRef.current?.scrollLeft}>
            <img className={styles["ButtonImg"]} src="/images/right-arrow.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;