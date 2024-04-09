import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 ">
        <div class="max-w-[1600px] flex flex-wrap py-8 items-center justify-between mx-auto">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.famewheels.com/static/media/fame-wheels-logo.bdbcd17588780f149f99.png"
              class="h-10"
              alt="Flowbite Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white  md: ">
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Autostore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
