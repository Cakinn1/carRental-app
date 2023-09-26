import { carDataModals } from "../api/ApiServices";
import AboutMainTitle from "../components/AboutComponents/AboutMainTitle";
import MainBlock from "../components/AboutComponents/MainBlock";
import VechicleModelMain from "../components/VechicleModelComponents/VechicleModelMain";

export default function VehicleModels() {
  return (
    <>
      <AboutMainTitle title="Vechicle Models" />
      <div className="starting-container  flex flex-wrap gap-x-8"
      style={{paddingTop: "100px"}}>
        {carDataModals.map((post) => (
          <>
            <VechicleModelMain {...post} />
          </>
        ))}
      </div>

      <MainBlock />
    </>
  );
}
