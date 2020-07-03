import React from "react";
import "../../index.css";
import Logo from "../../images/Shower.png";
import Background from "../../images/SiteBackground.jpg";

function HomePage() {
  return (
    <>
      <div styles={{ backgroundImage: { Background } }}>
        <img
          src={Logo}
          className="frontpage logo"
          alt="Crit Hit Logo"
          height="100px"
          width="250px"
        />
        <h1>Crit Hit WebDev</h1>
        <h3>Websites for Gamers by Gamers</h3>
      </div>
    </>
  );
}

export default HomePage;
