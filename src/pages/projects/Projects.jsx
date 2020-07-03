import React from "react";
import "../../index.css";
import logo from "../../images/Shower.png";
import TCF from "../../images/TCFLogo.png";

function Projects() {
  return (
    <>
      <h2 className="page-title">CURRENT PROJECTS</h2>
      <h4 className="like-what-you-see">
        Like what you see? Click <a href="/contact">HERE</a> to send me an email
        about commisions
      </h4>
      <div class="projectscontainer" alt="projects page">
        <div id="crit-site" alt="Crit Hit website">
          <h3>Crit Hit WebDev</h3>
          <img src={logo} alt="crit hit logo" height="40px" width="120" />
          <p>
            I created this site to showcase my ability to make sites for other
            streamers and gamers. By putting my product out as my primary
            project, people are able to see the quality I am able to output.
          </p>
        </div>
        <div id="twitch-extension" alt="twitch extension">
          <h3>TCF Twitch Extension</h3>
          <img
            src={TCF}
            alt="The Critical Fumblers"
            height="70px"
            width="40px"
          />
          <p>
            As a founding member of
            <a href="https://www.thecriticalfumblers.com/joomla30/">
              The Critical Fumblers
            </a>{" "}
            I have started working on making a twitch extension that will get
            them more exposure. A stream team that is dedicated to all things
            RPG and failure oriented, TCF is a fun group of people that will
            welcome you to the table like you never left.
          </p>
        </div>
      </div>
    </>
  );
}

export default Projects;
