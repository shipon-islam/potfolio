import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { FaFolder } from "react-icons/fa";

export default function ServiceCard({ cardHead, desc, tools }) {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <div className="card hover:-translate-y-8 w-[90%] transition-transform duration-500 mx-auto py-8 px-6  bg-slate-900 shadow-sm rounded-md shadow-blue font-montserrat">
        <div className="flex justify-between mb-8 text-blue">
          <FaFolder className="text-3xl" />
          <div className="flex">
            <BiLinkExternal className="text-2xl mr-4" />
            <AiFillGithub className="text-2xl" />
          </div>
        </div>
        <h3 className="text-xl capitalize">{cardHead}</h3>
        <p className="text-lg  mt-2 mb-4 text-slate-400">{desc}</p>
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
