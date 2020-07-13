import React from "react";
import "../../index.css";
import "./Contact.css";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <h2 className="page-title">CONTACT ME</h2>

      <h4 className="contact-text" alt="Like what you see">
        You can contact me a variety of ways. Links...
      </h4>
      <SocialLinks />
      <h4 className="contact-text" alt="Like what you see">
        Or you can email me directly!
      </h4>
      <ContactForm />
    </>
  );
}

export default Contact;
