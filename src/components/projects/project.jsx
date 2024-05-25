import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./styles/project.css";

const Project = (props) => {
    const { title, description, linkText, link, sourceCode } = props;

    return (
        <React.Fragment>
            <div className="project">
                <div className="project-container">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="main-link">
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-link">
                            <div className="project-link-text">{linkText}</div>
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                        </div>
                    </a>
                    {sourceCode && (
                        <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="source-link">
                            <div className="project-link">
                                <div className="project-link-text">Source Code</div>
                                <div className="project-link-icon">
                                    <FontAwesomeIcon icon={faLink} />
                                </div>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
