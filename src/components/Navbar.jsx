import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { image, links, links1 } from "../constants";
import { motion } from "framer-motion";
import Button from "./Button";

const containerVariants = {
  hidden: {
    x: -500,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-20  ${
        active ? "shadow-lg bg-Dark4 " : "bg-white"
      }`}
    >
      <div className=" section">
        <div
          className={`py-2 md:py-0 flex justify-between items-center  w-full ${
            active ? "" : ""
          }`}
        >
          <div className="flex gap-x-5 lg:h-[85px] h-[55px] justify-center items-center  ">
            <Link to="/">
              <img
                src={image.logo}
                alt="logo-icon"
                className="sm:w-[160px] w-[200px] md:w-[295px]  cursor-pointer object-cover "
              />
            </Link>

            <ul className="list-none lg:flex hidden justify-end items-center h-full ">
              {links.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`  cursor-pointer  h-full  ${
                    index === links.length - 1 ? "mr-0" : " mr-7"
                  }`}
                >
                  <Link
                    to={nav.url}
                    className={`text-black h-full flex flex-col justify-center items-center link text-[17px] font-semibold ${
                      active ? "text-white" : ""
                    } `}
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:block hidden  h-[85px]">
            <ul className="list-none  flex  h-full ">
              {links1.map((nav) => (
                <li key={nav.id} className={`h-full mr-7 `}>
                  <Link
                    to={nav.url}
                    className={`text-black text-[17px] font-semibold h-full flex flex-col justify-center items-center link ${
                      active ? "text-white" : ""
                    }`}
                  >
                    {nav.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" hidden lg:block ">
            <div className="flex justify-center items-center  gap-[30px]">
              <div>
                <AiOutlineSearch
                  className={`text-[30px] cursor-pointer ${
                    active ? "text-white" : ""
                  }`}
                />
              </div>
              <Button
                text={"Let's Talk "}
                styles={
                  "  bg-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-[150px] text-center text-white"
                }
              />
            </div>
          </div>

          {/* mobile navbar */}

          <div className="lg:hidden flex  justify-end items-center">
            {toggle ? (
              <AiOutlineClose
                alt="menu-icon"
                className={`w-[38px]  h-[38px] object-contain ${
                  active ? "text-white" : ""
                }`}
                onClick={() => setToggle(false)}
              />
            ) : (
              <HiMenuAlt3
                alt="menu-icon"
                className={`w-[38px]  h-[38px] object-contain ${
                  active ? "text-white" : ""
                }`}
                onClick={() => setToggle((prev) => !prev)}
              />
            )}

            {toggle && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={`${
                  toggle ? "block" : "hidden"
                } bg-white p-3 bg-DarkBlueMb z-50 absolute top-[70px] left-0 right-0  w-full `}
              >
                <ul className="list-none  flex justify-end items-start flex-1 flex-col ">
                  {links.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-semibold cursor-pointer text-[18px] w-full mb-4 border-b-[1px] border-Dark pb-4  `}
                    >
                      <Link to={nav.url}>{nav.text}</Link>
                    </li>
                  ))}
                </ul>

                <div className="">
                  <ul className="list-none  flex flex-col items-start ">
                    {links1.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={` mb-4 border-Dark pb-4 w-full ${
                          index === 1 ? "border-b-[0px]" : "border-b-[1px]"
                        }  `}
                      >
                        <Link
                          to={nav.url}
                          className="text-black  text-[17px] font-semibold"
                        >
                          {nav.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  text={"Let's Talk"}
                  styles={
                    " bg-Blue mt-6 rounded-[150px] text-[20px] uppercase px-[18px] py-[14px] w-full text-center text-white"
                  }
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
