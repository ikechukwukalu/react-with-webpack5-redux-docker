import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Scripts from "../scripts/scripts";
import logo from "../../logo.svg";

import { connect } from "react-redux";

class Blank extends Component {
  componentDidMount() {
    // this.props.setGlobals();
  }
  componentWillUnmount() {
    document.getElementById("helmet-script").remove();
  }

  render() {
    const { base_url, api_url } = this.props;
    console.info(base_url, api_url);
    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>You are on the blank page</p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <p>
              <Link className="App-link" to="/">
                Home
              </Link>
            </p>
          </header>
        </div>
        <Scripts />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  base_url: state.globals.base_url,
  api_url: state.globals.api_url,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setGlobals: () => {
//       dispatch(setGlobals());
//     },
//   };
// };

export default connect(mapStateToProps)(Blank);