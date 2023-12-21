import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/index.tsx";
import Nav from "../../includes/auth-nav.tsx";
import { makeToast } from "../../helpers/custom.tsx";

const ChangePassword = () => {
  const loggedUser = useSelector(userSelector);

  const submitForm: Function = (e: any): void => {
    e.preventDefault();
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
                    <form method="POST" onSubmit={submitForm}>

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