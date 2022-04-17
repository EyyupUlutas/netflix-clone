import React, { Component } from "react";
import "./styles/index.css";
import ProfilePicker from "./components/ProfilePicker";
import HomePage from "./components/HomePage";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ProfilePicker /> */}

        <HomePage />
      </div>
    );
  }
}

export default App;
