import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AuthForm.css'; 

const Login = () => {
  const [usernameEmail, setUsernameEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleUsernameEmailChange = (event) => {
    setUsernameEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const storedUser = JSON.parse(localStorage.getItem('user'));

    
    if (storedUser && (storedUser.username === usernameEmail || storedUser.email === usernameEmail) && storedUser.password === password) {
      console.log('Login successful!', storedUser);
      setErrorMessage('');
      
      navigate('/');
    } else {
      setErrorMessage('Invalid username/email or password.');
    }

    
    setPassword('');
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username or Email:</label>
          <input
            type="text"
            value={usernameEmail}
            onChange={handleUsernameEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Login;
