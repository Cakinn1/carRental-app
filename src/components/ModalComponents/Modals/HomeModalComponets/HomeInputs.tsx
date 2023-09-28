import React, { useState } from "react";

export interface HomeInputsProps {
  title: string;
  mainTitle?: boolean;
  type: string
  wfull?: boolean
}

export default function HomeInputs({ title, mainTitle, type, wfull}: HomeInputsProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");


 function handleNegativeNumber () {

 }

  return (
    <form onSubmit={(e) => e.preventDefault()} className={`${wfull ? "w-full" : "w-full md:w-[48%]"}  z-50  mb-4  mt-auto`}>
      {mainTitle && (
        <h1 className="text-purple-500 font-bold uppercase text-lg">
          Personal information
        </h1>
      )}
      <div
        className={`"font-bold ${
          mainTitle ? "" : " md:mt-7"
        }  flex gap-x-1 flex-col md:flex-row"`}
      >
        <div className=" w-full">
          <div className="flex items-center gap-x-2">
            <h1 className="text-lg font-semibold">{title}</h1>
            <span className="text-purple-500">*</span>
          </div>
          <input
            onChange={(e) => setEmail?.(e.target.value)}
            type={type}
            required
            className="w-full mt-auto  flex-grow focus:outline-none bg-[#f2f2f2] p-4"
          />
          
        </div>
      </div>
    </form>
  );
}
