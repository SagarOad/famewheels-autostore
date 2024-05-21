"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import somethingWrong from "../../assets/cross.png";
import Image from "next/image";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductsCatalogue = ({ viewMode, addToCart, filters, searchQuery }) => {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product-list-public`, {
          params: { ...filters, searchQuery },
        });
        setProductsData(response.data);
        clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    // Set a timeout to show an error message after 5 seconds
    timeoutId = setTimeout(() => {
      setError(true);
    }, 5000);

    fetchData();

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [filters, searchQuery]);

  if (error) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div>
          <Image className=" w-[150px] mx-auto mt-6" src={somethingWrong} />
          <h2 className=" font-bold text-[22px]">Something went wrong!!</h2>
        </div>
      </div>
    );
  }

  if (!productsData) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        {/* Loading animation */}
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {viewMode === "grid" ? (
        <div className="flex flex-wrap">
          {productsData.products?.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {productsData.products?.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsCatalogue;