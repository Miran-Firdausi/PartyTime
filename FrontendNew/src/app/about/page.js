// AboutPage.js
import React from 'react';
import styles from '@/styles/about.module.css';
import Navbar from '@/components/Navbar';

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.aboutPage}>
      <h1>About PartyTime</h1>
      <p>In the contemporary retail landscape, a pressing challenge emerges from the imminent expiration of perishable goods, resulting in economic losses for shopkeepers and missed opportunities for consumers seeking discounted products. Simultaneously, the event planning sector encounters obstacles in efficiently procuring large quantities of supplies. Addressing this dual challenge, our proposed solution introduces an innovative e-commerce platform that seamlessly connects surplus perishable items nearing expiration with the demand for bulk orders for parties and events. This platform not only mitigates economic losses for shopkeepers but also offers event planners and hosts a dedicated space to conveniently purchase a wide array of supplies, including discounted perishable goods, party-related items, and non-perishable snacks. By providing a comprehensive solution for both challenges, our platform aims to reduce food waste, optimize party planning processes, and create a mutually beneficial ecosystem for shopkeepers and consumers alike.</p>
      
      <h2>Objective</h2>
      <ul>
        <li><strong>Bulk Ordering Platform:</strong> Develop an e-commerce platform that specializes in facilitating the bulk ordering of party supplies, offering a wide range of products at normal market prices.</li>
        <li><strong>Discounted Perishable Goods:</strong> Implement a system to showcase and sell perishable items at discounted rates, ensuring a cost-effective solution for users planning events and parties.</li>
        <li><strong>User-Friendly Interface:</strong> Design an intuitive and user-friendly interface that enables easy navigation for users searching for large quantities of products and discounted deals.</li>
        <li><strong>Supplier Engagement:</strong> Collaborate with suppliers and local businesses to ensure a consistent and diverse supply of products, both at regular prices and discounted rates for perishable items.</li>
        <li><strong>Logistics and Delivery Optimization:</strong> Establish a robust logistics system to handle the challenges of delivering bulk orders, providing users with flexible delivery options and reliable service.</li>
        <li><strong>Geolocation Integration:</strong> Integrate geolocation services to identify the user's location and display nearby shopkeepers with discounted products. Ensure real-time updates for accuracy.</li>
      </ul>
    </div>
    </div>
  );
};

export default AboutPage;
