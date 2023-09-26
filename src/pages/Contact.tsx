import MainBlock from "../components/AboutComponents/MainBlock";
import AboutMainTitle from "../components/AboutComponents/AboutMainTitle";
import ContactMain from "../components/ContactComponents/ContactMain";

export default function Contact() {
  return (
    <>
      <AboutMainTitle title="Contact" />
      <div className="relative mx-auto max-w-[1200px] my-[100px]">
        <img src="/cover2.png" className="absolute pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
        <ContactMain />
      </div>
      <MainBlock />
    </>
  );
}
