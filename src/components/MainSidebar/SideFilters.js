"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import MakeModal from "../MakeModal";
import BrandModal from "../BrandModal";

const SideFilters = ({
  categories,
  onFilterChange,
  brands,
  makes,
  selectedSubcategories,
  selectedBrands,
  selectedMakes,
}) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [localSelectedSubcategories, setLocalSelectedSubcategories] = useState(
    selectedSubcategories
  );
  const [localSelectedBrands, setLocalSelectedBrands] =
    useState(selectedBrands);
  const [localSelectedMakes, setLocalSelectedMakes] = useState(selectedMakes);
  const [isMakeModalOpen, setIsMakeModalOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setLocalSelectedSubcategories((prevSubcategories) => {
      const updatedSubcategories = prevSubcategories.includes(subcategoryId)
        ? prevSubcategories.filter((id) => id !== subcategoryId)
        : [...prevSubcategories, subcategoryId];
      onFilterChange(
        updatedSubcategories,
        localSelectedBrands,
        localSelectedMakes
      );
      return updatedSubcategories;
    });
  };

  const handleBrandChange = (brandId) => {
    setLocalSelectedBrands((prevBrands) => {
      const updatedBrands = prevBrands.includes(brandId)
        ? prevBrands.filter((id) => id !== brandId)
        : [...prevBrands, brandId];
      onFilterChange(
        localSelectedSubcategories,
        updatedBrands,
        localSelectedMakes
      );
      return updatedBrands;
    });
  };

  const handleMakeChange = (makeId) => {
    setLocalSelectedMakes((prevMakes) => {
      const updatedMakes = prevMakes.includes(makeId)
        ? prevMakes.filter((id) => id !== makeId)
        : [...prevMakes, makeId];
      onFilterChange(
        localSelectedSubcategories,
        localSelectedBrands,
        updatedMakes
      );
      return updatedMakes;
    });
  };

  useEffect(() => {
    setLocalSelectedSubcategories(selectedSubcategories);
    setLocalSelectedBrands(selectedBrands);
    setLocalSelectedMakes(selectedMakes);
  }, [selectedSubcategories, selectedBrands, selectedMakes]);

  const openMakeModal = () => {
    setIsMakeModalOpen(true);
  };

  const closeMakeModal = () => {
    setIsMakeModalOpen(false);
  };

  const openBrandModal = () => {
    setIsBrandModalOpen(true);
  };

  const closeBrandModal = () => {
    setIsBrandModalOpen(false);
  };

  return (
    <div className="space-y-6 p-4 border rounded-lg shadow-md bg-white">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-lg">Filter products</h2>
        <button onClick={() => onFilterChange([], [], [])} className="text-blue-500 hover:underline">
          Clear
        </button>
      </div>
      
      {categories.map((category) => (
        <div key={category.category_id} className="mb-4">
          <div 
            onClick={() => toggleCategory(category.category_id)} 
            className="flex justify-between items-center cursor-pointer py-2 border-b"
          >
            <span className="font-medium">{category.category_name || "Unnamed Category"}</span>
            {category.subcategories.length > 0 && (
              <button onClick={(e) => { e.stopPropagation(); toggleCategory(category.category_id); }} className="text-gray-600 hover:text-gray-800 focus:outline-none">
                {openCategory === category.category_id ? "-" : "+"}
              </button>
            )}
          </div>
          {openCategory === category.category_id && (
            <div className="pl-4 mt-2 space-y-2">
              {category.subcategories.map((subcategory) => (
                <label key={subcategory.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                    value={subcategory.subcategory_name}
                    onChange={() =>
                      handleSubcategoryChange(subcategory.subcategory_name)
                    }
                    checked={localSelectedSubcategories.includes(
                      subcategory.subcategory_name
                    )}
                    disabled={!subcategory.subcategory_name}
                  />
                  <span className="text-gray-700">{subcategory.subcategory_name || "Unnamed Subcategory"}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <div className="mb-4">
        <div className="flex justify-between items-center py-2 border-b">
          <h3 className="font-bold">Brand</h3>
        </div>
        <div className="mt-2 space-y-2">
          {brands.slice(0, 5).map((brand) => (
            <div key={brand.brand_id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                value={brand.brand_name}
                onChange={() => handleBrandChange(brand.brand_name)}
                checked={localSelectedBrands.includes(brand.brand_name)}
              />
              <span className="text-gray-700">{brand.brand_name}</span>
            </div>
          ))}
          {brands.length > 5 && (
            <button onClick={openBrandModal} className="text-blue-500 hover:underline text-sm">
              More
            </button>
          )}
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center py-2 border-b">
          <h3 className="font-bold">Makes</h3>
        </div>
        <div className="mt-2 space-y-2">
          {makes.slice(0, 5).map((make) => (
            <div key={make.makeId} className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 rounded"
                value={make.makeName}
                onChange={() => handleMakeChange(make.makeName)}
                checked={localSelectedMakes.includes(make.makeName)}
              />
              <span className="text-gray-700">{make.makeName}</span>
            </div>
          ))}
          {makes.length > 5 && (
            <button onClick={openMakeModal} className="text-blue-500 hover:underline text-sm">
              More
            </button>
          )}
        </div>
      </div>

      <Dialog open={isMakeModalOpen} onOpenChange={setIsMakeModalOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="max-w-[90%] md:max-w-[40%] p-4">
          <MakeModal
            makes={makes}
            selectedMakes={localSelectedMakes}
            onMakeChange={handleMakeChange}
          />
          <button onClick={closeMakeModal} className="mt-4 text-blue-500 hover:underline">
            Close
          </button>
        </DialogContent>
      </Dialog>

      <Dialog open={isBrandModalOpen} onOpenChange={setIsBrandModalOpen}>
        <DialogTrigger asChild>
          <div />
        </DialogTrigger>
        <DialogContent className="max-w-[90%] md:max-w-[40%] p-4">
          <BrandModal
            brands={brands}
            selectedBrands={localSelectedBrands}
            onBrandChange={handleBrandChange}
          />
          <button onClick={closeBrandModal} className="mt-4 text-blue-500 hover:underline">
            Close
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SideFilters;
