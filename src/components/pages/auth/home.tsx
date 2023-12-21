import React, { Fragment } from "react";
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux/user/index.tsx';
import Nav from '../../includes/auth-nav.tsx';

const Home = () => {
  const loggedUser = useSelector(userSelector);

  return (
    <Fragment>
      <div id="app">
        <Nav user={loggedUser} />

        <main className="py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card">
                  <div className="card-header">Dashboard</div>

                  <div className="card-body">

                    You are logged in!
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

export default Home;