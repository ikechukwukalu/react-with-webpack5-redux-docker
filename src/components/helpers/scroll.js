
import React, { Component } from 'react';
import {withRouter  } from "react-router-dom";
import $ from "jquery";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        $('html, body').animate({scrollTop:0}, 'slow')
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)