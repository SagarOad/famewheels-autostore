import React, { useState } from "react";
import Image from "next/image";

const ProductImageSlide = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectImage = (index) => {
    setSelectedImageIndex(index);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full">
      <div className="relative">
        <img
          fill={true}
          src={images[selectedImageIndex].original}
          alt="Product"
          className="w-full h-[380px] object-contain"
        />
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={prevImage}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
          onClick={nextImage}
        >
          &gt;
        </button>
      </div>
      <div className="flex justify-start mt-4">
        {images.map((image, index) => (
          <img
            fill={true}
            key={index}
            src={image.thumbnail}
            alt={`Thumbnail ${index}`}
            className={`w-16 h-16 object-cover mx-2 border ${
              index === selectedImageIndex
                ? "border-gray-800"
                : "border-gray-200"
            } cursor-pointer`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageSlide;
