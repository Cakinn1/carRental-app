import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCar,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { StarIcon } from "@heroicons/react/24/solid";
import Select from "./common/Select";

export default function BookCar() {
  // select car, pick up car & drop off car (location), pick up & drop off (dates)
  return (
    <section className="p-4 mx-auto max-w-[1000px] h-[800px]">
      <div className="w-full bg-white border-black border shadow-xl h-full p-10 font-bold pb-14">
        <div className="text-3xl gap-x-[5px] font-bold flex">
          <p>Book a </p>
          <p className="text-purple-500">car</p>
        </div>

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
      </div>
    </section>
  );
}
