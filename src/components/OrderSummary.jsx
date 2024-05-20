"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SearchBox from "../components/SearchBox/SearchBox";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const OrderSummary = () => {
  const [ProductCartData, SetProductCartData] = useState(null);
  const [ProductCartImgPath, SetProductCartImgPath] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/view-cart`, {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`,
          },
        });
        console.log(
          response?.data.products,
          "Product data fetched successfully"
        );

        SetProductCartData(response?.data.products);
        SetProductCartImgPath(response?.data?.imagepath);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const cartData = {
    products: ProductCartData?.map((product) => ({
      cart_id: product.cart_id,
      image: `${ProductCartImgPath}/${product.product_cover}`,
      product_name: product.product_name,
      price: product.total_amount,
      quantity: product.product_quantity,
    })),
  };

  console.log(cartData, "testing");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <SearchBox />
      <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:mx-auto">
        <div className="flex justify-start item-start space-y-2 flex-col ">
          <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
            Order #1
          </h1>
          <p className="text-base font-medium leading-6 text-gray-600">
            21st Mart 2021 at 10:34 PM
          </p>
        </div>
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                Customer’s Cart
              </p>

              {cartData?.products?.map((product, index) => (
                <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                  <div className="pb-4 md:pb-8 w-full md:w-40">
                    <img
                      className="w-full hidden md:block"
                      src={product.image}
                      alt="dress"
                    />
                    <img
                      className="w-full md:hidden"
                      src={product.image}
                      alt="dress"
                    />
                  </div>
                  <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                      <h3 className="text-xl xl:text-1xl font-semibold leading-6 text-[#20409a]">
                        {product.product_name}
                      </h3>
                    </div>
                    <div className="flex justify-between space-x-8 items-start w-full">
                      <p className="text-base xl:text-lg leading-6">
                        PKR {product.price}
                        <span className="text-red-300 line-through">
                          {" "}
                          discount
                        </span>
                      </p>
                      <div className=" flex flex-col justify-center items-center">
                        <span>Qty</span>
                        <p className="text-base xl:text-lg leading-6 text-gray-800">
                          {product.quantity}
                        </p>
                      </div>

                      <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                        PKR {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-[#20409a] text-base font-medium leading-4 text-white">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
