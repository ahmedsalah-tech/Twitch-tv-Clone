import React, { useState } from 'react';
import { Register } from './Register';
import { Login } from './Login';

import './authPage.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleAuthLoginToggle = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <div className="auth-container">
      {isLogin ? (
        <Login switchAuthHandler={handleAuthLoginToggle} />
      ) : (
        <Register switchAuthHandler={handleAuthLoginToggle} />
      )}
    </div>
  );
};
