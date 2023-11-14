import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // For simplicity, a basic authentication check is performed here.
    // In a real application, you would perform more secure authentication.
    if (userName.trim() !== '') {
      localStorage.setItem('user', userName);
      // Redirect to the favorites page after successful login
      navigate('/favorites');
    } else {
      alert('Please enter your name.');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>
        Your Name:
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
