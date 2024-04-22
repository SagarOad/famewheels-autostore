"use client"

import React from "react";
import { useState } from "react";
import SearchBox from "./SearchBox";
import MainSidebar from "./MainSidebar";

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };
  return (
    <>
      <main className="mx-auto max-full px-4">
        <SearchBox toggleViewMode={toggleViewMode} />
        <MainSidebar viewMode={viewMode} />
      </main>
    </>
  );
};

export default MainSidebarWrapper;
