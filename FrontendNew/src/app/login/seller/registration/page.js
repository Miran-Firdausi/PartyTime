'use client'
import React, { useState } from 'react';

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
      console.log(data); // Assuming the backend returns some data
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Seller Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>First Name:</label>
          <input 
            type="text" 
            name="first_name" 
            value={formData.first_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input 
            type="text" 
            name="last_name" 
            value={formData.last_name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Phone:</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Aadhar Number:</label>
          <input 
            type="text" 
            name="aadhar_number" 
            value={formData.aadhar_number} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>License Number:</label>
          <input 
            type="text" 
            name="license_number" 
            value={formData.license_number} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <label>Seller UPI:</label>
          <input 
            type="text" 
            name="seller_upi" 
            value={formData.seller_upi} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellerRegistration;
