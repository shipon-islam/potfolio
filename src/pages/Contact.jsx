import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import ContactSection from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

export default function Contact() {
  return (
    <>
      <div className="box-middle">
        <Navbar />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
