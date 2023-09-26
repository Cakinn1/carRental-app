import { useState } from "react";
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { openSigninModal, openSignupModal } from "../redux/feature/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { Auth, clearUser } from "../redux/feature/authSlice";
import Button from "../components/ModalComponents/Modals/Button";
import NavDispatchButton from "../components/ModalComponents/Modals/NavDispatchButton";
import Signout from "../components/ModalComponents/Modals/Signout";
import Links from "../components/ModalComponents/Modals/Links";

export default function Nav() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const isAuth = useSelector((state: { auth: Auth }) => state.auth);
  const dispatch = useDispatch();
  function handleClick() {
    setIsActive((prevActive) => !prevActive);
  }

  function closeNav() {
    setIsActive(false);
  }

  return (
    <section className={`bg-white w-full fixed shadow-lg font-semibold z-50 `}>
      <div
        className={` mx-auto flex justify-between items-center h-[80px]  ${
          isActive ? "p-0 max-w-full" : "p-4 max-w-[1200px]"
        }`}
      >
        <figure>
          <Link to="/">
            <img src="carRental2.png" className="h-full w-[160px] " alt="" />
          </Link>
        </figure>
        <ul className="gap-x-4 hidden lg:flex">
          <Links model="Vehicle Models" />
        </ul>
        <div className="hidden lg:flex justify-center items-center gap-x-3  ">
          {isAuth?.email === null ? (
            <>
              <Button
                title="Sign In"
                bgColor={false}
                modal={openSigninModal()}
              />
              <Button
                title="Register"
                bgColor={true}
                modal={openSignupModal()}
              />
            </>
          ) : (
            <>
              <div className="flex justify-center items-center gap-x-2 ">
                <div className="relative cursor-pointer">
                  <UserCircleIcon
                    onClick={() => dispatch(clearUser())}
                    className="h-10"
                  />
                  <div className="absolute right-[7px] bottom-1 rounded-md w-2 h-2 bg-green-500"></div>
                </div>
                Welcome,
                <Signout />
              </div>
            </>
          )}
        </div>

        {isActive && (
          <div
            className={`fixed top-0 bg-white  w-full h-full  text-black flex justify-center items-center  ${isActive}`}
          >
            <div className="absolute top-4 right-4" onClick={handleClick}>
              <XMarkIcon className="h-10 hover:text-purple-500" />
            </div>
            <ul className="text-center space-y-6 text-3xl">
              <Links model="Models" />
              <hr />
              {isAuth?.email === null ? (
                <>
                  <NavDispatchButton
                    modal={openSignupModal()}
                    title="Please sign up"
                    closeNav={closeNav}
                  />
                </>
              ) : (
                <>
                  <p>Welcome,</p>
                  <Signout />
                </>
              )}
              <div className="flex flex-col space-y-6">
                {isAuth?.email === null ? (
                  <>
                    <NavDispatchButton
                      title="Sign Up"
                      closeNav={closeNav}
                      modal={openSignupModal()}
                    />
                    <NavDispatchButton
                      title="Sign In"
                      closeNav={closeNav}
                      modal={openSigninModal()}
                    />
                  </>
                ) : (
                  ""
                )}
              </div>
            </ul>
          </div>
        )}
        <div className={`flex lg:hidden justify-center items-center gap-x-2`}>
          <button onClick={handleClick}>
            <Bars3Icon className="h-10 " />
          </button>
        </div>
      </div>
    </section>
  );
}
