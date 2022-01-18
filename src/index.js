import 'whatwg-fetch'; // import fetch to make calls to server
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import App from './pages/App';
import Header from './components/Layout/Header';
import MainNav from './components/Layout/MainNav';
import Footer from './components/Layout/Footer';
import Newproduct from './pages/NewProducts';
import Specials from './pages/Specials';
import AllProducts from './pages/AllProducts';
// import ProductPage from './pages/productPage';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import NotFound from './pages/NotFound';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const routing = (
  <div id="wrapper">
    <Header />

    <Router>
      <MainNav />

      <Routes>
        <Route exact path="/" element={<App /> } />
        <Route exact path="/newproducts" element={<Newproduct />} />
        <Route exact path="/specials" element={<Specials />} />
        <Route exact path="/allproducts" element={<AllProducts />} />
        {/* <Route path="/product/:name" element={ProductPage} /> */}
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/faqs" element={<Faqs />} />
        <Route element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById('root'));
