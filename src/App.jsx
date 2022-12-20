import AOS from "aos";
import React, { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Routers from "./routes//Routers";

export default function App() {
  const [scrollbar, setScrollbar] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  function scrollCheck() {
    if (window.scrollY >= 100) {
      setScrollbar(true);
    } else {
      setScrollbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollCheck);
    return () => {
      window.removeEventListener("scroll", scrollCheck);
    };
  }, []);

  const handleScroll = () => {
    window.scrollBy({ top: -200, behavior: "smooth" });
  };

  return (
    <div className="scroll bg-slate-900 overflow-hidden  text-slate-300 min-h-screen ">
      <Routers />
      {scrollbar && (
        <button
          className="sm:hidden fixed text-[2.5rem] cursor-pointer right-5 z-50 bottom-5 text-blue "
          onClick={handleScroll}
        >
          <BsFillArrowUpCircleFill />
        </button>
      )}
    </div>
  );
}
