import React from "react";


const MainBanner = () => {
  return (
    <div>
      <div className=" rounded-3xl main-banner border-2 border-[#6c0202] px-14 py-14 grid">
        <div className=" col-span-3">
          <h2 className="text-[1.8rem] font-[500] tracking-tight text-[#ffffff]">
            Give your vehicle some love
          </h2>
          <p className=" text-[#ffffff] font-medium text-[18px]">Parts you need. Prices you want.</p>
        </div>
        <div className=" col-span-9"></div>
      </div>
    </div>
  );
};

export default MainBanner;
