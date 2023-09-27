import { PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsMap, BsPinMap } from "react-icons/bs";
export default function ContactMainLeft() {
  return (
    <div className="w-1/2  h-[500px]">
      <div className="space-y-8 w-[400px]">
        <h1 className="text-4xl font-bold ">Need additional information ?</h1>
        <p className="text-[#706f7b] text-sm">
          A multifaceted professional skilled in multiple fields of research,
          development as well as a learning specialist. Over 15 years of
          experience.
        </p>
        <div className="space-y-4">
          <div className="gap-x-2 flex items-cent">
            <PhoneIcon className="h-[18px] text-purple-500" />

            <h1>+(123) 456 789</h1>
          </div>
          <div className="gap-x-2 flex items-center">
            <AiOutlineMail className="text-lg text-purple-500" />
            <h1>example@gmail.com</h1>
          </div>
          <div className="gap-x-2 flex items-center">
            <BsPinMap className="text-lg text-purple-500" />
            <h1>Gold Coast, Australia</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
