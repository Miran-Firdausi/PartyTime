// Seller.js
"use client"
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SellerProductsList from '@/components/seller/SellerProductsList';
import styles from '@/styles/seller.module.css';
import ProductForm from '@/components/seller/ProductForm'; 

const Seller = ({ seller = "SellerLoginName" }) => {
    const [products, setProducts] = useState([
        {
            name: "Lays Classic Family Size",
            originalPrice: 30,
            discountedPrice: 25,
            image: '/images/product/Lays.png',
            weight: "200g",
            quantity: 5,
            category: "Chips"
        },
        {
            name: "Cheetos Firindan",
            originalPrice: 35,
            discountedPrice: 33,
            image: '/images/product/Cheetos.png',
            weight: "200g",
            quantity: 5,
            category: "Chips"
        },
        {
            name: "Oreo Biscuit",
            originalPrice: 35,
            discountedPrice: 33,
            image: '/images/product/Oreo.png',
            weight: "200g",
            quantity: 5,
            category: "Cold Drinks"
        }
    ]);

    const [formData, setFormData] = useState({
        name: '',
        originalPrice: '',
        discountedPrice: '',
        image: '',
        weight: '',
        quantity: '',
        category: ''
    });

    const [showForm, setShowForm] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setFormData(prevState => ({
                ...prevState,
                image: reader.result
            }));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts(prevProducts => [...(prevProducts || []), { ...formData, category: formData.category }]);
        setFormData({
            name: '',
            originalPrice: '',
            discountedPrice: '',
            image: '',
            weight: '',
            quantity: '',
            category: ''
        });
        setShowForm(false);
    };

    const totalSales = 2060;
    const averageRating = 4.5;

    return (
        <div className={styles.main}>
            <h2 className={styles.marginMe}>Hello {seller}, </h2>

            <div>  
                <h1 className={styles.marginMe}>Analytics</h1>  
                <div className={styles.analytics}> 
                    <div className={styles.graph}>
                        <img src='/images/graph.png'/>
                    </div>
                    <div className={styles.metric}>
                        <div>
                            <h3>Total Sales</h3>
                            <p>₹{totalSales}</p>
                        </div>

                        <div>
                        <h3>Average Rating</h3>
                        <p>{averageRating}</p>
                        </div>
                        </div>
                </div>
            </div>
            <div>
                <div className={styles.productTitle}>
                    <h1>Products</h1>
                    <button className={styles.sellerProductAdd} onClick={() => setShowForm(true)}> Add </button>
                    {showForm && (
                        <ProductForm
                            formData={formData}
                            handleInputChange={handleInputChange}
                            handleImageUpload={handleImageUpload}
                            handleSubmit={handleSubmit}
                            setShowForm={setShowForm}
                        />
                    )}
                </div>
                <SellerProductsList category='Chips' products={products} setProducts={setProducts} />
                <SellerProductsList category='Biscuits' products={products} setProducts={setProducts} />
                <SellerProductsList category='Cold Drinks' products={products} setProducts={setProducts} />
                {/* Add more SellerProductsList components with different categories as needed */}
            </div>
        </div>
    );
}

export default Seller;
