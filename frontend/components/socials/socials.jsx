import React from 'react'
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

class SocialsPage extends React.Component{
  render() {
    return (
      <div className="about-page-div">
        <h2 className="mooboo-header-text">Follow me!</h2>
        <div className="social-link-container">
          <div className="github-link">
            <span className="project-github-label"></span>
            <a
              href="https://github.com/theomantz/mooboo"
              className="github-link"
              target="_blank"
            >
              <AiFillGithub size="8em" />
            </a>
          </div>
          <div className="linkedin-link">
            <span className="linked-in-label"></span>
            <a
              href="https://www.linkedin.com/in/theo-mantz/"
              className="linkedin-link"
              target="_blank"
            >
              <AiFillLinkedin size="8em" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialsPage