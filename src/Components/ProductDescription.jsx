import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../Services";
import Button from "./Button";
import CartContext from "./Context/CartContext";

const ProductDescription = () => {
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  const getProductById = async () => {
    const data = await productsApi.fetchProductById(id);
    setProduct(data);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <div>
      <img src={product.image} alt={`Photo of ${product.title}`} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>&#36; {product.price}</p>
      <Button onClick={() => handleAddToCart(product)}>Add To Cart</Button>
    </div>
  );
};
export default ProductDescription;
