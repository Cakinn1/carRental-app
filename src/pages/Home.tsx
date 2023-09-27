import {
  CheckBadgeIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import DownloadApps from "../components/HomeComponents/HomeDownloadApps";
import BookCar from "../components/HomeComponents/BookCar";
import HomeClientTestimonials from "../components/HomeComponents/HomeClientTestimonials";
import HomeFAQ from "../components/HomeComponents/HomeFAQ";
import HomePlanTrip from "../components/HomeComponents/HomePlanTrip";
import HomeRentalFleet from "../components/HomeComponents/HomeRentalFleet";
import HomeSaveBig from "../components/HomeComponents/HomeSaveBig";
import HomeStart from "../components/HomeComponents/HomeStart";
import HomeWhyChooseUs from "../components/HomeComponents/HomeWhyChooseUs";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HomeStart />
      <BookCar />
      <HomePlanTrip />
      <HomeRentalFleet />
      <HomeSaveBig />
      <HomeWhyChooseUs />
      <HomeClientTestimonials />
      <HomeFAQ />
      <DownloadApps />
    </>
  );
}
