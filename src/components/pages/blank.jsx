import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

import Scripts from "../scripts/scripts";

import { useSelector } from 'react-redux'
import { globalsSelector } from '../redux/globals'

const Blank = () => {
  const { base_url, api_url } = useSelector(globalsSelector);

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

export default Blank;