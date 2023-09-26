import React from "react";
import HomeTitle from "./HomePlanTripComponents/HomeTitle";
import HomePlanInfo from "./HomePlanTripComponents/HomePlanInfo";

export default function HomePlanTrip() {
  return (
    <section className="starting-container my-[100px]">
      <HomeTitle
        title="Plan your trip now"
        paragraph="Quick & easy car rental"
      />
      <div className="mt-[100px] flex flex-wrap">
        <HomePlanInfo
          image="1.png"
          title="Select Car"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut neque at repellendus"
        />
        <HomePlanInfo
          image="2.png"
          title="Contact Operator"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut neque at repellendus"
        />
        <HomePlanInfo
          image="3.png"
          title="Let's Drive"
          paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ut neque at repellendus"
        />
      </div>
    </section>
  );
}
