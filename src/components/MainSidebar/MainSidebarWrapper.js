"use client";
import React, { useState, useEffect } from "react";
import SearchBox from "../SearchBox/SearchBox";
import MainSidebar from "./MainSidebar";
import axios from "axios";
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");


  const categories = [
    {
      category_id: 5,
      category_name: "brakes cssssdd",
      status_id: 1,
      created_at: "2024-05-22 03:15:34",
      subcategories: [
        {
          id: 1,
          subcategory_name: "brakes1",
          category_id: 5,
          status_id: 1,
          created_at: "2024-05-23 06:50:21"
        },
        {
          id: 3,
          subcategory_name: "pad bralkesddd",
          category_id: 5,
          status_id: 1,
          created_at: "2024-05-23 06:57:25"
        }
      ]
    },
    {
      category_id: 6,
      category_name: "brakes",
      status_id: 1,
      created_at: "2024-04-29 12:33:06",
      subcategories: [
        {
          id: 2,
          subcategory_name: "pad bralkes",
          category_id: 6,
          status_id: 1,
          created_at: "2024-05-23 06:50:42"
        }
      ]
    },
    {
      category_id: 9,
      category_name: "brakes",
      status_id: 1,
      created_at: "2024-05-23 06:49:23",
      subcategories: []
    }
  ];

  

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
        categories={categories}
        searchQuery={searchQuery} // Pass searchQuery to MainSidebar
      />
    </main>
  );
};

export default MainSidebarWrapper;
