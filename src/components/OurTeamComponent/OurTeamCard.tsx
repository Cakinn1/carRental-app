import React from "react";

export interface OurTeamCardProps {
  src: string;
  name: string;
  job: string;
}

export default function OurTeamCard({ src, job, name }: OurTeamCardProps) {
  return (
    <div className="w-full md:w-[47%] lg:w-[30%] flex flex-col mb-10 border shadow-2xl ">
      <img src={src} alt="" />
      <div className="p-6 mx-auto text-center">
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-[#777]">{job}</p>
      </div>
    </div>
  );
}
