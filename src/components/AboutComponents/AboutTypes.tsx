import React from "react";

interface AboutTypesProps {
  title: string;
  number: number;
  src: string;
}
export default function AboutTypes({ number, src, title }: AboutTypesProps) {
  return (
    <>
      <div className="flex-col w-1/3 items-center flex">
        <img src={src} className="object-contain" alt="" />
        <div>
          <p>{number}</p>
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
