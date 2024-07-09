import React from "react";
import { hiring, image } from "../constants";

const Hiring = () => {
  return (
    <section className="pt-[50px] bg-white2 ">
      <div className="section">
        <div className="flex justify-between w-[100%] mx-auto">
          <h2 className="lg:text-[60px] text-[35px] lg:leading-[75px] leading-[40px] font-bold lg:w-[500px] w-[100%]">
            What you’ll get from hiring us
          </h2>

          <hr className=" mt-5 border-black w-[55%] hidden lg:block" />
        </div>

        <div className=" flex flex-col-reverse md:flex-row mt-5 ">
          {/* left item */}
          <div className="w-[100%] lg:w-[70%] flex flex-wrap gap-y-3 lg:gap-y-0  lg:pl-[43px]">
            {hiring.map((card) => (
              <div
                className="lg:w-[346px] w-[100%]  lg:pt-[48px] pt-[25px] px-[30px] flex gap-y-4 flex-col items-center text-center lg:h-[350px] h-[290px]"
                key={card.id}
              >
                <div>
                  <img src={card.icon} alt="" />
                </div>
                <div>
                  <h2 className="text-[16px] font-bold leading-6">
                    {card.title}
                  </h2>
                </div>
                <div>
                  <p className="text-[16px] leading-[25px] text-Ash font-Lato">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* right item */}
          <div className=" lg:w-[514.286px] w-[100%] lg:mx-0 mx-auto">
            <img
              src={image.kitchen}
              alt=""
              className="lg:w-[471px] w-[100%] z-50"
            />
            <div className="bg-black text-white p-[20px]  lg:pt-[50px] lg:pr-[55px] lg:pb-[52px] lg:pl-[92px] lg:h-[430px]">
              <div>
                <h2 className=" font-Montserrat font-bold lg:text-[36px] text-[23px] leading-[35px] lg:leading-[54px]">
                  Work with the largest Python software house in Europe
                </h2>
                <p className="font-Lato text-[16px] leading-6 mt-5">
                  Our specialization helps us attract the best talent in Central
                  Europe—over 350 developers and counting!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;
