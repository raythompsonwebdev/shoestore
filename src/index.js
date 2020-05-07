import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Header from "./components/Header";
import MainNav from "./components/mainNav";
import Footer from "./components/Footer";
import Newproduct from "./pages/NewProducts";
import Specials from "./pages/Specials";
import AllProducts from "./pages/AllProducts";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import NotFound from "./pages/NotFound";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Route component={NotFound} />
      </Switch>

      <Footer />

    </Router>

  </div>
);

ReactDOM.render(routing, document.getElementById("root"));
