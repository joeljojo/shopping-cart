import { useState, useEffect } from "react";
import Product from "./Product";
import Search from "./Search";
import productsApi from "../Services/index";
import Categories from "./Categories";
import CartButton from "./CartButton";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // const getProductsBySearchQuery = async (query) => {
  //   const result = products.filter((product) =>
  //     product.title
  //       ?.split(" ")
  //       .some((word) => word.toLowerCase().includes(query.toLowerCase()))
  //   );
  //   return result;
  // };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let data;
        if (selectedCategory) {
          data = await productsApi.fetchProductsByCategory(selectedCategory);
        } else if (searchQuery) {
          // Fetch all results because you search through all products
          // and not of a particular category
          data = await productsApi.fetchProducts();
        } else {
          data = await productsApi.fetchProducts();
        }
        // Filter the data based on the search query
        if (searchQuery) {
          data = data.filter((product) =>
            product.title
              ?.split(" ")
              .some((word) =>
                word.toLowerCase().includes(searchQuery.toLowerCase())
              )
          );
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <Search query={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <CartButton />
      {error && <p>{error.message}</p>}
      {products?.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ShoppingCart;
