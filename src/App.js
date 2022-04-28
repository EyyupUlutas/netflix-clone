import React, { Component } from "react";
import "./styles/index.css";
import ProfilePicker from "./components/ProfilePicker";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProfilePicker />}></Route>
          <Route exact path="/browse" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
