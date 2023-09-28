import React, { useEffect, useState } from "react";
import Select from "./Select";
import {
  faCalendarDays,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  ModalRootState,
  openBookCarModal,
} from "../../../redux/feature/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import HomeInfoModal from "../../ModalComponents/HomeInfoModal";
import {
  SelectStateValue,
  updateSelectedValue,
} from "../../../redux/feature/selectedValueSlice";
import { carData } from "../../../api/ApiServices";

export interface ModalState {
  modal: {
    bookCarModalOpen: boolean;
    signupModalOpen: boolean;
    signinModalOpen: boolean;
  };
}

export interface SelectedValuesProps {
  name: string;
  value: string;
}

export const defaultValues = [
  { name: "select1", value: "" },
  { name: "select2", value: "" },
  { name: "select3", value: "" },
  { name: "select4", value: "" },
  { name: "select5", value: "" },
];

const pickUpDropOff = [
  { name: "Brisbane" },
  { name: "Gold Coast" },
  { name: "Sydney" },
  { name: "Melbourne" },
];

export default function HomeBookCarSelect() {
  const [isModaOpen, setIsModalOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectedValues = useSelector(
    (state: SelectStateValue) => state.selectedValues.values
  );
  const allValuesAreNotEmpty = selectedValues.every(
    (item) => item.value !== ""
  );

  function handleDispatch() {
    if (allValuesAreNotEmpty) {
      dispatch(openBookCarModal());
      setIsModalOpen(true);
      document.body.classList.add("modal-open");
    }
  }

  function handleValues(selectName: string, value: string, img: string) {
    dispatch(updateSelectedValue({ name: selectName, value, image: img }));
  }
  console.log(selectedValues);
  console.log(pickUpDropOff[1].name);

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-wrap gap-x-4 z-2"
    >
      <Select
        placeholder="Select your car type"
        car1={carData[0].title}
        car2={carData[1].title}
        car3={carData[2].title}
        car4={carData[3].title}
        car5={carData[4].title}
        car6={carData[5].title}
        color={"#8431aa"}
        selectName="select1"
        icon={faCar}
      />
      <Select
        placeholder="Pick-up"
        car1={pickUpDropOff[0].name}
        car2={pickUpDropOff[1].name}
        car3={pickUpDropOff[2].name}
        car4={pickUpDropOff[3].name}
        color={"#8431aa"}
        selectName="select2"
        icon={faLocationDot}
      />
      <Select
        placeholder="Drop-off"
        car1={pickUpDropOff[0].name}
        car2={pickUpDropOff[1].name}
        car3={pickUpDropOff[2].name}
        car4={pickUpDropOff[3].name}
        color={"#8431aa"}
        selectName="select3"
        icon={faLocationDot}
      />
      {/* <Select
        placeholder="Pick-up"
        car1={pickUpDropOff[0].name}
        car2={pickUpDropOff[1].name}
        car3={pickUpDropOff[2].name}
        car4={pickUpDropOff[3].name}
        selectName="select4"
        color={"#8431aa"}
        icon={faCalendarDays}
      /> */}
      <Select
        placeholder="Drop-off"
        car1="Toyota Camry"
        car2="Ford Mustang"
        car3="Honda CR-V"
        car4="Tesla Model 3"
        car5="Jeep Wrangler"
        car6="Chevrolet Corvette"
        color={"#8431aa"}
        selectName="select5"
        icon={faCalendarDays}
        showDatePicker={true}
        image={faCalendarDays}
      />
      <div className="w-full mt-6">

        <button
          onClick={() => handleDispatch()}
          className="bg-purple-500  z-2 text-white shadow-2xl text-center  rounded-md md:mt-auto h-[50px] lg:w-[30%] w-full md:w-[48%]"
          >
          Search
        </button>
          </div>
    </form>
  );
}
