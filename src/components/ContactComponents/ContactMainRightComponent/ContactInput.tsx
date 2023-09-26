import React from "react";

export interface ContactInputProps {
  placeholder: string;
  title: string;
  textAreaBoolean?: boolean;
  emailBoolean?: boolean;
  nameBoolean?: boolean;
  setName?: (value: string) => void;
  setEmail?: (value: string) => void;
  setText?: (value: string) => void;
}

export default function ContactInput({
  placeholder,
  title,
  textAreaBoolean,
  emailBoolean,
  nameBoolean,
  setName,
  setText,
  setEmail,
}: ContactInputProps) {
  return (
    <div className="font-bold">
      <h1 className="text-lg font-semibold">
        {title} <span className="text-purple-500">*</span>
      </h1>
      {textAreaBoolean && (
        <textarea
          placeholder={placeholder}
          required
          onChange={(e) => setText?.(e.target.value)}
          className="w-full p-4 resize-none focus:outline-none bg-[#f2f2f2] h-[150px]"
          name=""
          id=""
        ></textarea>
      )}
      {nameBoolean && (
        <input
          onChange={(e) => setName?.(e.target.value)}
          type="text"
          placeholder={placeholder}
          required
          className="w-full focus:outline-none bg-[#f2f2f2] p-4"
        />
      )}
      {emailBoolean && (
        <input
          onChange={(e) => setEmail?.(e.target.value)}
          type="email"
          placeholder={placeholder}
          required
          className="w-full focus:outline-none bg-[#f2f2f2] p-4"
        />
      )}
    </div>
  );
}
