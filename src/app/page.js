"use client";
import CategoryGrid from "@/components/CategoryGrid";
import MainSearch from "@/components/MainSearch/MainSearch";
import ByBrandSlider from "@/components/MainSlider/ByBrandSlider";
import ByMakeSlider from "@/components/MainSlider/ByMakeSlider";
import FeaturedProducts from "@/components/FeaturedProducts";
import MainSlider from "@/components/MainSlider/MainSlider";
import React, { useState } from "react";

const page = () => {

  return (
    <div className="">
      <MainSearch />
      <div className="max-w-[1350px] px-8 md:px-0 mx-auto">
        <ByBrandSlider />   
        <ByMakeSlider />
        <MainSlider />    
        <div className="text-[1.8rem] font-[600] px-2 py-2 text-black">
          <h2 className="mb-4 px-2 text-[1.5rem] my-8">Explore Products</h2>
          <FeaturedProducts />
        </div>
        <CategoryGrid />
      </div>
    </div>
  );
};

export default page;
