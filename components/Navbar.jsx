'use client'

import React, { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const fadeInVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 1,
    },
  },
};

const Navbar = () => {
  const twitter = "https://x.com/Felixx_jnr?t=ViRhuKymNfmS_2pyCgv_cw&s=09";
  const linkedin =
    "https://www.linkedin.com/in/uyuoukoh-udoh-305a782b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const email =
    "mailto:uyuoukoh@gmail.com?subject=Lets%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is...";
  const github = "https://github.com/Felixx-jnr";

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [animateClass, setAnimateClass] = useState("");
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setAnimateClass("slide-out");
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      setIsMenuOpen(true);
      setAnimateClass("slide-in");
    }
  };

  useEffect(() => {
    const closeMenu = (e) => {
      if (
        isMenuOpen &&
        dropdownRef.current &&
        dropdownRef.current.contains(e.target)
      ) {
        setAnimateClass("slide-out");
        setTimeout(() => setIsMenuOpen(false), 300);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed left-1/2 -translate-x-1/2 w-[100%] rounded-lg z-50">
        <nav>
          <motion.div
            variants={fadeInVariant}
            animate="animate"
            initial="initial"
            className=" bg-[#912056]/10 max-md:border-2 max-md:border-[#912056]/50 mx-auto flex justify-between items-center w-[86%] h-10 nav px-3 rounded-xl backdrop-blur-xl "
          >
            <div>
              <a
                href="#"
                className="font-bold text-xl sm:text-2xl md:text-3xl"
              >
                FELIX UDOH
              </a>
            </div>

            <div className="hidden md:block">
              <ul className="flex space-x-3 lg:space-x-8 text-xl font-semibold">
                <li>
                  <a href="#project">Project</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://drive.google.com/file/d/18WJuXwGb8agrcUUNyXKaLHOTDVeYhKL9/view?usp=drive_link"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="hidden md:block">
              <ul className="flex space-x-2 lg:space-x-4  text-2xl">
                <li>
                  <a
                    target="_blank"
                    href={linkedin}
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={github}
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={twitter}
                  >
                    <FaXTwitter />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={email}
                  >
                    <FaEnvelope />
                  </a>
                </li>
              </ul>
            </div>

            <div className="block md:hidden">
              {/* Hamburger menu for mobile */}
              <button
                className="font-bold text-xl sm:text-2xl md:text-3xl bars-button flex "
                onClick={toggleMenu}
              >
                {isMenuOpen ? "" : <FaBars />}
              </button>
            </div>
          </motion.div>

          {/* Mobile menu with overlay */}
          {isMenuOpen && (
            <>
              <div
                className="fixed"
                onClick={toggleMenu}
              ></div>
              <div
                className={`absolute drop flex flex-col justify-center items-center -top-2 right-0 md:hidden z-50 h-screen w-screen ${animateClass}`}
                ref={dropdownRef}
              >
                <div className="absolute top-2 flex justify-between items-center w-[86%] h-10 px-3 rounded-xl backdrop-blur-lg max-md:border-2 max-md:border-[#912056]/50 bg-[#912056]/10">
                  <div>
                    <a
                      href="#"
                      className="font-bold text-xl sm:text-2xl md:text-3xl"
                    >
                      FELIX UDOH
                    </a>
                  </div>
                  <FaTimes className="font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer" />
                </div>

                <ul className="flex flex-col mt-3 space-y-3 items-center text-xl sm:text-2xl font-semibold">
                  <li>
                    <a href="#project">Project</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://drive.google.com/file/d/18WJuXwGb8agrcUUNyXKaLHOTDVeYhKL9/view?usp=drive_link"
                    >
                      Resume
                    </a>
                  </li>
                </ul>

                <div>
                  <ul className="flex space-x-3 sm:space-x-5 justify-center my-4 text-xl sm:text-2xl">
                    <li>
                      <a
                        target="_blank"
                        href={linkedin}
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={github}
                      >
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={twitter}
                      >
                        <FaXTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={email}
                      >
                        <FaEnvelope />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </nav>
      </div>

      <div className=" fixed -rotate-90 -right-24 bottom-0 mb-20 flex justify-center items-center gap-2 ">
        <div className="h-1 w-20 bg-[#844]"></div>
        <p>uyuoukoh@gmail.com</p>
      </div>

      <div className=" fixed -rotate-90 -left-52 p-1 bottom-0 mb-20 flex justify-center items-center gap-2 ">
        <div className="h-1 w-72 bg-[#844]"></div>
        <p>uyuoukoh@gmail.com</p>
      </div>
    </>
  );
};

export default Navbar;