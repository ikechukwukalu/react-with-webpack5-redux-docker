import React, { Fragment, useState, ChangeEventHandler } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/index.tsx";
import Nav from "../../includes/auth-nav.tsx";
import { makeToast, validator } from "../../helpers/custom.tsx";

const ChangePassword = () => {
  const loggedUser = useSelector(userSelector);
  const base_url = process.env.REACT_APP_NAME;
  const api_url = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    password: "",
    password_confirmation: "",
  });
  const rules: object = {
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
    makeToast("Password Changed!")
  }

  return (
    <Fragment>
      <div id="app">
        <Nav user={loggedUser} />

        <main className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Change Profile</div>

                  <div className="card-body">
                    <form method="POST" onSubmit={submitForm} noValidate>

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
                            Save
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

export default ChangePassword;