"use client"
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import AutoPlaceFill from './PlaceAutoFill';
import LocationPop from './LocationPop';

const Navbar = (props) => {
  const [isLocationMenuOpen, setIsLocationMenuOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [latitude, setLatitude] = useState(); // Default latitude
  const [longitude, setLongitude] = useState(); // Default longitude

  function toggleLocationMenu() {
    setIsLocationMenuOpen((prevState) => !prevState);
  }

  function handleSelectAddress(address) {
    setSelectedAddress(address);
    setIsLocationMenuOpen(false);
  }

  function getLocn() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
    setSelectedAddress('');
    setIsLocationMenuOpen(false);
  }

  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    setLatitude(lat);
    setLongitude(lon);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-left']}>
        <h1>
          <Link className={styles.logo} href="/">
            Party Time
          </Link>
        </h1>
        <div className={styles['navbar-location']}>
          <FaMapMarkerAlt />
          <span onClick={toggleLocationMenu}>Set Location</span>
          {isLocationMenuOpen && (
            <div className={styles.locationMenu}>
              {selectedAddress ? (
                <p className={styles.currentAddress}>
                  <FaMapMarkerAlt /> {selectedAddress}
                </p>
              ) : (
                latitude && <p className={styles.currentAddress}><FaMapMarkerAlt /> <LocationPop latitude={latitude} longitude={longitude}/></p>
              )}
              <h3>Enter Location</h3>
              <div className={styles.locationOptions}>
                <button onClick={getLocn}>Use Current Location</button>
                <AutoPlaceFill onSelectAddress={handleSelectAddress} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles['navbar-search']}>
        <input type="text" placeholder="Search for party food items..." />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className={styles['navbar-links']}>
        <Link className={styles.navlink} href="/about">
          About
        </Link>
        <Link className={styles.navlink} href="/store">
          Store
        </Link>
        <Link className={styles.Login} href="/login">
          <img src="/icons/icons8-user-profile-96.png" alt="Login" />
          Login
        </Link>
        {props.on && (
          <Link className={styles.cart} href="/cart">
            <img className={styles.cartImage} src="/icons/icons8-cart-96.png" alt="Cart" />
            {props.totalQuantity === 0 || props.totalPrice === 0 ? (
              <>
                <span>My Cart</span>
              </>
            ) : (
              <div className={styles.qty}>
                <div>{props.totalQuantity} Items</div>
                <div>₹{props.totalPrice}</div>
              </div>
            )}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;