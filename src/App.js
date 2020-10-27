import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components";

import maha from "./pages/maha";
import home from "./pages/home";
import World from "./pages/World/World";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={World} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
