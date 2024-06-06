import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const ByMakeSlider = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
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
      <div className="flex justify-between mb-4 items-center">
        <div>
          <h2 className=" text-[1.5rem] font-[600] px-2 py-2 text-black">
            Shop Auto Parts by Vehicle Make
          </h2>
        </div>
        <div className=" flex justify-center items-center px-2">
          <Link href="/MainPage">
            <button className=" bg-[#000000] rounded-md mt-2 mx-auto text-[16px] text-white px-8 py-2">
              View More
            </button>
          </Link>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" p-2">
            <Link href="/MainPage?makes=Toyota">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[100px]"
                  src="https://gallery.famewheels.com/images/makeLogos/toyota-logos-brands-10.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="/MainPage?makes=Suzuki">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[100px]"
                  src="https://gallery.famewheels.com/images/makeLogos/1280px-Suzuki_logo_2.svg.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="/MainPage?makes=Honda">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[100px]"
                  src="https://gallery.famewheels.com/images/makeLogos/honda-logo-png-picture-20.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="/MainPage?makes=Daihatsu">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[100px]"
                  src="https://gallery.famewheels.com/images/makeLogos/daihatsu-logo-A6249D607C-seeklogo.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="http://localhost:4000/MainPage?makes=KIA">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[120px]"
                  src="https://gallery.famewheels.com/images/makeLogos/KIA_logo2.svg.png"
                />
              </div>
            </Link>
          </div>

          <div className=" p-2">
            <Link href="MainPage?makes=Peugeot">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[160px]"
                  src="https://gallery.famewheels.com/images/makeLogos/pngimg.com%20-%20peugeot_PNG36.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="MainPage?makes=Hyundai">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[160px]"
                  src="https://gallery.famewheels.com/images/makeLogos/580b57fcd9996e24bc43c482.png"
                />
              </div>
            </Link>
          </div>
          <div className=" p-2">
            <Link href="/MainPage?makes=Haval">
              <div className=" flex flex-col justify-center items-center border-4 border-[#20419a42] p-4 h-[200px]">
                <img
                  className=" w-[160px]"
                  src="https://gallery.famewheels.com/images/makeLogos/Haval-logo-1366x768.png"
                />
              </div>
            </Link>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ByMakeSlider;
