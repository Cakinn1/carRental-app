import React from "react";

export default function Links({ model }: any) {
  return (
    <>
      <li className="links">Home</li>
      <li className="links">About</li>
      <li className="links">{model}</li>
      <li className="links">Testimonials</li>
      <li className="links">Our Team</li>
      <li className="links">Contact</li>
    </>
  );
}
