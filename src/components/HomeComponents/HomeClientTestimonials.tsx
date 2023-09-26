import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import HomeTitle from "./HomePlanTripComponents/HomeTitle";
import HomeTestCard from "./HomeClientTestimonialsComponent/HomeTestCard";

export default function HomeClientTestimonials() {
  return (
    <>
      <section className="bg-[#f8f8f8] lg:mt-[135px] py-[100px]  flex justify-center items-center h-scr">
        <div className="  starting-container space-y-12">
          <HomeTitle
            title="Reviewed by people"
            paragraph="Client's testimonials"
            paragraph2={`Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.`}
          />
          <div className="flex flex-col md:flex-row gap-x-8 space-y-8 md:space-y-0">
            <HomeTestCard
              homeTown="Gold coast"
              name="Harry potter"
              src="/harry.jpg"
              para="We rented a car from this website and had an amazing experience! The  booking was easy and the rental rates were very affordable. "
            />
            <HomeTestCard
              homeTown="Sydney"
              name="Ron rizzly"
              para="The car was in great condition and made our trip even better. Highly recommend for this car rental website!"
              src="/ron.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
