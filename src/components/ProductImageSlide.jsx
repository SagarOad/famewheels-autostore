import React, { useState } from "react";
import Image from "next/image";

const ProductImageSlide = ({ images, discountPercentage }) => {
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
      <div className=" flex">
        <div className="flex flex-col justify-start mt-4">
          {images.map((image, index) => (
            <img
              fill={true}
              key={index}
              src={image.thumbnail}
              alt={`Thumbnail ${index}`}
              className={` w-24 h-24 object-cover mx-2 border ${
                index === selectedImageIndex
                  ? "border-gray-800"
                  : "border-gray-200"
              } cursor-pointer`}
              onClick={() => selectImage(index)}
            />
          ))}
        </div>

        <div className="relative">
        <div class="discount-label blue absolute">
          {" "}
          <span>{discountPercentage}% OFF</span>{" "}
        </div>
          <img
            fill={true}
            src={images[selectedImageIndex].original}
            alt="Product"
            className="w-full h-[580px] object-cover"
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
      </div>
    </div>
  );
};

export default ProductImageSlide;
