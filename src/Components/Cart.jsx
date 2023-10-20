import { useState } from "react";
import CartContext from "./Context/CartContext";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    //Check if item is in cart
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);
    if (isItemInCart) {
      //If item is in cart increment its quantity
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      // Add to item to cart
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item) => {
    if (item.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const emptyCart = () => {
    //Delete everything from cart
    setCartItems([]);
  };

  const cartSubTotal = () => {
    return cartItems.reduce(
      (subTotal, item) => subTotal + item.price * item.quantity,
      0
    );
  };

  const cartTotal = () => {
    const TAX_RATE = 0.02;
    const shippingCost = 0; // This can change later
    const subTotal = cartSubTotal();
    return shippingCost + subTotal * TAX_RATE;
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        emptyCart,
        cartSubTotal,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
