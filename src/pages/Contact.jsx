import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

import Link, { CreateLinkDescrip } from "../components/LinkDescrip";
import Enquiry from "../components/Enquiry";

function Contact() {
  const allLinks = [
    {
      href: "https://x.com/CarlstonR22238",
      name: <XIcon />,
      descrip: "Reach out to us on twitter",
    },
    {
      href: "https://www.facebook.com/profile.php?id=100007858426723",
      name: <FacebookIcon />,
      descrip: "Reach out to us on facebook",
    },
    {
      href: "https://www.instagram.com/carlston_rebelo/",
      name: <InstagramIcon />,
      descrip: "Check us out on instagram",
    },
    {
      href: "mailto:notslrac@gmail.com",
      name: <EmailIcon />,
      descrip: "Send us an email",
    },
  ];

  return (
    <main className="contactPage">
      <h1>Contact us</h1>
      <div>
        <Enquiry />
        <div className="otherInfo">
          <h2>more info</h2>
          <div className="gridContainer">{allLinks.map(CreateLinkDescrip)}</div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
