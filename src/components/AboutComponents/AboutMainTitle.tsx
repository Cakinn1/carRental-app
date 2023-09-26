import React from "react";

export default function AboutMainTitle() {
  return (
    <>
      <div
        className="relative bg-cover h-[300px] -z-30 bg-center"
        style={{
          backgroundImage: `url('/futureCar.png')`,
        }}
      >
        <span className="absolute -z-4 bg-opacity-80 bg-black w-full left-0 top-0 h-full"></span>
      </div>
      <div className="starting-container">
        <div className="absolute top-[150px] ml-10  space-y-3 text-white">
          <h1 className="font-bold text-3xl">About</h1>
          <p className="font-semibold">Home / About</p>
        </div>
      </div>
    </>
  );
}
