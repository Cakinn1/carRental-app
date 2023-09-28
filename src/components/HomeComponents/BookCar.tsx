import HomeBookCarSelect from "./BookCarComponent/HomeBookCarSelect";

export default function BookCar() {
  return (
    <section className="p-4 mx-auto max-w-[1200px]  flex">
      <div className="w-full relative bg-white shadow-xl h-full p-10 font-bold pb-14">
        <div className="absolute h-full pointer-events-none bottom-0">
          <img src="/cover-1.png" alt="" className="object-cover h-full" />
        </div>
        <div className="text-3xl gap-x-[5px] font-bold flex ">
          <p>Book a </p>
          <p className="text-purple-500">car</p>
        </div>
        <HomeBookCarSelect />
      </div>
    </section>
  );
}
