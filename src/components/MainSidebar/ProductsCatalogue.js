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
  brands,
  subcategories,
  searchQuery,
}) => {
  const [productsData, setProductsData] = useState([]);
  const [imagepath, setImagePath] = useState("");
  const [error, setError] = useState(false);
//  const mainImagePath = imagePath; 
  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        subcategories?.forEach(subcategory => params.append('subcategory_name[]', subcategory));
        brands?.forEach(brand => params.append('brand_name[]', brand));
        if (searchQuery) {
          params.append('product_name', searchQuery);
        }

        const response = await axios.post(`${BASE_URL}/product-filter`, params);
        setProductsData(response?.data?.posts?.data);
        setImagePath(response?.data?.imagepath);
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
  }, [subcategories, brands, searchQuery]);

  if (error) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div>
          <Image className="w-[150px] mx-auto mt-6" src={somethingWrong} alt="Something went wrong" />
          <h2 className="font-bold text-[22px]">Something went wrong!!</h2>
        </div>
      </div>
    );
  }

  if (!productsData.length) {
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
          {productsData.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
                imagepath={imagepath} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {productsData.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
                imagePath={imagePath} 
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsCatalogue;
