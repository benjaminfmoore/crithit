import React from "react";
import "../../index.css";
import "./Projects.css";
import OTGShop from "../../components/projects/OTGShop";
import TcfTwitch from "../../components/projects/TCF";
import CritHitCard from "../../components/projects/CritHitCard";
import Lyrically from "../../components/projects/Lyrically";

function Projects() {
  return (
    <>
      <h2 className="page-title" alt="Current projects">
        CURRENT PROJECTS
      </h2>
      <h4 className="like-see" alt="Like what you see">
        Like what you see? Click <a href="/contact">HERE</a> to send me an email
        about commisions
      </h4>
      <div className="projects-container" alt="projects page">
        <CritHitCard />
        <TcfTwitch />
        <OTGShop />
        <Lyrically />
      </div>
    </>
  );
}

export default Projects;
