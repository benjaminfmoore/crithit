import React from "react";
import "../../index.css";
import "./Contact.css";

function ContactForm() {
  return (
    <>
      <div className="contact-container">
        <form
          className="contact-form"
          method="POST"
          data-netlify="true"
          alt="contact form"
        >
          <div className="row">
            <div className="col-25">
              <label alt="first name">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                alt="first name input"
                className="imput-form"
                placeholder="Your name.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label alt="last name">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                alt="last name input"
                className="imput-form"
                placeholder="Your last name.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label alt="email address">Email Address</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                alt="email address input"
                className="imput-form"
                placeholder="Your contact email.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label alt="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea
                alt="subject input"
                className="subject"
                placeholder="Write something.."
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
