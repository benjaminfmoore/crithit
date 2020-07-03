import React from "react";
import "../../index.css";

function Contact() {
  return (
    <>
      <form className="contact-form" alt="contact form">
        <label className="name-label" alt="first name">
          First Name:
          <input type="text" placeholder="First Name" />
        </label>
        <label className="name-label" alt="last name">
          Last Name:
          <input type="text" placeholder="Last Name" />
        </label>
        <label className="name-label" alt="email address">
          Email Address
          <input type="text" placeholder="Email Address" />
        </label>
        <label className="contact-form-body" alt="contact form body">
          Message
          <textarea type="text" placeholder="Feel free to say hi!" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Contact;
