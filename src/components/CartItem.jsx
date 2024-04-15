import React from "react";

const CartItem = () => {

  const cartData = {
    products: [
      {
        product_name: "RoadMax Interior Dressing & Protectant 500ml",
        price: "1,100",
        discount: "30%",
        category: "Car Covers", 
        make: "Honda",
        brand: "Asuki",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp",
      },
      {
        product_name:
          "Microfiber Cloth 300 GSM Yellow and Grey 40x40 Pack of 5",
        price: "1,560",
        discount: "30%",
        category: "Car Shampoo", 
        make: "Toyota",
        brand: "Denso",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9608/microfiber-cloth-300gsm-yellow-and-grey-pack-of-3-40x40-96083173.webp",
      },
      {
        product_name: "Motor Inside MPP Multi Purpose Protectant 5 Liter",
        price: "6,999",
        discount: "35%",
        category: "Car Poolish", 
        make: "Suzuki",
        brand: "MK",
        image:
          "https://cache1.pakwheels.com/ad_pictures/9929/motor-inside-mpp-multi-purpose-protectant-5-liter-99298292.webp",
      },
    ],
  };

  return (
    <div>
      <div class="pointer-events-none fixed inset-y-0 right-0 flex pl-10">
        <div class="pointer-events-auto w-screen max-w-md">
          <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div class="flex items-start justify-between">
                <h2
                  class="text-lg font-medium text-gray-900"
                  id="slide-over-title"
                >
                  Shopping cart
                </h2>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  <ul role="list" class="-my-6 divide-y divide-gray-200">
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={cartData.products[0].image}
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{cartData.products[0].product_name}</a>
                            </h3>
                            <p class="ml-4">PKR {cartData.products[0].price}</p>
                          </div>
                          {/* <p class="mt-1 text-sm text-gray-500">Salmon</p> */}
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>

                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li class="flex py-6">
                      <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                          alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                          class="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div class="ml-4 flex flex-1 flex-col">
                        <div>
                          <div class="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">Medium Stuff Satchel</a>
                            </h3>
                            <p class="ml-4">$32.00</p>
                          </div>
                          <p class="mt-1 text-sm text-gray-500">Blue</p>
                        </div>
                        <div class="flex flex-1 items-end justify-between text-sm">
                          <p class="text-gray-500">Qty 1</p>

                          <div class="flex">
                            <button
                              type="button"
                              class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div class="mt-6">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-[#20409a] px-6 py-3 text-base font-medium text-white shadow-sm"
                >
                  Checkout
                </a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button
                    type="button"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
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
