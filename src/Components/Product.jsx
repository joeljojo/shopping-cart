import Button from "./Button";

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={`Photo of ${product.title}`} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <Button>Buy</Button>
    </div>
  );
};
export default Product;
