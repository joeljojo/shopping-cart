import { useState, useEffect } from "react";
import Button from "./Button";
import Product from "./Product";
import Search from "./Search";
import productsApi from "../Services/index";
import Categories from "./Categories";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const getProductsBySearchQuery = async (query) => {
    const result = products.filter((product) =>
      product.title
        ?.split(" ")
        .some((word) => word.toLowerCase().includes(query.toLowerCase()))
    );
    return result;
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        let data;
        if (selectedCategory) {
          data = await productsApi.fetchProductsByCategory(selectedCategory);
        } else if (searchQuery) {
          data = await getProductsBySearchQuery(searchQuery);
        } else {
          data = await productsApi.fetchProducts();
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    getProducts();
  }, [selectedCategory, searchQuery]);

  return (
    <div>
      <Search query={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Button>My Cart</Button>
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ShoppingCart;
