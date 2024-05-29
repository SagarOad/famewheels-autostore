import React from "react";

const CategoryModal = ({ isOpen, onClose }) => {
  // Generate 100 dummy category options
  const categories = Array.from({ length: 100 }, (_, index) => `Category ${index + 1}`);

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Categories</h2>
          <ul>
            <li>Option one </li>
            <li>option Two </li>
            <li>Option Three </li>
            <li>Option Four </li>
            {/* {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))} */}
          </ul>
        </div>
      </div>
    )
  );
};

export default CategoryModal;
