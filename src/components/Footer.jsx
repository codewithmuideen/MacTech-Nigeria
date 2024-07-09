import React from "react";
import { Link } from "react-router-dom";
import { footers, links, links1 } from "../constants";

const Footer = () => {
  return (
    <section className=" bg-black pb-[35px]">
      <div className="section">
        <div className="flex md:flex-row justify-between flex-col ">
          <div className=" md:w-[30%] w-[100%] pt-10 text-Ash">
            <h2 className="text-[25px]">Locations</h2>
            <p>38 61-854 Poznań,</p>
            <p>ul. Mostowa</p>
            <p> Poland tel: +48 61 610 01 92</p>
          </div>

          {/* left item start */}
          <div className=" md:w-[69%] w-[100%] pt-10">
            <div className="md:border-l border-Ash flex justify-between md:flex-row flex-col md:pl-8 ">
              {/*start menu list */}
              <div className=" w-full md:w-[15%]">
                <h2 className="text-[20px] font-bold text-Ash">Menu</h2>
                <div className="flex flex-col mt-5">
                  <ul className="list-none  flex justify-end items-start flex-col ">
                    {links.map((nav) => (
                      <li
                        key={nav.id}
                        className={` text-[18px]  mb-2 font-Lato hover:text-Blue text-Ash `}
                      >
                        <Link to={nav.url}>{nav.text}</Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="list-none  flex justify-end items-start  flex-col ">
                    {links1.map((nav, index) => (
                      <li
                        key={nav.id}
                        className={`  text-[18px]  font-Lato hover:text-Blue text-Ash  ${
                          index !== links1.length - 1 ? "mb-2" : "mb-0"
                        }  `}
                      >
                        <Link to={nav.url}>{nav.text}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* end menu list */}

              {/* service list */}
              <div className=" w-full md:w-auto md:mt-0 mt-5">
                <h2 className="text-[20px] font-bold text-Ash">Services</h2>

                <div className=" flex flex-row flex-wrap  gap-2 mt-5 ">
                  {footers.map((footerlink) => (
                    <div
                      key={footerlink.title}
                      className={`flex flex-col   text-left`}
                    >
                      <h4 className="text-[18px] leading-[27px] font-semibold font-Lato text-Blue">
                        {footerlink.title}
                      </h4>
                      <ul className="list-disc mt-4 pl-5 flex md:flex-col flex-wrap gap-x-[30px] md:gap-x-0">
                        {footerlink.links.map((link, index) => (
                          <li
                            key={link.name}
                            className={` text-[16px] leading-[24px] font-Lato marker text-Ash  hover:text-Blue ${
                              index !== footerlink.links.length - 1
                                ? "mb-4"
                                : "mb-0"
                            }`}
                          >
                            <Link to={link.url}>{link.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              {/* end of service list */}
            </div>
          </div>
          {/* left item end */}
        </div>
      </div>
    </section>
  );
};

export default Footer;
