import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Dialog, Disclosure, Transition } from "@headlessui/react";
import { XMarkIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const SideFilters = ({ filters, setFilters }) => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleFilterChange = (sectionId, optionValue) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };
      return newFilters;
    });
  };

  return (
    <>
      <div>
        <div className="py-3 px-4 bg-[#20409a]">
          <h2 className="font-medium text-white text-[16px]">
            SHOW RESULTS BY
          </h2>
        </div>
        <form className="hidden lg:block">
          {Object.entries(filters).map(([sectionId, section]) => (
            <Disclosure
              as="div"
              key={sectionId}
              className="border-b bg-white border-gray-200 py-6"
            >
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium px-4 text-[16px] text-gray-900">
                        {sectionId}
                      </span>
                      <span className="ml-6 flex items-center">
                        {open ? (
                          <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                          <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </h3>
                  <Disclosure.Panel className="pt-6">
                    <div className="space-y-4 px-4">
                      {section.map((option, optionIdx) => (
                        <div key={optionIdx} className="flex items-center">
                          <input
                            value={option}
                            type="checkbox"
                            onChange={() =>
                              handleFilterChange(sectionId, option)
                            }
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor={`filter-${sectionId}-${optionIdx}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>
      </div>
    </>
  );
};

SideFilters.propTypes = {
  filters: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default SideFilters;
