import { useEffect } from "react";
import AboutMainTitle from "../components/AboutComponents/AboutMainTitle";
import AboutRightMain from "../components/AboutComponents/AboutRightMain";
import AboutTypes from "../components/AboutComponents/AboutTypes";
import MainBlock from "../components/AboutComponents/MainBlock";
import HomePlanTrip from "../components/HomeComponents/HomePlanTrip";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AboutMainTitle />
      <AboutRightMain />
      <HomePlanTrip />
      <MainBlock />
    </>
  );
}
