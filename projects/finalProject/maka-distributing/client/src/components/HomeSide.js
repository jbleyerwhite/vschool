import React from "react";
import "../styles/home.css";
// import blank from "../images/ajMakaBlank.png";
import wOnB from "../images/ajMakaWhiteOnBlack.png";

const HomeSide = () => {
  return (
    <div className="b">
      <div className="homeSide">
        <img className="wOnB" src={wOnB} />
        {/* <img className="blank" src={blank} /> */}
        {/* <img className="logo" src={logo} /> */}
      </div>
    </div>
  );
};

export default HomeSide;
