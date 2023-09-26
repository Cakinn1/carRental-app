import AboutTypes from "../AboutTypes";

export default function AboutMainRight() {
  return (
    <div className="md:w-1/2 space-y-4 font-bold">
      <h1 className="text-2xl">About company</h1>
      <h2 className="text-5xl">
        You start the engine and your adventure begins
      </h2>
      <p className="text-[#706f7b] font-normal">
        Certain but she but shyness why cottage. Guy the put instrument sir
        entreaties affronting. Pretended exquisite see cordially the you. Weeks
        quiet do vexed or whose. Motionless if no to affronting imprudence no
        precaution. My indulged as disposal strongly attended.
      </p>
      <div className="flex  items-center text-center">
        <AboutTypes src="/01.png" number={20} title="Car Types" />
        <AboutTypes src="/02.png" number={85} title="Rental Outlets" />
        <AboutTypes src="/03.png" number={75} title="Repair Shop" />
      </div>
    </div>
  );
}
