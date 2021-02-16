import React, { useContext } from "react";
import AppContext from "../../store/context";
import "./Home.css";
import ProjectCard from "../../Components/ProjectCard/ProjectCard"

function Home(props) {
    const { state, dispatch } = useContext(AppContext);
    const { projectData } = props
    console.log(projectData)
    console.log("state", state)

    const dispCard = () => {
        const arr2 = projectData.slice()
        if (arr2.length === 0) {
            return <div></div>
        }
        const test = arr2.map((aProject) => {

            return (
                <ProjectCard business_name={aProject.business_name} avatar={aProject.avatar} location={aProject.location} project_description={aProject.project_description} tag1={aProject.tag1} tag2={aProject.tag2} video_count={aProject.video_count} date={aProject.date} />
            )
        })
        return test
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
            <div></div>
            <div>
                {dispCard()}
            </div>

        </>
    );
}

export default Home;