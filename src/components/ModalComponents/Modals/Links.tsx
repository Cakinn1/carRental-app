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
      <li className="links">{model}</li>
      <li className="links">Testimonials</li>
      <li className="links">Our Team</li>
      <li className="links">Contact</li>
    </>
  );
}
