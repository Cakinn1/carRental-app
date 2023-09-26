import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

export interface HomeFAQInputsProps {
  title: string;
  handleClick: (value: string) => void;
  selected: string | boolean;
  para: string;
}

export default function HomeFAQInputs({
  title,
  handleClick,
  selected,
  para,
}: HomeFAQInputsProps) {
  return (
    <>
      <div
        className={`h-1/3 flex items-center  py-4 font-bold z-30 justify-between px-10 border-b ${
          selected &&
          title ?
          "bg-purple-500 duration-500 ease-in-out transition-colors shadow-2xl  text-white" : "shadow-none"
        }`}
      >
        <h1>{title}</h1>
        <div className="cursor-pointer" onClick={() => handleClick(title)}>
          {selected && title ? (
            <ChevronUpIcon className="h-5 " />
          ) : (
            <ChevronDownIcon className="h-5" />
          )}
        </div>
      </div>

      <div className="px-10">
        {selected && title ? <div className="py-2">{para}</div> : ""}
      </div>
    </>
  );
}
