import React, { useContext } from "react";
import AppContext from "../../store/context";
import "./Home.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

function Home(props) {
    const { state } = useContext(AppContext);
    const { projectData } = props

    const { search_term } = state.project;

    const displayCard = (arr) => {
        if (arr === undefined || (arr.length === 0)) {
            return <div></div>
        }

        const card = arr.slice().map((aProject) => {

            return (
                <ProjectCard business_name={aProject.business_name} avatar={aProject.avatar} location={aProject.location} project_description={aProject.project_description} tag1={aProject.tag1} tag2={aProject.tag2} video_count={aProject.video_count} date={aProject.date} />
            )
        })
        return card
    }

   
    const filteredProjects = (array, searchTerm) => {
        if (array === undefined || searchTerm === "") {
            return
        }
        let filteredProjectsArr = [];
         array.slice().forEach((aProject) => {
            let tag1 = aProject.tag1.toLowerCase()
            let tag2 = aProject.tag2.toLowerCase()
            let business = aProject.business_name.toLowerCase()
            let description = aProject.project_description.toLowerCase()
            let searchTerm = search_term.toLowerCase();
            if (tag1.includes(searchTerm)) {
                filteredProjectsArr.push(aProject);
            }
            if (tag2.includes(searchTerm)) {
                filteredProjectsArr.push(aProject);
            }
            if (business.includes(searchTerm)) {
                filteredProjectsArr.push(aProject);
            } 
            if (description.includes(searchTerm)) {
                filteredProjectsArr.push(aProject);
            }
             return filteredProjectsArr
        })
    
        return filteredProjectsArr
    }

    const displayNumberOfProjects = (arr) => {
        if (arr === undefined) {
            return
        }
        let arrLength = arr.length;
        return (
            <div className="jobCount">All jobs - {arrLength} results</div>
        )
    }

    const displayUnfilteredProjects = () => {
        if (search_term === "") {
            return true
        }
    }

    const displayFilteredProjects = () => {
        if (search_term !== "") {
            return true
        }
    }

    console.log("searchterm", search_term)

    return (
        <>
            <div className="homeBackground">
                <div className="numberOfProjectsDiv">
                    {displayNumberOfProjects(projectData)}
                </div>
                {displayUnfilteredProjects() &&
                    <div className="projectCardDiv">
                        {displayCard(projectData)}
                    </div>
                }
                {displayFilteredProjects() && 
                    <div className="projectCardDiv">
                        {displayCard(filteredProjects(projectData, search_term))}

                    </div>
                }
            </div>
        </>
    );
}

export default Home;