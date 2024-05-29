import React from "react";

// import { FaFacebookF } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="lg:px-14 px-8 pt-12 pb-14 footer bg-[#efefef]">
        <div className=" max-w-[1350px] mx-auto">
          <div className="grid grid-cols-12 mb-10 border-b-2 border-[#a3a3a36f]">
            <div className=" col-span-4 mb-6 flex items-center">
              <img
                src="https://www.famewheels.com/static/media/fame-wheels-logo.bdbcd17588780f149f99.png"
                className=" h-16"
                alt="Famewheels logo"
              />
            </div>
            <div className=" lg:col-span-4 mb-6 col-span-12 footer-social-icons flex lg:justify-center items-center">
              {/* <ul className=" flex justify-center items-center">
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/fameitechllc"
                  >
                    <FaFacebookF className=" text-[20px] text-white" />
                  </a>
                </li>
          
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/fameitech-llc"
                  >
                    <FaLinkedinIn className=" text-[20px] text-white" />
                  </a>
                </li>
                <li className=" bg-primary rounded-full mx-1 p-4 flex justify-center items-center">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fameitechllc/"
                  >
                    {" "}
                    <FaInstagram className=" text-[20px] text-white" />
                  </a>
                </li>
              </ul> */}
            </div>
            <div className=" lg:col-span-4 mb-6 col-span-12 flex lg:justify-end items-center">
              <div className="">
                <p className=" text-[#000000] font-[22px]">GIVE US A CALL</p>
                <h2 className=" text-[28px] font-bold">+1 302-501-7152</h2>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-12">
            <div className=" lg:col-span-4 sm:col-span-6 col-span-12 mr-24">
              <p className=" text-[20px]">
              FameWheels is a one-stop-shop for all your automobile related needs
              </p>
              <div className=" mt-20 flex">
                <Link
                  href={"/terms-conditions"}
                  className="text-[#000000] text-[14px] border-b-[2px] hover:border-[#000000] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                >
                  Terms and Conditions{" "}
                </Link>
                <p className=" text-[#00000072] mx-4">|</p>
                <Link
                  href={"/privacy-policy"}
                  className="text-[#000000] text-[14px] border-b-[2px] hover:border-[#000000] border-transparent cursor-pointer p-0 m-0 transition-all ease-in-out"
                >
                  {" "}
                  Privacy Policy{" "}
                </Link>
              </div>
            </div>

            <div className=" lg:col-span-4 sm:col-span-6 pl-24 col-span-12">
              <h2 className=" text-[26px] font-[800] mb-8">Quick Links</h2>
              <ul>
                <li className=" flex items-center text-[20px] cursor-pointer border-b-[1px] p-1 border-transparent hover:border-primary w-fit">
                  Categories
                </li>
                <li className=" flex items-center text-[20px] cursor-pointer border-b-[1px] p-1 border-transparent hover:border-primary w-fit">
                  Brands
                </li>
                <li className=" flex items-center text-[20px] cursor-pointer border-b-[1px] p-1 border-transparent hover:border-primary w-fit">
                  Make
                </li>
              </ul>
            </div>

            <div className=" lg:col-span-4 sm:col-span-6 col-span-12">
              <h2 className=" text-[26px] font-[800] mb-8">Contact</h2>
              <ul>
                <li className=" flex items-center text-[20px] mb-4">
                214, The Plaza, Clifton Block 9,Karachi, Pakistan.
                </li>
                <li className=" flex text-[20px] items-center mb-4">support@famewheels.com</li>
                <li className=" flex text-[20px] items-center mb-2">03001113263</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
