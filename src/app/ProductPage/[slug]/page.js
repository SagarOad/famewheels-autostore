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


const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const page = ({ params }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      original:
        "https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp",
      thumbnail:
        "https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  console.log(params.slug);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `${BASE_URL}/product-detail/?product_id=${params.slug}`
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

const formData = new FormData()

formData.append("product_id",params.slug)
formData.append("product_name",productData?.products.product_title)
formData.append("quantity",quantity)
formData.append("user_id",4)

    try {
      const response = await axios.post(`${BASE_URL}/add-to-cart`, formData,{
        headers:{
          Authorization:`Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`
        }
      });
      console.log("Added to cart:", response.data);
    } catch (error) {
      toast.error("Error adding to cart")
      console.error("Error adding to cart:", error);
    }
  };

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
            {/* <div className="flex items-center space-x-2 text-gray-400 text-sm">
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
            </div> */}
          </div>

          <div className=" px-4 sm:px-6 lg:px-8 mt-6">
            <div className="grid grid-cols-12 -mx-4">
              <div className="md:col-span-7 col-span-12 px-4">
                <div x-data="{ image: 1 }" x-cloak>
                  <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <ProductImageSlide images={images} />
                  </div>

                  <div className="flex -mx-2 mb-4"></div>
                </div>
              </div>
              <div className="md:col-span-5 col-span-12 pl-24">
                <h2 className="mb-2 leading-tight tracking-tight font-bold text-[#20409a] text-2xl md:text-3xl">
                  {/* Product title */}
                  {productData?.products.product_title}
                </h2>
                <p className="text-gray-500 text-sm">
                  By{" "}
                  <a href="#" className="text-[#20409a] hover:underline">
                    ABC Company
                  </a>
                </p>

                <div className="flex items-center space-x-4 my-4">
                  <div>
                    <div className="rounded-lg bg-[#b8050521] flex py-2 px-3">
                      <span className="text-slate-900 text-2xl mr-1">PKR</span>
                      <span className="font-bold text-slate-900 text-3xl">
                        {productData?.products.product_discounted_price}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    {/* <p className="text-green-500 text-xl font-semibold">Save 12%</p> */}
                    {/* <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p> */}
                  </div>
                </div>
                <div>
                  <p className="text-slate-900 text-[16px]">
                    {productData?.products.product_description}
                  </p>
                </div>
                <div className="flex py-4 space-x-4">
                  <div className="relative">
                    <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                      Qty
                    </div>
                    <select
                      className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    >
                      {[1, 2, 3, 4, 5].map((qty) => (
                        <option key={qty} value={qty}>
                          {qty}
                        </option>
                      ))}
                    </select>

                    <svg
                      className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
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
                  </div>

                  <button
                    type="button"
                    className="h-14 px-6 py-2 font-semibold bg-[#20409a] text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 mt-20 -mx-4">
              <div className="md:col-span-7 col-span-12 px-4">
                <div>
                  <h2 className=" text-[20px] font-bold mt-14">
                    Directions for Use
                  </h2>
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
                <SellerDetailBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
