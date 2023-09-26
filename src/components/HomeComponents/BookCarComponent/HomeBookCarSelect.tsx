import React from "react";
import Select from "./Select";
import {
  faCalendarDays,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
export default function HomeBookCarSelect() {
  return (
    <div className="flex flex-wrap gap-x-4">
      <Select
        placeholder="Select your car type"
        car1="Toyota Camry"
        car2="Ford Mustang"
        car3="Honda CR-V"
        car4="Tesla Model 3"
        car5="Jeep Wrangler"
        car6="Chevrolet Corvette"
        color={"#8431aa"}
        icon={faCar}
      />
      <Select
        placeholder="Pick-up"
        car1="Brisbane"
        car2="Gold Coast"
        car3="Sydney"
        car4="Melbourne"
        color={"#8431aa"}
        icon={faLocationDot}
      />
      <Select
        placeholder="Drop-off"
        car1="Brisbane"
        car2="Gold Coast"
        car3="Sydney"
        car4="Melbourne"
        color={"#8431aa"}
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
        color={"#8431aa"}
        icon={faCalendarDays}
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
        icon={faCalendarDays}
        showDatePicker={true}
        image={faCalendarDays}
      />
      <button className="bg-purple-500 z-40 text-white shadow-2xl mt-6  rounded-md md:mt-auto h-[50px] lg:w-[30%] w-full md:w-[48%]">
        Search
      </button>
    </div>
  );
}
