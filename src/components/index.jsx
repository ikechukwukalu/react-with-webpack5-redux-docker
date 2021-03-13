import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import NoMatch from "./helpers/no-match.js";

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";

import Home from "./pages/home.jsx";
import Blank from "./pages/blank.jsx";

class Components extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    };
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home />} />
          <Route exact path="/blank" render={(props) => <Blank />} />
          <Route render={(props) => <NoMatch />} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Components;
