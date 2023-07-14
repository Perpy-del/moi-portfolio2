import React from "react";
import "../../index.css";

const Works = () => {
  return (
    <section className="md:max-w-[100%] bg-[#e9dada] min-h-100vh snap-start scroll-smooth">
      <div className="flex sm:flex-col md:flex-row md:max-w-[90%] sm:max-w-[95%] md:mx-[5rem] sm:mx-auto items-center md:gap-[50px] scroll-smooth overflow-y-auto custom-scroll sm:mt-[-30px] z-[-1] sm:h-[130vh]  sm:pt-[2rem]">
        <ul>
          <li className="text-animation md:after:text-[#152237] md:after:content-['Product_Design']">
            Product Design
          </li>
          <li className="text-animation md:after:text-[#FF4848] md:after:content-['Frontend_Development']">
            Frontend Development
          </li>
          <li className="text-animation md:after:text-[#152237] md:after:content-['Backend_Development']">
            Backend Development
          </li>
          <li className="text-animation md:after:text-[#FF4848] md:after:content-['Product_Management']">
            Product Management
          </li>
          <li className="text-animation md:after:text-[#152237] md:after:content-['Cloud_Computing']">
            Cloud Computing
          </li>
        </ul>
        <div>{/*  */}</div>
      </div>
    </section>
  );
};

export default Works;
