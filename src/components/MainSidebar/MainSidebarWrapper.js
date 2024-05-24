"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import MainSidebar from "./MainSidebar";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`${BASE_URL}/product-sub-categories`);
        const brandResponse = await axios.get(`${BASE_URL}/brand-list`, {
          headers: {
            Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZmFtZXdoZWVscy1iYWNrZW5kLnRlc3QvbG9naW4iLCJpYXQiOjE3MTU3ODIxODgsImV4cCI6MTc0NzMxODE4OCwibmJmIjoxNzE1NzgyMTg4LCJqdGkiOiJFdVFNVmVvWVpCelBVbWhmIiwic3ViIjoiMiIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.AVslxMDNwytRaYWpOaCKLbNRYd3jfBYUXEvwufGdRCM`,
          },
        });
        
        setCategories(categoryResponse?.data?.product_Categories || []);
        setBrands(brandResponse?.data?.data || []);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main className="mx-auto max-full px-4">
      <SearchBox toggleViewMode={toggleViewMode} onSearch={handleSearch} />
      <MainSidebar
        viewMode={viewMode}
        categories={categories}
        brands={brands}
        searchQuery={searchQuery}
      />
    </main>
  );
};

export default MainSidebarWrapper;
