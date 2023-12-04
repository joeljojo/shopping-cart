import { useContext } from "react";
import Button from "./Button";
import CartContext from "./Context/CartContext";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleMyCart = () => {
    navigate("/my-cart");
  };

  return <Button onClick={handleMyCart}>My Cart {cartItems.length > 0 && cartItems.length}</Button>;
};
export default CartButton;
