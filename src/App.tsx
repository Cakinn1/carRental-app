import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupModal from "./components/ModalComponents/SignupModal";
import SignInModal from "./components/ModalComponents/SignInModal";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import HomeSaveBig from "./components/HomeComponents/HomeSaveBig";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
        <SignupModal signUp="Sign Up" register={true} />
        <SignInModal signUp="Sign In" register={true} />
        <Footer />
      </Router>
    </>
  );
}
