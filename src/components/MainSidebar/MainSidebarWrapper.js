"use client";
import React, { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import MainSidebar from "./MainSidebar";

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    Category: ["Category One", "Category Two", "Category Three", "Category Four"],
    Make: [],
    Brand: [],
  });

  const [searchQuery, setSearchQuery] = useState("");

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <main className="mx-auto max-full px-4">
      <SearchBox toggleViewMode={toggleViewMode} onSearch={handleSearch} />
      <MainSidebar
        viewMode={viewMode}
        filters={filters}
        setFilters={setFilters}
        searchQuery={searchQuery} // Pass searchQuery to MainSidebar
      />
    </main>
  );
};

export default MainSidebarWrapper;
