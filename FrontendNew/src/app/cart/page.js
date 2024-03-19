// components/Cart.js
import React from 'react';
import CartItem from '@/components/cart/CartItem';
import styles from '@/styles/cart.module.css';
import Navbar from '@/components/Navbar';


const cartItems = [
  {
    name: "Lays Classic Family Size",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Lays.png',
    weight: "200g",
    description: "Classic potato chips loved by everyone.",
    quantity: 4
  },
  {
    name: "Oreo Mega Pack",
    originalPrice: 30,
    discountedPrice: 25,
    image: '/images/product/Oreo.png',
    weight: "200g",
    description: "Delicious Baked Chocolate Cookies",
    quantity: 2
  },
  {
    name: "Cheetos Firindan",
    originalPrice: 35,
    discountedPrice: 33,
    image: '/images/product/Cheetos.png',
    weight: "200g",
    description: "Spicy and crunchy Cheetos snacks.",
    quantity: 8
  },
  // Add descriptions for other products as needed
];


const Cart = () => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);

  return (
    <div>
      <Navbar totalQuantity={0} totalPrice={0} on={true}/>
      <div className={styles.cartContainer}>
        <div className={styles.cartItemsContainer}>
          <h2 className={styles.cartHeader}>Your Cart</h2>
          <div className={styles.cartItems}>
            {cartItems.map((item, index) => (
              <CartItem key={index} product={item} />
            ))}
          </div>
        </div>
        <div className={styles.summaryContainer}>
          <h2 className={styles.summaryHeader}>Cart Summary</h2>
          <div className={styles.summaryDetails}>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Quantity: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
            <p>Total Price: ₹{totalPrice}</p>
            {/* Add more details as needed */}
            <button className={styles.proceedButton}>Proceed to Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;