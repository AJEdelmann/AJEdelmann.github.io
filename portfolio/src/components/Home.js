import React from "react";
import MyPhoto from "../img/totizeke.png";

const Home = () => {
  return (
    <div className="homeWrapper">
      <div className="linha myNav">
        <header className="header">
          <div className="col12">
            <nav>
              <ul>
                <li>
                  <a href="#">HOME</a>
                </li>
                <li>
                  <a href=".myabout">ABOUT</a>
                </li>
                <li>
                  PORTFOLIO
                  {/* <a href="portfolio.html">PORTFOLIO</a> */}
                </li>
                <li>
                  CONTACT
                  {/* <a href="contact.html">CONTACT</a> */}
                </li>
              </ul>
            </nav>
          </div>
          <hr />
        </header>
      </div>

      <div className="linha home">
        <div className="coluna col4 mytext">
          <h1 id="myname">
            <span>A</span>LB<span>ERT</span> J.
            <br />
            <span className="edel">
              EDE<span className="lm">LM</span>ANN
            </span>
          </h1>
          <h2 className="mywebdev">Web Developer</h2>
          <h3 className="myberlin">based in Berlin, Germany</h3>
        </div>
        <div className="coluna col8 photoDiv">
          <img src={MyPhoto} alt="Albert" className="myphoto"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
