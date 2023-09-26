import { HomeTitleProps } from "../../../types/TypesComponent";

export default function HomeTitle({
  paragraph,
  title,
  paragraph2,
}: HomeTitleProps) {
  return (
    <div className="flex justify-center text-center font-bold items-center flex-col z-30 space-y-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-5xl">{paragraph}</p>
      <p className="text-[#706f7b] max-w-[500px] text-sm">{paragraph2}</p>
    </div>
  );
}
