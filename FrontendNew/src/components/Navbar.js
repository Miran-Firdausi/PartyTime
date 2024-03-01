import React from 'react';
import { FaSearch, FaStore, FaInfoCircle, FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import styles from '@/styles/navbar.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-left']}>
        {/* <Image src="/images/logo.png" alt="Logo" width={100} height={50} /> */}
        <h1 className={styles.logo}>Party Time</h1>
        <div className={styles['navbar-location']}>
          <FaMapMarkerAlt />
          <span>Set Location</span>
        </div>
      </div>
      <div className={styles['navbar-search']}>
        <input type="text" placeholder="Search for party food items..." />
        <button><FaSearch /></button>
      </div>
      <div className={styles['navbar-links']}>
        <Link href="/about">About</Link>
        <Link href="/store">Store</Link>
        <Link className={styles.Login} href="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
