import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import Footer from "../components/sections/Footer";
import TestimonialSection from "../components/sections/Testimonials";

export default function Testimonial() {
  return (
    <>
      <div className="box-middle">
        <Navbar />
        <TestimonialSection />
      </div>
      <Footer />
    </>
  );
}
