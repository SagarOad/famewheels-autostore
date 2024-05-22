"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <div className="">
        <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col justify-start items-start bg-gray-50 w-full">
              {cartData?.products?.map((product, index) => (
                <div
                  key={index}
                  class="flex flex-col rounded-lg bg-white sm:flex-row"
                >
                  <img
                    class="m-2 h-24 w-28 rounded-md border object-cover object-center"
                    src={product.image}
                    alt="Product Image"
                  />
                  <div class="flex w-full flex-col px-4 py-4">
                    <span class="font-semibold">{product.product_name}</span>
                    <span class="float-right text-gray-400">42EU - 8.5US</span>
                    <p class="text-lg font-bold mt-2">Rs {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
