import React from "react";
import { Link } from "react-router-dom";

export default function Links({ model }: {model: string}) {
  return (
    <>
      <Link to="/">
        <li className="links mb-4 lg:mb-0">Home</li>
      </Link>
      <Link to="/About">
        <li className="links mb-4 lg:mb-0">About</li>
      </Link>
      <Link to="/Vechicle Models">
        <li className="links mb-4 lg:mb-0">{model}</li>
      </Link>
      <Link to="/Testimonials">
        <li className="links mb-4 lg:mb-0">Testimonials</li>
      </Link>
      <Link to="/OurTeam">
        <li className="links mb-4 lg:mb-0">Our Team</li>
      </Link>
      <Link to="/Contact">
        <li className="links mb-4 lg:mb-0">Contact</li>
      </Link>
    </>
  );
}
