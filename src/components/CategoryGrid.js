import Link from "next/link";
import React from "react";

const CategoryGrid = () => {
  return (
    <>
      <main class="my-8">
        <h2 className="text-[1.5rem] px-4 mb-8 font-[600] py-2 text-black">
          Categories
        </h2>
        <div class="container mx-auto px-6">
          <div class="h-64 rounded-md overflow-hidden bg-cover bg-center">
            <div class="car-care-banner bg-gray-900 bg-opacity-50 flex items-center h-full">
              <div class="px-10 max-w-xl">
                <h2 class="text-2xl text-white font-semibold">Car Care</h2>
                <p class="mt-2 text-white">
                  Keep Your Car in Top Condition with Our Premium Car Care
                  Products
                </p>
                <Link href="/MainPage">
                  <button class="flex items-center mt-4 px-3 py-2 bg-[#20409a] text-white text-sm uppercase font-medium rounded focus:outline-none">
                    <span>Shop Now</span>
                    <svg
                      class="h-5 w-5 mx-2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="md:flex mt-8 md:-mx-4">
            <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2">
              <div class="car-interior-banner bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Interior</h2>
                  <p class="mt-2 text-white">
                    Elevate Your Driving Experience with High-Quality Interior
                    Accessories.
                  </p>
                  <Link href="/MainPage">
                    <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                      <span>Shop Now</span>
                      <svg
                        class="h-5 w-5 mx-2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2">
              <div class="car-exterior-banner bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Exterior</h2>
                  <p class="mt-2 text-white">
                    Enhance Your Vehicle's Look and Performance with Top-Notch
                    Exterior Accessories
                  </p>
                  <Link href="/MainPage">
                    <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                      <span>Shop Now</span>
                      <svg
                        class="h-5 w-5 mx-2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryGrid;
