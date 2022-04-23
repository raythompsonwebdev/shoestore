import "whatwg-fetch"; // import fetch to make calls to server
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./pages/App";
import Header from "./components/Layout/Header";
import MainNav from "./components/Layout/MainNav";
import Footer from "./components/Layout/Footer";
import Newproduct from "./pages/NewProducts";
import Specials from "./pages/Specials";
import AllProducts from "./pages/AllProducts";
import ProductPage from "./pages/productPage";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./static/css/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./static/images/shoe-store-logo.png";
import banner from "./static/images/bannerimage.jpg";

const routing = (
  <div id="wrapper">
    <Header logo={logo} />

    <Router>
      <MainNav />

      <Routes>
        <Route exact path="/" element={<App banner={banner} />} />
        <Route exact path="/newproducts" element={<Newproduct />} />
        <Route exact path="/specials" element={<Specials />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        <Route path="/product/:name" element={<ProductPage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route element={<NotFound />} />
        {/* <Route path="/product/:name" render={({ match }) => <ProductPage match={match} />}
        /> */}
      </Routes>

      <Footer />
    </Router>
  </div>
);
const container = document.getElementById("root");
const root = createRoot(container);
root.render(routing);
