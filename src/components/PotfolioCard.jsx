import React from "react";
import { AiFillGithub, AiOutlineFolderView } from "react-icons/ai";
import { BiMessageSquareCheck } from "react-icons/bi";

export default function PotfolioCard(props) {
  const { id, image, name, github, deploy_url, technology } = props;
  return (
    <div
      className='relative before:content-[""] before:absolute before:w-full before:h-full before:bg-blue/20 
    before:inset-0 before:z-30 before:rounded-md font-poppins overflow-hidden'
    >
      <img className=" rounded-md w-full h-full" src={image} alt="potfolio" />
      <div
        id="potfolio-card"
        className="bg-[#131E37] hover:border px-5 pt-4 rounded-md"
      >
        <h3 className="font-semibold capitalize text-md text-gray-200 py-1 ">
          {name}
        </h3>
        <hr />
        <p className="capitalize text-blue text-md font-medium mt-1">
          technolozy usage:
        </p>
        <div>
          <ul>
            {technology.map((item, index) => {
              return (
                <li
                  key={index}
                  className="capitalize text-gray-200 text-sm font-medium"
                >
                  <BiMessageSquareCheck className="inline-block text-blue text-sm mr-1" />
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-x-4 mt-3 text-gray-100">
          <div>
            <AiFillGithub className="text-xl inline-block mr-[0.1rem] mb-1 text-blue" />
            <a
              className="underline capitalize hover:text-blue "
              href={github}
              target="blank"
            >
              github
            </a>
          </div>
          <div>
            <AiOutlineFolderView className="text-[1.4rem] inline-block mr-[0.1rem] mb-1 text-blue" />
            <a
              className="underline capitalize hover:text-blue"
              href={deploy_url}
              target="blank"
            >
              live demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
