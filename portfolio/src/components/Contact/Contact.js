import React from "react";
import contactbk from "./img/contact.png";
import fb from "./img/fb.png";
import googal from "./img/g.png";
import git from "./img/git.png";
import linkdin from "./img/linkdin.png";
import "./contact.css";
import Nav from "../Nav/Nav";
function Contact() {
  return (
    <div>
      <Nav/>
      <div className="contact-background">
        <div className="column-titlec">
          <p className="heloc">CONTACT</p>
          <p className="titc">Let's have a cuppa. </p>
          
          <div className="svg-3-line">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="129"
              height="2"
              viewBox="0 0 129 3"
              fill="none"
            >
              <line y1="1.5" x2="43" y2="1.5" stroke="white" stroke-width="4" />
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
        </div>
      </div>
      <div className="ful">
        <form>
            <div className="in">
            <input type="text" placeholder="Name" name="name" className="inpt" required></input>
            <input type="Gmail" placeholder="Email" name="name" className="inp" required></input><br></br>
            </div>
            <textarea type="text" placeholder="Message" name="message" required></textarea><br></br><br></br>
            <button type="submit" name="send" className="sendbtn">SEND</button>
        </form>
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

export default Contact;
