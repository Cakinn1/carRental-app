import React, { useState } from "react";
import ContactMainLeft from "./ContactMainLeft";
import ContactMainRight from "./ContactMainRight";

export default function ContactMain() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleContactButton() {
    if (name !== "" && email !== "" && text !== "" && email.includes("@")) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearInterval(timer);
    }
  }

  return (
    <section className="starting-container flex z-50">
      <ContactMainLeft />
      <ContactMainRight
        handleContactButton={handleContactButton}
        loading={loading}
        setText={setText}
        setEmail={setEmail}
        setName={setName}
      />
    </section>
  );
}
