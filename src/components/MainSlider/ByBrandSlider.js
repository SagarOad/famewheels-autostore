import Image from "next/image";
import React from "react";
import Slider from "react-slick";

import brand1 from "@/assets/brands-logo/asuki.png";
import brand2 from "@/assets/brands-logo/bullsone.png";
import brand3 from "@/assets/brands-logo/mk.png";
import brand4 from "@/assets/brands-logo/Denso-Logo.jpg";
import brand5 from "../../assets/brands-logo/TYC.png";
import Link from "next/link";

// import asuki from "@/assets/brands-logo/asuki.webp";
// import mk from "@/assets/brands-logo/mk.webp";
// import denso from "@/assets/brands-logo/denso.webp";
// import bullsone from "@/assets/brands-logo/bullsone.jpg";

const ByBrandSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" my-12">
      <div className=" flex justify-between mb-4 items-center">
        <div>
          <h2 className=" text-[1.5rem] font-[600] px-2 py-2 text-black">
            Shop Auto Parts by Leading Brands
          </h2>
        </div>
        <div className=" flex justify-center items-center px-2">
          <Link href="/MainPage">
            <button className=" bg-[#000000] rounded-md mt-2 mx-auto md:text-[16px] text-[16px] text-white px-8 py-2">
              View More
            </button>
          </Link>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="p-2">
            <div className="group flex flex-col rounded-2xl justify-center items-center border-4   p-4 h-[250px] transition-all duration-300 ease-in-out bg-gradient-to-r from-[#b80505b5] to-[#20409a]">
              <Image
                className="w-[140px] bg-white p-2 rounded-3xl mx-auto mb-10 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={brand1}
              />
            </div>
          </div>

          <div className=" p-2">
            <div className="group flex flex-col rounded-2xl justify-center items-center border-4   p-4 h-[250px] transition-all duration-300 ease-in-out  bg-gradient-to-r from-[#b80505b5] to-[#20409a]">
              <Image
                className=" w-[120px] bg-white py-2 px-5 rounded-3xl mx-auto mb-10 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={brand3}
              />
              {/* <Image src={mk} /> */}
            </div>
          </div>
          <div className=" p-2">
            <div className=" group flex flex-col rounded-2xl justify-center items-center border-4   p-4 h-[250px] transition-all duration-300 ease-in-out bg-gradient-to-r from-[#b80505b5] to-[#20409a]">
              <Image
                className="  w-[140px] bg-white p-2 rounded-3xl mx-auto mb-10 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={brand4}
              />
              {/* <Image src={denso} /> */}
            </div>
          </div>
          <div className=" p-2">
            <div className=" group flex flex-col rounded-2xl justify-center items-center border-4   p-4 h-[250px] transition-all duration-300 ease-in-out  bg-gradient-to-r from-[#b80505b5] to-[#20409a]">
              <Image
                className="  w-[130px] bg-white p-2 rounded-3xl mx-auto mb-10 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={brand5}
              />
              {/* <Image src={brand5} /> */}
            </div>
          </div>
          <div className=" p-2">
            <div className="group flex flex-col rounded-2xl justify-center items-center border-4   p-4 h-[250px] transition-all duration-300 ease-in-out bg-gradient-to-r from-[#b80505b5] to-[#20409a]">
              <Image
                className="w-[140px] bg-white p-2 rounded-3xl mx-auto mb-10 mt-3 transform transition-transform duration-300 ease-in-out group-hover:scale-125"
                src={brand2}
              />
              {/* <Image src={bullsone} /> */}
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ByBrandSlider;
