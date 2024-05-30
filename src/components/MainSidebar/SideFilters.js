"use client";
import React, { useState, useEffect } from "react";

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

  return (
    <div className="space-y-4">
      <h2 className="font-bold">Categories</h2>
      {categories.map((category) => (
        <div
          onClick={() => toggleCategory(category.category_id)}
          key={category.category_id}
          className="border p-2 cursor-pointer select-none"
        >
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <span className="ml-2">
                {category.category_name || "Unnamed Category"}
              </span>
            </label>
            {category.subcategories.length > 0 && (
              <button onClick={() => toggleCategory(category.category_id)}>
                {openCategory === category.category_id ? "-" : "+"}
              </button>
            )}
          </div>
          {openCategory === category.category_id && (
            <div className="pl-4 mt-2 space-y-2">
              {category.subcategories.map((subcategory) => (
                <label key={subcategory.id} className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    value={subcategory.subcategory_name}
                    onChange={() =>
                      handleSubcategoryChange(subcategory.subcategory_name)
                    }
                    checked={localSelectedSubcategories.includes(
                      subcategory.subcategory_name
                    )}
                    disabled={!subcategory.subcategory_name}
                  />
                  <span className="ml-2">
                    {subcategory.subcategory_name || "Unnamed Subcategory"}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}

      <h2 className="font-bold mt-4">Brands</h2>
      {brands.map((brand) => (
        <div key={brand.brand_id} className="border p-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value={brand.brand_name}
              onChange={() => handleBrandChange(brand.brand_name)}
              checked={localSelectedBrands.includes(brand.brand_name)}
            />
            <span className="ml-2">{brand.brand_name}</span>
          </label>
        </div>
      ))}

      <h2 className="font-bold mt-4">Makes</h2>
      {makes.map((make) => (
        <div key={make.makeId} className="border p-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              value={make.makeName}
              onChange={() => handleMakeChange(make.makeName)}
              checked={localSelectedMakes.includes(make.makeName)}
            />
            <span className="ml-2">{make.makeName}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default SideFilters;
