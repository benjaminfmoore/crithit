import React from "react";
import "../../index.css";
import Record from "../../images/Record.png";

function Lyrically() {
  return (
    <div className="project-card" alt="On the go shopping">
      <h3 className="card-title">Lyricaaly</h3>
      <img
        src={Record}
        alt="The Critical Fumblers"
        height="120px"
        width="100px"
      />
      <p>
        A two-person week long group agile programming sprint. Used to test
        RESTful APIs,this Heroku-deployed site searched a free lyrics database
        to display on the front page. An additional test in react-DOM
        manipulation, we were able to make the background of the website change
        at the click of a button.
      </p>
    </div>
  );
}

export default Lyrically;
