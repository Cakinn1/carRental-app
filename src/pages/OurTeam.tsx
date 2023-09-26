import MainBlock from "../components/AboutComponents/MainBlock";
import AboutMainTitle from "../components/AboutComponents/AboutMainTitle";
import OurTeamCard from "../components/OurTeamComponent/OurTeamCard";

export default function OurTeam() {
  return (
    <>
      <AboutMainTitle title="Our Team" />

      <div className="starting-container flex flex-wrap gap-x-10">
        <OurTeamCard src="/t1.png" job="Salesman" name="Luke Miller" />
        <OurTeamCard src="/t2.png" job="Business Owner" name="Michael Diaz" />
        <OurTeamCard src="/t3.png" job="Photographer" name="Briana Ross" />
        <OurTeamCard src="/t4.png" job="Car Detailist" name="Lauren Rivera" />
        <OurTeamCard src="/t5.png" job="Mechanic" name="Martin Rizz" />
        <OurTeamCard src="/t6.png" job="Manager" name="Caitlyn Hunt" />
      </div>
      <MainBlock />
    </>
  );
}
