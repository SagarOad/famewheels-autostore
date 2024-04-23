import React from "react";
import ProductCard from "./ProductCard";

const ProductsCatalogue = ({ viewMode }) => {
  const productsData = {
    products: [
      {
        product_name: "RoadMax Interior Dressing & Protectant 500ml",
        price: "1,100",
        discount: "30%",
        description:
          "Sunshades will shield the skin from UV rays by absorbing the rays that come from the outside.",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9933/roadmax-interior-dressing-and-protectant-500ml-99330559.webp",
      },
      {
        product_name:
          "Microfiber Cloth 300 GSM Yellow and Grey 40x40 Pack of 5",
        price: "1,560",
        discount: "30%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9608/microfiber-cloth-300gsm-yellow-and-grey-pack-of-3-40x40-96083173.webp",
      },
      {
        product_name: "Motor Inside MPP Multi Purpose Protectant 5 Liter",
        price: "6,999",
        discount: "35%",
        image:
          "https://cache1.pakwheels.com/ad_pictures/9929/motor-inside-mpp-multi-purpose-protectant-5-liter-99298292.webp",
      },
      {
        product_name: "Universal Ket Guage Led Smoke Face Car Auto Tachometer",
        price: "6,800",
        discount: "90%",
        image:
          "https://cache3.pakwheels.com/ad_pictures/9950/universal-ket-guage-led-smoke-face-car-auto-tachometer-rpm-gauge-meter-with-holder-for-car-1-pc-99506582.webp",
      },
      {
        product_name: "Blindspot Rearview Convex Mirror - 2pcs",
        price: "341",
        discount: "43%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/9958/blindspot-rearview-convex-mirror-2pcs-99586222.webp",
      },
      {
        product_name:
          "Toyota Corolla GLi Xli Side Mirrors Adjustable Power Switch",
        price: "399",
        discount: "25%",
        image:
          "https://cache4.pakwheels.com/ad_pictures/9585/toyota-corolla-gli-xli-side-mirrors-adjustable-power-switch-95850359.webp",
      },
      {
        product_name:
          "Universal Front Parking Blind Spot Rear View Fender Mirror WHITE",
        price: "1,650",
        discount: "8%",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1291/toyota-fortuner-fender-mirror-12917694.jpg",
      },
      {
        product_name: "ProOne Motor Oil 5W30 API SP - 4L",
        price: "6,799",
        discount: "10%",
        image:
          "https://cache4.pakwheels.com/ad_pictures/9958/proone-motor-oil-5w30-api-sp-4l-99583116.webp",
      },
    ],
  };

  return (
    <>
      {viewMode === "grid" ? (
        <div className="flex flex-wrap">
          {productsData.products.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard product={product} viewMode={viewMode} />{" "}
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          {productsData.products.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard product={product} viewMode={viewMode} />{" "}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsCatalogue;
