import React, { Component } from "react";
import NavBar from "./components/NavBar";
import LogoTWW from "./assets/images/LogoTWW.jpg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={LogoTWW} className="App-logo" alt="logo" />
          <h1 className="App-title">Total War Warhammer Beginner's Guide</h1>
        </header>
        <div className="App-intro">
          <NavBar />
        </div>
      </div>
    );
  }
}

export default App;
