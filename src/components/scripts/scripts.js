import React from 'react';
import {Helmet} from "react-helmet"; 

const Scripts = () => {
    return (
        <Helmet>
            <script id='helmet-script' src='assets/js/vendors.js'></script>
        </Helmet>
    );
}

export default Scripts;