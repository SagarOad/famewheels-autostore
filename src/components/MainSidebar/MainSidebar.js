"use client";
import { useState } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import SideFilters from "./SideFilters";

export default function MainSidebar({ viewMode, categories, brands, searchQuery }) {
  const [cartItems, setCartItems] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log("Product added to cart");
  };

  const handleFilterChange = (subcategories, brands) => {
    setSelectedSubcategories(subcategories);
    setSelectedBrands(brands);
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
              <SideFilters
                categories={categories}
                brands={brands}
                onFilterChange={handleFilterChange}
              />
            </div>
            <div className="md:col-span-8 pl-12">
              <ProductsCatalogue
                viewMode={viewMode}
                addToCart={addToCart}
                subcategories={selectedSubcategories}
                brands={selectedBrands}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
