
'use client'
import React,{ useState } from 'react';
import styles from '@/styles/login.module.css'; // Import the CSS file

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Initial state is login

  const toggleAuthMode = () => {
    setIsLogin(prevState => !prevState); // Toggle between login and signup
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {!isLogin && <input type="password" placeholder="Confirm Password" />}
        <button className={styles.loginButton}>{isLogin ? 'Login' : 'Signup'}</button>
        {isLogin && <p className={styles.forgotPassword}>Forgot Username/Password?</p>}
        <div className={styles.loginOptions}>
          <p>{isLogin ? 'Or login with:' : 'Or signup with:'}</p>
          <div className={styles.socialButtons}>
            <button className={styles.googleButton}>
              <img src="/images/icons8-google-96.png" alt="Google Logo" className={styles.logo} />
              {isLogin ? 'Sign in with Google' : 'Signup with Google'}
            </button>
          </div>
          <p className={styles.memberOption} onClick={toggleAuthMode}>
            {isLogin ? 'New member? Signup' : 'Already a member? Login'}
          </p>
          {/* You can add more options here */}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
