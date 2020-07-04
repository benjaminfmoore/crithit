import React from "react";
import "../../index.css";
import "./Contact.css";
import Twitch from "../../images/twitch.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/insta.png";

function Contact() {
  return (
    <>
      <h2 className="page-title">CONTACT ME</h2>

      <h4 className="like-see" alt="Like what you see">
        You can find me contact me a variety of ways. On my social medias
      </h4>
      <div className="social-links-container">
        <a href="www.twitter.com/m00simus">
          <img className="social-links" src={Twitter} alt="Twitter Logo" />
        </a>
        <a href="www.instagram.com/m00simus">
          <img className="social-links" src={Instagram} alt="Instagram Logo" />
        </a>
        <a href="www.twitch.tv/m00simus">
          <img className="social-links" src={Twitch} alt="Twitch Logo" />
        </a>
      </div>
      <h4 className="like-see" alt="Like what you see">
        Or you can email all job inquiries below!
      </h4>
      <div className="contact-container">
        <form className="contact-form" alt="contact form">
          <div className="row">
            <div className="col-25">
              <label for="fname">First Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="fname"
                className="imput-form"
                placeholder="Your name.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="lname"
                className="imput-form"
                placeholder="Your last name.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="lname">Email Address</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="email"
                className="imput-form"
                placeholder="Your contact email.."
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="subject">Subject</label>
            </div>
            <div className="col-75">
              <textarea
                id="subject"
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
