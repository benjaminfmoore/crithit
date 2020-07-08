import React from "react";
import "../../index.css";
import "./Contact.css";
import Twitch from "../../images/twitch.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/insta.png";

function SocialLinks() {
  return (
    <>
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
    </>
  );
}

export default SocialLinks;
