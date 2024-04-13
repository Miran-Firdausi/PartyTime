"use client"
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/product/ProductsList";
import { useCart } from '@/contextapi/CartContext';

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
  const { cart } = useCart();
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
    
    return (
        <div className="Store">
            <Navbar  totalQuantity={totalQuantity} totalPrice={totalPrice} on={true}/>
            <div className="Advertising">Advertising</div>
            <ProductsList products={snacks} category="Snacks & Munchies"/>
            <ProductsList products={beverages} category="Beverages"/>
        </div>
    )
}