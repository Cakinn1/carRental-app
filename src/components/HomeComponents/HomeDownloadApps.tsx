import React from "react";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import { LiaAppStore } from "react-icons/lia";
import HomeDownloadAppsLeft from "./HomeDownloadAppsComponents/HomeDownloadAppsLeft";

export default function DownloadApps() {
  return (
    <>
      <section className="bg-[#f8f8f8]  pb-[100px]">
        <div
          className="starting-container w-full relative bg-no-repeat  bg-center bg-cover h-[550px] right-0 text-center md:text-left "
          style={{ backgroundImage: "url(/phone.png)" }}
        >
          <HomeDownloadAppsLeft />
        </div>
      </section>
    </>
  );
}
