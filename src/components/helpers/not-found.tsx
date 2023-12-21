import React, { Fragment } from "react";
import { useRouteError, Link } from "react-router-dom";

const NotFound = () => {
    const error: any = useRouteError();

    if (error.status == "404" || error.status == 404) {
        return (
            <Fragment>
                <div className="relative flex bg-gray-100 dark:bg-gray-900 min-h-screen sm:items-center justify-center">
                    <div className="items-top mt-8 sm:pt-0">
                        <h3 align="center" className="text-white">{`${error.status} | Not Found`}</h3>
                        <p align="center">
                            <Link to="/" className="btn btn-light">Go back</Link>
                        </p>
                    </div>
                </div>
            </Fragment>
        );
    }

    return null;
}

export default NotFound;