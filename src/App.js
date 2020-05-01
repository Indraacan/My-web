import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Hire from "./Pages/Hire";

import Nav from "./component/Nav";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/hire" component={Hire} />
        </Switch>
      </Router>
    );
  }
}
export default App;
