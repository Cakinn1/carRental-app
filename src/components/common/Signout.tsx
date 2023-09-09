import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../redux/feature/authSlice";
export default function Signout() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state: any) => state.auth);

  console.log(isAuth);

  return (
    <>
      <span
        onClick={() => {
          dispatch(clearUser());
        }}
        className="cursor-pointer"
      >
        {isAuth?.email?.user?.split("@")[0]}
      </span>
    </>
  );
}
