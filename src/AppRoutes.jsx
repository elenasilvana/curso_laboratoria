import React from "react";

import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import Home from "./sections/Home";
import About from "./sections/About";
import Contact from "./sections/Contact";
import NotFound from "./sections/404";

function AppRoutes(props) {
  return (
    <Switch>
      <Route exact path='/' render={() => <h1>Lomitos Suavecitos</h1>} />
      <Route path='/contact' component={Contact} />
      <PrivateRoute path='/home' render={() => <Home />} />
      <Route
        path='/about'
        render={() => {
          return <About />;
        }}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRoutes;
