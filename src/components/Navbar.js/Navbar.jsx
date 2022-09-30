import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import nav_logo from "../../assets/image/band-logos.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="bg-slate-900 w-full z-50 fixed left-0 top-0 right-0 box-middle ">
        <nav
          className="flex relative 
       justify-between items-center pt-2 "
        >
          <div>
            <Link to='/'>
              <img className="w-[127px] md:w-40" src={nav_logo} alt="navLogo" />
              </Link>
            
          </div>
          <div
            className={`absolute md:static w-3/4 ${
              toggle ? "scale-[0] md:scale-[1]" : "scale-1"
            } md:w-fit min-h-[89vh] md:min-h-fit bg-slate-900   top-[89px]  pt-3 pr-3 transition-all duration-500 left-0 origin-top-left`}
          >
            <NavLink
            
              className={`block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b border-slate-600 md:border-none md:text-md hover:text-blue `}
              to="/"
              style={({ isActive }) => ({
                color: isActive ? '#0EA5E9' :"",
                borderBottomColor: isActive ? '#0EA5E9' :""
              })}
              end
              onClick={()=>setToggle(prev=>!prev)}

            >
              home
            </NavLink>
            <NavLink
              className="block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b border-slate-600 md:border-none my-3 md:text-md hover:text-blue"
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? '#0EA5E9' :"",
                borderBottomColor: isActive ? '#0EA5E9' :""
              })}
              onClick={()=>setToggle(prev=>!prev)}
            >
              about
            </NavLink>
            <NavLink
              className="block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b border-slate-600  md:border-none md:text-md hover:text-blue"
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? '#0EA5E9' :"",
                borderBottomColor: isActive ? '#0EA5E9' :""
              })}
              onClick={()=>setToggle(prev=>!prev)}
            >
              services
            </NavLink>
            <NavLink
              className="block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm border-b border-slate-600  md:border-none md:text-md my-3 hover:text-blue"
              to="/reviews"
              style={({ isActive }) => ({
                color: isActive ? '#0EA5E9' :"",
                borderBottomColor: isActive ? '#0EA5E9' :""
              })}
              onClick={()=>setToggle(prev=>!prev)}
            >
              client reviews
            </NavLink>
            <NavLink
              className="block md:inline uppercase font-inter font-medium py-2 ml-9 text-sm  md:border-none md:text-md  hover:text-blue"
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? '#0EA5E9' :"",
                borderBottomColor: isActive ? '#0EA5E9' :""
              })}
              onClick={()=>setToggle(prev=>!prev)}
            >
              contact me
            </NavLink>
          </div>
          <button
            className="block md:hidden"
            onClick={() => setToggle((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 transition-all duration-500 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  toggle
                    ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </nav>
      </div>
      <div className="pt-[95px] md:pt-[120px]"></div>
    </>
  );
}
