import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoadingPage.css';
import Popup from './Popup';
import { getAuth } from 'firebase/auth';
import ImageLinksBar from './ImagelinksBar.js';
import { getFirestore, doc, setDoc, collection } from 'firebase/firestore';
import { firebaseConfig } from './firebase';

function LoadingPage() {
  const [query, setQuery] = useState('');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos/random', {
        params: {
          client_id: 'UU7M02b5M_SxvZo5rM3DuQkX4VaQgwez6A1i01gdVQw'
        }
      })
      .then((response) => {
        setBackgroundImage(response.data.urls.regular);
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setIsSearchClicked(true);
    axios
      .get(`https://pixabay.com/api/?key=38405739-8a67e2806a183058be6ff7778&q=${query}&image_type=photo`)
      .then((response) => {
        setImages(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleLinkClick = (event, term) => {
    event.preventDefault();
    setQuery(term);
    setLoading(true);
    setIsSearchClicked(true);
    axios
      .get(`https://pixabay.com/api/?key=38405739-8a67e2806a183058be6ff7778&q=${term}&image_type=photo`)
      .then((response) => {
        setImages(response.data.hits);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleGoToHomepage = () => {
    setImages([]);
    setIsSearchClicked(false);
    setQuery('');
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handlePopupClose = () => {
    setSelectedImage(null);
  };

  const handleDownloadClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank', 'noopener');
    const user = getAuth().currentUser;
    if (user) {
      setDoc(doc(getFirestore(), `users/${user.uid}/downloads`, { url }));
    }
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '100vh',
          backgroundSize: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <div className='AppBar'>
          <button onClick={handleGoToHomepage}>Homepage</button>
          <div>
            {getAuth().currentUser ? (
              <>
                  <button onClick={() => getAuth().signOut()}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate('/Login')}>Login</button>
                <button onClick={() => navigate('./CreateAccount')}>Create Account</button>
              </>
            )}
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className='SearchBar'>
            <input
              type='text'
              placeholder='Search for images'
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <button type='submit'>Search</button>
          </form>
        </div>
        {isSearchClicked && (
          <div>
            {loading && <div>Loading...</div>}
            {!loading && (
              <div className='SearchResults'>
                <div className='ImageLinksBarContainer'>
                  <ImageLinksBar handleLinkClick={handleLinkClick} />
                </div>
                <div className='image-grid'>
                  {images.map((image) => (
                    <div key={image.id} className='image-grid__item'>
                      <img src={image.webformatURL} alt={image.tags} onClick={() => handleImageClick(image)} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      {selectedImage && (
        <Popup
          image={selectedImage}
          onClose={handlePopupClose}
          onDownload={(event) => handleDownloadClick(event, selectedImage.largeImageURL)}
        />
      )}
    </div>
  );
}

export default LoadingPage;