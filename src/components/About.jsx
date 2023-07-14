import React from "react";
import NavBar from "./NavBar";
import "../../index.css";

const About = () => {
  return (
    // <section className="md:max-w-[100%] bg-[#fffefe] md:min-h-[110vh]">
      <div className="flex sm:flex-col-reverse md:flex-row md:max-w-[90%] sm:max-w-[95%] snap-start scroll-smooth overflow-y-auto custom-scroll md:mx-[5rem] sm:mx-auto md:min-h-[110vh] sm:min-h-[140vh] items-center justify-center md:gap-[50px] z-[-1]  md:py-[5rem]">
        <div className="flex-3 md:ml-[30px] md:mr-[10px] mt-[-30px]">
          <img
            src="/img/pepe.jpg"
            className="sm:max-w-[40%] md:max-w-[90%] rounded-[100%] object-contain pic-animation"
          />
        </div>
        <div className="flex-2 flex flex-col justify-center md:w-[70%]">
          <h1 className="text-[1.5rem] font-extrabold text-[#FF4848] mb-2 uppercase">
            About PM... 👩😊{" "}
          </h1>
          <h3 className="sm:mb-[20px] text-14px font-semibold text-[#1e3050]">
            {" "}
            I started out working with colors and shapes and patterns being a creative person with the purpose of making apps look aesthetically better which eventually led me into building this applications myself and then tumbled head first into the never ending world of coding and web development. Fast-forward to today, and I've had the privilege of <span className="font-extrabold">creating and building functional applications.</span>
          </h3>
          <p className="font-semibold text-14px text-[#1e3050]">
          My main focus these days is studying on how <span className="font-extrabold">cloud computing</span> can help manage large application and how to <span className="font-extrabold">build containerized applications for microservices.</span> In my free time I am also learning <span className="font-extrabold">3D animations</span> for frontend using services like <span className="font-extrabold">ThreeJS, Framer and GSAP.</span>
          </p>
          <p className="font-semibold text-14px sm:w-[97%] md:w-full text-[#1e3050] sm:mt-5 md:mb-5">
          When I am not facing a screen, I am <span className="font-extrabold">cooking a new delicacy</span> and scrolling through <span className="font-extrabold">pinterest, dribbble or behance</span> looking for something to pique my <span className="font-extrabold">creativity.</span>
          </p>
          <button className="text-[#fcf2f2] py-[10px] px-[30px] bg-[#1e3050] w-[250px] flex sm:self-end md:self-start mr-4 rounded-md font-bold hover:bg-[#152237] hover:text-[18px] hover:duration-500">
            My Works So Far —›&gt;{" "}
          </button>
        </div>
      </div>
    // </section>
  );
};

export default About;
