import React from "react";
import "./about.css";
import fb from "./img/fb.png";
import googal from "./img/g.png";
import git from "./img/git.png";
import linkdin from "./img/linkdin.png";
import photo from "./img/about.png";
import Nav from "../Nav/Nav";
function About() {
  return (
    <div>
      <Nav />
      <div className="about-first">
      <div  className="about-cover-image" >
          <div className="left-column">
            <div className="left-column-title">
              <p className="abut">ABOUT</p>
              <p className="pera">Simple mind. Gorgeous designs.</p>
              <br></br>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="129"
                height="3"
                viewBox="0 0 129 3"
                fill="none"
              >
                <line
                  y1="1.5"
                  x2="43"
                  y2="1.5"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  x1="86"
                  y1="1.5"
                  x2="129"
                  y2="1.5"
                  stroke="white"
                  strokeWidth="3" 
                />
                <line
                  x1="43"
                  y1="1.5"
                  x2="86"
                  y2="1.5"
                  stroke="#FB559F"
                  strokeWidth="3" 
                />
              </svg>
              
            </div>
            
          </div>
          </div>
          </div>

        <div className="ful">
        <div className="two-column-row">
          <div className="left-column2">
            <div className="left-column-title2">
              <p className="ndparagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli sagittis
                quam, id olor consectetur fermentum nibh volutpat, accumsan
                purus.
              </p>
              <p className="ndparagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing eli sagittis
                quam, id olor consectetur fermentum nibh volutpat, accumsan
                purus.
              </p>
            </div>
          </div>
          <div className="right-column2">
            <div className="left-column-title2">
              <p className="ndparagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                maximus ligula semper metus pellentesque mattis. Maccumsan
                purus.
              </p>
              <p className="ndparagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                maximus ligula semper metus pellentesque mattis. Maccumsan
                purus.
              </p>
            </div>
          </div>
        </div>
        <div className="left-column-link3">
          <img src={fb} alt="logo-icon" className="logo-icon fb" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={googal} alt="logo-icon" className="logo-icon googal" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={linkdin} alt="logo-icon" className="logo-icon linkdin" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img src={git} alt="logo-icon" className="logo-icon git" />
        </div>
      </div>
    </div>
  );
}

export default About;
