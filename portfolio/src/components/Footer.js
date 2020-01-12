import React from "react";
import InstaIcon from "../img/instaicon1.png";

const Footer = () => {
  return (
    <div className="linha">
      <div className="footer">
        <footer>
          <div className="coluna col4 mycv">
            <span>
              <a href="albert-edelmann-cv.pdf">Print a resume</a>
            </span>
          </div>
          <div className="coluna col4 copy">
            <p>&copy 2019 - AJEdelmann Web Development</p>
            <a
              href="https://www.instagram.com/albert_toti/"
              rel="external"
              target="_blank"
            >
              <img src={InstaIcon} alt="instagram" className="myinsta" />
            </a>
          </div>
          <div className="coluna col4 myprivacy">
            <span className="myprivacy">
              <a href="privacy.html">Privacy policy</a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
