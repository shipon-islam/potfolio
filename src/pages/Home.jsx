import React from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Showcase from "../components/sections/Showcase";
import Testimonials from "../components/sections/Testimonials";

function Home() {
  return (
    <>
      <Hero />
      <div className="mb-6 md:mb-32">
        <About />
      </div>
      <Services />
      <Showcase />
      <div className="md:my-12 my-4">
        <Testimonials />
      </div>
      <Contact />
    </>
  );
}

export default Home;
