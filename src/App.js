import React from "react";
import { AddToHomeScreen } from "react-pwa-add-to-homescreen";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import Blog from "./Blog";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import "./assets/css/preloader.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/meanmenu.css";
import "./assets/css/animate.min.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/backToTop.css";
import "./assets/css/jquery.fancybox.min.css";
import "./assets/css/fontAwesome5Pro.css";
import "./assets/css/elegantFont.css";
import "./assets/css/default.css";
import "./assets/css/style.css";
function App() {
  return (
    <div>
      <AddToHomeScreen />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/service">
            <Services />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
