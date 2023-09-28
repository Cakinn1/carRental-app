import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { carData } from "../../../api/ApiServices";
import {
  SelectStateValue,
  updateSelectedValue,
} from "../../../redux/feature/selectedValueSlice";
import { Cars } from "../../../types/TypesComponent";
import { defaultValues } from "./HomeBookCarSelect";
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
  img,
  selectName,
}: Cars) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const dispatch = useDispatch();

  const selectedValues = useSelector(
    (state: SelectStateValue) => state.selectedValues.values
  );
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toLocaleDateString();
      dispatch(updateSelectedValue({ name: selectName, value: formattedDate }));
    } else {
      dispatch(updateSelectedValue({ name: selectName, value: "" }));
    }
  };

  const handleCarChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    const selectedImage =
      e.target.options[e.target.selectedIndex].getAttribute("data-car-image");

    dispatch(
      updateSelectedValue({
        name: selectName,
        value: selectedValue,
        image: selectedImage || "",
      })
    );
  };
  return (
    <>
      <div className="mt-6 lg:w-[30%] w-full md:w-[48%]">
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
              className="font-normal border cursor-pointer shadow-md w-full py-3 p-4 mt-2"
              id=""
              required
              onChange={handleCarChange}
            >
              <option value="" disabled selected>
                {placeholder}
              </option>
              <option data-car-image={carData[0].imageUrl} value={car1}>
                {car1}
              </option>
              <option data-car-image={carData[1].imageUrl} value={car2}>{car2}</option>
              <option data-car-image={carData[2].imageUrl} value={car3}>{car3}</option>
              <option data-car-image={carData[3].imageUrl} value={car4}>{car4}</option>
              {car5 && <option data-car-image={carData[4].imageUrl}  value={car5}>{car5}</option>}
              {car6 && <option data-car-image={carData[5].imageUrl}  value={car6}>{car6}</option>}
            </select>{" "}
          </>
        )}
      </div>
    </>
  );
}
