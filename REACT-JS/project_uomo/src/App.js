// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./user/Home";
import Header from "./user/Header";
import LoginRegistar from "./Pages/LoginRegistar";
import Footer from "./user/Footer";
import Productdetails from "./Pages/Productdetails";
import Shopcart from "./Pages/Shopcart";
import Admin_p from "./adminpenal/Admin_p";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/adminpenal" element={<Admin_p />}></Route>

          {/* neasted route */}
          <Route path="/"  element={<Home />}></Route>
          <Route path="/shop"  element={<Shopcart />}></Route>
          <Route path="/login" element={<LoginRegistar />}></Route>

          <Route path="/header"  element={<Header />}></Route>
          <Route path="/shop"  element={<Shopcart />}></Route>
          <Route path="/Footer"  element={<Footer />}></Route>
          <Route path="/product"  element={<Productdetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
