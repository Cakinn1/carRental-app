import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { openSignupModal } from "../../../redux/feature/signupSlice";

export default function NavDispatchButton({ closeNav, title, modal }: any) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        className="links"
        onClick={() => {
          dispatch(modal);
          closeNav();
        }}
      >
        {title}
      </button>
    </>
  );
}
