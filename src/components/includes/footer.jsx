import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      base_url: this.props.base_url,
      api_url: this.props.api_url,
    }
  }
  
  render() {
    return (
        <div className="ft">
            <h2 align="center">FOOTER</h2>
        </div>
    );
  }
}

export default Footer;
