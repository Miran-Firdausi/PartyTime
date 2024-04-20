"use client"
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import SellerProductsList from '@/components/seller/SellerProductsList';
import styles from '@/styles/seller.module.css';
import ProductForm from '@/components/seller/ProductForm';

const Seller = ({ seller = "SellerLoginName" }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/getProducts/');
                const data = await response.json();
                console.log(data);
                setProducts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        originalPrice: '',
        discountedPrice: '',
        image: '',
        weight: '',
        quantity: ''
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

const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('http://127.0.0.1:8000/api/add-product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to add product');
        }

        // Assuming your backend returns the added product as response data
        const addedProduct = await response.json();

        // Add the new product to the products array
        setProducts(prevProducts => [...prevProducts, addedProduct]);

        // Clear the form fields
        setFormData({
            name: '',
            originalPrice: '',
            discountedPrice: '',
            image: '',
            weight: '',
            quantity: ''
        });

        // Hide the form after submission
        setShowForm(false);
    } catch (error) {
        console.error('Error adding product:', error);
    }
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
                <SellerProductsList category='Your Products' products={products} setProducts={setProducts} />
            </div>
        </div>
    );
}

export default Seller;
