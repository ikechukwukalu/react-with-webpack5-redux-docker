import React, { Fragment, useState, ChangeEventHandler } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/index.tsx";
import Nav from "../../includes/auth-nav.tsx";
import { makeToast, validator } from "../../helpers/custom.tsx";

const EditProfile = () => {
  const loggedUser = useSelector(userSelector);
  const base_url = process.env.REACT_APP_BASE_URL;
  const api_url = process.env.REACT_APP_API_URL;
  const [inputs, setInputs] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });
  const rules: object = {
    first_name: "required|min:3|max:150",
    last_name: "required|min:3|max:150",
    email: "required|email|min:5|max:150",
    phone: "required|numeric|min:5|digits_between:11,15",
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
    makeToast("Profile Updated!")
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
                  <div className="card-header">Edit Profile</div>

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

export default EditProfile;