import React, { useState } from "react";
import {
  closeSignupModal,
  openSigninModal,
} from "../../redux/feature/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { ArrowPathIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { clearUser, setUser } from "../../redux/feature/authSlice";
import XIconModal from "./Modals/XIconModal";
import Form from "./Modals/Form";
export default function SignUpModal({ signUp, register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const isOpen = useSelector((state) => state.modal.signupModalOpen);
  const isAuth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function registerUser() {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredits) => {
        const user = userCredits.user;
        dispatch(setUser({ user: user.email, uid: user.uid }));
        setTimeout(() => {
          setLoading(false);
          dispatch(closeSignupModal());
        }, 1000);
      })
      .catch(() => {
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
          dispatch(closeSignupModal());
        }, 1000);
      })
      .catch((error) => {
        setGuestLoading(false);
        alert("Please enter a valid email & password :------( *my face rn*");
      });
  }
  return (
    <>
      {isOpen && (
        <div className="outer__cointainer">
          <div className="inner__container">
            <XIconModal modal={closeSignupModal()} />

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
                registerUser={registerUser}
                guestLoading={guestLoading}
                guestSignIn={guestSignIn}
                close={closeSignupModal()}
                open={openSigninModal()}
                account={`Have an Account?`}
                dontHaveAccount={`Sign In`}
                signIn={"Register"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
