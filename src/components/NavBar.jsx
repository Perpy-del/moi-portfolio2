import React, { useState } from "react";
import { navClasses } from "../utils/classes";
import { navLinks } from "../utils/navlinks";
import "../../index.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className={`${navClasses.section} ${!toggle ? "sm:h-[75px] sm:drop-shadow-md sm:mb-10": "sm:h-[100vh]"}`}>
      <div className={navClasses.container}>
        <div className={navClasses.links}>
          <a href="/">
            <img src="./img/logo-color.svg" className={navClasses.logo} />
          </a>
          <ul className={navClasses.list}>
            {navLinks.map((link) => (
              <li key={link.id} className={navClasses.listItem}>
                {link.title}
              </li>
            ))}
          </ul>
        </div>
        <div className={navClasses.icons}>
          <button className={navClasses.button}>Resume</button>
          <button className={navClasses.button}>Hire Me</button>
        </div>
      </div>
      <div>
        <div className="absolute top-4 left-4 md:hidden flex items-center gap-5 cursor-pointer">
          <div onClick={() => setToggle(!toggle)}>
            {!toggle ? (
              <i class="fa-solid fa-bars fa-spin fa-lg relative"></i>
            ) : (
              <i class="fa-solid fa-xmark fa-spin fa-lg"></i>
            )}
          </div>
          <div>
            <a href="/">
              <img src="./img/logo-color.svg" className={navClasses.logo} />
            </a>
          </div>
        </div>
        <div className="flex gap-3 absolute right-4 top-5 md:hidden">
          <button className={navClasses.button}>Resume</button>
          <button className={navClasses.button}>Hire Me</button>
        </div>

        <div
          className={`${
            !toggle
              ? "sm:hidden"
              : "sm:flex sm:flex-col gap-10 bg-[#F20F0F0] w-[100%] absolute left-4 right-0 top-[100px] custom-scroll"
          } md:hidden`}
        >
          <ul className="sm:flex sm:flex-col sm:gap-3 md:hidden">
            {navLinks.map((link) => (
              <li key={link.id} className="text-[1.5rem] font-bold cursor-pointer sm:hover:text-[#FF4848] hover:duration-300">
                {link.title}
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <button className={navClasses.button}>Resume</button>
            <button className={navClasses.button}>Hire Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
