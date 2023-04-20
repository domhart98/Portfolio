import React from 'react'
import './footer.css'
import above from './images/below-icon.png'

const Footer = () => {
    return(
        <div id="footer">
            <a href="#navbar" role="button">
                <img src={above} alt="above icon"/>
            </a>
            <p>Web design by Dominic Hart © 2023</p>
        </div>
    )
}
export default Footer;