import React, { useState } from "react";
import "../../index.css";
import "./Contact.css";

function ContactFormField() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const [info, setInfo] = useState({
    formName: "",
    formEmail: "",
    formMessage: "",
  });

  /* Here’s the juicy bit for posting the form submission */

  let handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...info }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <>
      <div className="contact-container">
        <form
          className="contact-form"
          method="POST"
          data-netlify="true"
          alt="contact form"
          onSubmit={this.handleSubmit}
        >
          <div className="row">
            <div className="col-25">
              <label alt="first name">Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                alt="first name input"
                className="imput-form"
                placeholder="Your name.."
                onChange={(e) => setInfo({ ...info, formName: e.target.value })}
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
                onChange={(e) =>
                  setInfo({ ...info, formEmail: e.target.value })
                }
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label alt="subject">Message</label>
            </div>
            <div className="col-75">
              <textarea
                alt="subject input"
                className="subject"
                placeholder="Write something.."
                onChange={(e) =>
                  setInfo({ ...info, formMessage: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Submit" onSubmit={handleSubmit}></input>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactFormField;
