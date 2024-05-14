"use client";
import React from "react";
import productsData from "@/ProductData";
import SearchBox from "./SearchBox";

const OrderSummary = () => {
  const productsData = {
    products: [
      {
        product_name: "RoadMax Interior Dressing & Protectant 500ml",
        price: "1,100",
        discount: "30%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp",
      },
      {
        product_name:
          "Microfiber Cloth 300 GSM Yellow and Grey 40x40 Pack of 5",
        price: "1,560",
        discount: "30%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9608/microfiber-cloth-300gsm-yellow-and-grey-pack-of-3-40x40-96083173.webp",
      },
      {
        product_name: "Motor Inside MPP Multi Purpose Protectant 5 Liter",
        price: "6,999",
        discount: "35%",
        image:
          "https://cache1.pakwheels.com/ad_pictures/9929/motor-inside-mpp-multi-purpose-protectant-5-liter-99298292.webp",
      },
      {
        product_name: "Universal Ket Guage Led Smoke Face Car Auto Tachometer",
        price: "6,800",
        discount: "90%",
        image:
          "https://cache3.pakwheels.com/ad_pictures/9950/universal-ket-guage-led-smoke-face-car-auto-tachometer-rpm-gauge-meter-with-holder-for-car-1-pc-99506582.webp",
      },
      {
        product_name: "Blindspot Rearview Convex Mirror - 2pcs",
        price: "341",
        discount: "43%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9958/blindspot-rearview-convex-mirror-2pcs-99586222.webp",
      },
      {
        product_name:
          "Toyota Corolla GLi Xli Side Mirrors Adjustable Power Switch",
        price: "399",
        discount: "25%",
        image:
          "https://cache4.pakwheels.com/ad_pictures/9585/toyota-corolla-gli-xli-side-mirrors-adjustable-power-switch-95850359.webp",
      },
      {
        product_name:
          "Universal Front Parking Blind Spot Rear View Fender Mirror WHITE",
        price: "1,650",
        discount: "8%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1291/toyota-fortuner-fender-mirror-12917694.jpg",
      },
      {
        product_name: "ProOne Motor Oil 5W30 API SP - 4L",
        price: "6,799",
        discount: "10%",
        image:
          "https://cache4.pakwheels.com/ad_pictures/9958/proone-motor-oil-5w30-api-sp-4l-99583116.webp",
      },
    ],
  };
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

              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={productsData.products[0].image}
                    alt="dress"
                  />
                  <img
                    className="w-full md:hidden"
                    src={productsData.products[0].image}
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-1xl font-semibold leading-6 text-[#20409a]">
                      {productsData.products[0].product_name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Make: </span> Honda
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Brand: </span> Fusion
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      PKR {productsData.products[0].price}
                      <span className="text-red-300 line-through">
                        {" "}
                        {productsData.products[0].discount}
                      </span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      PKR {productsData.products[0].price}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
                <div className="pb-4 md:pb-8 w-full md:w-40">
                  <img
                    className="w-full hidden md:block"
                    src={productsData.products[1].image}
                    alt="dress"
                  />
                  <img
                    className="w-full md:hidden"
                    src={productsData.products[1].image}
                    alt="dress"
                  />
                </div>
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl xl:text-1xl font-semibold leading-6 text-[#20409a]">
                      {productsData.products[1].product_name}
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2">
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Make: </span> Toyota
                      </p>
                      <p className="text-sm leading-none text-gray-800">
                        <span className="text-gray-300">Brand: </span> MK
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base xl:text-lg leading-6">
                      PKR {productsData.products[1].price}
                      <span className="text-red-300 line-through">
                        {" "}
                        {productsData.products[1].discount}
                      </span>
                    </p>
                    <p className="text-base xl:text-lg leading-6 text-gray-800">
                      01
                    </p>
                    <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                      PKR {productsData.products[1].price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
              <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                  <div className="flex justify-between  w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Subtotal
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      PKR 2660
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Discount{" "}
                      <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                        STUDENT
                      </span>
                    </p>
                    <p className="text-base leading-4 text-gray-600">
                      -PKR 28.00 (50%)
                    </p>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base leading-4 text-gray-800">
                      Shipping
                    </p>
                    <p className="text-base leading-4 text-gray-600">PKR 300</p>
                  </div>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base font-semibold leading-4 text-gray-800">
                    Total
                  </p>
                  <p className="text-base font-semibold leading-4 text-gray-600">
                    PKR 2960
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                <h3 className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping
                </h3>
                <div className="flex justify-between items-start w-full">
                  <div className="flex justify-center items-center space-x-4">
                    {/* <div class="w-8 h-8">
                      <img
                        class="w-full h-full"
                        alt="logo"
                        src="https://i.ibb.co/L8KSdNQ/image-3.png"
                      />
                    </div> */}
                    <div className="flex flex-col justify-start items-center">
                      <p className="text-lg leading-6 font-semibold text-gray-800">
                        DPD Delivery
                        <br />
                        <span className="font-normal">
                          Delivery with 24 Hours
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold leading-6 text-gray-800">
                    $8.00
                  </p>
                </div>
                <div className="w-full flex justify-center items-center">
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-[#20409a] text-base font-medium leading-4 text-white">
                    View Carrier Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
            <h3 className="text-xl font-semibold leading-5 text-gray-800">
              Customer Detials
            </h3>
            <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
              <div className="flex flex-col justify-start items-start flex-shrink-0">
                <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                  <img
                    className=" w-[55px]"
                    src="https://media.licdn.com/dms/image/D4D03AQEbzZwOnAAfCg/profile-displayphoto-shrink_200_200/0/1709407164448?e=1718841600&v=beta&t=rlUeSUDTiPOrPt7VaSLBCaKv9xlpN8F733q8OraSgiM"
                    alt="avatar"
                  />
                  <div className=" flex justify-start items-start flex-col space-y-2">
                    <p className="text-base font-semibold leading-4 text-left text-gray-800">
                      Sagar Oad
                    </p>
                    <p className="text-sm leading-5 text-gray-600">
                      10 Previous Orders
                    </p>
                  </div>
                </div>

                <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 7L12 13L21 7"
                      stroke="#1F2937"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="cursor-pointer text-sm leading-5 text-gray-800">
                    sagar16oad@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                  <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Shipping Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      Doctor Plaza, Do talwar
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                  <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                    Edit Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummary;
