import { useState } from "react";
import { AiOutlinePhone, AiFillMail, AiOutlineMail } from "react-icons/ai";
import FooterLinks from "../components/FooterComponents/FooterLinks";
import FooterLinksButton from "../components/FooterComponents/FooterLinksButton";
import FooterLinksLeft from "../components/FooterComponents/FooterLinksLeft";
export default function Footer() {
  const [text, setText] = useState<string>("");
  const [showText, setShowText] = useState<boolean>(false);

  function handleClick() {
    if (text !== "") {
      setShowText(true);
    }
  }

  return (
    <section className="starting-container space-y-8 flex flex-col md:flex-row my-[80px] gap-x-8 text-center md:text-left">
      <FooterLinksLeft />
      <FooterLinks
        title="Company"
        p="New York"
        p2="Careers"
        p3="Mobile"
        p4="Blog"
        p5="How we work"
      />
      <FooterLinks
        title="working hours"
        p2="Mon - Fri: 9:00AM - 9:00PM"
        p3="Sat: 9:00AM - 5:00PM"
        p4="Sun: Closed"
      />
      <FooterLinksButton
        handleClick={handleClick}
        setText={setText}
        showText={showText}
      />
    </section>
  );
}
