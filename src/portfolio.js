import React from 'react'
import './portfolio.css'
import Project from './project'
import Navbar from './navbar'
import Footer from './footer'
import LandingPage from './landingPage'
import image from "./images/DominicHart_Profile.jpg"
import CV from "./DominicHart_CV.pdf"
import PomodoroClock from './images/clock.png'
import MarkdownPreviewer from './images/markdown.png'
import Calculator from './images/calculator.png'
import RandomQuoteGenerator from './images/quote-generator.png'
import DrumKit from './images/drumkit.png'
import GreenOffice from './images/green-office.png'


const projects = [
    {
        name:"GREEN OFFICE",
        git_url:"https://github.com/domhart98/Green-Office",
        live_url:"https://www.green-office-barbados.com",
        description:'Single page web application. Built using React, Bootstrap, NodeJS, CSS & HTML'
    },
    {
        name:"POMODORO CLOCK",
        git_url:"https://github.com/domhart98/freeCodeCamp---Frontend-Certification",
        live_url:"https://freecodecamp-components.netlify.app/clock",
        description:"Clock which runs continously, switching from Session to Break states when time reaches 00:00"
    },
    {
        name:"MARKDOWN PREVIEWER",
        git_url:"https://github.com/domhart98/freeCodeCamp---Frontend-Certification",
        live_url:"https://https://freecodecamp-components.netlify.app/markdown",
        description:"One half text area to input markdown language, other half previews what the markdown will appear as."
    },
    {
        name:"RANDOM QUOTE GENERATOR",
        git_url:"https://github.com/domhart98/freeCodeCamp---Frontend-Certification",
        live_url:"https://freecodecamp-components.netlify.app",
        description:"Small widget which displays a random quote from a dataset. You can change the quote, or post it to twitter."
    },
    {
        name:"DRUM KIT",
        git_url:"https://github.com/domhart98/freeCodeCamp---Frontend-Certification",
        live_url:"https://freecodecamp-components.netlify.app/drum",
        description:"Set of buttons which are triggered by clicking on them, or pressing the corresponding keys."
    },
    {
        name:"CALCULATOR",
        git_url:"https://github.com/domhart98/freeCodeCamp---Frontend-Certification",
        live_url:"https://freecodecamp-components.netlify.app/calculator",
        description:"Simple calculator which can do addition, subtraction, multiplacation and division."
    }
]

const Portfolio = () => {
    
    return(
        <div id="portfolio-container">
            <LandingPage/>
            <Navbar/>

            {/**<section id="personal-section" style={{ backgroundImage: `url(${mochaGrunge})` }}> */}
            <section id="personal-section">
                <div id="personal-header">
                    <h1 className="section-header">PERSONAL</h1>
                </div>
                <div className="container" id="personal-body">
                    <div className="" id="personal-headshot">
                        <img src={image} alt="profile"/>
                    </div>
                    <div className="" id="personal-text">
                        <h6>Thanks for visiting!</h6>
                        <p> I am a Full-stack Developer from Barbados, currently working
                            out of Montreal, Quebec. I design web applications, 
                            databases, and data queries. I am always hungry to learn
                            new skills and hone my craft. Please, feel free to reach out, let's get to work.
                        </p>
                        <p>
                            In my free time, I like to play sports, read, or hang out with some friends. My interests include 
                            machine learning, decentralized resources, sustainability, and art & animation.
                        </p>
                    </div>
                </div>
            </section>
        
            <section id="skills-section">
                <div id="skills-heading">
                    {/*<div id="skills-subheading">
                        <img src={require("./images/below-icon.png")} alt="below icon"/>
                        <h2>WHAT CAN I DO?</h2>
                        <img src={require("./images/below-icon.png")} alt="below icon"/>
                    </div>*/}
                    <div id="skills-subheading">
                        <h2>WHAT CAN I DO?</h2>
                        <img src={require("./images/arrow.png")} alt="below icon"/>
                    </div>
                    <div id="skills-subheading-2">
                        <a href={CV}  id="download-button" download="DominicHart_CV">
                            <p>download resume</p> 
                            <div>
                                <img src={require("./images/download-icon.png")} width="15px" height="15px" alt="download icon"/>
                            </div>
                            
                        </a>
                    </div>
                </div>
                <div className="flex-grid">
                    
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/html5-icon.png")} alt="html5 icon"/>
                        <p className="caption">HTML5</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/css3-icon.png")} alt="css3 icon"/>
                        <p className="caption">CSS3</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/node-icon.png")} alt="node icon"/>
                        <p className="caption">NodeJS</p>
                    </div>
                </div>
                <div className="flex-grid">
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/python-icon.png")} alt="python icon"/>
                        <p className="caption">PYTHON</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/javascript-icon.png")} alt="javascript icon"/>
                        <p className="caption">JAVASCRIPT</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/react-icon.png")} alt="react icon"/>
                        <p className="caption">ReactJS</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/mysql-icon.png")} alt="mysql icon"/>
                        <p className="caption">MySQL</p>
                    </div>
                </div>
                <div className="flex-grid">
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/git-icon.png")} alt="git icon"/>
                        <p className="caption">GIT</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/figma-icon.png")} alt="figma icon"/>
                        <p className="caption">FIGMA</p>
                    </div>
                    <div className="skill-container">
                        <img className="skill-icon" src={require("./images/c-icon.png")} alt="netlify icon"/>
                        <p className="caption">C++</p>
                    </div>
                </div>
            </section>

            <section id="project-section">
                <div id="projects-header">
                    <h1 class="section-header">PROJECTS</h1>
                </div>
                
                <div id="projects-body">
                    <Project src={GreenOffice} githubLink={projects[0].git_url} liveLink={projects[0].live_url} description={projects[0].description} name={projects[0].name}/> 
                    <Project src={PomodoroClock} githubLink={projects[1].git_url} liveLink={projects[1].live_url} description={projects[1].description} name={projects[1].name}/>
                    <Project src={MarkdownPreviewer} githubLink={projects[2].git_url} liveLink={projects[2].live_url} description={projects[2].description} name={projects[2].name}/>
                    <Project src={RandomQuoteGenerator} githubLink={projects[3].git_url} liveLink={projects[3].live_url} description={projects[3].description} name={projects[3].name}/> 
                    <Project src={Calculator} githubLink={projects[4].git_url} liveLink={projects[4].live_url} description={projects[4].description} name={projects[4].name}/>
                    <Project src={DrumKit} githubLink={projects[5].git_url} liveLink={projects[5].live_url} description={projects[5].description} name={projects[5].name}/>
                </div>
                
            </section>

            <section id="contact-section">
                <div id="contact-header">
                    <h1 className="section-header">CONTACT</h1>
                </div>
                <div id="contact-body">
                    <a href="mailto:dominic.am.hart@gmail.com" id=""><img src={require('./images/email-icon.png')} width="150px" aspect-ratio="1/1" alt=""/></a>
                    <div><div className="black-dot"></div></div>
                    <a href="https://www.linkedin.com/in/dominic-am-hart" id=""><img src={require('./images/linkedin.png')} width="80px" aspect-ratio="1/1" alt=""/></a> 
                    <div><div className="black-dot"></div></div>
                    <a href="https://www.github.com/domhart98" id=""><img src={require('./images/github-icon.png')} width="80px" aspect-ratio="1/1" alt=""/></a> 
                </div>
                
            </section>

            <Footer/>
        </div>
    )
}
export default Portfolio;