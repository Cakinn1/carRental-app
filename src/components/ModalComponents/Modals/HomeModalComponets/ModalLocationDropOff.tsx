import React from "react";
import { BsPinMap } from "react-icons/bs";
import { useSelector } from "react-redux";
import { SelectStateValue } from "../../../../redux/feature/selectedValueSlice";



interface MainLocationDropOffProps {
  isDropOff: boolean
  location: string
}


export default function ModalLocationDropOff({isDropOff, location}: MainLocationDropOffProps) {
  const carInfo = useSelector(
    (state: SelectStateValue) => state.selectedValues.values
  );

  return (
    <div className="flex gap-x-2 items-center">
      <BsPinMap className="text-purple-500" />
      <div className="flex flex-col">
        <h1 className="font-bold">{location}</h1>
        <p className="text-[#777] text-sm font-semibold">{isDropOff ? carInfo[2].value : carInfo[1].value}</p>
      </div>
    </div>
  );
}
