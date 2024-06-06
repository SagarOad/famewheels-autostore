"use client";
import React, { useState, useEffect, Suspense } from "react";
import axios from "axios";
import SearchBox from "../SearchBox/SearchBox";
import MainSidebar from "./MainSidebar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const MainSidebarWrapper = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [makes, setMakes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedMakes, setSelectedMakes] = useState([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get(`${BASE_URL}/product-sub-categories`);
        const brandResponse = await axios.get(`${BASE_URL}/brand-list`);
        const makeResponse = await axios.get(`${BASE_URL}/byMake`);
        setCategories(categoryResponse?.data?.product_subCategories || []);
        setBrands(brandResponse?.data[1]?.data || []);
        setMakes(makeResponse?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const subcategoriesFromUrl = searchParams.get("subcategories")?.split(",") || [];
    const brandsFromUrl = searchParams.get("brands")?.split(",") || [];
    const makesFromUrl = searchParams.get("makes")?.split(",") || [];
    const searchQueryFromUrl = searchParams.get("searchQuery") || "";

    setSelectedSubcategories(subcategoriesFromUrl);
    setSelectedBrands(brandsFromUrl);
    setSelectedMakes(makesFromUrl);
    setSearchQuery(searchQueryFromUrl);
  }, []);

  useEffect(() => {
    const updateUrl = () => {
      const queryParams = new URLSearchParams();
      if (selectedSubcategories.length > 0) {
        queryParams.set("subcategories", selectedSubcategories.join(","));
      } else {
        queryParams.delete("subcategories");
      }
      if (selectedBrands.length > 0) {
        queryParams.set("brands", selectedBrands.join(","));
      } else {
        queryParams.delete("brands");
      }
      if (selectedMakes.length > 0) {
        queryParams.set("makes", selectedMakes.join(","));
      } else {
        queryParams.delete("makes");
      }
      if (searchQuery) {
        queryParams.set("searchQuery", searchQuery);
      } else {
        queryParams.delete("searchQuery");
      }
      const newUrl = `/MainPage?${queryParams.toString()}`;
      router.push(newUrl);
    };

    updateUrl();
  }, [selectedSubcategories, selectedBrands, selectedMakes, searchQuery]);

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === "grid" ? "list" : "grid"));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (subcategories, brands, makes) => {
    setSelectedSubcategories(subcategories);
    setSelectedBrands(brands);
    setSelectedMakes(makes);
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
        makes={makes}
        searchQuery={searchQuery}
        onFilterChange={handleFilterChange}
        selectedSubcategories={selectedSubcategories}
        selectedBrands={selectedBrands}
        selectedMakes={selectedMakes}
      />
    </main>

  );
};

export default MainSidebarWrapper;
