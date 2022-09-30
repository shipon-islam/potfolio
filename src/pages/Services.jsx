import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import Footer from "../components/sections/Footer";
import ServicesSection from "../components/sections/Services";

export default function Services() {
  return (
    <>
      <div className="box-middle">
        <Navbar />
        <ServicesSection />
      </div>
      <Footer />
    </>
  );
}
