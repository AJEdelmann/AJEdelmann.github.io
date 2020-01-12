import React from "react";
import Devices from "../img/devices.png";

const Portfolio = () => {
  return (
    <div id="myportfolio">
      <div className="linha">
        <div className="coluna col12 firstline">
          <p className="microsite">Microsite</p>
          <p className="microdescrip">Micro Web page for JC</p>
        </div>
      </div>

      <div className="linha truncate">
        <div className="coluna col12">
          <img src={Devices} alt="" className="mydevices" />
        </div>
      </div>

      <div className="linha truncate">
        <div className="coluna col12 myconcept">
          <p>
            <span className="techno">Technologies used: </span> HTML and CSS
          </p>
          <p>
            <span className="techno">
              Skills implemented and problems I solved:
            </span>
            For this project I use the grid technique in order to create my
            framework.
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Portfolio;
