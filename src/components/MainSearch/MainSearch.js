"use client";
import React, { useState } from "react";

const MainSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };
  return (
    <>
      <div className="main-search mb-12 h-[500px] flex justify-center items-center">
        <div>
          <h2 className=" text-[2.8rem] text-center mb-4 font-bold text-white">
            Select Your Auto Part
          </h2>
          <div>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[380px] focus:outline-none p-4 ps-10 h-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0"
                placeholder="Search Products"
                required
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-white absolute right-0 h-12 bottom-0 bg-[#20409a] focus:ring-4 focus:outline-none font-medium text-[16px] px-6 py-3"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSearch;
