import React from "react";
import { about } from "../../apis";
import Heading from "../Heading";
import Images from "../Images";
import SkillQuote from "../SkillQuote";

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
  const { black_image, color_image, about_info } = about;
  const { paragraph, technologies1, technologies2, choose1, choose2 } =
    about_info;
  console.log(paragraph);
  return (
    <div className="font-poppins">
      <Heading title="about me" subTitle="who iam?" />
      <div className="w-[90%] sm:w-full mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="hidden md:block md:pr-16 md:pb-8 lg:pb-24 float-left relative z-10"
        >
          <Images image={black_image} />
        </div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="block md:hidden  ml-6"
        >
          <Images image={color_image} />
        </div>
        <aside data-aos="fade-left" data-aos-duration="1000">
          <article className="mt-12 md:mt-0 font-inter">
            {paragraph.map((item) => (
              <p
                key={item.id}
                className="text-left font-inter text-[1.1rem] mb-4"
              >
                {item.para}
              </p>
            ))}
          </article>
        </aside>
      </div>
      <div className="grid grid-cols-1 font-inter md:grid-cols-2 w-[90%] sm:w-full mx-auto mt-8">
        <div>
          <h5 className="text-[1rem] uppercase font-medium">my expertice -</h5>
          <div className="grid grid-cols-2">
            <SkillQuote quote={technologies1} />
            <SkillQuote quote={technologies2} />
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <h5 className="text-[1rem] uppercase font-medium">why choose me ?</h5>
          <div className="grid grid-cols-2">
            <SkillQuote quote={choose1} />
            <SkillQuote quote={choose2} />
          </div>
        </div>
      </div>
    </div>
  );
}
