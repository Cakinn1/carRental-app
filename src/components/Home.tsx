import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import BookCar from "./BookCar";

export default function Home() {
  return (
    <>
    <section className="max-w-[1000px] mx-auto p-4 height flex justify-center items-center relative">
      <div className="text-center w-[400px] md:w-1/2 md:text-left space-y-4 font-bold ">
        <h1 className="text-2xl">Plan your trip now</h1>
        <h1 className="text-5xl mx-auto font-extrabold">
          Save
          <span className="text-purple-500 mx-2">Big</span>
          with our car rental
        </h1>
        <p className="font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente
          perferendis vel vero? Unde nesciunt laudantium, perferendis animi
          commodi illo!
        </p>
        <div className="flex justify-center items-center md:justify-start ">
          <button
            className="px-8 py-3 mr-4 bg-purple-500 border border-purple-500 shadow-2xl rounded-md text-white flex justify-center 
          items-center gap-x-2"
          >
            Book Ride
            <CheckBadgeIcon className="h-4" />
          </button>
          <button
            className="px-8 py-3 mr-4 bg-black border-black border shadow-2xl rounded-md text-white flex justify-center 
          items-center gap-x-2"
          >
            Learn More
            <ChevronRightIcon className="h-4" />
          </button>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2 p-4 relative">
        {/* Add an img here on lg breakpoint */}
        {/* <img src="wave.svg" className="h-full  absolute top-0 w-full" alt="" /> */}
        <img src="carimg.png" alt="" />
      </div>
    </section>
    {/* sections */}
    <BookCar />
    </>
  );
}
