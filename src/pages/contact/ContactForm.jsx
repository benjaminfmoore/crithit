import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h1 className="contact-text">Or you can send me a message</h1>
      <form class="cf" action="https://submit-form.com/AX04vYxzcs5pdDYkLg2L0">
        <div class="">
          <input type="text" className="input-form" placeholder="Name" />
          <input type="email" className="input-form" placeholder="Email" />
          <input type="text" className="input-form" placeholder="Subject" />
          <textarea
            name="message"
            type="text"
            className="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input className="form-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default ContactForm;
