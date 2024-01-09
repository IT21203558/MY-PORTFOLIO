import React ,{ useState } from "react";

import "./home.css";
import photo from "./img/hmphto.png";
import fb from "./img/fb.png";
import googal from "./img/g.png";
import git from "./img/git.png";
import linkdin from "./img/linkdin.png";
import Nav from "../Nav/Nav";
import first from "./img/1.png";
import sec from "./img/2.png";
import third from "./img/3.png";
import forth  from "./img/4.png";
import fifth from "./img/5.png";
import seven from "./img/6.png";
import eight from "./img/7.png";
import nine from "./img/8.png";



const Home = () => {


  const [hovered, setHovered] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    description: "",
  });

  const handleHover = (title, description) => {
    setHovered(!hovered);
    setProjectInfo({ title, description });
  };

  const handleHoverOff = () => {
    setHovered(false);
  };


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



     <div className="section-title-zero">    
    <div className="section-title-first">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-section">
      
          <div className="project-box" onMouseEnter={() => handleHover("First Project", "Description for first project")} onMouseLeave={handleHoverOff}>
  <img src={first} alt="logo-icon" className="project-image" />
  {hovered && (
    <div className="project-popup">
      <h3>{projectInfo.title}</h3>
      <p>{projectInfo.description}</p>
      <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
    </div>
  )}
</div>
          
          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={sec} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}
          </div>

          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={third} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}


          </div>
          

          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={forth} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              
              <a href="URL_TO_YOUR_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
                <button className="github-button">GitHub Repo</button>
              </a>
               </div>
          )}
          </div>

          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={fifth} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}
          </div>

          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={seven} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}
          </div>

          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={eight} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}
          </div>


          <div className="project-box" onMouseEnter={() => handleHover("She Budget Savvy", "For women, the money is important")}
          onMouseLeave={handleHoverOff}>
           < img src={nine} alt="logo-icon" className="project-image" />
            {hovered && (
            <div className="project-popup">
              <h3>{projectInfo.title}</h3>
              <p>{projectInfo.description}</p>
              <a href="URL_TO_YOUR_FIRST_GITHUB_REPO" target="_blank" rel="noopener noreferrer" className="github-link">
        <button className="github-button">GitHub Repo</button>
      </a>
            </div>
          )}
          </div>

          <div className="project-box">
            
          </div>

          <div className="project-box">
            
          </div>
          
        </div>


        </div>
        </div>
    </div>
  );
};

export default Home;
