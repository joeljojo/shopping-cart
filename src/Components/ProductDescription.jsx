import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productsApi from "../Services";
import Button from "./Button";

const ProductDescription = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    const data = await productsApi.fetchProductById(id);
    setProduct(data);
  };

  const handleAddToCart = () => {};

  useEffect(() => {
    getProductById(id);
  }, []);

  return (
    <div>
      <img src={product.image} alt={`Photo of ${product.title}`} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>&#36; {product.price}</p>
      <Button onClick={handleAddToCart}>Add To Cart</Button>
    </div>
  );
};
export default ProductDescription;
