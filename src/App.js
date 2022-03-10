import React from "react";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { Image } from "rebass";

import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <p style={{ fontSize: ".6em" }}>version 0.0.8</p>
    </div>
  );
}

export default App;
