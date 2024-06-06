import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../ProductCard/ProductCard";
import somethingWrong from "../../assets/cross.png";
import Image from "next/image";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const ProductsCatalogue = ({
  viewMode,
  addToCart,
  brands,
  makes,
  subcategories,
  searchQuery,
}) => {
  const [productsData, setProductsData] = useState([]);
  const [imagepath, setImagePath] = useState("");
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  useEffect(() => {
    let timeoutId;
    const fetchData = async (page) => {
      try {
        const params = new URLSearchParams();

        subcategories?.forEach((subcategory) =>
          params.append("subcategory_name[]", subcategory)
        );
        brands?.forEach((brand) => params.append("brand_name[]", brand));
        makes?.forEach((make) => params.append("make_name[]", make));
        if (searchQuery) {
          params.append("product_name", searchQuery);
        }
        params.append("page", page);

        const response = await axios.post(`${BASE_URL}/product-filter`, params);
        console.log("API Response:", response?.data);

        const postsData = response?.data?.posts?.data;
        const totalPages = response?.data?.posts?.last_page;
        if (Array.isArray(postsData)) {
          setProductsData(postsData);
          console.log("Products data fetched:", postsData);
        } else {
          console.error(
            "Expected an array for products data but got:",
            postsData
          );
          setProductsData([]);
        }

        setImagePath(response?.data?.imagepath);
        setLastPage(totalPages || 1);
        clearTimeout(timeoutId);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    timeoutId = setTimeout(() => {
      setError(true);
    }, 5000);

    fetchData(currentPage);

    return () => clearTimeout(timeoutId);
  }, [subcategories, brands, makes, searchQuery, currentPage]);

  console.log("Current productsData:", productsData);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (error) {
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div>
          <Image
            className="w-[150px] mx-auto mt-6"
            src={somethingWrong}
            alt="Something went wrong"
          />
          <h2 className="font-bold text-[22px]">Something went wrong!!</h2>
        </div>
      </div>
    );
  }

  if (!Array.isArray(productsData) || !productsData.length) {
    console.log("Data not available, productsData:", productsData);
    return (
      <div className="h-[100%] w-full flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      {viewMode === "grid" ? (
        <div className="flex flex-wrap">
          {productsData.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
                imagepath={imagepath}
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          {productsData.map((product, index) => (
            <div key={index} className="m-2">
              <ProductCard
                product={product}
                viewMode={viewMode}
                addToCart={addToCart}
                imagepath={imagepath}
              />
            </div>
          ))}
        </div>
      )}
      <div className="pagination mt-4 text-[16px] flex justify-center space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 bg-[#20409a] text-white rounded"
          >
            Previous
          </button>
        )}
        {Array.from({ length: lastPage }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-[#b80505] text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
        {currentPage < lastPage && (
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-[#20409a] text-white rounded hover:[#20409a]"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default ProductsCatalogue;
