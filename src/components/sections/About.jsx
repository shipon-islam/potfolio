import React from "react";
import { BiMessageSquareCheck } from "react-icons/bi";
import aboutImage from "../../assets/image/latest-bw.jpeg";
import hero_image from "../../assets/image/latest-color.jpg";
import Heading from "../Heading";
import Images from "../Images";

const ok = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5 inline-block font-black"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l6 6 9-13.5"
    />
  </svg>
);

export default function About() {
  return (
    <div className="font-poppins">
      <Heading title="about me" subTitle="who iam?" />
      <div className="md:flex justify-between">
        <div data-aos="fade-right" data-aos-duration="1000" className="hidden md:block ">
          <Images imgpath={aboutImage} />
        </div>
        <div data-aos="fade-right" data-aos-duration="1000" className="block md:hidden  ml-6">
          <Images imgpath={hero_image} />
        </div>
        <aside data-aos="fade-left" data-aos-duration="1000" className=" w-[90%] md:w-[45%] sm:ml-auto lg:w-[55%] xl:w-[57%] 2xl:w[62%]  font-poppins mx-auto">
          <article >
            <p className="mt-12 md:mt-0  text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]">
              Hello! My name is Shipon islam and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p className=" text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] mt-4 ">
              Fast-forward to today, and I’ve had the privilege of working at an
              advertising agency, a start-up, a huge corporation, and a
              student-led design studio. My main focus these days is building
              accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
          </article>
          <div>
            <h5 className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem]  mt-4 mb-2">
              Here are a few technologies I’ve been working with recently
            </h5>
            <div className="flex ">
              <ul>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  JavaScript (ES6+)
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  node js
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  mongo db
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  tailwind css
                </li>
              </ul>
              <ul className="ml-6">
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  React js
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  express js
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  firebase
                </li>
                <li className="text-[1rem] xl:text-[1.1rem] 2xl:text-[1.2rem] capitalize mt-3">
                  <BiMessageSquareCheck className="inline-block text-blue text-lg mr-2" />
                  bootstrap 5
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
