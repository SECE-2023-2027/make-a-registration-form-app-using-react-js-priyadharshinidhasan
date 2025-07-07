// src/App.jsx
import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="container">
      <div className="left-panel">
        <h1>Welcome to Our Website</h1>
        <p>Discover top-tier services tailored just for you. Join us today to unlock exclusive features!</p>
      </div>

      <div className="right-panel">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form className="form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="text" placeholder="Username" required />}
          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p className="toggle" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default App;
