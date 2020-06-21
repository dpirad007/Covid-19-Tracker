import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components";

import maha from "./pages/maha";
import home from "./pages/home";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/maharastra" component={maha} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
