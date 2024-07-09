import React, { useState, useEffect } from "react";
import { serviceCard } from "../constants";
import { BsArrowRight } from "react-icons/bs";
import ServicesSlider from "../components/ServicesSlider";

const ServicesCard = () => {
  const [people, setPeople] = useState(serviceCard);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className=" bg-Dark2 border-t-[1px] border-Dark3 flex flex-col justify-center items-center">
      <div className="sm:block hidden section">
        <div className=" flex ">
          {serviceCard.map((card, index) => (
            <div
              className={` border-Dark3 pb-[40px] pt-[28px] px-[20px] ${
                index === 2 ? "border-r-[0px] " : "border-r-[1px]"
              }`}
            >
              <div className="flex items-center">
                <img src={card.icon} alt={card.title} />
                <h5 className=" text-Blue text-[22px] font-bold leading-8 pl-[32px] ">
                  {card.title}
                </h5>
              </div>

              <div className="pl-[19px] border-l-[1px] border-Blue mt-[33px]">
                <p className=" text-white text-[18px] leading-8">
                  {card.description}
                </p>
              </div>

              <div className="mt-[30px]">
                <a
                  href=""
                  className="flex items-center text-[12px] font-bold leading-5 text-Blue gap-2"
                >
                  {card.more} <BsArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <div className="section-center">
          <ServicesSlider people={people} index={index} />
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
