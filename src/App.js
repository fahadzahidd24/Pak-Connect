import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Services from "./Pages/services";
import Portfolio from "./Pages/portfolio";
import Faq from "./Pages/faq";
import Contact from "./Pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
