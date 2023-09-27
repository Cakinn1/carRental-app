import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedValue } from "../../../redux/feature/selectedValueSlice";
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
  selectName,
  updateSelectedValues,
  selectedValue,
  setSelectedValue,
}: Cars) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const dispatch = useDispatch(); // Get the dispatch function

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toLocaleDateString();
      dispatch(updateSelectedValue({ name: selectName, value: formattedDate })); // Dispatch the action to update the selected value
    } else {
      dispatch(updateSelectedValue({ name: selectName, value: "" })); // Dispatch the action to clear the selected value
    }
  };

  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedValue(selectedValue);
    dispatch(updateSelectedValue({ name: selectName, value: selectedValue }));
    console.log(
      updateSelectedValue({ name: selectName, value: selectedValue })
    );
  };
  console.log('1231312', selectedValue)
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
          <div className="font-normal z-50 border shadow-md w-full py-3 p-4 mt-2 flex justify-between cursor-pointer">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
              className="w-full text-left focus:outline-none border-none"
              popperPlacement="top"
              isClearable={false}
              onKeyDown={(e) => {
                if (!/\d/.test(e.key)) {
                  e.preventDefault();
                }
              }}
            />
            <CalendarDaysIcon className="h-5 pointer-events-none" />
          </div>
        ) : (
          <>
            <select
              name="1"
              placeholder="Select your car type"
              className="font-normal border shadow-md w-full py-3 p-4 mt-2"
              id=""
              value={selectedValue}
              required
              onChange={handleCarChange} // Call handleCarChange when the value changes
            >
              <option value="" disabled selected>
                {placeholder}
              </option>
              <option value={car1}>{car1}</option>
              <option value={car2}>{car2}</option>
              <option value={car3}>{car3}</option>
              <option value={car4}>{car4}</option>
              {car5 && <option value={car5}>{car5}</option>}
              {car6 && <option value={car6}>{car6}</option>}
            </select>{" "}
          </>
        )}
      </div>
    </>
  );
}
