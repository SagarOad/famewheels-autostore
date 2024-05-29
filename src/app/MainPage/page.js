"use client";
import MainSearch from "@/components/MainSearch/MainSearch";
// import ProductsCatalogue from "@/components/MainSidebar/ProductsCatalogue";
import ByBrandSlider from "@/components/MainSlider/ByBrandSlider";
import ByMakeSlider from "@/components/MainSlider/ByMakeSlider";
import MainSlider from "@/components/MainSlider/MainSlider";
import SearchBox from "@/components/SearchBox/SearchBox";
import React, { useState } from "react";

const page = () => {
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="">
      <MainSearch />
      <div className="max-w-[1350px] mx-auto">
        <MainSlider />
        <div className="">
          {/* <ProductsCatalogue viewMode={viewMode} /> */}
        </div>
        <ByBrandSlider />
        <ByMakeSlider />
      </div>
    </div>
  );
};

export default page;
