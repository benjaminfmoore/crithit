import React from "react";
import "../../index.css";
import TCF from "../../images/TCFLogo.png";

function TcfTwitch() {
  return (
    <div className="project-card" alt="twitch extension">
      <h3 className="card-title">TCF Twitch Extension</h3>
      <img src={TCF} alt="The Critical Fumblers" height="120px" width="100px" />
      <p>
        As a founding member of
        <a href="https://www.thecriticalfumblers.com/joomla30/">
          The Critical Fumblers
        </a>
        I have started working on making a twitch extension that will get them
        more exposure. A stream team that is dedicated to all things RPG and
        failure oriented, TCF is a fun group of people that will welcome you to
        the table like you never left.
      </p>
    </div>
  );
}

export default TcfTwitch;
