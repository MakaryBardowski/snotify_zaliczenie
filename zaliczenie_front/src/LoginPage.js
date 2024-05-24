import React, { useState } from 'react';
import logo from './logo.png';
import './LoginPage.css';

import { useNavigate } from 'react-router-dom';

const getSignature = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8080/utility/author'); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.text();
    alert(data)
  } catch (error) {
    console.log(error);
  } 
};

function App() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
      
    const data = {
      name: username
    };

  
    fetch('http://127.0.0.1:8080/utility/saveLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {} else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      console.log('Login successful:', data);
      navigate('/albums');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  const goToHistory = (e) => {
    e.preventDefault();
    navigate('/history');
  };
  
  const goToDetails = (e) => {
    e.preventDefault();
    navigate('/details');
  };

  return (
  
    <div className="App">
    <div className="container">
      <header className="header">
      <img id="logo" src={logo} draggable='false' />
      </header>



      <main className="main-content"><div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Nazwa użytkownika:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Hasło:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" title="POST wysyłający login - w bazie danych zapisuje sie event zalogowania">Login</button>
          <button type="button" className="infoButton" onClick={goToDetails}>O projekcie</button>
          <button type="button" className="infoButton" onClick={getSignature}>Kliknij aby uzyskać informacje o autorze metodą GET</button>
          <button type="button" className="infoButton" onClick={goToHistory}>Pokaż informacje o historii logowania</button>
        </form>
      </div>
      </main>


      <footer className="footer"></footer>
    </div>
    </div>
  );
}

export default App;
