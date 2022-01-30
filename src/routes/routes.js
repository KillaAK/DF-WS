import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Smart from "../pages/Smart";

//

import Mint from "../Mint";
import Ammo from "../pages/Ammo";
import Story from "../pages/Story";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Business from "../pages/Business";

function routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/mint">
          <Mint />
        </Route>
        <Route path="/tokenomics">
          <Ammo />
        </Route>
        <Route path="/story">
          <Story />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/business">
          <Business />
        </Route>
        <Route path="/smart">
          <Smart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default routes;
