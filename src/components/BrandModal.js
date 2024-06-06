import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const BrandModal = ({ selectedBrands, onBrandChange }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/brand-list`)
      .then((response) => {
        setBrands(response?.data[1]?.data || []);
      })
      .catch((error) => {
        console.error("Error fetching brands:", error);
      });
  }, []);

  return (
    <div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Select Brand</h2>
        <div className="mb-4">
          <div className="grid grid-cols-2 h-[500px] overflow-y-scroll p-4 gap-4 mt-2">
            {brands?.map((brand) => (
              <label
                key={brand.brand_id}
                className="flex items-center space-x-2"
              >
                <input
                  type="checkbox"
                  className="form-checkbox"
                  checked={selectedBrands.includes(brand.brand_name)}
                  onChange={() => onBrandChange(brand.brand_name)}
                />
                <span>{brand.brand_name}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
