import React from "react";
import { BsArrowRight } from "react-icons/bs";

const ServicesSlider = ({ people, index }) => {
  return (
    <div>
      {people.map((person, personIndex) => {
        const { id, icon, description, title, more } = person;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={`${position} pl-[5px] sm:pl-0`} key={id}>
            <div className=" pb-[40px] pt-[20px] px-[20px]">
              <div className="flex items-center">
                <img src={icon} alt={title} className="w-[90px]" />
                <h5 className=" text-Blue text-[30px] font-bold leading-8 pl-[32px] ">
                  {title}
                </h5>
              </div>

              <div className="pl-[19px] border-l-[1px] border-Blue mt-[33px]">
                <p className=" text-white text-[20px] leading-8">
                  {description}
                </p>
              </div>

              <div className="mt-[30px]">
                <a
                  href=""
                  className="flex items-center text-[15px] font-bold leading-5 text-Blue gap-2"
                >
                  {more} <BsArrowRight />
                </a>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ServicesSlider;
