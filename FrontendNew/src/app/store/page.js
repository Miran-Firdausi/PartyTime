"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/product/ProductsList";


const snacks = [
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
      name: "Doritos Cool Ranch",
      originalPrice: 20,
      discountedPrice: 18,
      image: '/images/product/DoritosCoolRanch.png',
      weight: "200g"
    },
    {
        name: "Lays Wavy",
        originalPrice: 30,
        discountedPrice: 25,
        image: '/images/product/layswavy.png',
        weight: "180g"
    },
    {
        name: "Oreo Biscuit",
        originalPrice: 25,
        discountedPrice: 20,
        image: '/images/product/Oreo.png',
        weight: "150g"
    },
    {
        name: "Pringles Original",
        originalPrice: 30, // INR
        discountedPrice: 25, // INR
        image: '/images/product/pringles.png',
        weight: "150g"
    },
    {
        name: "Kit Kat",
        originalPrice: 10, // INR
        discountedPrice: 8, // INR
        image: '/images/product/kitkat.png',
        weight: "45g"
    },
    {
        name: "Bingo Mad Angles Masala Magic",
        originalPrice: 20, // INR
        discountedPrice: 18, // INR
        image: '/images/product/bingo.png',
        weight: "70g"
    },
    
  ];
  
  const beverages = [
    {
      name: "Monster Energy Drink",
      originalPrice: 50,
      discountedPrice: 45,
      image: '/images/product/Monster.png',
      weight: "200ml"
    },
    {
      name: "Coke Classic",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/CokeClassic.png',
      weight: "200ml"
    },
    {
      name: "Cold Drinks Pack of 3",
      originalPrice: 100,
      discountedPrice: 90,
      image: '/images/product/ColdDrinks.png',
      weight: "200ml"
    },
    {
      name: "Cold Drinks pack of 5",
      originalPrice: 30,
      discountedPrice: 25,
      image: '/images/product/cold5.png',
      weight: "200ml"
    },
    {
        name: "Cold Brew High Brew Coffee",
        originalPrice: 50,
        discountedPrice: 45,
        image: '/images/product/coldbrew.png',
        weight: "355ml"
    },
    {
        name: "Coke Bottle",
        originalPrice: 20,
        discountedPrice: 18,
        image: '/images/product/cokebottle.png',
        weight: "500ml"
    },
    {
        name: "Sprite Can",
        originalPrice: 20, // INR
        discountedPrice: 18, // INR
        image: '/images/product/sprite.png',
        weight: "330ml"
    },
    {
        name: "Sprite Bottle",
        originalPrice: 25, // INR
        discountedPrice: 22, // INR
        image: '/images/product/spritebottle.png',
        weight: "600ml"
    }
  ];

export default function Store(){
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (quantity, price, added) => {
        if(added==='increment') {
            setTotalQuantity(prevQuantity => prevQuantity + quantity);
            setTotalPrice(prevPrice => prevPrice + price);
        }
        else if (added==='decrement') {
            setTotalQuantity(prevQuantity => prevQuantity - quantity);
            setTotalPrice(prevPrice => prevPrice - price);
        }
        else {
            setTotalQuantity(prevQuantity => prevQuantity - added);
            setTotalPrice(prevPrice => prevPrice - added*price);
        }
    };
    
    return (
        <div className="Store">
            <Navbar  totalQuantity={totalQuantity} totalPrice={totalPrice} on={true}/>
            <div className="Advertising">Advertising</div>
            <ProductsList products={snacks} category="Snacks & Munchies" addToCart={addToCart}/>
            <ProductsList products={beverages} category="Beverages" addToCart={addToCart}/>
        </div>
    )
}