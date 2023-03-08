import React, { useRef } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaFolder } from "react-icons/fa";

export default function ServiceCard({ cardHead, desc, tools }) {
  const containerRef = useRef(null);
  const targetValue = 145;
  const handleClick = (text) => {
    const textElement = containerRef.current.children[2];
    if (textElement.firstChild.innerText.length > targetValue) {
      containerRef.current.children[2].firstChild.innerText = text.slice(
        0,
        targetValue
      );
      textElement.lastChild.innerText = "more";
    } else {
      containerRef.current.children[2].firstChild.innerText = text;
      textElement.lastChild.innerText = "Less";
    }
  };
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div
        className="card hover:-translate-y-8 w-[90%] transition-transform duration-500 mx-auto py-8 px-6  bg-slate-900 shadow-sm rounded-md shadow-blue font-poppins"
        ref={containerRef}
      >
        <div className="flex justify-between mb-8 text-blue">
          <FaFolder className="text-[1.6rem]" />
          <div className="flex">
            <BiLinkExternal className="text-2xl mr-4" />
            <AiFillGithub className="text-2xl" />
          </div>
        </div>
        <h3 className="text-[1.1rem] uppercase font-medium">{cardHead}</h3>
        <p className="text-[1rem]  mt-2 mb-4 text-slate-400">
          <span>{desc.slice(0, targetValue)}</span>
          <button
            onClick={() => handleClick(desc)}
            className="underline text-blue ml-1"
          >
            more
          </button>
        </p>
        <ul>
          {tools.map((tool, id) => (
            <li key={id} className="inline mr-4 text-sm text-slate-400">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
