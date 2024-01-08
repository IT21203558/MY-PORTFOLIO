import React from "react";
import "./home.css";
import photo from "./img/hmphto.png";
import fb from "./img/fb.png";
import googal from "./img/g.png";
import git from "./img/git.png";
import linkdin from "./img/linkdin.png";
import Nav from "../Nav/Nav";

const Home = () => {
  return (
    <div>
      <Nav/>
      <div>
        <div className="container">
          <div className="left-column">
            <div className="left-column-title1">
              <p className="helo1">HELLO,</p>
              <p className="name1">I'M Shamindi</p>
              <p className="tit1">Full Stack Developer</p>
              <div className="svg-3-line">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="4"
                  viewBox="0 0 129 3"
                  fill="none"
                >
                  <line
                    y1="1.5"
                    x2="43"
                    y2="1.5"
                    stroke="white"
                    stroke-width="2"
                  />
                  <line
                    x1="86"
                    y1="1.5"
                    x2="129"
                    y2="1.5"
                    stroke="white"
                    stroke-width="2"
                  />
                  <line
                    x1="43"
                    y1="1.5"
                    x2="86"
                    y2="1.5"
                    stroke="#FB559F"
                    stroke-width="2"
                  />
                </svg>
              </div>
              <div className="left-column-link">
                <img src={fb} alt="logo-icon" className="logo-icon fb" />
                <img
                  src={googal}
                  alt="logo-icon"
                  className="logo-icon googal"
                />
                <img
                  src={linkdin}
                  alt="logo-icon"
                  className="logo-icon linkdin"
                />
                <img src={git} alt="logo-icon" className="logo-icon git" />
              </div>
            </div>
          </div>
          <div className="right-column">
            <img src={photo} alt="body_Photo" className="phtobdy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
