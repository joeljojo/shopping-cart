import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";

const Product = ({ product }) => {
  const navigate = useNavigate();
  const handleBuy = () => {
    navigate(`product/${product.id}`);
  };
  return (
    <Link to={`product/${product.id}`}>
      <div>
        <img src={product.image} alt={`Photo of ${product.title}`} />
        <h3>{product.title}</h3>
        <p>{product.price}</p>
        <Button onClick={handleBuy}>Buy</Button>
      </div>
    </Link>
  );
};
export default Product;
