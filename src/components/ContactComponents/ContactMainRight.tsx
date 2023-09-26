import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsMailbox } from "react-icons/bs";
import ContactInput from "./ContactMainRightComponent/ContactInput";

export interface ContactMainRightProps {
  handleContactButton: () => void;
  loading: boolean;
  setText: (value: string) => void;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
}

export default function ContactMainRight({
  handleContactButton,
  loading,
  setEmail,
  setName,
  setText,
}: ContactMainRightProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" w-1/2  h-[500px] z-20 space-y-4"
    >
      <ContactInput
        placeholder={`E.g: "Jane Doe"`}
        title="Full Name"
        setName={setName}
        nameBoolean={true}
      />
      <ContactInput
        placeholder={`example@gamil.com`}
        title="Email"
        setEmail={setEmail}
        emailBoolean={true}
      />
      <ContactInput
        textAreaBoolean={true}
        placeholder={`Write here...`}
        title="Tell us about it"
        setText={setText}
      />
      {loading ? (
        <button
          onClick={() => handleContactButton()}
          className="py-4 flex justify-center items-center gap-x-4 w-full rounded-lg hover:shadow-2xl shadow-lg text-center border font-bold  text-white bg-purple-500 hover:duration-500 ease-in-out transition-colors duration-500 hover:text-white text-lg"
        >
          We received your message, thank you!
        </button>
      ) : (
        <button
          onClick={() => handleContactButton()}
          className="py-4 flex justify-center items-center gap-x-4 w-full rounded-lg hover:shadow-2xl shadow-lg text-center border font-bold bg-purple-200 text-white  hover:bg-purple-500 hover:duration-500 ease-in-out transition-colors duration-500 hover:text-white text-lg"
        >
          <AiOutlineMail />
          Send Message
        </button>
      )}
    </form>
  );
}
