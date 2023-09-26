import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Cars } from "../../../types/TypesComponent";

export default function Select({
  placeholder,
  car1,
  car2,
  car3,
  car4,
  car5,
  car6,
  color,
  icon,
  showDatePicker,
  image,
}: Cars) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="mt-6 lg:w-[30%] w-full md:w-[48%] z-40">
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon icon={icon} style={{ color: color }} />
          <p>
            {placeholder} <span className="text-purple-500"> *</span>
          </p>
        </div>

        {showDatePicker ? (
          <div className="font-normal z-50 border shadow-md w-full py-3 p-4 mt-2 flex justify-end ">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              // placeholderText={<FontAwesomeIcon icon={icon}}
              dateFormat="dd/MM/yyyy"
              className="w-full text-right"
            />
          </div>
        ) : (
          <>
            <select
              name="1"
              placeholder="Select your car type"
              className="font-normal border shadow-md w-full py-3 p-4 mt-2"
              id=""
            >
              <option value="" disabled selected>
                {placeholder}
              </option>
              <option value="">{car1}</option>
              <option value="">{car2}</option>
              <option value="">{car3}</option>
              <option value="">{car4}</option>
              {car5 && <option value="">{car5}</option>}
              {car6 && <option value="">{car6}</option>}
            </select>{" "}
          </>
        )}
      </div>
    </>
  );
}