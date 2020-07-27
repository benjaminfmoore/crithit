import React from "react";
import "../../index.css";
import TCF from "../../images/TCFLogo.png";

function TcfTwitch() {
  return (
    <div className="project-card" alt="twitch extension">
      <h3 className="card-title">TCF Twitch</h3>
      <img className="tcf-card" src={TCF} alt="The Critical Fumblers" />
      <p className="about-text">
        As a founding member of The Critical Fumblers I have started working on
        making a twitch extension that will get them more exposure. A stream
        team that is dedicated to all things RPG and failure oriented, TCF is a
        fun group of people that will welcome you to the table like you never
        left.
      </p>
      <p className="about-text">
        <a href="https://www.thecriticalfumblers.com/joomla30/">
          You can find us Here!
        </a>
      </p>
    </div>
  );
}

export default TcfTwitch;
