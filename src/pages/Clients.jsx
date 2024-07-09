import React from "react";
import {
  client,
  client1,
  client2,
  image,
  numbers,
  numbers2,
} from "../constants";

const Clients = () => {
  return (
    <section className="mt-5 ">
      <div className="section ">
        <div className="flex flex-col">
          <div className="">
            <img
              src={image.client}
              alt="client_Bg"
              className="w-full sm:h-[60vh] mx-auto rounded-lg object-cover"
              style={{ maxWidth: "80vw" }}
            />
          </div>

          {/*section of numbers */}
          <div className="flex justify-between mt-20 gap-5">
            <div className="flex gap-3 md:pl-5 w-[100%] md:w-[70%] ">
              <ul className="w-[50%]">
                {numbers.map((card, index) => (
                  <li
                    key={card.id}
                    className={`w-[100%] pl-[10px] ${
                      index === 1 ? "" : ""
                    } border-b border-gray-300`}
                  >
                    <div className="h-[130px] md:h-[120px] flex flex-col justify-between ">
                      <div className=" h-[90%]">
                        <p
                          className={`font-bold md:text-[36px] text-[25px] leading-[54px] ${
                            index === 2 ? "md:mt-[5px]" : ""
                          }`}
                        >
                          {card.title}
                        </p>
                        <span
                          className={`text-[16px] ${index === 2 ? "" : ""}`}
                        >
                          {card.span}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="w-[50%]">
                {numbers2.map((card, index) => (
                  <li
                    key={card.id}
                    className={`pl-[10px] w-[100%] ${
                      index === 1 ? "" : ""
                    } border-b border-gray-300`}
                  >
                    <div className="h-[130px] md:h-[120px] flex flex-col justify-between ">
                      <div className=" h-[90%]">
                        <p className="font-bold md:text-[36px] text-[25px] leading-[54px]">
                          {card.title}
                        </p>
                        <span className="text-[16px] ">{card.span}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:block hidden w-[592.872px] h-[491.577px] ">
              <img src={image.client2} alt="" />
            </div>
          </div>

          {/* section of company featured */}
          <div className="md:-mt-[100px] mt-[40px]">
            <div className=" pt-[52px] pb-[40px] lg:px-[20px] px-[10px] rounded-lg w-[95%] mx-auto flex flex-col items-center bg-white1">
              <div className="pb-[40px]">
                <h2 className=" font-bold text-[22px] leading-8 text-center">
                  Our clients
                </h2>
              </div>
              <div className=" flex flex-wrap justify-center sm:justify-around w-[100%] ">
                <div className=" flex  ">
                  {client.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-10  px-4 py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
                <div className=" flex ">
                  {client1.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-10 lg:px-5 px-4 py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
                <div className=" flex justify-center">
                  {client2.map((card) => (
                    <div
                      key={card.id}
                      className=" lg:py-7  py-4 block text-center   "
                    >
                      <img src={card.icon} alt="" className="w-[full]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

{
  /* <div className="flex gap-3 md:pl-5  w-[100%] md:w-[70%] border-2 border-yellow-500">
              <ul className=" w-[50%]">
                {numbers.map((card, index) => (
                  <li
                    key={card.id}
                    className={`w-[100%] pl-[10px]   ${
                      index === 1 ? "" : ""
                    }  `}
                  >
                    <div className="border-2 border-green-500">
                      <div className={` border-b-2 border-red-600 `}>
                        <p
                          className={`font-bold md:text-[36px] text-[25px] leading-[54px] ${
                            index === 2 ? " md:mt-[5px] " : ""
                          } `}
                        >
                          {card.title}{" "}
                        </p>
                        <span
                          className={`text-[16px]  ${index === 2 ? "  " : ""}`}
                        >
                          {card.span}{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className=" w-[50%]">
                {numbers2.map((card, index) => (
                  <li
                    key={card.id}
                    className={`pl-[10px] w-[100%]  ${index === 1 ? "" : ""}  `}
                  >
                    <div className=" border-2 border-green-500">
                      <div className={` border-b-2 border-red-600 `}>
                        <p className=" font-bold md:text-[36px] text-[25px] leading-[54px]">
                          {card.title}{" "}
                        </p>
                        <span className="text-[16px] leading-[25px]">
                          {card.span}{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */
}
