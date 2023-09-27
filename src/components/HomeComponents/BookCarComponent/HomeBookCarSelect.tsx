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
import { updateSelectedValue } from "../../../redux/feature/selectedValueSlice";

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

const defaultValues = [
  { name: "select1", value: "" },
  { name: "select2", value: "" },
  { name: "select3", value: "" },
  { name: "select4", value: "" },
  { name: "select5", value: "" },
];

export default function HomeBookCarSelect() {
  const [selectedValue, setSelectedValue] = useState<SelectedValuesProps[]>(defaultValues);

  const modal = useSelector((state: any) => state.selectedValues);
  console.log("Redux State:", modal);
  const [selectedValues, setSelectedValues] =
    useState<SelectedValuesProps[]>(defaultValues);

  const updateSelectedValues = (name: string, value: string) => {
    dispatch(updateSelectedValue({ name, value }));
    console.log(updateSelectedValue({ name, value }));
  };
  console.log("Component State:", selectedValues);
  const dispatch = useDispatch();

  const isOpen = useSelector(
    (state: ModalState) => state.modal.bookCarModalOpen
  );
  console.log(selectedValues);

  useEffect(() => {
    // Update the component state when Redux state changes
    setSelectedValues(modal);
  }, [modal]); //

  const allValuesSelected = selectedValues.every((item) => item.value !== "");
  function handleDispatch() {
    if (allValuesSelected) {
      dispatch(openBookCarModal());
    }
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-wrap gap-x-4"
    >
      <Select
        placeholder="Select your car type"
        car1="Toyota Camry"
        car2="Ford Mustang"
        car3="Honda CR-V"
        car4="Tesla Model 3"
        car5="Jeep Wrangler"
        car6="Chevrolet Corvette"
        color={"#8431aa"}
        selectName="select1"
        icon={faCar}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        updateSelectedValues={updateSelectedValues}
      />
      <Select
        placeholder="Pick-up"
        car1="Brisbane"
        car2="Gold Coast"
        car3="Sydney"
        car4="Melbourne"
        color={"#8431aa"}
        selectName="select2"
        icon={faLocationDot}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        updateSelectedValues={updateSelectedValues}
      />
      <Select
        placeholder="Drop-off"
        car1="Brisbane"
        car2="Gold Coast"
        car3="Sydney"
        car4="Melbourne"
        updateSelectedValues={updateSelectedValues}
        color={"#8431aa"}
        selectName="select3"
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        icon={faLocationDot}
      />
      <Select
        placeholder="Pick-up"
        car1="Toyota Camry"
        car2="Ford Mustang"
        car3="Honda CR-V"
        car4="Tesla Model 3"
        car5="Jeep Wrangler"
        car6="Chevrolet Corvette"
        selectName="select4"
        color={"#8431aa"}
        icon={faCalendarDays}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        updateSelectedValues={updateSelectedValues}
      />
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
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
        updateSelectedValues={updateSelectedValues}
        showDatePicker={true}
        image={faCalendarDays}
      />
      <button
        onClick={() => handleDispatch()}
        className="bg-purple-500 z-40 text-white shadow-2xl mt-6  rounded-md md:mt-auto h-[50px] lg:w-[30%] w-full md:w-[48%]"
      >
        Search
      </button>
      {selectedValues?.map((item) => (
        <div>
          {item.value}
          {item.name}
        </div>
      ))}
      {!allValuesSelected && <div>da</div>}
      {selectedValue}
    </form>
  );
}
