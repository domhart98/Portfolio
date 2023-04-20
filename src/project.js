import React from 'react'

import './project.css'

const Project = ({githubLink, liveLink, description, name, src}) =>{

    return(
        <div className="project-card">
            <div className="project-image">
                <img src={src} alt=""/>
            </div>
            <div className="project-body">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="buttons-container">
                    <a className="live-button" href={liveLink} role="button">live demo<img src={require("./images/fullscreen-icon.png")} alt=""/></a>
                    <a className="github-button" href={githubLink} role="button">github<img src={require("./images/github-icon.png")} alt=""/></a>
                </div>
                
            </div>
            

        </div>
    )
}
export default Project