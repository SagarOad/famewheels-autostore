"use client"

import React from "react";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import MainSidebar from "./MainSidebar";

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [filters, setFilters] = useState({
    Category: [
      "Category One",
      "Category Two",
      "Category Three",
      "Category Four",
    ],
    Make: [],
    Brand: [],
  });

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };
  return (
    <>
      <main className="mx-auto max-full px-4">
        <SearchBox toggleViewMode={toggleViewMode} />
        <MainSidebar viewMode={viewMode} filters={filters} setFilters={setFilters} />
      </main>
    </>
  );
};

export default MainSidebarWrapper;
