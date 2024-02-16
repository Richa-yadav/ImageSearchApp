
import React from 'react';

const ImageList = ({ images }) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <div key={image.id} className="image-item">
          <img src={image.urls.small} alt={image.alt_description} />
          <div className="image-info">
            <p>{image.alt_description}</p>
            <a href={image.links.html} target="_blank" rel="noopener noreferrer">View on Unsplash</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
