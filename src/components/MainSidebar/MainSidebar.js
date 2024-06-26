"use client";
import { useState } from "react";
import ProductsCatalogue from "./ProductsCatalogue";
import SideFilters from "./SideFilters";

export default function MainSidebar({
  viewMode,
  categories,
  brands,
  makes,
  searchQuery,
  onFilterChange,
  selectedSubcategories,
  selectedBrands,
  selectedMakes,
}) {
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
            <div className="md:col-span-2 col-span-12">
              <SideFilters
                categories={categories}
                brands={brands}
                makes={makes}
                onFilterChange={onFilterChange}
                selectedSubcategories={selectedSubcategories}
                selectedBrands={selectedBrands}
                selectedMakes={selectedMakes}
              />
            </div>
            <div className="md:col-span-8 col-span-12 md:pl-12">
              <ProductsCatalogue
                viewMode={viewMode}
                addToCart={addToCart}
                subcategories={selectedSubcategories}
                brands={selectedBrands}
                makes={selectedMakes}
                searchQuery={searchQuery}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
