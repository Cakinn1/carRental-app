import { HomePlanInfoProps } from "../../../types/TypesComponent";

export default function HomePlanInfo({
  title,
  image,
  paragraph,
}: HomePlanInfoProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center text-center items-center space-y-4">
      <img src={image} alt="" />
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="text-[#706f7b] w-[200px]">{paragraph}</p>
    </div>
  );
}
