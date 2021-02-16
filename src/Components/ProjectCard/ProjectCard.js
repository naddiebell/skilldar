import React from "react";
import "./ProjectCard.css";

function ProjectCard(props) {
    const { avatar, business_name, location, project_description, tag1, tag2, video_count, date } = props;

    return (
        <>
            <div className="card">
                <div>
                    <img src={avatar} alt="avatar"/>
                    <p>{business_name}</p>
                    <p>{location}</p>
                </div>
                <div>
                    <h5>{project_description}</h5>
                    <button>{tag1}</button>
                    <button>{tag2}</button>
                </div>
                <div>
                    <p>{video_count}</p>
                    <p>{date}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;