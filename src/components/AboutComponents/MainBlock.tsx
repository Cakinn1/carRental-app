import { PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";


export interface MainBlock {
  isActive?: boolean
}


export default function MainBlock({isActive}: MainBlock) {
  return (
    <div className={`p-6 text-white relative space-y-6 h-[250px] border flex bg-[#2d2d2d] flex-col justify-center items-center text-center ${isActive ? "" : " my-[80px]"}`}>
      <img
        src="banner.png"
        className="absolute object-cover opacity-10 h-full w-full"
        alt=""
      />
      <div className="flex justify-center items-center flex-col md:flex-row space-y-4 md:space-y-0 gap-x-4">
        <h1 className="font-bold text-3xl z-40 ">
          Book a car by getting in touch with us
        </h1>
        <div className="flex justify-center text-purple-500 gap-x-3 items-center font-bold ">
          <PhoneIcon className="h-10 " />
          <p className="text-3xl">(123) 456-7869</p>
        </div>
      </div>
    </div>
  );
}
