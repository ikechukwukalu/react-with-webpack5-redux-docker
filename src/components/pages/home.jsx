import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

import { useSelector } from 'react-redux'
import { globalsSelector } from '../redux/globals'

const Home = () => {
  const { base_url, api_url } = useSelector(globalsSelector);

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>You are on the home page</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <p>
            <Link className="App-link" to="/blank">
              Blank
            </Link>
          </p>
        </header>
      </div>
    </Fragment>
  );
}

export default Home;