"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import somethingWrong from "../assets/cross.png";
import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = ({
  BASE_URL = "https://portal.famewheels.com",
  viewMode,
}) => {
  const [productsData, setProductsData] = useState([]);
  const [imagePath, setImagePath] = useState("");
  const [error, setError] = useState(false);


  const handleAddToCart = async () => {
    const formData = new FormData();

    const UserToken = localStorage.getItem("token");

    formData.append("product_id", product.product_id);
    formData.append("product_name", product.product_title);
    formData.append("product_quantity", 1);
    formData.append("product_price", product.product_actual_price);

    formData.append("user_id", UserToken ? userData?.id : cartToken);

    try {
      const response = await axios.post(`${BASE_URL}/add-to-cart`, formData, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`,
        },
      });
      console.log("Added to cart:", response.data);
    } catch (error) {
      toast.error("Error adding to cart");
      console.error("Error adding to cart:", error);
    }

    toast.success("Added to cart successfully");
  };

  useEffect(() => {
    let timeoutId;
    const fetchData = async () => {
      try {
        const response = await axios.post(`${BASE_URL}/product-filter`);
        console.log("API Response:", response?.data);

        const productsData = response?.data?.posts?.data;
        if (Array.isArray(productsData)) {
          setProductsData(productsData);
          console.log("Products data fetched:", productsData);
        } else {
          console.error(
            "Expected an array for products data but got:",
            productsData
          );
          setProductsData([]);
        }
        setImagePath(response?.data?.imagepath);
        clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        clearTimeout(timeoutId);
      }
    };

    timeoutId = setTimeout(() => {
      setError(true);
    }, 5000);

    fetchData();

    return () => clearTimeout(timeoutId);
  }, [BASE_URL]);

  if (error) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div>
          <Image
            className="w-[150px] mx-auto mt-6"
            src={somethingWrong}
            alt="Something went wrong"
          />
          <h2 className="font-bold text-[22px]">Something went wrong!!</h2>
        </div>
      </div>
    );
  }

  if (!Array.isArray(productsData) || !productsData.length) {
    console.log("Data not available, productsData:", productsData);
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="flex justify-center md:justify-start flex-wrap">
      {productsData.map((product, index) => (
        <div
          key={index}
          className="m-2 sm:w-[250px] max-w-xs overflow-hidden rounded-lg border-2 bg-white shadow-xl group relative"
        >
          <a href="#">
            <Image
              src={
                imagePath && product.product_cover
                  ? `${imagePath}/${product.product_token}/${product.product_cover}`
                  : "/path_to_default_image.jpg"
              }
              width={1000}
              height={1000}
              className="h-60 rounded-t-lg object-cover"
              alt="product image"
            />
          </a>
          <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
            Sale
          </span>
          <div className="mt-4 px-5 pb-5 overflow-hidden">
            <a href="#">
              <Link href={`/ProductPage/${product.product_slug}`}>
                <h5 className="text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis my-2 tracking-tight text-slate-900">
                  {product.product_title}
                </h5>
              </Link>
            </a>
            <div>
              <p className="mb-2">
                <span className="text-[18px] font-bold text-slate-900">
                  PKR {product.product_discounted_price}
                </span>
                <span className="text-sm text-slate-900 line-through">
                  {product.product_actual_price}
                </span>
              </p>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  onClick={handleAddToCart}
                  className="mx-2 rounded-md bg-[#b80505] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Add to cart
                </button>
                <Link href={`/ProductPage/${product.product_slug}`}>
                  <button className="mx-2 rounded-md bg-[#b80505] px-10 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    View
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
