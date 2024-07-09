import React from "react";

const Services = () => {
  return (
    <div className=" section__bg ">
      {/* Black color overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>
      {/* Your content */}
      <div className="text-white text-center sm:text-left  absolute top-44 md:top-[350px]  sm:left-[15%] md:left-[30%] md:transform md:-translate-x-1/2 md:-translate-y-1/2  ">
        <div className=" px-3 md:py-3 flex flex-col gap-y-4 md:gap-y-2 justify-center md:items-start items-center w-full  sm:w-[554px]   ">
          <h1 className="text-[40px] font-bold text-white leading-[45px]  sm:leading-[57px] text-focus-in">
            Data Quotient for business sense
          </h1>
          <p className="mt-4 sm:text-[23px] text-[20px] text-focus-in ">
            We have a number of different teams within our company that
            specialize in different areas of technology and business so you can
            be rest assured of quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
