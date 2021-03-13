import React, { Component } from 'react'; 
import {Helmet} from "react-helmet"; 

class Scripts extends Component {
    render() { 
        return ( 
            <Helmet> 
                <script id='helmet-script' src='assets/js/vendors.js'></script> 
            </Helmet> 
        ); 
    } 
} 
export default Scripts;