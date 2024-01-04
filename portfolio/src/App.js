import "./App.css";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import React from "react";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
       <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/abot" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
