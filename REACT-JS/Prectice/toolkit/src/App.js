import logo from "./logo.svg";
import "./App.css";
import Head from "./Head";
import React, { useState } from "react";
import { addTo } from "./slice/AddTocard";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [cartData, setCartData] = useState(0);

  return (
    <div className="App">
      <Head />

      <h1>Hair oil</h1>
      <input type="number" id="cartitem" />
      <button
        onClick={() => {
          dispatch(addTo(document.getElementById("cartitem").value));
        }}
      >
        Add To cart
      </button>
    </div>
  );
}

export default App;
