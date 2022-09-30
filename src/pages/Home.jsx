import React from "react";
import Navbar from "../components/Navbar.js/Navbar";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <>
      <div className="box-middle">
        <Navbar />
        <Hero />
        <div className="mb-6 md:mb-32">
          <About />
        </div>
        <Services />
        <div className=" md:my-12 my-4">
          <Testimonials />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home;
