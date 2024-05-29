import React from "react";

const BrandModal = ({ isOpen, onClose }) => {
  // Generate 100 dummy brand options
  const brands = Array.from({ length: 100 }, (_, index) => `Brand ${index + 1}`);

  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Brands</h2>
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
            <li>Option 6</li>
            {/* {brands.map((brand, index) => (
              <li key={index}>{brand}</li>
            ))} */}
          </ul>
        </div>
      </div>
    )
  );
};

export default BrandModal;
