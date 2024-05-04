"use client"
import React, { useState, useEffect } from 'react';
import ProductsList from '@/components/product/ProductsList';
import { useCart } from '@/contextapi/CartContext';

export default function Store() {
  const { cart } = useCart();
  const [products, setProducts] = useState([]);
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
  const categories = Array.from(new Set(products.map(product => product.category)));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/products/');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="Store">
      <div className="Advertising">Advertising</div>
      {categories.map(category => (
        <ProductsList key={category} products={products.filter(product => product.category === category)} category={category} />
      ))}
    </div>
  );
}
