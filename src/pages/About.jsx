import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import AboutSection from "../components/sections/About";
import Footer from "../components/sections/Footer";

function About() {
  return (
    <>
      <div className="box-middle">
        <Navbar />
        <AboutSection />
      </div>
      <Footer />
    </>
  );
}

export default About;
