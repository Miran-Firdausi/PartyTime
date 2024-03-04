
"use client"
import React, { useState } from 'react';

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
    const itemsPerPage = 3; // Number of divs visible at a time
    const totalItems = 5; // Total number of divs
  
    const handlePrev = () => {
      const newIndex = Math.max(0, startIndex - 1);
      setStartIndex(newIndex);
    };
  
    const handleNext = () => {
      const newIndex = Math.min(totalItems - itemsPerPage, startIndex + 1);
      setStartIndex(newIndex);
    };
  
    return (
      <div className="slider">
        <div className="slider-inner" style={{ transform: `translateX(-${startIndex * (100 / itemsPerPage)}%)` }}>
          {/* Mapping through all divs */}
          {Array.from({ length: totalItems }, (_, index) => (
            <div className="slide" key={index}>
              {/* Content for each div */}
              <h2>Div {index + 1}</h2>
            </div>
          ))}
        </div>
        <button className="prev" onClick={handlePrev} disabled={startIndex === 0}>Previous</button>
        <button className="next" onClick={handleNext} disabled={startIndex === totalItems - itemsPerPage}>Next</button>
      </div>
    );
  };

export default Slider;
