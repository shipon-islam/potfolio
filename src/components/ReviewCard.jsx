import React from "react";
import { ImQuotesRight } from "react-icons/im";

export default function ReviewCard({avatar, desc, name, starIconPath }) {
  return (
    <div className="md:hover:border-2 md:cursor-pointer rounded-md hover:transition-all font-poppins duration-200 md:hover:border-blue card bg-slate-800/10 py-4 px-3 w-[90%] mx-auto relative">
      <ImQuotesRight className="absolute w-16 h-auto right-4 top-6" />
      <img
        className="w-20 h-20 rounded-full object-cover mx-auto "
        src={avatar}
        alt="avatar"
      />
      <h3 className="text-xl font-bold capitalize text-center pt-2">{name}</h3>
      <div className="flex gap-x-1 text-2xl py-2 justify-center">
        {starIconPath &&
          starIconPath.map((path, index) => (
            <svg
              key={index}
              className="w-[24px]"
              fill="#CBD5E1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d={path}></path>
            </svg>
          ))}
      </div>
      <p className="text-center ">{desc}</p>
    </div>
  );
}
