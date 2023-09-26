import React from "react";
import { LiaQuoteRightSolid } from "react-icons/lia";

export interface HomeTestCardProps {
  name: string;
  homeTown: string;
  src: string;
  para: string;
}
export default function HomeTestCard({homeTown, name, para, src}:HomeTestCardProps) {
  return (
    <div className="rounded-md   lg:w-1/2 shadow-2xl font-bold h-[300px] p-12 space-y-4">
      <h1 className="text-lg tracking-wide">
       "{para}"
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 items-center">
          <img
            src={src}
            className="rounded-full h-20  object-fill"
            alt=""
          />
          <div>
            <h1>{name}</h1>
            <h1 className="font-normal">{homeTown}</h1>
          </div>
        </div>
        <LiaQuoteRightSolid className="text-5xl text-purple-500" />
      </div>
    </div>
  );
}
