import { useEffect, useState } from "react";
import { faqData } from "../../api/ApiServices";
import HomeTitle from "./HomePlanTripComponents/HomeTitle";
import HomeFAQInputs from "./HomeFAQComponent/HomeFAQInputs";

export interface FAQItem {
  title: string;
  number: string;
  para: string;
}

export default function HomeFAQ() {
  const [selected, setSelected] = useState<string>("");
  const [faqDataInfo, setfaqDataInfo] = useState<FAQItem | null>(null);

  function handleClick(title: string) {
    setSelected(title);

    const data = faqData.find((item) => item.title === title);
    setfaqDataInfo(data || null);
  }
  useEffect(() => {
    if (selected === "") {
      setSelected(faqData[0].title);
    }
  }, []);

  return (
    <>
    
      <section className="starting-container  my-[100px]  space-y-8">
        <HomeTitle
          title="FAQ"
          paragraph="Frequently Asked Questions"
          paragraph2="Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries."
        />
        <div className="shadow-2xl rounded-lg md:w-[700px] mx-auto  bg-white">
          {faqData?.map((item) => (
            <HomeFAQInputs
              para={item.para}
              handleClick={() => handleClick(item.title)}
              title={item.title}
              selected={selected === item.title}
            />
          ))}
        </div>
      </section>
    </>
  );
}
