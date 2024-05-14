"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductsCatalogue = ({ viewMode, addToCart, filters }) => {
  const [productsData, setProductsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/product-list-public`, {
          params: filters,
        });
        setProductsData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filters]);

  if (!productsData) {
    return (
      <div className=" h-[100%] w-full flex justify-center items-center">
        {/* Loading animation */}
        <div class="loader"></div>
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
              />{" "}
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {productsData.products?.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
              />{" "}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsCatalogue;
