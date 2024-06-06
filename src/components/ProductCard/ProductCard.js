"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import defaultImage from "../../assets/bugatti.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductCard = ({ product, viewMode, addToCart, imagepath }) => {
  const [userData, setUserData] = useState("");

  const allUserData = Cookies.get("userData");
  const cartToken = Cookies.get("user_token");
  // console.log(imagepath, "iMAGE CHECK");
  useEffect(() => {
    if (allUserData) {
      setUserData(JSON.parse(allUserData));
    }
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
        <>
          <div className="w-full">
            <div className="relative mb-4 w-[280px] max-w-xs overflow-hidden rounded-lg border-2 bg-white shadow-xl">
              <a href="#">
                <Image
                  src={
                    imagepath && product.product_cover
                      ? `${imagepath}/${product.product_token}/${product.product_cover}`
                      : defaultImage
                  }
                  width={1000}
                  height={1000}
                  class="h-60 rounded-t-lg object-cover"
                  alt="product image"
                />
              </a>
              <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
                Sale
              </span>
              <div className="mt-4 px-5 pb-5 overflow-hidden">
                <a href="#">
                <Link href={`/ProductPage/${product.product_slug}`}>
                  <h5 class="text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis my-2 tracking-tight text-slate-900">
                    {product.product_title}
                  </h5>
                  </Link>
                </a>
                <div class="">
                  <p className="mb-2">
                    <span className="text-[18px] font-bold text-slate-900">
                      {" "}
                      PKR {product.product_discounted_price}
                    </span>
                    <span className="text-sm text-slate-900 line-through">
                      {product.product_actual_price}
                    </span>
                  </p>
                  <button
                    href="#"
                    onClick={handleAddToCart}
                    className="flex items-center rounded-md bg-[#b80505] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mr-2 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>

 {/* New card */}
          {/* <div class="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
            <a href="#">
              <img
                class="h-60 rounded-t-lg object-cover"
                src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt="product image"
              />
            </a>
            <span class="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
              Sale
            </span>
            <div class="mt-4 px-5 pb-5">
              <a href="#">
                <h5 class="text-xl font-semibold mb-6 tracking-tight text-slate-900">
                  Nike Air MX Super 5000
                </h5>
              </a>
              <div class="flex items-center justify-between">
                <p>
                  <span class="text-3xl font-bold text-slate-900">$249</span>
                  <span class="text-sm text-slate-900 line-through">$299</span>
                </p>
                <a
                  href="#"
                  class="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
          </div> */}
        </>
      ) : (
        <div className="w-full border relative border-[#cccccc] bg-white shadow-lg rounded-lg mb-4 p-4">
          <div className="flex w-full">
            <div>
              <Image
                width={1000}
                height={1000}
                className="w-[320px] h-[180px] object-cover mr-4"
                src={
                  imagepath && product.product_cover
                    ? `${imagepath}/${product.product_token}/${product.product_cover}`
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
