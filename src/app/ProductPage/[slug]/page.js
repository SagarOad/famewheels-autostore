"use client";

import ProductImageSlide from "@/components/ProductImageSlide";
// import SearchBox from "@/components/SearchBox";
import SellerDetailBox from "@/components/SellerDetailBox";
import { data } from "autoprefixer";
import React, { useState, useEffect } from "react";
import loader from "../../../assets/timer.gif";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const page = ({ params }) => {
  const [productData, setProductData] = useState(null);
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
  }, []);

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

  const images = [
    {
      original:
        "https://www.buyautoparts.com/data/all_images/MP0162A_DHBX-map.jpg",
      thumbnail:
        "https://www.buyautoparts.com/data/all_images/MP0162A_DHBX-map.jpg",
    },
    {
      original:
        "https://www.buyautoparts.com/data/all_images/MP0162B_DHBX-map.jpg",
      thumbnail:
        "https://www.buyautoparts.com/data/all_images/MP0162B_DHBX-map.jpg",
    },
    {
      original:
        "https://www.buyautoparts.com/data/all_images/MP0162C_DHBX-map.jpg",
      thumbnail:
        "https://www.buyautoparts.com/data/all_images/MP0162C_DHBX-map.jpg",
    },
  ];

  console.log(params.slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/product-detail/?product_slug=${params.slug}`
        );
        setProductData(response.data);
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
    } catch (error) {
      toast.error("Error adding to cart");
      console.error("Error adding to cart:", error);
    }

    toast.success("Added to cart successfully");
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
        <div class="loader"></div>
      </div>
    );
  // if (error) return <p>{error}</p>;
  return (
    <>
      {/* <SearchBox /> */}
      <div>{error !== null ? <p>{error}</p> : ""}</div>

      <div className="antialiased">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
              <span>Headphones</span>
            </div>
          </div>

          <div className=" px-4 sm:px-6 lg:px-8 mt-6">
            <div className="grid grid-cols-12 -mx-4">
              <div className="md:col-span-6 relative col-span-12 px-4">
                <div x-data="{ image: 1 }" x-cloak>
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <div className=" discount"></div>
                    <ProductImageSlide
                      discountPercentage={discountPercentage}
                      images={images}
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
                      <span className="text-slate-900 text-3xl mr-1">
                        Rs {"  "}
                      </span>
                      <span className="font-bold text-slate-900 text-3xl">
                        {productData?.products.product_discounted_price}
                      </span>
                    </div>
                    <div className="py-2 px-3">
                      <span>Original Price </span>
                      <span className=" font-bold line-through">
                        Rs {productData?.products.product_actual_price}
                      </span>
                    </div>
                    <div className="py-2 px-3">
                      <span>You Save: </span>
                      <span className=" font-bold text-[#39b54a]">
                        Rs ${amountSaved}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* <p className="text-green-500 text-xl font-semibold">Save 12%</p> */}
                    {/* <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p> */}
                  </div>
                </div>
                <div></div>
                <div className="flex py-4 space-x-4">
                  <button
                    type="button"
                    className="px-20 text-[21px] font-semibold bg-[#20409a] text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                  <div>
                    <svg
                      className="w-5 h-5 text-gray-400 absolute right-0 bottom-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                      />
                    </svg>
                    <div className=" relative">
                      <div className="flex items-center space-x-2">
                        <button
                          className="cursor-pointer text-[22px] w-[40px] text-center rounded-xl border border-gray-500 p-2 h-14 flex items-center justify-center"
                          onClick={decreaseQuantity}
                        >
                          -
                        </button>
                        <select
                          className="cursor-pointer text-[22px] pb-[8px] w-[80px] text-center appearance-none rounded-xl border border-gray-500 p-2 h-14 flex items-end"
                          value={quantity}
                          onChange={(e) =>
                            setQuantity(parseInt(e.target.value))
                          }
                        >
                          {[1, 2, 3, 4, 5].map((qty) => (
                            <option key={qty} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>
                        <button
                          className="cursor-pointer text-[22px] w-[40px] text-center rounded-xl border border-gray-500 p-2 h-14 flex items-center justify-center"
                          onClick={increaseQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-[250px] -mx-4">
              <div className="md:col-span-7 col-span-12 px-4">
                <div>
                  <p className="text-slate-900 mb-4 text-[16px]">
                    {productData?.products.product_description}
                  </p>
                  <h2 className=" text-[20px] font-bold">Directions for Use</h2>
                  <ul>
                    <li>
                      1. Begin by cleaning the surface with All-purpose cleaner.
                      Ensure the surface is free of dirt and grime.
                    </li>
                    <li>2. Shake the product well before use. .</li>
                    <li>
                      3. Spray directly onto an applicator or towel and apply
                      evenly onto the desired surface.
                    </li>
                    <li>
                      4. Spread the dressing over the entire workpiece, ensuring
                      thorough coverage.
                    </li>
                    <li>5. Allow the product to dry for a few minutes.</li>
                    <li>
                      6. Buff off any excess residue with a clean microfiber
                      towel.
                    </li>
                    <li>
                      7. Reapply as needed to achieve the desired level of shine
                      and protection.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className=" text-[20px] font-bold mt-4">
                    Tips for Optimal Results
                  </h2>
                  <p className="text-slate-900 text-[16px]">
                    Always work on a cool surface and in the shade to prevent
                    premature drying. Avoid applying the product to glass, paint
                    and seats to prevent potential damage. In case of eye
                    contact, rinse thoroughly with water. Keep out of reach of
                    children.
                  </p>
                </div>
              </div>
              <div className="md:col-span-5 col-span-12 pl-24 py-6">
                <div className="">
                  <div className="flex">
                    <div className="flex">
                      <div className=" border-[1px] border-black">
                        <h2 className=" text-[20px] font-[400] py-3 border-b-2 text-center">
                          Seller Detials
                        </h2>
                        <div className=" px-12">
                          <div className=" flex justify-center items-center">
                            <div>
                              <img
                                className=" w-[60px] mr-5"
                                src="https://fcache1.pakwheels.com/original/4X/9/4/8/948a620e5554ab2acc6975fbe515a1c81c408f77.jpg"
                              />
                            </div>
                            <div>
                              <h2 className="text-[#20409a] text-[14px]">
                                {productData?.products.vendor_name}
                              </h2>
                              <a className="text-[14px]">
                                More ads by {productData?.products.vendor_name}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className=" flex justify-center pt-3 pb-4 items-center">
                            <div className=" mx-2 bg-[#20409a] w-10 h-10 rounded-full flex justify-center items-center text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                                />
                              </svg>
                            </div>
                            <div className=" mx-2 bg-[#20409a] w-10 h-10 rounded-full flex justify-center items-center text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border-[1px] border-black w-[300px] flex justify-center items-center">
                      <div>Ad Space</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
