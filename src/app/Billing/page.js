"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";


const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const page = () => {
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
        console.log(response?.data.products, "Product data fetched successfully");

        SetProductCartData(response?.data.products);
        SetProductCartImgPath(response?.data?.imagepath);
        setImagePath(response?.data?.imagepath);

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

  const cartData = {
    products: ProductCartData?.map((product) => ({
      cart_id: product.cart_id,
      image: `${imagepath}/${product.product_token}/${product.product_cover}`,
      product_name: product.product_name,
      price: product.total_amount,
      quantity: product.product_quantity,
    })),
  };

  const totalPrice =
    cartData.products?.reduce(
      (sum, product) => sum + parseFloat(product.price),
      0
    ) || 0;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const paymentDetails = {
      email: e.target.email.value,
      phone: e.target.phone.value,
      firstName: e.target["first-name"].value,
      lastName: e.target["last-name"].value,
      address: e.target.address.value,
      zip: e.target.zip.value,
      city: e.target.city.value,
      postalCode: e.target["postal-code"].value,
    };

    const data = {
      order_amount: totalPrice,
      shipping_details: paymentDetails,
    };

    try {
      const response = await axios.post(`${BASE_URL}/checkout`, data, {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTYzNzgxOTIsImV4cCI6MTc0NzkxNDE5MiwibmJmIjoxNzE2Mzc4MTkyLCJqdGkiOiJyWGZPVHJRUE1NMklGT2o5Iiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.aET31wLbbsorx3cC2KKl-iPJ3cSjcWrdbupaD4Gdd8g`,
        },
      });
      console.log("Order placed successfully:", response.data);
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20">
        <div className="px-4 pt-8">
          <p className="text-[1.6rem] font-medium">Order Summary</p>
          <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
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
                        <span class="font-semibold">
                          {product.product_name}
                        </span>
                        <span class="float-right text-gray-400">
                          42EU - 8.5US
                        </span>
                        <p class="text-lg font-bold mt-2">Rs {product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-[1.6rem] font-medium">Shipping Methods</p>
          <form className="mt-5 grid gap-6">
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_1"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_1"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/naorrAeygcJzX0SyNI4Y0.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
            <div className="relative">
              <input
                className="peer hidden"
                id="radio_2"
                type="radio"
                name="radio"
                checked
              />
              <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
              <label
                className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                for="radio_2"
              >
                <img
                  className="w-14 object-contain"
                  src="/images/oG8xsl3xsOkwkMsrLGKM4.png"
                  alt=""
                />
                <div className="ml-5">
                  <span className="mt-2 font-semibold">Fedex Delivery</span>
                  <p className="text-slate-500 text-sm leading-6">
                    Delivery: 2-4 Days
                  </p>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p className="text-[1.6rem] font-medium">Payment Details</p>
          <p className="text-[#000000]">
            Complete your order by providing your payment details.
          </p>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="email"
              className="mt-4 mb-2 block text-[1.2rem] font-medium"
            >
              Contact
            </label>
            <div className="relative">
              <input
                type="text"
                id="email"
                name="email"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Email"
              />
            </div>
            <div className="relative mt-4">
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Phone Number"
              />
            </div>
            <label
              htmlFor="delivery"
              className="mt-4 mb-2 block text-[1.2rem] font-medium"
            >
              Delivery
            </label>
            <div className="flex">
              <div className="relative w-1/2 pr-2">
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="First Name"
                />
              </div>
              <div className="relative w-1/2 pl-2">
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="relative w-8/12 pr-2">
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Address"
                />
              </div>
              <div className="relative w-4/12 pl-2">
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Zip"
                />
              </div>
            </div>
            <div className="flex mt-4">
              <div className="relative w-1/2 pr-2">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="City"
                />
              </div>
              <div className="relative w-1/2 pl-2">
                <input
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Postal Code"
                />
              </div>
            </div>
            <div className="mt-6 border-t border-b py-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Subtotal</p>
                <p className="font-semibold text-gray-900">$399.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Shipping</p>
                <p className="font-semibold text-gray-900">$8.00</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-medium text-gray-900">Total</p>
              <p className="text-2xl font-semibold text-gray-900">
                Rs {totalPrice}
              </p>
            </div>
            <button
              type="submit"
              className="mt-4 mb-8 w-full rounded-md bg-[#20409a] px-6 py-3 font-medium text-white"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
