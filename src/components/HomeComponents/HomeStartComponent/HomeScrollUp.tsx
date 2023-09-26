import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { HomeStartProps } from "../HomeStart";

export default function HomeScrollUp({
  handleScrollToTop,
  showScroll,
}: HomeStartProps) {
  return (
    <>
      {showScroll && (
        <div
          className="fixed right-10 rounded-lg z-50 flex justify-center items-center bottom-10 bg-purple-500 cursor-pointer w-[40px] h-[40px]"
          onClick={() => handleScrollToTop()}
        >
          <ChevronUpIcon className="h-7 text-white animate-bounce " />
        </div>
      )}
    </>
  );
}
