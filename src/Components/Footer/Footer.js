import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <li>Terms and Privacy</li>
                <li>Contact</li>
                <li>2020 | SkillDar | All Rights Reserved</li>
                <li><FontAwesomeIcon icon={fabInstagram} /></li>
                <li><FontAwesomeIncon icon={fabTwitter} /></li>
            </ul>
            
        </div>
    )
}
