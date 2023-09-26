import AboutMainLeft from "./AboutMainComponents/AboutMainLeft";
import AboutMainRight from "./AboutMainComponents/AboutMainRight";
import AboutTypes from "./AboutTypes";

export default function AboutRightMain() {
  return (
    <div className="starting-container flex flex-col md:flex-row gap-x-8 my-[100px]">
      <AboutMainLeft />
      <AboutMainRight />
    </div>
  );
}
