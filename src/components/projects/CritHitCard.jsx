import React from "react";
import "../../index.css";
import LogoText from "../../images/LogoDice.png";

function CritHitCard() {
  return (
    <div className="project-card" alt="Crit Hit website">
      <h3 className="card-title">Crit Hit WebDev</h3>
      <img className="dice-pic" src={LogoText} alt="crit hit logo" />
      <p className="about-text">
        I created this site to showcase my ability to make sites for other
        streamers and gamers. By putting my product out as my primary project,
        people are able to see the quality I am able to output.
      </p>
    </div>
  );
}

export default CritHitCard;
