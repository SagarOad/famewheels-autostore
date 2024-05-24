"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import somethingWrong from "../../assets/cross.png";
import Image from "next/image";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductsCatalogue = ({
  viewMode,
  addToCart,
  subcategories,
  searchQuery,
}) => {
  const [productsData, setProductsData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      try {
        // Convert subcategories array to subcategories[] format
        const params = new URLSearchParams();
        subcategories.forEach(subcategory => params.append('subcategories[]', subcategory));
        if (searchQuery) {
          params.append('searchQuery', searchQuery);
        }

        const response = await axios.get(`${BASE_URL}/product-list-public`, {
          params
        });
        setProductsData(response.data);
        clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    timeoutId = setTimeout(() => {
      setError(true);
    }, 5000);

    fetchData();

    return () => clearTimeout(timeoutId);
  }, [subcategories, searchQuery]);

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
