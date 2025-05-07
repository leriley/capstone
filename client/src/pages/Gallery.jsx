import React, { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Gallery';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState([])
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setIsLoading(true)
        const response = await customFetch.get('/images/user-images');
        setImages(response.data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setIsLoading(false)
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return <div className="loading"></div>
  }

  if (images.length === 0){
        return(
        <div className="gallery">
          <p>Looks like no images have been uploaded so far. Click the upload button to get started!</p>
        </div>          
        )
  }

  return (
    <Wrapper>
      <div className="galleryWrap">
      <h2>Your Images</h2>
        <div className="image-wrap">
          <div className="gallery">
              {images.map((image) => (
                <div key={image._id} className="image-item">
                <Link to={`/dashboard/images/${image._id}`}>
                  <img src={image.filePath} alt={image.title}  />
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Gallery;
