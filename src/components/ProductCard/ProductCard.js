"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import defaultImage from "../../assets/bugatti.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductCard = ({ product, viewMode, addToCart }) => {
  const [userData, setUserData] = useState("");

  const allUserData = Cookies.get("userData");
  const cartToken = Cookies.get("user_token");

  useEffect(() => {
    if (allUserData) {
      setUserData(JSON.parse(allUserData));
    }
    console.log(userData, "Data token test");
  }, []);

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
  return (
    <>
      {viewMode === "grid" ? (
        <div className="w-full">
          <div className="group flex max-w-xs w-[280px] h-[400px] flex-col overflow-hidden rounded-lg border border-[#cccccc] bg-white shadow-lg">
            <a
              className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <Image
                className="peer absolute top-0 w-full mx-auto object-cover"
                src={
                  product.imagepath && product.product_cover
                    ? `${product.imagepath}/${product.product_cover}`
                    : defaultImage
                }
                alt="product image"
              />
              <div className="absolute bottom-0 mb-4 flex space-x-4 w-full justify-center">
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
                <div className="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
              </div>
              <svg
                className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
                />
              </svg>
              <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-[12px] font-medium text-white">
                {product.product_discount} OFF
              </span>
            </a>
            <div className="mt-4 px-4 pb-5">
              <Link href={`/ProductPage/${product.product_slug}`}>
                <h5 className="text-[16px] font-bold tracking-tight text-[#20409a]">
                  {product.product_title}
                </h5>
              </Link>
              <div className="mt-2 mb-2 flex items-center justify-between">
                <p>
                  <span className="text-xl font-bold text-slate-900">
                    PKR {product.product_actual_price}
                  </span>
                </p>
              </div>
              <button className="flex items-center justify-center w-full border-2 mb-2 border-[#b80505] rounded-md bg-text bg-white px-5 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-300">
                Buy Now
              </button>
              <button
                className="flex items-center w-full justify-center rounded-md bg-[#b80505] px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                onClick={handleAddToCart}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full border relative border-[#cccccc] bg-white shadow-lg rounded-lg mb-4 p-4">
          <div className="flex w-full">
            <div>
              <Image
                className="w-[320px] h-[180px] object-cover mr-4"
                src={
                  product.imagepath && product.product_cover
                    ? `${product.imagepath}/${product.product_cover}`
                    : defaultImage
                }
                alt="product image"
              />
            </div>
            <div className="w-full flex flex-col justify-between px-3 py-2">
              <div className="flex justify-between items-start">
                <Link href={`/ProductPage/${product.product_slug}`}>
                  <div className="w-[70%]">
                    <h5 className="text-[21px] font-[600] text-[#20409a] mb-1">
                      {product.product_title}
                    </h5>
                    <p className="text-[16px] text-gray-500">
                      {product.product_description}
                    </p>
                  </div>
                </Link>
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-12 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[22px] text-slate-900 font-[600]">
                    PKR {product.product_actual_price}
                  </p>
                </div>
                <div>
                  <button
                    className="border-2 border-[#b80505] rounded-md px-4 py-2 text-sm font-medium mr-2"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                  <button className="border-2 border-[#b80505] bg-[#b80505] text-white rounded-md px-4 py-2 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm10 10a1 1 0 01-2 0 1 1 0 012 0zm-8-2a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM8 7a1 1 0 012 0v6a1 1 0 11-2 0V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <span className="text-[12px] absolute top-0 left-0 bg-white flex justify-center items-center font-medium text-[#b80505] border border-[#b80505] rounded-md px-3 py-1 mr-2">
            {product.product_discount} OFF
          </span>
        </div>
      )}
    </>
  );
};

export default ProductCard;
