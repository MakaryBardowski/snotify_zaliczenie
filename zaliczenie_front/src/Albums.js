import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './Albums.css';
import { useNavigate } from 'react-router-dom';

function App() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch album data from the endpoint
    const fetchAlbums = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/albums/all');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleAlbumClick = (album) => {
    alert(`Album: ${album.title}\nUser ID: ${album.userId}\nAlbum ID: ${album.id}`);
    navigate("/login")
  };

  const refuseImageAccess = (event) => {
    event.preventDefault();
    alert("Ten album jest chroniony prawem autorskim. Informacja o usiłowaniu popełnienia przestępstwa została przekazana do prokuratury.");
    return false;
  }


  if (loading) {
    return (
      <main className="main-content">
        <div>Laduje</div>
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
          {albums.map(album => (
            <div key={album.id} className="album"
              onClick={() => handleAlbumClick(album)}
              onSelectStart={refuseImageAccess}
              onContextMenu={refuseImageAccess}
            >
              <img src={album.imagePath} alt={`Album ${album.title}`} draggable = 'false'/>


              <p>{album.title}</p>
              <p>Album ID: {album.id}</p>
            </div>
          ))}
        </main>


        <footer className="footer">Zaliczenie Makary Bardowski 215 IC </footer>
      </div>
    </div>
  );
}

export default App;
