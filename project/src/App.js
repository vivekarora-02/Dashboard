import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route excat path="/login/:type" element={<Login />} />
        <Route excat path="/signup/:type" element={<Signup />} />
      </Routes>
    </Router>
  );
}
export default App;