import React, { Fragment } from "react";
import Nav from '../../includes/noauth-nav.tsx';

type USER = {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
}

const Register = () => {
  const base_url = process.env.REACT_APP_NAME;
  const api_url = process.env.REACT_APP_API_URL;

  const submitForm: Function = (e: any): void => {
    e.preventDefault();

    var data: any = e.target.elements;

    let user: USER = {
      first_name: data.first_name.value,
      last_name: data.last_name.value,
      email: data.email.value,
      phone: data.phone.value
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
                  <div className="card-header">Register</div>

                  <div className="card-body">
                    <form method="POST" onSubmit={submitForm}>
                      <div className="row mb-3">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">First Name</label>

                        <div className="col-md-6">
                          <input id="first_name" type="text" className="form-control " name="first_name" defaultValue="" required autoComplete="first_name" autoFocus />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="last_name" className="col-md-4 col-form-label text-md-end">Last Name</label>

                        <div className="col-md-6">
                          <input id="last_name" type="text" className="form-control " name="last_name" defaultValue="" required autoComplete="last_name" autoFocus />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                        <div className="col-md-6">
                          <input id="email" type="email" className="form-control " name="email" defaultValue="" required autoComplete="email" />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="phone" className="col-md-4 col-form-label text-md-end">Phone</label>

                        <div className="col-md-6">
                          <input id="phone" type="tel" className="form-control " name="phone" defaultValue="" required autoComplete="phone" autoFocus />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                        <div className="col-md-6">
                          <input id="password" type="password" className="form-control " name="password" required autoComplete="new-password" />

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                        <div className="col-md-6">
                          <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autoComplete="new-password" />
                        </div>
                      </div>

                      <div className="row mb-0">
                        <div className="col-md-6 offset-md-4">
                          <button type="submit" className="btn btn-primary">
                            Register
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

export default Register;