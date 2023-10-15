import { Link } from "react-router-dom";
import Button from "./Button";

const Product = ({ product }) => {
  return (
    <Link to={`product/${product.id}`}>
      <div>
        <img src={product.image} alt={`Photo of ${product.title}`} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <Button>Buy</Button>
      </div>
    </Link>
  );
};
export default Product;
