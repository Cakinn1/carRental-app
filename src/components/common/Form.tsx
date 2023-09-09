import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";

export default function Form({
  setEmail,
  email,
  setPassword,
  password,
  loading,
  register,
  registerUser,
  guestLoading,
  guestSignIn,
  close,
  open,
  account,
  dontHaveAccount,
  signIn,
}: any) {
  const dispatch = useDispatch();
  return (
    <form className="mt-12" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="w-full outline-none border rounded-md border-black shadow-xl
                   pl-4 py-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full outline-none border rounded-md border-black shadow-xl
                  pl-4 py-2 my-6"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {loading ? (
        <button
          className="btn__register w-full mb-6 bg-green-500 h-[40px]  flex justify-center items-center
                       "
        >
          <ArrowPathIcon className="h-6 text-black animate-spin" />
        </button>
      ) : (
        register && (
          <button
            className="btn__register w-full mb-6 bg-purple-500 text-white shadow-2xl "
            onClick={registerUser}
          >
            {signIn}
          </button>
        )
      )}
      {guestLoading ? (
        <>
          <button
            className="btn__register w-full mb-6 bg-green-500 h-[40px]  flex justify-center items-center
                     "
          >
            <ArrowPathIcon className="h-6 text-black animate-spin" />
          </button>
        </>
      ) : (
        <>
          <button
            style={{ color: "black" }}
            className="btn__register w-full mb-6 bg-white border border-black shadow-2xl
                      "
            onClick={guestSignIn}
          >
            Sign In as guest instead!
          </button>
        </>
      )}
      <h1 className="text-sm text-[#1B1B1B]">
        {account}
        <span
          className="text-blue-500 ml-2 cursor-pointer hover:border-b  hover:border-b-blue-500 "
          onClick={() => {
            dispatch(close);
            dispatch(open);
          }}
        >
          {dontHaveAccount}
        </span>
      </h1>
    </form>
  );
}
