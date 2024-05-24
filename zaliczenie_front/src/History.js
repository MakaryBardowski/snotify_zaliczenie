import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './History.css';

function App() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch album data from the endpoint
    const fetchHistory = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/utility/eventHistory');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHistory(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);


  if (loading) {
    return (
      <main className="main-content">
        <div>Loading...</div>
      </main>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <img id="logo" src={logo} draggable='false' />
        </header>



        <main className="main-content">
          {history.map(historyEvent => (
            <div key={historyEvent.id} class="album">
              <p>Nazwa Użytkownika: <span class="redTextSpan">{historyEvent.name}</span></p>
              <p>data: <span class="redTextSpan">{historyEvent.loginDate}</span></p>
            </div>
          ))}
        </main>


        <footer className="footer">Zaliczenie Makary Bardowski 215 IC </footer>
      </div>
    </div>
  );
}

export default App;
