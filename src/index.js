import 'whatwg-fetch'; // import fetch to make calls to server
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './pages/App';
import Header from './components/Layout/Header';
import MainNav from './components/Layout/MainNav';
import Footer from './components/Layout/Footer';
import Newproduct from './pages/NewProducts';
import Specials from './pages/Specials';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/productPage';
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

      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/newproducts" component={Newproduct} />
        <Route exact path="/specials" component={Specials} />
        <Route exact path="/allproducts" component={AllProducts} />
        <Route path="/product/:name" component={ProductPage} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Route component={NotFound} />
      </Switch>

      <Footer />
    </Router>
  </div>
);

ReactDOM.render(routing, document.getElementById('root'));
