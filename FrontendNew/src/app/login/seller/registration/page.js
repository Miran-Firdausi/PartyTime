'use client'
'use client'
import React, { useState } from 'react';
import styles from '@/styles/login/SellerRegistration.module.css'; // Importing CSS module

const SellerRegistration = () => {
  const [formData, setFormData] = useState({
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    phone: '',
    aadhar_number: '',
    license_number: '',
    seller_upi: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/seller/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        setSuccessMessage('Registration successful!');
        setErrorMessage('');
      } else {
        // Handle different error scenarios based on the error object returned
        if (data.error?.phone) {
          setErrorMessage('User with this phone number already exists.');
        } else if (data.error?.aadhar_number) {
          setErrorMessage('Aadhar number is required.');
        } else if (data.error?.license_number) {
          setErrorMessage('License number is required.');
        } else if (data.error?.user) {
          setErrorMessage('User is required.');
        } else {
          setErrorMessage('An error occurred during registration.');
        }
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div className={styles.pageContainer}>
      <div className={styles.registrationContainer}>
        <h2>Seller Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>First Name:</label>
            <input 
              type="text" 
              name="first_name" 
              value={formData.first_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Last Name:</label>
            <input 
              type="text" 
              name="last_name" 
              value={formData.last_name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password:</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Aadhar Number:</label>
            <input 
              type="text" 
              name="aadhar_number" 
              value={formData.aadhar_number} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>License Number:</label>
            <input 
              type="text" 
              name="license_number" 
              value={formData.license_number} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label>Seller UPI:</label>
            <input 
              type="text" 
              name="seller_upi" 
              value={formData.seller_upi} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button className={styles.btnSubmit} type="submit">Submit</button>
          {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default SellerRegistration;
