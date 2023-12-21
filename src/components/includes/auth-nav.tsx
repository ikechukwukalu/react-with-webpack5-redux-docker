import React from 'react';
import { Link } from "react-router-dom";
import { logout } from '../helpers/custom.tsx';

const AuthNav = (props: any) => {
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
            <li className="nav-item dropdown">
              <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="">
                {`${loggedUser.first_name} ${loggedUser.last_name}`}
              </a>

              <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/change-password">
                  Change Password
                </Link>
                <Link className="dropdown-item" to="/edit-profile">
                  Edit Profile
                </Link>
                <a className="dropdown-item" href="#" onClick={logout}>
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AuthNav;
