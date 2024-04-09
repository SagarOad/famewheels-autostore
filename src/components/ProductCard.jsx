import React from "react";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className=" w-full">
        <div class="group flex max-w-xs w-[280px] h-[400px] flex-col overflow-hidden rounded-lg border border-[#cccccc] bg-white shadow-lg">
          <a
            class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
            href="#"
          >
            <img
              class="peer absolute top-0 h-[] w-full mx-auto object-cover"
              src={product.image}
              alt="product image"
            />
            <img
              class="peer absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0 peer-hover:right-0"
              src="https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330560.webp"
              alt="product image"
            />
            <div class="absolute  bottom-0 mb-4 flex space-x-4 w-full justify-center">
              <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
              <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
              <div class="rounded-full h-3 w-3 bg-gray-200 border-2 border-white"></div>
            </div>
            <svg
              class="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z"
              />
            </svg>
            <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-[12px] font-medium text-white">
              {product.discount} OFF
            </span>{" "}
          </a>
          <div class="mt-4 px-4 pb-5">
            <a href="#">
              <h5 class="text-[16px] font-bold tracking-tight text-[#20409a]">
                {product.product_name}
              </h5>
            </a>
            <div class="mt-2 mb-2 flex items-center justify-between">
              <p>
                <span class="text-xl font-bold text-slate-900">PKR {product.price}</span>
                {/* <span class="text-sm text-slate-900 line-through">$699</span> */}
              </p>
            </div>
            <a
              href="#"
              class="flex items-center justify-center border-2 mb-2 border-[#b80505]  rounded-md bg-text bg-white px-5 py-2 text-center text-sm font-medium focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Buy Now
            </a>
            <a
              href="#"
              class="flex items-center justify-center rounded-md bg-[#b80505] px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
      </div>
    </>
  );
};

export default ProductCard;