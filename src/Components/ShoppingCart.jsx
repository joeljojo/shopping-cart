import { useState, useEffect } from "react";
import Button from "./Button";
import Product from "./Product";
import Search from "./Search";
import productsApi from "../Services/index";
import Categories from "./Categories";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        let data;
        if (category) {
          data = await productsApi.fetchProductsByCategory(category);
        } else {
          data = await productsApi.fetchProducts();
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div>
      <Search />
      <Categories category={category} setCategory={setCategory} />
      <Button>My Cart</Button>
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ShoppingCart;
