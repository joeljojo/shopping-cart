import { useContext } from "react";
import Button from "./Button";
import CartContext from "./Context/CartContext";
const CartDetails = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <h1>Shopping Cart</h1>
        {cartItems.map((cartItem) => (
          <div key={cartItem.id}>
            <img src={cartItem.image} alt={`Picture of ${cartItem.title}`} />
            <h3>{cartItem.title}</h3>
            <p>{cartItem.price}</p>
            <Button>-</Button>
            <p>{cartItem.quantity}</p>
            <Button>+</Button>
          </div>
        ))}
      </div>
      <div>
        <h1>Summary</h1>
        <h1>sub total</h1>
        <h1>shipping</h1>
        <h1>taxes</h1>
        <h1>Total</h1>
      </div>
    </div>
  );
};
export default CartDetails;
