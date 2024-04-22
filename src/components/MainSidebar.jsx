"use client";
import { Fragment, useState } from "react";

import ProductsCatalogue from "./ProductsCatalogue";
import SearchBox from "./SearchBox";
import SideFilters from "./SideFilters";

export default function MainSidebar({ viewMode }) {
  return (
    <div className="">
      <div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className=" grid grid-cols-10">
            <div className="md:col-span-2">
              <SideFilters />
            </div>
            <div className="md:col-span-8 pl-12">
              <ProductsCatalogue viewMode={viewMode} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
