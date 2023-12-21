import React from 'react';
import { Link } from "react-router-dom";

const NoAuthNav = (props: any) => {
const loggedUser = props.user;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React Boilerplate
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <!-- Left Side Of Navbar --> */}
          <ul className="navbar-nav me-auto">

          </ul>

          {/* <!-- Right Side Of Navbar --> */}
          <ul className="navbar-nav ms-auto">
            {/* <!-- Authentication Links --> */}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NoAuthNav;
