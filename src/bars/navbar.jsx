import React from "react";
import Button from "react-bootstrap/button";

class NavBar extends React.Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap shadow">
        <span className="navbar-brand bg-dark mr-0">
          Filipe Afonso
        </span>
        <Button>Projects</Button>
        <Button>About</Button>
      </nav>
    );
  }
}

export default NavBar;
