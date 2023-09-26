import React from "react";
export interface HomeWhyChooseURightProps {
    image: string
    h1: string
    para: string
}
export default function HomeWhyChooseURight({h1, image, para}:HomeWhyChooseURightProps) {
  return (
    <div className="flex gap-x-4">
      <img src={image} className="object-cover" alt="" />
      <div>
        <h1 className="text-lg">{h1}</h1>
        <p className="text-sm text-[#706f7b] font-normal w-4/5">
          {para}
        </p>
      </div>
    </div>
  );
}
