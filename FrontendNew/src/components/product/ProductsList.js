
"use client"
import { useRef,useEffect } from 'react';
import Product from './ProductItem';
import styles from "@/styles/productsList.module.css"





const products = [
    {
      name: "Lays Classic Family Size",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Lays.png',
      weight: "200g"
    },
    {
      name: "Cheetos Firindan",
      originalPrice: 35,
      discountedPrice: 33,
      image: '/images/product/Cheetos.png',
      weight: "200g"
    },
    {
      name: "Cheetos Bag of Bones",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CheetosBB.png',
      weight: "200g"
    },
    {
      name: "Monster Energy Drink",
      originalPrice: 50,
      discountedPrice: 45,
      image: '/images/product/Monster.png',
      weight: "200g"
    },
    {
      name: "Coke Classic",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CokeClassic.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks Pack of 3",
      originalPrice: 100,
      discountedPrice: 90,
      image: '/images/product/ColdDrinks.png',
      weight: "200g"
    },
    {
      name: "Doritos Cool Ranch",
      originalPrice: 20,
      discountedPrice: 18,
      image: '/images/product/DoritosCoolRanch.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks pack of 5",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/cold5.png',
      weight: "200g"
    },
    {
      name: "Lays Classic Family Size",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Lays.png',
      weight: "200g"
    },
    {
      name: "Doritos Supreme Cheese",
      originalPrice: 10,
      discountedPrice: 8,
      image: '/images/product/Doritos.png',
      weight: "200g"
    },
    {
      name: "Oreo Mega Pack",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Oreo.png',
      weight: "200g"
    },
    {
      name: "Cheetos Firindan",
      originalPrice: 35,
      discountedPrice: 33,
      image: '/images/product/Cheetos.png',
      weight: "200g"
    },
    {
      name: "Cheetos Bag of Bones",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CheetosBB.png',
      weight: "200g"
    },
    {
      name: "Doritos Supreme Cheese",
      originalPrice: 10,
      discountedPrice: 8,
      image: '/images/product/Doritos.png',
      weight: "200g"
    },
    {
      name: "Oreo Mega Pack",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Oreo.png',
      weight: "200g"
    },
    {
      name: "Monster Energy Drink",
      originalPrice: 50,
      discountedPrice: 45,
      image: '/images/product/Monster.png',
      weight: "200g"
    },
    {
      name: "Coke Classic",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CokeClassic.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks Pack of 3",
      originalPrice: 100,
      discountedPrice: 90,
      image: '/images/product/ColdDrinks.png',
      weight: "200g"
    },
    {
      name: "Doritos Cool Ranch",
      originalPrice: 20,
      discountedPrice: 18,
      image: '/images/product/DoritosCoolRanch.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks pack of 5",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/cold5.png',
      weight: "200g"
    },
    {
      name: "Lays Classic Family Size",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Lays.png',
      weight: "200g"
    },
    {
      name: "Doritos Supreme Cheese",
      originalPrice: 10,
      discountedPrice: 8,
      image: '/images/product/Doritos.png',
      weight: "200g"
    },
    {
      name: "Oreo Mega Pack",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Oreo.png',
      weight: "200g"
    },
    {
      name: "Cheetos Firindan",
      originalPrice: 35,
      discountedPrice: 33,
      image: '/images/product/Cheetos.png',
      weight: "200g"
    },
    {
      name: "Cheetos Bag of Bones",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CheetosBB.png',
      weight: "200g"
    },
    {
      name: "Monster Energy Drink",
      originalPrice: 50,
      discountedPrice: 45,
      image: '/images/product/Monster.png',
      weight: "200g"
    },
    {
      name: "Coke Classic",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CokeClassic.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks Pack of 3",
      originalPrice: 100,
      discountedPrice: 90,
      image: '/images/product/ColdDrinks.png',
      weight: "200g"
    },
    {
      name: "Doritos Cool Ranch",
      originalPrice: 20,
      discountedPrice: 18,
      image: '/images/product/DoritosCoolRanch.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks pack of 5",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/cold5.png',
      weight: "200g"
    },
    {
      name: "Lays Classic Family Size",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Lays.png',
      weight: "200g"
    },
    {
      name: "Doritos Supreme Cheese",
      originalPrice: 10,
      discountedPrice: 8,
      image: '/images/product/Doritos.png',
      weight: "200g"
    },
    {
      name: "Oreo Mega Pack",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/Oreo.png',
      weight: "200g"
    },
    {
      name: "Cheetos Firindan",
      originalPrice: 35,
      discountedPrice: 33,
      image: '/images/product/Cheetos.png',
      weight: "200g"
    },
    {
      name: "Cheetos Bag of Bones",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CheetosBB.png',
      weight: "200g"
    },
    {
      name: "Monster Energy Drink",
      originalPrice: 50,
      discountedPrice: 45,
      image: '/images/product/Monster.png',
      weight: "200g"
    },
    {
      name: "Coke Classic",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CokeClassic.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks Pack of 3",
      originalPrice: 100,
      discountedPrice: 90,
      image: '/images/product/ColdDrinks.png',
      weight: "200g"
    },
    {
      name: "Doritos Cool Ranch",
      originalPrice: 20,
      discountedPrice: 18,
      image: '/images/product/DoritosCoolRanch.png',
      weight: "200g"
    },
    {
      name: "Cold Drinks pack of 5",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/cold5.png',
      weight: "200g"
    }
  ];

  export default function ProductsList({ category = "Chips, Biscuits and Cold Drinks",addToCart }) {
    const productsListRef = useRef(null);

     useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://127.0.0.1:8000/getProducts/');
        const data = await response.json();
        //setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  
    const handleScrollLeft = () => {
      if (productsListRef.current) {
        productsListRef.current.scrollBy({
          left: -200, // Adjust as needed
          behavior: 'smooth'
        });
      }
    };
  
    const handleScrollRight = () => {
      if (productsListRef.current) {
        productsListRef.current.scrollBy({
          left: 200, // Adjust as needed
          behavior: 'smooth'
        });
      }
    };
  
    return (
      <div className={styles.productsListOuterContainer}>
      <span className={styles.productsListTitle}>{category}</span>
      <div className={styles.productsListContainer}>
        <button className={`${styles.scrollButton} ${styles.scrollLeft}`} onClick={handleScrollLeft}>
          <img src="/images/left-arrow.png" alt="Left Arrow" />
        </button>
        <div className={styles.productsList} ref={productsListRef}>
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              originalPrice={product.originalPrice}
              discountedPrice={product.discountedPrice}
              image={product.image}
              weight={product.weight}
              addToCart={addToCart} 
            />
          ))}
        </div>
        <button className={`${styles.scrollButton} ${styles.scrollRight}`} onClick={handleScrollRight}>
          <img src="/images/right-arrow.png" alt="Right Arrow" />
        </button>
      </div>
      </div>
    );
  }
