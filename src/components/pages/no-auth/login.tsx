import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Nav from '../../includes/noauth-nav.tsx';

type USER = {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
}

const Login = () => {
  const base_url = process.env.REACT_APP_NAME;
  const api_url = process.env.REACT_APP_API_URL;

  const submitForm: Function = (e: any): void => {
    e.preventDefault();

    var data: any = e.target.elements;

    let user: USER = {
      first_name: 'John',
      last_name: 'Doe',
      email: data.email.value,
      phone: '2348012345678'
    };

    localStorage.setItem('loggedUser', JSON.stringify(user));
    location.reload();
  }

  return (
    <Fragment>
      <div id="app">
        <Nav />

        <main className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Login</div>

                  <div className="card-body">
                    <form method="POST" onSubmit={submitForm}>
                      <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                        <div className="col-md-6">
                          <input id="email" type="email" className="form-control" name="email" defaultValue="" required autoComplete="email" autoFocus />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                        <div className="col-md-6">
                          <input id="password" type="password" className="form-control " name="password" required autoComplete="current-password" />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-md-6 offset-md-4">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />

                              <label className="form-check-label" htmlFor="remember">
                                Remember Me
                              </label>
                          </div>
                        </div>
                      </div>

                      <div className="row mb-0">
                        <div className="col-md-8 offset-md-4">
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>

                          <Link className="btn btn-link" to="/password/reset">
                            Forgot Your Password?
                          </Link>
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

export default Login;