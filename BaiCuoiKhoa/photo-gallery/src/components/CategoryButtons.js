import React from 'react';

const categories = ["Nature", "Technology", "People", "Animals"];

const CategoryButtons = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
