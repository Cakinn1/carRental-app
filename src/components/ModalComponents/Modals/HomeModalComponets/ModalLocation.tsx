import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectStateValue } from "../../../../redux/feature/selectedValueSlice";
import { BsPinMap } from "react-icons/bs";
import ModalLocationDropOff from "./ModalLocationDropOff";
import ContactInput from "../../../ContactComponents/ContactMainRightComponent/ContactInput";
import HomeInputs from "./HomeInputs";
import { closeBookCarModal } from "../../../../redux/feature/signupSlice";
import { AiOutlineLoading } from "react-icons/ai";
export default function ModalLocation() {
  const [loading, setLoading] = useState<boolean>(false);
  const [thanks, setThanks] = useState<boolean>(false);
  const dispatch = useDispatch();
  const carInfo = useSelector(
    (state: SelectStateValue) => state.selectedValues.values
  );

  function handleModal() {
    setLoading(true);

    const timer1 = setTimeout(() => {
      setThanks(true);
    }, 3000);

    const timer2 = setTimeout(() => {
      setThanks(true);
    }, 6000);

    function clearTimers() {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }

    const timer = setTimeout(() => {
      setLoading(false);
      clearTimers();
    }, 3000);

    return clearTimers;
  }

  function removeClass() {
  setTimeout(() => {
      document.body.classList.remove("modal-open");
      dispatch(closeBookCarModal());
    }, 6000);
  }

  return (
    <div className=" bg-white z-50">
      <div className="flex justify-between p-6 ">
        <div className="space-y-4">
          <h1 className="font-bold text-purple-500">Location</h1>
          <ModalLocationDropOff location="Pick-up location" isDropOff={false} />
          <ModalLocationDropOff location="Drop-off location" isDropOff={true} />
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-x-3 font-bold ">
            <p>Car -</p>
            <p className="text-purple-500">{carInfo[0].value}</p>
          </div>
          <img src={carInfo[0]?.image} className="w-[300px]" alt="" />
        </div>
      </div>

      <hr />
      <div className="flex gap-x-4 flex-wrap p-6 z-50">
        <HomeInputs title="First Name" type="text" mainTitle={true} />
        <HomeInputs title="Last Name" type="text" />
        <HomeInputs title="Phone Number" type="number" />
        <HomeInputs title="Age" type="number" />
        <HomeInputs title="Email" type="email" wfull={true} />
        <HomeInputs title="Address" type="text" wfull={true} />
        <HomeInputs title="City" type="text" />
        <HomeInputs title="Zip Code" type="number" />
        {loading ? (
          <button className="w-full flex justify-center items-center text-2xl border mt-3 py-4 uppercase shadow-2xl font-bold bg-purple-500 text-white">
            <AiOutlineLoading className="animate-spin" />
          </button>
        ) : (
          <button
            onClick={() => {
              handleModal();
              removeClass();
            }}
            className={`w-full text-2xl border mt-3 py-4 uppercase shadow-2xl font-bold ${
              thanks ? "bg-green-500" : "bg-purple-500"
            } text-white`}
          >
            {thanks ? "Thank you!" : "reverse now"}
          </button>
        )}
      </div>
    </div>
  );
}
