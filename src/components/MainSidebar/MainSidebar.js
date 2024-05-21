"use client";
import { Fragment, useState } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import SideFilters from "./SideFilters";

export default function MainSidebar({ viewMode, filters, setFilters, searchQuery }) { // Accept searchQuery as a prop
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Product added to cart");
  };

  return (
    <div className="">
      <div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-10">
            <div className="md:col-span-2">
              <SideFilters filters={filters} setFilters={setFilters} />
            </div>
            <div className="md:col-span-8 pl-12">
              <ProductsCatalogue
                viewMode={viewMode}
                addToCart={addToCart}
                filters={filters}
                searchQuery={searchQuery} // Pass searchQuery prop here
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}