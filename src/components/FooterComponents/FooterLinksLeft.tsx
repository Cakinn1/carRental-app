import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

export default function FooterLinksLeft() {
  return (
    <div className="space-y-6 md:space-y-4 w-full md:w-1/4">
      <h1 className="text-lg">
        <span className="font-bold uppercase">Car</span> Rental
      </h1>
      <p className="text-[#706f7b]">
        We offers a big range of vehicles for all your driving needs. We have
        the perfect car to meet your needs.
      </p>
      <div className="text-center flex flex-col space-y-2 mx-auto items-center md:items-start">
        <div className="gap-x-2 flex items-cent">
          <AiOutlinePhone className="text-lg text-purple-500" />
          <h1>+(123) 456 789</h1>
        </div>
        <div className="gap-x-2 flex items-center">
          <AiOutlineMail className="text-lg text-purple-500" />
          <h1>exmaple@gmail.com</h1>
        </div>
      </div>
    </div>
  );
}
