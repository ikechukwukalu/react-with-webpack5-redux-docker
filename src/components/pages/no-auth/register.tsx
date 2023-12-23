import React, { Fragment, useState, ChangeEventHandler } from "react";
import Nav from '../../includes/noauth-nav.tsx';
import  { validator } from '../../helpers/custom.tsx';

type USER = {
  first_name: string,
  last_name: string,
  email: string,
  phone: string,
}

const Register = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const api_url = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const rules: object = {
    first_name: "required|min:3|max:150",
    last_name: "required|min:3|max:150",
    email: "required|email|min:5|max:150",
    phone: "required|numeric|min:5|digits_between:11,15",
    password: "required|min:8|max:150|confirmed",
    password_confirmation: "required|min:8|max:150",
  };
  const [fields, errors, form] = validator(inputs, rules);

  const onInputChange: ChangeEventHandler = (e: any) => {
    let values: any = inputs;
    values[e.target.name] = e.target.value;
    setInputs(values);
  };

  const submitForm: Function = async (e: any) => {
    e.preventDefault();

    const isValid = await form.validate(e);
    if (!isValid) {
      return;
    }

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
                    <form method="POST" onSubmit={submitForm} noValidate>

                      <div className="row mb-3">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-end">First Name</label>

                        <div className="col-md-6">
                          <input id="first_name" type="text" className="form-control " name="first_name" onChange={onInputChange} defaultValue="" required autoComplete="first_name" autoFocus />
                          <label className="text-danger">
                            {errors.first_name ? errors.first_name : ""}
                          </label>

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="last_name" className="col-md-4 col-form-label text-md-end">Last Name</label>

                        <div className="col-md-6">
                          <input id="last_name" type="text" className="form-control " name="last_name" onChange={onInputChange} defaultValue="" required autoComplete="last_name" autoFocus />
                          <label className="text-danger">
                            {errors.last_name ? errors.last_name : ""}
                          </label>

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                        <div className="col-md-6">
                          <input id="email" type="email" className="form-control " name="email" onChange={onInputChange} defaultValue="" required autoComplete="email" />
                          <label className="text-danger">
                            {errors.email ? errors.email : ""}
                          </label>

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="phone" className="col-md-4 col-form-label text-md-end">Phone</label>

                        <div className="col-md-6">
                          <input id="phone" type="tel" className="form-control " name="phone" onChange={onInputChange} defaultValue="" required autoComplete="phone" autoFocus />
                          <label className="text-danger">
                            {errors.phone ? errors.phone : ""}
                          </label>

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end">Password</label>

                        <div className="col-md-6">
                          <input id="password" type="password" className="form-control " name="password" onChange={onInputChange} required autoComplete="new-password" />
                          <label className="text-danger">
                            {errors.password ? errors.password : ""}
                          </label>

                        </div>
                      </div>

                      <div className="row mb-3">
                        <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-end">Confirm Password</label>

                        <div className="col-md-6">
                          <input id="password-confirm" type="password" className="form-control" name="password_confirmation" onChange={onInputChange} required autoComplete="new-password" />
                          <label className="text-danger">
                            {errors.password_confirmation ? errors.password_confirmation : ""}
                          </label>
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