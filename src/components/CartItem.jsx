"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "./ProductCard/ProductCard";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const CartItem = () => {
  const [ProductCartData, SetProductCartData] = useState(null);
  const [ProductCartImgPath, SetProductCartImgPath] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState("");
  const [imagepath, setImagePath] = useState("");


  const allUserData = Cookies.get("userData");
  const cartToken = Cookies.get("user_token");

  useEffect(() => {
    if (allUserData) {
      setUserData(JSON.parse(allUserData));
    }
    console.log(userData, "Data token test");
  }, [allUserData]);

  useEffect(() => {
    const fetchData = async () => {
      const UserToken = localStorage.getItem("token");
      const userId = UserToken ? userData?.id : cartToken;

      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${BASE_URL}/view-cart`, {
          params: { user_id: userId },
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`, // Replace with your actual token
          },
        });
        console.log(
          response?.data.products,
          "Product data fetched successfully"
        );
        setImagePath(response?.data?.imagepath);
        SetProductCartData(response?.data.products);
        SetProductCartImgPath(response?.data?.imagepath);
      } catch (error) {
        setError("Error fetching data");
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userData || cartToken) {
      fetchData();
    }
  }, [userData, cartToken]);

  const handleRemove = async (cart_id) => {
    const formData = new FormData();
    formData.append("cart_id", cart_id);

    try {
      const response = await axios.post(
        `${BASE_URL}/remove-cart-product`,
        formData,
        {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`,
          },
        }
      );
      SetProductCartData((prevData) =>
        prevData.filter((product) => product.cart_id !== cart_id)
      );
      toast.success("Removed Successfully");
    } catch (error) {
      toast.error("Error removing from cart");
      console.error("Error removing from cart:", error);
    }
  };

  const cartData = {
    products: ProductCartData?.map((product) => ({
      cart_id: product.cart_id,
      image: `${imagepath}/${product.product_token}/${product.product_cover}`,
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
    <div>
      <div className="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
        <div className="pointer-events-auto w-screen max-w-md">
          <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="flex items-start justify-between">
                <h2
                  className="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Shopping cart
                </h2>
              </div>

              <div className="mt-8">
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {cartData?.products?.map((product, index) => (
                      <li key={index} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          <img
                            src={product.image}
                            alt="Product image"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>
                                <a href="#">{product.product_name}</a>
                              </h3>
                              <p className="ml-4">PKR {product.price}</p>
                            </div>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">
                              Qty {product.quantity}
                            </p>

                            <div className="flex">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => handleRemove(product.cart_id)}
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>PKR 1132</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link
                  href="/Billing"
                  className="flex items-center justify-center rounded-md border border-transparent bg-[#20409a] px-6 py-3 text-base font-medium text-white shadow-sm"
                >
                  Checkout
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
