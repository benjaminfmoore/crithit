import React from "react";
import "../../index.css";
import "./HomePage.css";
import DiceLogo from "../../images/LogoText.png";

function HomePage() {
  return (
    <>
      <div className="homepage-card">
        <img src={DiceLogo} className="logo" alt="Crit Hit Logo" width="35%" />
        <h1 className="subtitle" alt="subtitle">
          Websites for Gamers by Gamers
        </h1>
      </div>
    </>
  );
}

export default HomePage;
