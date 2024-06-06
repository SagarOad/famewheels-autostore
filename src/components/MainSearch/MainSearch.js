"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const MainSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const searchQueryFromUrl = searchParams.get("searchQuery") || "";
    setSearchQuery(searchQueryFromUrl);
  }, []);

  useEffect(() => {
    const updateUrl = () => {
      const queryParams = new URLSearchParams();
      if (searchQuery) {
        queryParams.set("searchQuery", searchQuery);
      } else {
        queryParams.delete("searchQuery");
      }
      const newUrl = `/MainPage?${queryParams.toString()}`;

      // Check if searchQuery is empty before redirecting
      if (searchQuery) {
        router.push(newUrl);
      }
    };

    updateUrl();
  }, [searchQuery]);

  const onSearch = (query) => {
    setSearchQuery(query);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <>
      <div className="main-search mb-12 h-auto px-6 md:px-12 py-36 flex justify-center items-center">
        <div>
          <h2 className=" text-[2.8rem] text-center font-[500] text-white">
            Find Your Auto Parts
          </h2>
          <p className=" text-white text-[16px]  ">
              Discover premium car auto parts at unbeatable prices – your
              one-stop shop for quality and reliability.
            </p>
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
                className="block w-full mt-4 focus:outline-none p-4 ps-10 h-14 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0"
                placeholder="Search Products"
                required
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-white absolute right-0 h-14 px-4 md:px-12 bottom-0 bg-[#20409a] focus:ring-4 focus:outline-none font-medium text-[16px] py-3"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <nav className="sm:flex sm:justify-center sm:items-center mt-4">
              <div class="flex flex-col sm:flex-row">
                <a
                  className="mt-3 text-white text-[14px] px-4 py-[1px] rounded-full  bg-[#ffffff5c] hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Brake Oil
                </a>
                <a
                  className="mt-3 text-white text-[14px] px-4 py-[1px] rounded-full  bg-[#ffffff5c] hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Tracker
                </a>
                <a
                  className="mt-3 text-white text-[14px] px-4 py-[1px] rounded-full  bg-[#ffffff5c] hover:underline sm:mx-3 sm:mt-0"
                  href="#"
                >
                  Seat Cover
                </a>
              </div>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default MainSearch;
