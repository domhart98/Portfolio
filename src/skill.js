import React from 'react'
//import './skill.css'

const Skill = ({url, name}) => {
    return(
        <div className="skill-container">
            <img className="skill-icon" src={url} alt={name + " icon"}/>
            <p className="caption">{name}</p>
        </div>
    )
}
export default Skill;