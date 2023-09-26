import React, { useState } from "react";
import {
  openSigninModal,
  closeSigninModal,
  openSignupModal,
} from "../../redux/feature/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { setUser } from "../../redux/feature/authSlice";
import XIconModal from "./Modals/XIconModal";
import Form from "./Modals/Form";
export default function SignInpModal({ signUp, register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const isOpen = useSelector((state) => state.modal.signinModalOpen);
  const dispatch = useDispatch();

  function signin() {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredits) => {
        const user = userCredits.user;
        dispatch(setUser({ user: user.email, uid: user.uid }));
        setTimeout(() => {
          setLoading(false);
          dispatch(closeSigninModal());
        }, 1000);
      })
      .catch((error) => {
        setLoading(false);
        alert("Please enter a valid email & password :------( *my face rn*");
      });
  }

  function guestSignIn() {
    signInWithEmailAndPassword(auth, "guest123@gmail.com", "guest123")
      .then((userCredits) => {
        setGuestLoading(true);
        const user = userCredits.user;
        dispatch(setUser({ user: user.email, uid: user.uid }));
        setTimeout(() => {
          setGuestLoading(false);
          dispatch(closeSigninModal());
        }, 1000);
      })
      .catch((error) => {
        setGuestLoading(false);
        alert("Please enter a valid email & password :------( *my face rn*");
      });
  }
  //change sign in to login modal when clicked
  return (
    <>
      {isOpen && (
        <div className="outer__cointainer">
          <div className="inner__container">
            <XIconModal modal={closeSigninModal()} />

            <div className="p-10">
              <p className="signup__title">{signUp}</p>
              <hr className="mt-4 border-black" />
              <Form
                setEmail={setEmail}
                email={email}
                setPassword={setPassword}
                password={password}
                loading={loading}
                register={register}
                registerUser={signin}
                guestLoading={guestLoading}
                guestSignIn={guestSignIn}
                close={closeSigninModal()}
                open={openSignupModal()}
                account={`Don't have an account?`}
                dontHaveAccount={`Sign Up`}
                signIn={"Sign In"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
