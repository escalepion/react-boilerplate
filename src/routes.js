import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/Main";

export default class extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    );
  }
}
