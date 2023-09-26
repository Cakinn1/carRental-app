import React from "react";
import { BsCarFront } from "react-icons/bs";
import FooterLinksButton from "../FooterComponents/FooterLinksButton";
export interface VechicleModelMainProps {
  title: string;
  rentPerDay: number;
  model: string;
  mark: string;
  year: number;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
  imageUrl: string;
}

export default function VechicleModelMain({
  ac,
  doors,
  fuel,
  mark,
  model,
  rentPerDay,
  title,
  transmission,
  year,
  imageUrl,
}: VechicleModelMainProps) {
  return (
    <div className="w-full md:w-[48%] lg:w-[30%] rounded-lg mb-8 border">
      <img src={imageUrl} alt="" className="max-h-[180px] h-full mx-auto " />
      <div className="p-6 border-t flex flex-col space-y-4">
        <div className="flex justify-between font-bold text-lg">
          <p>{title}</p>
          <p>${rentPerDay}</p>
        </div>
        <div className="flex  text-lg ml-auto">
          <p className="text-sm ">per day</p>
        </div>
        <div className="flex justify-between text-[#777]">
          <div className="flex items-center gap-x-4">
            <BsCarFront className="text-lg" />
            <p className="font-semibold">{model}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="font-semibold">{doors}</p>
            <BsCarFront className="text-lg" />
          </div>
        </div>

        <div className="flex justify-between text-[#777]">
          <div className="flex items-center gap-x-4">
            <BsCarFront className="text-lg" />
            <p className="font-semibold">{transmission}</p>
          </div>
          <div className="flex items-center gap-x-4">
            <p className="font-semibold">{fuel}</p>
            <BsCarFront className="text-lg" />
          </div>
        </div>

        <div className="space-y-4">
          <hr />
          <button className="py-4 w-full rounded-lg hover:shadow-2xl shadow-lg text-center border font-bold bg-purple-200 text-white  hover:bg-purple-500 hover:duration-500 ease-in-out transition-colors duration-500 hover:text-white text-lg">
            Book Ride
          </button>
        </div>
      </div>
    </div>
  );
}
