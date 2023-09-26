import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import HomeWhyChooseURight from "./HomeWhyChooseUsComponents/HomeWhyChooseURight";
import HomeWhyChooseUsImage from "./HomeWhyChooseUsComponents/HomeWhyChooseUsImage";
import HomeWhyChooseUsLeft from "./HomeWhyChooseUsComponents/HomeWhyChooseUsLeft";
import HomeWhyChooseUsRightComplete from "./HomeWhyChooseUsComponents/HomeWhyChooseUsRightComplete";

export default function HomeWhyChooseUs() {
  return (
    <>
      <section className="starting-container relative ">
       <HomeWhyChooseUsImage />
        <div className="flex gap-x-8 flex-col lg:flex-row">
          <HomeWhyChooseUsLeft />
          <HomeWhyChooseUsRightComplete />
        </div>
      </section>
    </>
  );
}
