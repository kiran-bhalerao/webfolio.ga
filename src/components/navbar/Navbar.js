import React, { Component } from "react";
import "./Navbar.css";
import animateScrollTo from "animated-scroll-to";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-light">
          <a className="navbar-brand" href="https://localhost:3000">
            IPortfolio.ga
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <button
                  className="nav-link ui button nav-btn"
                  onClick={() =>animateScrollTo(document.querySelector('.navbar-expand-md'))}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link ui button nav-btn" 
                onClick={() =>animateScrollTo(document.querySelector('#scroll-projects'))}
                >
                  Projects
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link ui button nav-btn" 
                onClick={() =>animateScrollTo(document.querySelector('#scroll-skills'))}
                >
                Skills
                </button>
              </li>
              <li className="nav-item ui button resume-btn">
                <a className="nav-link text-dark" href="https://drive.google.com/open?id=1aU53eBQkluL6VmeWTUY1s4IKdA2havmE">
                  <p>RESUME</p>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
