import React, { Fragment, useState, useEffect } from "react";

const SideFilters = ({ categories, onFilterChange }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  const handleSubcategoryChange = (subcategoryId) => {
    setSelectedSubcategories((prevSubcategories) => {
      return prevSubcategories.includes(subcategoryId)
        ? prevSubcategories.filter((id) => id !== subcategoryId)
        : [...prevSubcategories, subcategoryId];
    });
  };

  useEffect(() => {
    onFilterChange(selectedSubcategories);
  }, [selectedSubcategories, onFilterChange]);

  return (
    <div className="space-y-4">
      <h2 className=" font-bold">Categories</h2>
      {categories.map((category) => (
        <div key={category.category_id} className="border p-2">
          <div className="flex justify-between items-center">
            <label className="flex items-center">
              <span className="ml-2">{category.category_name || 'Unnamed Category'}</span>
            </label>
            {category.subcategories.length > 0 && (
              <button onClick={() => toggleCategory(category.category_id)}>
                {openCategory === category.category_id ? '-' : '+'}
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
                    onChange={() => handleSubcategoryChange(subcategory.id)}
                    checked={selectedSubcategories.includes(subcategory.id)}
                    disabled={!subcategory.subcategory_name}
                  />
                  <span className="ml-2">{subcategory.subcategory_name || 'Unnamed Subcategory'}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideFilters;
