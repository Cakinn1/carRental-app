import React from "react";

export default function HomeWhyChooseUsImage() {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-full h-full">
        <img src="/bg-cover.png" className="max-w-[1200x] mxauto" alt="" />
        <img
          src="/bgimage.png"
          className="absolute md:top-[200px] md:h-[800px] h-[1000px] pointer-events-none  md:-left-[100px] top-0  object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
