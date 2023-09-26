import React, { useState } from "react";
import { HomeRentalButtonProps } from "../../../types/TypesComponent";

export default function HomeRentalButton({
  title,
  handleButton,
  selected,
}: HomeRentalButtonProps) {
  return (
    <button
      onClick={() => handleButton(title)}
      className={`py-3 border font-bold   hover:bg-purple-500 hover:duration-500 ease-in-out transition-colors duration-500 hover:text-white text-lg pl-8 text-left  ${
        selected && title ? "bg-purple-500 text-white" : "bg-[#e9e9e9]"
      } `}
    >
      {title}
    </button>
  );
}
