import { useEffect, useState } from "react";
import HomeTitle from "./HomePlanTripComponents/HomeTitle";
import HomeRentalButton from "./HomeRentalFleetComponents/HomeRentalButton";
import HomeRentalData from "./HomeRentalFleetComponents/HomeRentalData";
import { carData, carDataModals } from "../../api/ApiServices";

export default function HomeRentalFleet() {
  const [selected, setSelected] = useState<string>("");
  const [selectedCarModal, setSelectedCarModal] = useState<any>(null);

  function handleButton(title: string) {
    setSelected(title);

    const modalData = carDataModals.find((item) => item.title === title);
    setSelectedCarModal(modalData);
  }

  useEffect(() => {
    if (selected === "") {
      setSelected(carData[0].title);
      setSelectedCarModal(
        carDataModals.find((item) => item.title === carData[0].title)
      );
    }
  }, []);

  return (
    <section className="starting-container">
      <HomeTitle
        title="Vehicle Models"
        paragraph="Our rental fleet"
        paragraph2="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus blanditiis culpa aut libero similique odit dolore quibusdam molestias veniam dolor."
      />
      <div className="flex flex-col lg:flex-row justify-center items-center  p-6 space-y-8 lg:space-y-0">
        <div className="w-full lg:w-1/3 flex flex-col  mr-4 space-y-2  ">
          {carData.map((item) => (
            <>
              <HomeRentalButton
                title={item.title}
                selected={selected === item.title}
                handleButton={() => handleButton(item.title)}
              />
            </>
          ))}
        </div>
        <div className="w-full lg:w-2/3 ">
          {carData && (
            <img
              src={carData.find((item) => item.title === selected)?.imageUrl}
              className=""
              alt={selected}
            />
          )}
        </div>

        <div className="w-full  lg:w-[30%]  ">
          {selectedCarModal && (
            <HomeRentalData
              model={selectedCarModal.model}
              title={selectedCarModal.title}
              mark={selectedCarModal.mark}
              year={selectedCarModal.year.toString()}
              doors={selectedCarModal.doors}
              ac={selectedCarModal.ac}
              transmission={selectedCarModal.transmission}
              fuel={selectedCarModal.fuel}
              price={selectedCarModal.rentPerDay.toString()}
            />
          )}
          <button
            onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
            className="w-full text-2xl border mt-3 py-4 uppercase shadow-2xl font-bold bg-purple-500 text-white"
          >
            reverse now
          </button>
        </div>
      </div>
    </section>
  );
}
