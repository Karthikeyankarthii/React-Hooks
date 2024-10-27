import React from "react";
import { CartProvider } from "./context/cartcontext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
