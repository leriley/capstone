import React, { useState, useEffect } from 'react';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/Gallery';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await customFetch.get('/images');
        setImages(response.data.images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
      setIsLoading(false);
    };

    fetchImages();
  }, []);

  if (isLoading) {
    return <div className="loading"><div className="load"></div></div>;
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
      <div className="image-wrap">
      <div className="gallery">
      {images.map((image) => (
        <div key={image._id} className="image-item">
          <Link to={`images/${image._id}`}>
          <img src={image.filePath} alt={image.title}  />
          </Link>
       {/*<h4>{image.title}</h4>
          <p>{image.description}</p>*/}
        </div>
      ))}
    </div>
      </div>
      </div>
    </Wrapper>
  );
};

export default Gallery;
