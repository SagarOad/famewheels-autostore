import React, { useState } from "react";

const ProductImageSlide = ({ images = [], discountPercentage }) => {
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

  if (images.length === 0) {
    return <p>No images available</p>;
  }

  return (
    <div className="w-full mb-32">
      <div className="flex">
        <div className="flex flex-col justify-start mt-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.thumbnail}
              alt={`Thumbnail ${index}`}
              className={`w-24 h-24 object-cover mx-2 border ${
                index === selectedImageIndex
                  ? "border-gray-800"
                  : "border-gray-200"
              } cursor-pointer`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>

        <div className="relative flex-grow flex justify-center items-center">
          {discountPercentage && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white py-1 px-3 rounded-bl-lg rounded-tr-lg">
              <span>{discountPercentage}% OFF</span>
            </div>
          )}
          <img
            src={images[selectedImageIndex].original}
            alt="Product"
            className="w-[80%] ml-auto mr-auto object-cover"
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={prevImage}
            aria-label="Previous Image"
          >
            &lt;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
            onClick={nextImage}
            aria-label="Next Image"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductImageSlide;
