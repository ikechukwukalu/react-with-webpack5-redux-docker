import React, { Fragment, useEffect } from "react";
import { redirect } from "react-router-dom";

const Redirect = (props: any) => {

    useEffect(() => {
        redirect(props.to);
    }, []);

    return <Fragment></Fragment>;
}

export default Redirect;