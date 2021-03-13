import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }
  
  render() {
    return (
        <div className="hd">
            <h2 align="center">HEADER</h2>
        </div>
    );
  }
}

export default Header;
