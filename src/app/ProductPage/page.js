import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <div class="antialiased">
      <div class="py-6">
        <div class=" px-4 sm:px-6 lg:px-8">
          <div class="flex items-center space-x-2 text-gray-400 text-sm">
            <a href="#" class="hover:underline hover:text-gray-600">
              Home
            </a>
            <span>
              <svg
                class="h-5 w-5 leading-none text-gray-300"
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
            <a href="#" class="hover:underline hover:text-gray-600">
              Electronics
            </a>
            <span>
              <svg
                class="h-5 w-5 leading-none text-gray-300"
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

        <div class=" px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    <span class="text-5xl">1</span>
                  </div>
                </div>

                <div class="flex -mx-2 mb-4"></div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-[#20409a] text-2xl md:text-3xl">
                RoadMax Interior Dressing & Protectant 500ml
              </h2>
              <p class="text-gray-500 text-sm">
                By{" "}
                <a href="#" class="text-[#20409a] hover:underline">
                  ABC Company
                </a>
              </p>

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-[#b8050521] flex py-2 px-3">
                    <span class="text-slate-900 text-2xl mr-1">PKR</span>
                    <span class="font-bold text-slate-900 text-3xl">1,100</span>
                  </div>
                </div>

                <div class="flex-1">
                  {/* <p class="text-green-500 text-xl font-semibold">Save 12%</p> */}
                  {/* <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p> */}
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
              <div class="flex py-4 space-x-4">
                <div class="relative">
                  <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
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
                  class="h-14 px-6 py-2 font-semibold bg-[#20409a] text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12">
            <div className=" col-span-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <h2 className=" text-[20px] font-bold mt-4">
                      Directions for Use
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul>
                      <li>
                        1. Begin by cleaning the surface with All-purpose
                        cleaner. Ensure the surface is free of dirt and grime.
                      </li>
                      <li>2. Shake the product well before use. .</li>
                      <li>
                        3. Spray directly onto an applicator or towel and apply
                        evenly onto the desired surface.
                      </li>
                      <li>
                        4. Spread the dressing over the entire workpiece,
                        ensuring thorough coverage.
                      </li>
                      <li>5. Allow the product to dry for a few minutes.</li>
                      <li>
                        6. Buff off any excess residue with a clean microfiber
                        towel.
                      </li>
                      <li>
                        7. Reapply as needed to achieve the desired level of
                        shine and protection.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    {" "}
                    <h2 className=" text-[20px] font-bold mt-4">
                      Tips for Optimal Results
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-900 text-[16px]">
                      Always work on a cool surface and in the shade to prevent
                      premature drying. Avoid applying the product to glass,
                      paint and seats to prevent potential damage. In case of
                      eye contact, rinse thoroughly with water. Keep out of
                      reach of children.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
