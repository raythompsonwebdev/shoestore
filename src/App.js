import "whatwg-fetch"; // import fetch to make calls to server
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Home from "./views/Home";
import Loading from "./components/Loading";
import Header from "./components/Layout/Header";
import MainNav from "./components/Layout/MainNav";
import Footer from "./components/Layout/Footer";
import Newproduct from "./views/NewProducts";
import Specials from "./views/Specials";
import AllProducts from "./views/AllProducts";
import ProductPage from "./views/productPage";
import Contact from "./views/Contact";
import Faqs from "./views/Faqs";
import Register from "./views/Register";
import Login from "./views/Login";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import "./static/sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./static/images/shoe-store-logo.png";
import banner from "./static/images/bannerimage.jpg";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="wrapper">
      <Header logo={logo} />
      <Router history={history}>
        <MainNav />
        <Routes>
          <Route exact path="/" element={<Home banner={banner} />} />
          <Route exact path="/newproducts" element={<Newproduct />} />
          <Route exact path="/specials" element={<Specials />} />
          <Route exact path="/allproducts" element={<AllProducts />} />
          <Route path="/product/:name" element={<ProductPage />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route element={<NotFound />} />
          {/* <Route path="/product/:name" render={({ match }) => <ProductPage match={match} />}
            /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
