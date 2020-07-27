import React from "react";
import "../../index.css";
import "./Contact.css";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
      <h2 className="project-title">CONTACT ME</h2>

      <h4 className="contact-text">
        You can contact me a variety of ways. At these links...
      </h4>
      <SocialLinks />
      <ContactForm />
    </>
  );
}

export default Contact;
