import { CardProject } from "../cardProject/cardProject";
import './projects.css'
import { projects } from "../../module";

export const Projects = () => {

    const listProjects = projects.map((project)=>
        <CardProject project={project}></CardProject>
    )

    return <>
        <div className="projects">
            {listProjects}
        </div>
    </>
};
