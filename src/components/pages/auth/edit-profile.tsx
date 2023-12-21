import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/index.tsx";
import Nav from "../../includes/auth-nav.tsx";
import { makeToast } from "../../helpers/custom.tsx";

const EditProfile = () => {
  const loggedUser = useSelector(userSelector);

  const submitForm: Function = (e: any): void => {
    e.preventDefault();
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