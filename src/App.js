
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: {
          query: query,
          client_id: 'cfZZXHaqYb-WjVu4suypZS00XbMGZId0GyD02D8S49o',
        },
      });
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className="App">
      <h1>Image Search App</h1>
      <SearchBar onSubmit={handleSearch} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
