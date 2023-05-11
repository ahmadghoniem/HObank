import React from "react";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div className=" h-36 w-36 cursor-pointer rounded-full bg-[image:var(--bg-blue-gradient)] p-[2px]">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-primary text-white">
        <div className="flex flex-row items-start">
          <p className="font-poppins text-lg/[24px] font-medium">
            <div className="item-center flex flex-row">
              <span className="bg-[image:var(--text-gradient)] bg-clip-text text-transparent">
                Get
              </span>
              <img
                alt="arrow"
                src={arrowUp}
                className="ml-2 h-6 w-6 object-contain"
              />
            </div>
            <span className="bg-[image:var(--text-gradient)] bg-clip-text text-transparent">
              Started
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
