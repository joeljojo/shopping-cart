import CartDetails from "./Components/CartDetails";
import ProductDescription from "./Components/ProductDescription";
import ShoppingCart from "./Components/ShoppingCart";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" Component={ShoppingCart} />
      <Route path="/product/:id" Component={ProductDescription} />
      <Route path="/my-cart" Component={CartDetails} />
    </Routes>
  );
}

export default App;
