import React from "react";
import { Link } from "react-router-dom";

export default function Links({ model }: any) {
  return (
    <>
      <Link to="/">
        <li className="links">Home</li>
      </Link>
      <Link to="/About">
        <li className="links">About</li>
      </Link>
      <Link to="/Vechicle Models">
        <li className="links">{model}</li>
      </Link>
      <Link to="/Testimonials">
        <li className="links">Testimonials</li>
      </Link>
      <Link to="/OurTeam">
        <li className="links">Our Team</li>
      </Link>
      <Link to="/Contact">
        <li className="links">Contact</li>
      </Link>
    </>
  );
}
