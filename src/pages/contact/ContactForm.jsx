import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="page-title">
      <h1 className="title">Send Me A Message</h1>
      <form class="cf" action="https://submit-form.com/AX04vYxzcs5pdDYkLg2L0">
        <div class="half left cf">
          <input type="text" className="input-form" placeholder="Name" />
          <input type="email" className="input-form" placeholder="Email" />
          <input type="text" className="input-form" placeholder="Subject" />
        </div>
        <div class="half right cf">
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
