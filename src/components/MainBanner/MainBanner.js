import React from "react";


const MainBanner = () => {
  return (
    <div>
      <div className=" main-banner rounded-3xl px-14 py-20 grid">
        <div className=" col-span-3">
          <h2 className="text-[2.6rem] font-[700] tracking-tight text-white">
            Give your vehicle some love
          </h2>
          <p className=" text-white text-[22px]">Parts you need. Prices you want.</p>
        </div>
        <div className=" col-span-9"></div>
      </div>
    </div>
  );
};

export default MainBanner;
