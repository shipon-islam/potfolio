import React from "react";
import { AiFillGithub, AiOutlineFolderView } from "react-icons/ai";
import { BiMessageSquareCheck } from "react-icons/bi";
import { GiClick } from "react-icons/gi";

export default function PotfolioCard(props) {
  const { id, image, name, github, deploy_url, technology } = props;
  return (
    <div
    id="protfolioImg"
      className='relative before:content-[""] before:absolute before:w-full before:h-full before:bg-blue/20 
    before:inset-0 before:z-30 before:rounded-md font-poppins overflow-hidden'
    >
      <img  className="rounded-md w-full h-full" src={image} alt="potfolio" />
      <div
        id="potfolio-card"
        className="bg-[#131E37] px-5 pt-3 rounded-md"
      >
        <h3 className="font-semibold capitalize text-sm text-gray-200 py-1 ">
          {name}
        </h3>
        <hr />
        <p className="capitalize text-blue text-sm font-medium ">
          technolozy usage:
        </p>
        <div>
          <ul>
            {technology.map((item, index) => {
              return (
                <li
                  key={index}
                  className="capitalize text-gray-200 text-[0.7rem] "
                >
                  <BiMessageSquareCheck className="inline-block text-blue text-[0.7rem] mr-1" />
                  {item}
                </li>
              );
            })}
          </ul>
          
        </div>

        <div className="flex gap-x-4 mt-3 text-gray-100">
          <div>
            <AiFillGithub className="text-sm inline-block mr-[0.1rem] mb-1 text-blue" />
            <a
              className="underline capitalize text-sm hover:text-blue "
              href={github}
              target="blank"
            >
              github
            </a>
          </div>
          <div>
            <AiOutlineFolderView className="text-[1rem] inline-block mr-[0.1rem] mb-1 text-blue" />
            <a
              className="underline capitalize hover:text-blue text-sm"
              href={deploy_url}
              target="blank"
            >
              live demo
            </a>
          </div>
        </div>
       
        <GiClick className="absolute bottom-[1px] right-[1px] text-2xl animate-pulse duration-1000"/>
      </div>
      <div className="space-x-3">
         <span style={{left:Math.random()+2}} className="z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+18}} className=" z-10 absolute bottom-0 bg-green-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+36}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+70}} className=" z-10 absolute bottom-0 bg-yellow-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+90}} className=" z-10 absolute bottom-0 bg-blue w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+120}} className=" z-10 absolute bottom-0 bg-pink-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+140}} className=" z-10 absolute bottom-0 bg-indigo-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+170}} className=" z-10 absolute bottom-0 bg-lime-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+200}} className=" z-10 absolute bottom-0 bg-yellow-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+230}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+260}} className=" z-10 absolute bottom-0 bg-green-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+290}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+320}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+350}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
          <span style={{left:Math.random()+170}} className=" z-10 absolute bottom-0 bg-lime-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+200}} className=" z-10 absolute bottom-0 bg-yellow-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+230}} className=" z-10 absolute bottom-0 bg-red-500 w-2 h-2 inline-block rounded-full circle"></span>
         <span style={{left:Math.random()+260}} className=" z-10 absolute bottom-0 bg-green-500 w-2 h-2 inline-block rounded-full circle"></span>
      </div>
      
    </div>
  );
}
