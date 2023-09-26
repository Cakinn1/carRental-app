import {
  CheckBadgeIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/solid";
import HomeMainInfo from "./HomeStartComponent/HomeMainInfo";
import HomeRightCarImage from "./HomeStartComponent/HomeRightCarImage";
import HomeRightImage from "./HomeStartComponent/HomeRightImage";
import HomeScrollUp from "./HomeStartComponent/HomeScrollUp";

export interface HomeStartProps {
  showScroll: boolean;
  handleScrollToTop: () => void;
}

export default function HomeStart({
  handleScrollToTop,
  showScroll,
}: HomeStartProps) {
  return (
    <>
      <HomeRightImage />
      <section className="max-w-[1200px] mx-auto p-4 height flex justify-center items-center relative">
        <HomeScrollUp
          handleScrollToTop={handleScrollToTop}
          showScroll={showScroll}
        />
        <HomeMainInfo />
        <HomeRightCarImage />
      </section>
    </>
  );
}
