import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import SearchBar from './SearchBar';
import CategoryButtons from './CategoryButtons';
import './Gallery.css';

const initialImages = [
  { id: 1, url: 'url1', title: 'Sunset', category: 'Nature' },
  { id: 2, url: 'url2', title: 'Computer', category: 'Technology' },
  // Add more images
];

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredImages = initialImages.filter((image) =>
    (selectedCategory ? image.category === selectedCategory : true) &&
    (searchTerm ? image.title.toLowerCase().includes(searchTerm.toLowerCase()) : true)
  );

  return (
    <div className="gallery">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryButtons selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div className="image-grid">
        {filteredImages.map((image) => (
          <ImageComponent key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
