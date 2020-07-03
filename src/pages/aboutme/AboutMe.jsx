import React from "react";
import "../../index.css";
import profilepic from "../../images/profilepic.jpeg";

function AboutMe() {
  return (
    <>
      <div class="aboutMeContainer" alt="about me container">
        <h2>ABOUT ME</h2>
        <div id="about-crithit" alt="about the company">
          <p>
            Crit Hit WebDev is a freelance company created by Benjamin Moore IV.
            It is web development for gamers designed by gamers. Our goal is to
            bring you sleekly designed web-pages to showcase yourself as the
            superstar gamer you are.
          </p>
        </div>

        <div class="break"></div>

        <div id="aboutBenjamin" alt="about-benjamin">
          <img src={profilepic} alt="Benjamin" height="200px" width="170px" />

          <p>
            Benjamin Moore is still working on his level 5 wizard beard. A lover
            of all things RPG oriented, Benjamin has a drawer full of dice to
            settle disputes. Knowing he has a terrible sense of aiming, Benjamin
            prefers to take the roles of support, tanking his way to a team
            victory. A recent graduate from Wyncode Academy, Benjamin studied
            React, Javascript, HTML/CSS, and is very proficient in databases
            (his work using MongoDB helped win his team the best app award
            during pitch night). When he's not turning coffee into code, You can
            either find him live-streaming his shenanigans on{" "}
            <a href="https://twitch.tv/m00simus">his twitch channel.</a> or
            spending time with his fiancé and his German Shepherd co-pilot
            Chewie
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
