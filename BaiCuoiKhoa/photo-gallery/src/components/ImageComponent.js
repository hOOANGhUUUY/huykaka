import React from 'react';
import './ImageComponent.css';

const ImageComponent = ({ image }) => {
  return (
    <div className="image-component">
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
    </div>
  );
};

export default ImageComponent;
