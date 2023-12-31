import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Stack } from 'react-bootstrap';

const Welcome = () => {
  const base_url = process.env.REACT_APP_BASE_URL;
  const api_url = process.env.REACT_APP_API_URL;

  return (
    <Fragment>
      <div className="relative flex bg-gray-100 dark:bg-gray-900 min-h-screen sm:items-center justify-center">
        <div className="items-top mt-8 sm:pt-0">
          <h3 align="center" className="text-white">Hello World!</h3>
          <Stack direction="horizontal" gap={2}>
            <Link to="/login" className="btn btn-light">Login</Link>
            <Link to="/register" className="btn btn-light">Register</Link>
          </Stack>
        </div>
      </div>
    </Fragment>
  );
}

export default Welcome;