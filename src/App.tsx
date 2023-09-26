import Nav from "./pages/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupModal from "./components/ModalComponents/SignupModal";
import SignInModal from "./components/ModalComponents/SignInModal";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import HomeSaveBig from "./components/HomeComponents/HomeSaveBig";
import VehicleModels from "./pages/VehicleModels";
import Testimonials from "./pages/Testimonials";
import OurTeam from "./pages/OurTeam";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Router>
        <Nav />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Vechicle Models" element={<VehicleModels />} />
            <Route path="/Testimonials" element={<Testimonials />} />
            <Route path="/OurTeam" element={<OurTeam />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <SignupModal signUp="Sign Up" register={true} />
        <SignInModal signUp="Sign In" register={true} />
        <Footer />
      </Router>
    </>
  );
}
