import { Store } from "lucide-react";
import { useRouter } from "next/router";
import { useContext } from "react";

const prices = [
  {
    name: "100 to 500",
    value: "1-50",
  },
  {
    name: "500 to 1000",
    value: "1-50",
  },
  {
    name: "1000 to 2000",
    value: "1-50",
  },
];

const ratings = [1, 2, 3, 4, 5];

export default function Search(props) {
  const router = useRouter();

  const {
    query = "all",
    category = "all",
    make = "all",
    brand = "all",
    sort = "featured",
    page = 1,
  } = router.query;

  const { products, countProducts, categories, makes, brands, pages } = props;

  const filterSearch = ({
    page,
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating,
  }) => {
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };
  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };
  const pageHandler = (e) => {
    filterSearch({ page: e.target.value });
  };
  const makeHandler = (e) => {
    filterSearch({ make: e.target.value });
  };
  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value });
  };
  const sortHandler = (e) => {
    filterSearch({ sort: e.target.value });
  };
  const priceHandler = (e) => {
    filterSearch({ category: e.target.value });
  };

  const { state, dispatch } = useContext(Store);
  const categoryFilter = category && category !== "all" ? { category } : {};
  const makeFilter = make && make !== "all" ? { make } : {};
}
