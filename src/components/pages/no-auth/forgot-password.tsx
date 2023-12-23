import React, { Fragment, useState, ChangeEventHandler } from "react";
import Nav from '../../includes/noauth-nav.tsx';
import { makeToast } from "../../helpers/custom.tsx";
import  { validator } from '../../helpers/custom.tsx';

const ForgotPassword = () => {
  const base_url = process.env.REACT_APP_NAME;
  const api_url = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    email: "",
  });
  const rules: object = {
    email: "required|email|min:5|max:150",
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
    makeToast("Email Sent!")
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
                  <div className="card-header">Reset Password</div>

                  <div className="card-body">

                    <form method="POST" onSubmit={submitForm} noValidate>
                        <div className="row mb-3">
                          <label htmlFor="email" className="col-md-4 col-form-label text-md-end">Email Address</label>

                          <div className="col-md-6">
                            <input id="email" type="email" className="form-control " name="email" onChange={onInputChange} defaultValue="" required autoComplete="email" autoFocus />
                          <label className="text-danger">
                            {errors.email ? errors.email : ""}
                          </label>

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