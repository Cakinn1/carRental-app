import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function HomeWhyChooseUsLeft() {
  return (
    <div className=" lg:w-[48%] p-6  flex flex-col font-bold space-y-4">
      <h1 className="text-2xl">Why Choose Us</h1>
      <h2 className="text-4xl">Best valued deals you will ever find</h2>
      <p className="text-sm font-normal text-[#706f7b]">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        suscipit laudantium eius minima autem iusto, dolorem dignissimos
        officiis maxime saepe assumenda corporis ducimus nihil consectetur
        quibusdam esse impedit optio quae beatae expedita aperiam nostrum
        laboriosam. Praesentium possimus beatae quos corporis.
      </p>
      <div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-purple-500 w-full md:w-[200px] hover:shadow-2xl flex justify-center items-center px-6 py-4 rounded-md gap-x-2  shadow-xl text-white"
        >
          Find details
          <ChevronRightIcon className="h-5" />
        </button>
      </div>
    </div>
  );
}
