import React from "react";
import "../../index.css";
import Shower from "../../images/Shower.png";

function CritHitCard() {
  return (
    <div className="project-card" alt="Crit Hit website">
      <h3 className="card-title">Crit Hit WebDev</h3>
      <img src={Shower} alt="crit hit logo" height="40px" width="120" />
      <p>
        I created this site to showcase my ability to make sites for other
        streamers and gamers. By putting my product out as my primary project,
        people are able to see the quality I am able to output.
      </p>
    </div>
  );
}

export default CritHitCard;
