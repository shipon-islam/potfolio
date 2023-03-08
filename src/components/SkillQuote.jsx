import React from "react";
import { BiMessageSquareCheck } from "react-icons/bi";

function SkillQuote({ quote }) {
  return (
    <ul>
      {quote.map((item, index) => {
        return (
          <li
            key={index}
            className="text-[1rem] sm:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3 flex"
          >
            <BiMessageSquareCheck className="inline-block text-blue text-lg mr-1 sm:mr-2" />

            <p>{item}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default SkillQuote;
