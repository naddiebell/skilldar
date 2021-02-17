import React, { useContext } from "react";
import AppContext from "../../store/context";
import "./Home.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

function Home(props) {
    const { state } = useContext(AppContext);
    const { projectData } = props
    console.log("state from home", state.project.search_term)

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


    let filteredProjectsArr = [];
    const filteredProjects = (array, searchTerm) => {
        if( array === undefined || searchTerm === ""){
            return
        }
        const filteredProj = array.slice().map((aProject) => {
            console.log("aProject", aProject)
            console.log(aProject.tag1.toLowerCase())
            let tag1 = aProject.tag1.toLowerCase()
            let tag2 = aProject.tag2.toLowerCase()
            let business = aProject.business_name.toLowerCase()
            let searchTerm = search_term.toLowerCase();
            if (tag1.includes(searchTerm)){
                filteredProjectsArr.push(aProject);
            }
            if (tag2.includes(searchTerm)){
                filteredProjectsArr.push(aProject);
            }
            if (business.includes(searchTerm)){
                filteredProjectsArr.push(aProject);
            }
            return filteredProjectsArr
        })
        return filteredProj;
    }

    console.log(filteredProjects(projectData, search_term))
    

    const displayNumberOfProjects = (arr) => {
        if (arr === undefined) {
            return
        }
        let arrLength = arr.length;
        return (
            <div>All jobs - {arrLength} results</div>
        )
    }

    return (
        <>

            <header className="header">
                <div className="headerText">
                    <h2 className="headerTitle">Creative motion projects</h2>
                    <p className="headerSubtitle">Discover client work to pitch on.</p>
                    {/* <h6>Video By Harold Miles</h6> */}
                </div>
            </header>
            <div className="homeBackground">
                <div className="numberOfProjectsDiv">
                    {displayNumberOfProjects(projectData)}
                </div>
                <div className="projectCardDiv">
                    {displayCard(projectData)}
                </div>
            </div>
        </>
    );
}

export default Home;