import { CheckBadgeIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function HomeMainInfo() {
  return (
    <div className="text-center w-[400px] md:w-1/2 md:text-left space-y-4 font-bold ">
      <h1 className="text-2xl">Plan your trip now</h1>
      <h1 className="text-5xl mx-auto font-extrabold">
        Save
        <span className="text-purple-500 mx-2">Big</span>
        with our car rental
      </h1>
      <p className="font-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et sapiente
        perferendis vel vero? Unde nesciunt laudantium, perferendis animi
        commodi illo!
      </p>
      <div className="flex justify-center items-center md:justify-start ">
        <button
          className="px-8 py-3 mr-4 bg-purple-500 border border-purple-500 shadow-2xl rounded-md text-white flex justify-center 
          items-center gap-x-2"
        >
          Book Ride
          <CheckBadgeIcon className="h-4" />
        </button>
        <button
          className="px-8 py-3 mr-4 bg-black border-black border shadow-2xl rounded-md text-white flex justify-center 
          items-center gap-x-2"
        >
          Learn More
          <ChevronRightIcon className="h-4" />
        </button>
      </div>
    </div>
  );
}
