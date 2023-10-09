import { useState, useEffect } from "react";
import Button from "./Button";
import Product from "./Product";
import Search from "./Search";
import productsApi from "../Services/index";

const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const getProducts = async () => {
    try {
      const data = await productsApi.fetchProducts();
      setProducts(data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Search />
      <Button>My Cart</Button>
      {error && <p>{error.message}</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ShoppingCart;
