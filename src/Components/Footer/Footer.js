import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"


export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <div className="flexDiv">
                    <div className="leftFooterDiv">
                        <li>Terms and Privacy</li>
                        <li>Contact</li>
                    </div>
                    <div className="rightFooterDiv">
                        <li>2020 | SkillDar | All Rights Reserved</li>
                        <li><FontAwesomeIcon icon={faInstagram} /></li>
                        <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                    </div>
                </div>
            </ul>

        </div>
    )
}
