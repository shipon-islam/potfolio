import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/sections/Footer";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Showcase from "../pages/Showcase";
import Testimonial from "../pages/Testimonial";

function Routers() {
  return (
    <Router>
      <Navbar />
      <div className="box-middle sm:mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/reviews" element={<Testimonial />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default Routers;
