import React from 'react';
import {  Link  } from "react-router-dom";

const NoMatch = () => {
    return (
      <div className="container mt-5">
        <h1 align="center">404</h1>
        <div className="text-center">
          <h2 align="center">Page Not Found</h2>
          <p className="text-sm" align="center">It seems we can’t find the page you are looking for. <Link to="/" className="text-info">Go back to Homepage</Link><br/>Or try using the search at the top right corner of the page.</p>
        </div>
      </div>
    )
};

export default NoMatch;