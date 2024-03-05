import React from 'react';
import styles from '@/styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles['footer-section']}>
          <h5>Section</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className={['footer-section']}>
          <h5>Section</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className={['footer-section']}>
          <h5>Section</h5>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>
        <div className={['footer-section']}>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <form className={['subscribe-form']}>
            <label htmlFor="newsletter1" className={['visually-hidden']}>Email address</label>
            <input id="newsletter1" type="text" placeholder="Email address" />
            <button className='subscribeButton' type="button">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container border-top py-4 my-4">
        <p>© 2024 Company, Inc. All rights reserved.</p>
        <ul className={['social-links']}>
          <li><a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use xlinkHref="#twitter"/></svg></a></li>
          <li><a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use xlinkHref="#instagram"/></svg></a></li>
          <li><a href="#"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><use xlinkHref="#facebook"/></svg></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;