import React from "react";
import {} from "@heroicons/react/24/solid";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupModal from "./components/modals/SignupModal";
import SignInModal from "./components/modals/SignInModal";
import Home from "./components/Home";
import BookCar from "./components/BookCar";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<BookCar />} />
           </Routes>
        </div>
        <SignupModal signUp="Sign Up" register={true} />
        <SignInModal signUp="Sign In" register={true} />
      </Router>
    </>
  );
}
