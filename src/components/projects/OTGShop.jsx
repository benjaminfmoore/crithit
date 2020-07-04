import React from "react";
import "../../index.css";
import OTG from "../../images/OTG.svg";

function OTGShop() {
  return (
    <div className="project-card" alt="On the go shopping">
      <h3 className="card-title">On-The-Go Shopping</h3>
      <img src={OTG} alt="The Critical Fumblers" height="120px" width="100px" />
      <p>
        A two week long group agile programming sprint. OTG won "best web
        application" at Wyncode's Wyntank competition. Currently being
        streamlined and polished to allow for potential real-life use. With the
        help of two amazing teammates working on the front-end, I was able to
        create several databases that interacted with each other.
      </p>
    </div>
  );
}

export default OTGShop;
