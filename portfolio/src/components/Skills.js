import React from "react";
import darthVader from "../img/darth-vader.png";
const Skills = () => {
  return (
    // <div className="skillSection">
    //   <div className="linha">
    //     <div className="coluna col12 myMainStack">
    //       <h2 className="myh2">My main stack</h2>
    //       <h4 className="myh4">
    //         <div className="mainStack">
    //           <div className="tech-skill">JavaScript</div>
    //           <div className="tech-skill">React</div>
    //           <div className="tech-skill">React Hooks</div>
    //           <div className="tech-skill">Node.js</div>
    //           <div className="tech-skill">Express</div>
    //           <div className="tech-skill">MongoDB</div>
    //           <div className="tech-skill">SQL</div>
    //           <div className="tech-skill">Puppeteer</div>
    //           <div className="tech-skill">CSS / SASS</div>
    //           <div className="tech-skill">Bootstrap</div>
    //         </div>
    //       </h4>
    //     </div>
    //   </div>
    // </div>

    <div className="mySkills">
      <div className="linha">
        <div className="coluna col10 myknowledge">
          <h2 className="myh2skill">My Skills</h2>
          <ul className="skills-ul">
            <li className="myliskill">html&css</li>
            <div id="bar">
              <div id="fill1"></div>
            </div>
            <li className="myliskill">JavaScript</li>
            <div id="bar">
              <div id="fill1"></div>
            </div>
            <li className="myliskill">React</li>
            <div id="bar">
              <div id="fill2"></div>
            </div>
            <li className="myliskill">Node.js</li>
            <div id="bar">
              <div id="fill2"></div>
            </div>
            <li className="myliskill">Express</li>
            <div id="bar">
              <div id="fill3"></div>
            </div>
            <li className="myliskill">BBQ</li>
            <div id="bar">
              <div id="fill"></div>
            </div>
            <li className="myliskill">MongoDB</li>
            <div id="bar">
              <div id="fill3"></div>
            </div>
            <li className="myliskill">SQL</li>
            <div id="bar">
              <div id="fill4"></div>
            </div>
            <div className="graph-qualifications coluna col2">
              <div className="graphic-level-1">
                <span className="blackSpan">Uh? </span>
                <span>Next question</span>
              </div>
              <div className="graphic-level-2">
                <span className="blackSpan">Basic, </span>
                <span>you can't always win...</span>
              </div>
              <div className="graphic-level-3">
                <span className="blackSpan">Medium, </span>
                <span>I am trying to improve</span>
              </div>
              <div className="graphic-level-4">
                <span className="blackSpan">High, </span>
                <span>I'm pretty good.</span>
              </div>
              <div className="graphic-level-5">
                <span className="blackSpan"></span>
                <span>
                  I'm the <span className="blackSpan">master</span> of the
                  universe
                </span>
                <img
                  src={darthVader}
                  alt=""
                  width="80"
                  className="darth-vader"
                />
              </div>
            </div>
          </ul>
        </div>
      </div>
      <hr className="graphic-bar-1"></hr>
      <hr className="graphic-bar-2"></hr>
      <hr className="graphic-bar-3"></hr>
      <hr className="graphic-bar-4"></hr>
      <hr className="graphic-bar-5"></hr>
    </div>
  );
};

export default Skills;
