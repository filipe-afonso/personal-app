import React from "react";
import Button from "react-bootstrap/button";

class NavBar extends React.Component {
  state = {};

  projectsdashboard = () => {
    console.log('Projects DashBoard')
  }

  aboutme =  () => {
    console.log('About me')
  }

  render() {
    const font = {
      'fontFamily': 'Courier New'
    }
    const display = {
      'fontFamily': 'Courier New',
      'display':'flex',
      'justifyContent': 'flex-end',
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
          <Button style={buttons} className="btn btn-light" onClick={this.projectsdashboard}>Projects</Button>
          <Button style={buttons} className="btn btn-light" onClick={this.aboutme}>About me</Button>
        </div>
      </nav>
    );
  }
}

export default NavBar;
