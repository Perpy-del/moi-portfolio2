import React from "react";
import NavBar from "./NavBar";
import "../../index.css";

const Hero = () => {
  return (
    <section className="md:max-w-[100%] bg-[#e9dada] md:h-[110vh]">
      <NavBar />
      <div className="flex sm:flex-col md:flex-row md:max-w-[90%] sm:max-w-[95%] md:mx-[5rem] snap-start scroll-smooth overflow-y-auto custom-scroll sm:mx-auto items-center justify-center md:gap-[50px] pb-[30px] sm:mt-[-30px] z-[-1] sm:h-[130vh]">
        <div className="flex-2 flex flex-col justify-center md:w-[70%] md:mt-[-40px]">
          <div className="w-full bg-[#444343] my-10 py-4 px-2 text-[white] font-bold">
            Please <a className="text-[blue] uppercase font-extrabold" href="https://pm-portfolio-drab.vercel.app/" target="_blank">Click Here</a> to head to the new portfolio site. This is the old version...😒
          </div>
          <h1 className="text-[1.5rem] font-bold text-[#152237] mb-2">
            Perpetual Meninwa 👋👩‍💻{" "}
          </h1>
          <h3 className="mb-[20px] text-[2.5rem] leading-[50px] font-extrabold text-[#FF4848]">
            {" "}
            <span className="text-[#152237]">Software </span>Developer{" "}
            <span className="text-[#152237]">| UI/UX </span>{" "}
            <span className="text-[#FF4848]"> Designer </span>{" "}
            <span className="text-[#152237]">| Customer Retention</span>{" "}
            Specialist <span className="text-[#152237]">| Product</span>{" "}
            Strategist{" "}
          </h3>
          <p className="font-extrabold uppercase sm:text-end md:text-start sm:w-[97%] md:w-full text-[#1e3050] sm:mb-5 md:mb-7">
            From Pixels to Smiles:{" "}
            <span className="font-semibold">
              Creating Awesome Websites with a Dash of Friendly User Experience
              Attentiveness...
            </span>
          </p>
          <div className="flex sm:justify-start md:flex-row sm:flex-row-reverse mr-4 items-center gap-5">
            <a href="#about">
            <button className="text-[#fcf2f2] py-[10px] px-[30px] bg-[#1e3050] w-[200px] flex sm:self-end md:self-start rounded-md font-bold md:hover:bg-black md:hover:text-[18px] md:hover:duration-500">
              Learn More —›&gt;
            </button>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com/Perpy-del">
              <i
                class="fa-brands fa-github fa-beat fa-xl text-[#ff4848]"
              ></i></a>
              <a href="linkedin.com/in/perpydev/"><i class="fa-brands fa-linkedin fa-beat fa-xl text-[#ff4848]"></i></a>
              <a href="https://twitter.com/pominpirational"><i class="fa-brands fa-twitter fa-beat fa-xl text-[#ff4848]"></i></a>
              <a href="https://www.instagram.com/ogomeninwa/"><i class="fa-brands fa-square-instagram fa-beat fa-xl text-[#ff4848]"></i></a>
            </div>
          </div>
        </div>
        <div className="flex-3 md:ml-[20px] md:mr-[-50px] md:mt-[-80px] sm:ml-[60px]">
          <img
            src="/img/pepe.jpg"
            className="sm:max-w-[50%] md:max-w-[80%] rounded-[100%] object-contain pic-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
