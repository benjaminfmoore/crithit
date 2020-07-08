import React from "react";
import "../../index.css";
import "./Contact.css";
import SocialLinks from "./SocialLinks";
import ContactFormField from "./ContactFormField";

function Contact() {
  return (
    <>
      <h2 className="page-title">CONTACT ME</h2>

      <h4 className="contact-text" alt="Like what you see">
        You can find me contact me a variety of ways. On my social medias
      </h4>
      <SocialLinks />
      <h4 className="contact-text" alt="Like what you see">
        Or you can email all job inquiries below!
      </h4>
      <ContactFormField />
    </>
  );
}

export default Contact;
