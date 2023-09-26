import React from "react";

export interface HomeRentalDataProps {
  price: string;
  model: string;
  mark: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
  title: string
}

export default function HomeRentalData({
  ac,
  title,
  doors,
  fuel,
  mark,
  model,
  price,
  transmission,
  year,
}: HomeRentalDataProps) {
  return (
    <>
      <div className="flex gap-x-2 justify-center items-center font-bold p-2 text-lg bg-purple-500 text-white">
        <p className="text-2xl">${price}</p>
        <p>/</p> <p>rent per day</p>
      </div>
      <div className="font-bold ">
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>Model:</p>
          <p>{model}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>Mark:</p>
          <p>{mark}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>Year:</p>
          <p>{year}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>doors:</p>
          <p>{doors}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>AC:</p>
          <p>{ac}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>transmission:</p>
          <p>{transmission}</p>
        </div>
        <div className="flex justify-between border border-black h-[40px] items-center px-3">
          <p>Fuel:</p>
          <p>{fuel}</p>
        </div>
        {title}
      </div>
    </>
  );
}
