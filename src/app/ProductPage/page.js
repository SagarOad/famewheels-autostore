import SellerDetailBox from "@/components/SellerDetailBox";
import React from "react";

const page = () => {
  return (
    <div className="antialiased">
      <div className="py-20">
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
            <div className="md:col-span-7 col-span-12 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    <img
                      className=" w-full h-full object-contain"
                      src="https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp"
                    />
                  </div>
                </div>

                <div className="flex -mx-2 mb-4"></div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-[#20409a] text-2xl md:text-3xl">
                RoadMax Interior Dressing & Protectant 500ml
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
                      1,100
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
                  Revitalize your interior with RoadMax Interior Dressing &
                  Protectant. Restore the original shine to your interior
                  surfaces. Cleans, shines, freshens, and shields against UV
                  damage. Medium shine with a non-greasy formula. Elevate your
                  detailing game to the pinnacle of perfection.
                </p>
              </div>
              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
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
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 -mx-4">
            <div className="md:col-span-7 col-span-12 px-4">
              <div>
                <h2 className=" text-[20px] font-bold mt-4">
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
                  and seats to prevent potential damage. In case of eye contact,
                  rinse thoroughly with water. Keep out of reach of children.
                </p>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 px-4 py-6">
              <SellerDetailBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
