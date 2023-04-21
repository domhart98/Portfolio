import React, {useState} from 'react'
import './landingPage.css'
import bgImage from './images/light-veneer-texture.webp'

const LandingPage = () => {
    const [isLanded, setIsLanded] = useState(false);

    const handleButtonClick = () =>{
        setIsLanded(!isLanded);
    }

    return(
        <div className={isLanded ? "" : ""} id="landing-page" style={{ backgroundImage: `url(${bgImage})` }}>
            <div id="welcome-eyecatcher">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="content">
                <h1>WELCOME</h1>
                <p className="">
                    My name is Dominic Hart, 
                    <br/>
                </p>
                <div id="scroll-button">
                    <a href="#navbar" onClick={handleButtonClick}>
                        <img src={require('./images/below-icon.png')} width="4vw" height="4vw" alt=""/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}
export default LandingPage;