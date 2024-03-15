"use client"
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/product/ProductsList";

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
            <Navbar  totalQuantity={totalQuantity} totalPrice={totalPrice}/>
            <div className="Advertising">Advertising</div>
            <ProductsList title="Snacks & Munchies" addToCart={addToCart}/>
            <ProductsList title="Dairy, Bread & Eggs" addToCart={addToCart}/>
        </div>
    )
}