import React from "react";
import { image } from "../constants";
import Button from "../components/Button";

const Join = () => {
  return (
    <section className="bg-black mt-5">
      <div className="section pt-[40px]">
        {/* top item */}
        <div className="flex justify-between flex-col sm:flex-row">
          <div className="  sm:w-[48%] w-[100%] ">
            <img
              src={image.join}
              alt=""
              className="w-[100%] sm:h-[372px] object-cover"
            />
          </div>

          <div className="text-white sm:mt-0 mt-9   sm:w-[50%] w-[100%]  pb-[30px]">
            <div className="">
              <h2 className="text-[20px] font-medium leading-[35px]">
                We’re hiring!
              </h2>
              <p className="sm:text-[60px] text-[40px] font-bold sm:leading-[75px] leading-[50px]">
                Join the Python Powerhouse
              </p>
            </div>
            <div className="pt-[30px]">
              <p className="text-[16px] font-Lato leading-[26px]">
                If you care about team power, software craftsmanship, and
                continuous improvement, you’ll find a home with STX Next. Join
                one of our six offices and be part of the finest Python
                development company in Europe.
              </p>
            </div>
            <div className="pt-[40px]">
              <Button
                text={"VIEW ALL JOB OFFERS "}
                styles={
                  "  bg-Blue  rounded-[150px] font-semibold text-[12px] uppercase p-[20px] w-[209px] text-center text-white"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
