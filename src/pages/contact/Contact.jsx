import React from "react";
import "../../index.css";
import "./Contact.css";
import Twitch from "../../images/twitch.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/insta.png";

function Contact() {
  return (
    <>
      <h2 className="contact-title" alt="contact me title">
        CONTACT ME
      </h2>

      <h4 className="contact-text" alt="Like what you see">
        You can find me contact me a variety of ways. On my social medias
      </h4>
      <div className="social-links-container">
        <a href="https://www.twitter.com/m00simus">
          <img className="social-links" src={Twitter} alt="Twitter Logo" />
        </a>
        <a href="https://www.instagram.com/m00simus">
          <img className="social-links" src={Instagram} alt="Instagram Logo" />
        </a>
        <a href="https://www.twitch.tv/m00simus">
          <img className="social-links" src={Twitch} alt="Twitch Logo" />
        </a>
      </div>
      <h4 className="contact-text" alt="Like what you see">
        Or you can email all job inquiries below!
      </h4>
      <div className="contact-container">
        <form className="contact-form" alt="contact form">
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

export default Contact;
