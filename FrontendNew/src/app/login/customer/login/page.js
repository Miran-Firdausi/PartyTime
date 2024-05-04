'use client'
import React, { useState } from 'react';

const CustomerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false); // State variable to track login success

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
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // Assuming the backend returns some data

      // Assuming successful login, store tokens in local storage
      localStorage.setItem('accessToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);

      // Set login success state to true
      setLoginSuccess(true);

      // Redirect or perform any other action after successful login
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {loginSuccess && <p>Login successful!</p>} {/* Conditional rendering for success message */}
    </div>
  );
};

export default CustomerLogin;
