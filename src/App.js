import React from 'react';
import './App.css';

import NavBar from "./bars/navbar";
import Dashboard from "./bars/dashboard";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
        <NavBar />
        </header>
        <main>
        <Dashboard />
        </main>
      </div>

    );
  }
}

export default App;
