import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { globalsSelector } from '../../redux/globals/index.tsx';

const ForgotPassword = () => {
  const { base_url, api_url } = useSelector(globalsSelector);

  return (
    <Fragment>
      <div id="app">
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

        <main className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Reset Password</div>

                  <div className="card-body">

                    <form method="POST" action="#">
                        <div className="row mb-3">
                          <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                          <div className="col-md-6">
                            <input id="email" type="email" className="form-control " name="email" defaultValue="" required autoComplete="email" autoFocus />

                          </div>
                        </div>

                        <div className="row mb-0">
                          <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                              Send Password Reset Link
                            </button>
                          </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;