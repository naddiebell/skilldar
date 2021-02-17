import React from "react";
import "./ProjectCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faVideo, faClock } from '@fortawesome/free-solid-svg-icons'

function ProjectCard(props) {
    const { avatar, business_name, location, project_description, tag1, tag2, video_count, date } = props;

    const videoPluralizer = (videoCount) => {
        if(videoCount === 1) {
            return "video"
        } return "videos"
    }

    return (
        <>
            <div className="card">
                <div className="businessInfo">
                    <img src={avatar} alt="avatar" className="avatar"/>
                    <div>
                    <p className="businessName">{business_name}</p>
                    <p className="location"><FontAwesomeIcon icon={faMapMarkerAlt}/><span className="locationText">{location}</span></p>
                    </div>
                </div>
                <div className="projectDescriptionDiv">
                    <h5 className="projectDescriptionText">{project_description}</h5>
                    <div className="tagContainer">
                        <div className="tag">{tag1}</div>
                        <div className="tag">{tag2}</div>
                    </div>
                </div>
                <div className="videoCountandDate"> 
                    <div className="videoCount"><FontAwesomeIcon icon={faVideo}/><span className="vcdText">{video_count}</span><span className="vidCountText">{videoPluralizer(video_count)}</span></div>
                    <div className="date"><FontAwesomeIcon icon={faClock}/><span className="vcdText">{date}</span></div>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;

