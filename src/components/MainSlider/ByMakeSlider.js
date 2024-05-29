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
      <div className="bg-[#20409a]">
        <h2 className=" text-[2rem] font-bold px-6 py-2 text-white">
          PARTS BY MAKE
        </h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[100px]"
                src="https://gallery.famewheels.com/images/makeLogos/toyota-logos-brands-10.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[100px]"
                src="https://gallery.famewheels.com/images/makeLogos/1280px-Suzuki_logo_2.svg.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[100px]"
                src="https://gallery.famewheels.com/images/makeLogos/honda-logo-png-picture-20.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[100px]"
                src="https://gallery.famewheels.com/images/makeLogos/daihatsu-logo-A6249D607C-seeklogo.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[120px]"
                src="https://gallery.famewheels.com/images/makeLogos/KIA_logo2.svg.png"
              />
            </div>
          </div>

          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[160px]"
                src="https://gallery.famewheels.com/images/makeLogos/pngimg.com%20-%20peugeot_PNG36.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[160px]"
                src="https://gallery.famewheels.com/images/makeLogos/580b57fcd9996e24bc43c482.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[160px]"
                src="https://gallery.famewheels.com/images/makeLogos/Haval-logo-1366x768.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[140px]"
                src="https://gallery.famewheels.com/images/makeLogos/Changan-Logo%20(1).png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[105px]"
                src="https://gallery.famewheels.com/images/makeLogos/dfsk-logo-90571CBC30-seeklogo.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[120px]"
                src="https://gallery.famewheels.com/images/makeLogos/MG.png"
              />
            </div>
          </div>
          <div className=" p-2">
            <div className=" flex flex-col justify-center items-center border-2 p-4 h-[200px]">
              <img
                className=" w-[130px]"
                src="https://gallery.famewheels.com/images/makeLogos/audi-logo-1995-download.png"
              />
            </div>
          </div>
        </Slider>
        <div className=" flex justify-center items-center">
          <button className=" bg-[#5c88ff] mx-auto mt-2 text-[20px] text-white px-12 py-2">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ByMakeSlider;
