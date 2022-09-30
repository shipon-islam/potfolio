import React from "react";
import CountUp from "react-countup";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsFillTrophyFill, BsSuitHeartFill } from "react-icons/bs";
import { VscTypeHierarchySub } from "react-icons/vsc";
import VisibilitySensor from "react-visibility-sensor";

export default function ReviewCounter() {
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      className="bg-[#131E37] md:rounded-md sm:grid sm:grid-cols-2 md:gap-x-16 md:gap-y-16 md:grid-cols-3 lg:grid-cols-4 py-6  justify-between items-center md:px-8 font-poppins"
    >
      <div className="text-center">
        <VscTypeHierarchySub className="text-5xl text-blue mx-auto" />
        <h1 className="text-2xl font-bold mt-3">
          <CountUp start={0} end={250} duration={2}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start}>
                <div>
                <span ref={countUpRef}/>
                <span>+</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
        </h1>

        <h3 className="text-2xl font-bold  ">Work completed</h3>
      </div>

      <div className="text-center my-16 md:my-0">
        <AiOutlineFundProjectionScreen className="text-5xl text-blue mx-auto" />
        <h1 className="text-2xl font-bold mt-3 mb-2"> <CountUp start={0} end={12} duration={2}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start}>
                <div>
                <span ref={countUpRef}/>
                <span>+</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp></h1>

        <h3 className="text-2xl font-bold ">New projects</h3>
      </div>
      <div className="text-center my-16 md:my-0">
        <BsSuitHeartFill className="text-5xl text-blue mx-auto" />
        <h1 className="text-2xl font-bold mt-3 mb-2"> <CountUp start={0} end={15} duration={2}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start}>
                <div>
                <span ref={countUpRef}/>
                <span>k+</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp></h1>

        <h3 className="text-2xl  font-bold ">Happy clients</h3>
      </div>
      <div className="text-center ">
        <BsFillTrophyFill className="text-5xl text-blue mx-auto" />
        <h1 className="text-2xl font-bold mt-3 mb-2"> <CountUp start={0} end={17} duration={2}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start}>
                <div>
                <span ref={countUpRef}/>
                <span>+</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp></h1>
        <h3 className="text-2xl font-bold ">Awards</h3>
      </div>
    </div>
  );
}
