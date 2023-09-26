import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSignupModal } from "../../../redux/feature/signupSlice";

export default function Button({ modal, title, bgColor }: any) {
  const isAuth = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <button
        className={`btn__register ${
          bgColor
            ? "bg-purple-500 text-white shadow-2xl  rounded-md "
            : "text-black"
        } hover:animate-pulse`}
        onClick={() => dispatch(modal)}
      >
        {title}
      </button>
    </>
  );
}
