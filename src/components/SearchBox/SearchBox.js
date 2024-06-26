import { Fragment, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartItem from "../CartItem";

import {
  Dialog,
  Disclosure,
  Menu,
  Transition,
  Combobox,
} from "@headlessui/react";

import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const SearchBox = ({ toggleViewMode, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const sortOptions = [
    { name: "Most Popular", href: "#", current: true },
    { name: "Best Rating", href: "#", current: false },
    { name: "Newest", href: "#", current: false },
    { name: "Price: Low to High", href: "#", current: false },
    { name: "Price: High to Low", href: "#", current: false },
  ];

  return (
    <div>
      <div className="block lg:flex items-baseline justify-between border-b border-gray-200 pb-6 pt-8">
        <h1 className="md:text-3xl text-[22px] mb-2 font-[600] tracking-tight text-gray-900">
          Search Spare Parts
        </h1>

        <div className="flex items-center justify-between">
          <div className="md:mr-16 mr-6">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
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
                className="block md:w-[380px] w-[260px] p-4 ps-10 md:h-12 h-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0"
                placeholder="Search Products"
                required
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="text-white absolute right-0 md:h-12 h-8 bottom-0 bg-[#20409a] focus:ring-4 focus:outline-none font-medium md:text-[16px] text-[14px] px-6  md:py-3"
                onClick={handleSearch} // Attach handleSearch to button
              >
                Search
              </button>
            </div>
          </div>
          {/* <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="group inline-flex justify-center font-medium px-4 text-[18px] text-gray-900">
                Sort
                <ChevronDownIcon
                  className="-mr-1 ml-1 h-6 w-6 flex-shrink-0 text-gray-900 group-hover:text-gray-500"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {sortOptions.map((option) => (
                    <Menu.Item key={option.name}>
                      {({ active }) => (
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          {option.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu> */}

          <div>
            <button
              type="button"
              onClick={toggleViewMode}
              className="-m-2 md:ml-5 p-2 text-gray-900 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <Squares2X2Icon className="h-8 w-8" aria-hidden="true" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
