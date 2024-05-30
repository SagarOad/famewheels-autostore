"use client";

import ProductImageSlide from "@/components/ProductImageSlide";
// import SearchBox from "@/components/SearchBox";
import SellerDetailBox from "@/components/SellerDetailBox";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const Page = ({ params }) => {
  const [productData, setProductData] = useState(null);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const [userData, setUserData] = useState("");

  const allUserData = Cookies.get("userData");
  const cartToken = Cookies.get("user_token");

  useEffect(() => {
    if (allUserData) {
      setUserData(JSON.parse(allUserData));
    }
    console.log(userData, "Data token test");
  }, [allUserData]);

  const increaseQuantity = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/product-detail`,
          {
            product_slug: params.slug,
          },
          {
            maxRedirects: 0,
          }
        );
        if (response.status === 301 || response.status === 302) {
          const newUrl = response.headers.location;
          const newResponse = await axios.get(newUrl);
          setProductData(newResponse.data);
        } else {
          setProductData(response.data);
        }

        const productToken = response.data?.products?.product_token;

        if (productToken) {
          const formData = new FormData();
          const UserToken = localStorage.getItem("token");
          formData.append("product_token", productToken);

          const imagesResponse = await axios.post(
            `${BASE_URL}/product-images`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${UserToken}`,
              },
            }
          );
          const images = imagesResponse.data.product_images.map((img) => ({
            original: `${imagesResponse.data.imagepath}/${productToken}/${img.image_name}`,
            thumbnail: `${imagesResponse.data.imagepath}/${productToken}/${img.image_name}`,
          }));
          setProductImages(images);
        }
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.slug]);

  const handleAddToCart = async () => {
    const formData = new FormData();

    const UserToken = localStorage.getItem("token");

    formData.append("product_id", productData?.products.product_id);
    formData.append("product_name", productData?.products.product_title);
    formData.append("product_quantity", quantity);
    formData.append(
      "product_price",
      productData?.products.product_actual_price
    );

    formData.append("user_id", UserToken ? userData?.id : cartToken);

    try {
      const response = await axios.post(`${BASE_URL}/add-to-cart`, formData, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`,
        },
      });
      console.log("Added to cart:", response.data);
      toast.success("Added to cart successfully");
    } catch (error) {
      toast.error("Error adding to cart");
      console.error("Error adding to cart:", error);
    }
  };

  const productActualPrice = productData?.products?.product_actual_price;
  const productDiscountPrice = productData?.products?.product_discounted_price;

  let discountPercentage = 0;
  let amountSaved = 0;

  if (productActualPrice && productDiscountPrice) {
    discountPercentage = (
      ((productActualPrice - productDiscountPrice) / productActualPrice) *
      100
    ).toFixed(2);
    amountSaved = (productActualPrice - productDiscountPrice).toFixed(2);
  }

  if (loading)
    return (
      <div className=" w-full h-[100vh] mt-[-112px] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      {/* <SearchBox /> */}
      <div>{error !== null ? <p>{error}</p> : ""}</div>

      <div className="antialiased max-w-[1600px] mx-auto">
        <div className="py-16">
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <a href="#" className="hover:underline hover:text-gray-600">
                Home
              </a>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <a href="#" className="hover:underline hover:text-gray-600">
                Electronics
              </a>
              <span>
                <svg
                  className="h-5 w-5 leading-none text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Headphones</span>
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-8 mt-6">
            <div className="grid grid-cols-12 -mx-4">
              <div className="md:col-span-6 relative col-span-12 px-4">
                <div x-data="{ image: 1 }" x-cloak>
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <div className="discount"></div>
                    <ProductImageSlide
                      discountPercentage={discountPercentage}
                      images={productImages}
                    />
                  </div>

                  <div className="flex -mx-2 mb-4"></div>
                </div>
              </div>
              <div className="md:col-span-6 col-span-12 pl-4">
                <h2 className="mb-2 leading-tight roboto-condensed tracking-tight font-bold text-[#20409a] text-2xl md:text-4xl">
                  {/* Product title */}
                  {productData?.products.product_title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-[#20409a] hover:underline">
                    {productData?.products.vendor_name}
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg flex py-2 px-3">
                      <span className="text-slate-900 text-3xl mr-1">Rs </span>
                      <span className="font-bold text-slate-900 text-3xl">
                        {productData?.products.product_discounted_price}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-green-500 text-xl font-semibold">
                      Save Rs {amountSaved}
                    </p>
                    <p className="text-gray-400 text-sm">
                      Inclusive of all Taxes.
                    </p>
                  </div>
                </div>

                <div
                  dangerouslySetInnerHTML={{
                    __html: productData?.products.product_description,
                  }}
                />

                <div className="flex py-4 space-x-4">
                  <div className="relative">
                    <div className="flex items-center border rounded w-max overflow-hidden">
                      <button
                        className="h-full p-2 hover:bg-gray-100 border-r"
                        onClick={decreaseQuantity}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="w-12 h-full flex items-end px-2 text-center font-semibold text-gray-700 mx-2 outline-none"
                        value={quantity}
                        readOnly
                      />
                      <button
                        className="h-full p-2 hover:bg-gray-100 border-l"
                        onClick={increaseQuantity}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="h-12 px-6 py-2 font-semibold rounded-xl bg-[#20409a] hover:bg-[#2d59da] text-white"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-8 mt-40">
              <div className="flex flex-wrap -mx-4 mb-24">
                <div className="md:w-1/3 px-4 py-2">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="font-semibold mb-2 roboto-condensed">
                      Seller Information
                    </h2>
                    <SellerDetailBox seller={productData?.products} />
                  </div>
                </div>
                <div className="md:w-2/3 px-4 py-2">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="font-semibold mb-2 roboto-condensed">
                      Product Features
                    </h2>
                    <ul className="space-y-2">
                      {productData?.products?.product_features?.map(
                        (feature, index) => (
                          <li key={index} className="text-gray-700 text-sm">
                            {feature}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-10" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
