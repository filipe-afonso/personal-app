import React from "react";
import Button from "react-bootstrap/button";

class NavBar extends React.Component {
  state = {};

  render() {
    const font = {
      'font-family': 'Courier New'
    }
    const display = {
      'font-family': 'Courier New',
      'display':'flex',
      'justify-content': 'flex-end',
    }
    const buttons = {
      'margin': '2px'
    }
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow">
        <span className="navbar-brand bg-dark mr-0" style={font}>
          Filipe Afonso
        </span>
        <div style={display}>
          <Button style={buttons} className="btn btn-light">Projects</Button>
          <Button style={buttons} className="btn btn-light">About me</Button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
