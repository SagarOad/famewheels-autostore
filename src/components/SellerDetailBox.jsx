import React from "react";

const SellerDetailBox = () => {
  return (
    <div className="">
      <div className="flex">
        <div className="flex">
          <div className=" border-[1px] border-black">
            <h2 className=" text-[20px] font-[400] py-3 border-b-2 text-center">
              Seller Detials
            </h2>
            <div className=" px-12">
              <div className=" flex justify-center items-center">
                <div>
                  <img
                    className=" w-[60px] mr-5"
                    src="https://fcache1.pakwheels.com/original/4X/9/4/8/948a620e5554ab2acc6975fbe515a1c81c408f77.jpg"
                  />
                </div>
                <div>
                  <h2 className="text-[#20409a] text-[14px]">Usman Motors</h2>
                  <a className="text-[14px]">More ads by Umar Motors</a>
                </div>
              </div>
            </div>
            <div>
              <div className=" flex justify-center pt-3 pb-4 items-center">
                <div className=" mx-2 bg-[#20409a] w-10 h-10 rounded-full flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <div className=" mx-2 bg-[#20409a] w-10 h-10 rounded-full flex justify-center items-center text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-[1px] border-black w-[300px] flex justify-center items-center">
          <div>Ad Space</div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetailBox;
