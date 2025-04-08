import { CardProject } from "../../components/cardProject/cardProject";
import { projects } from "../../utils/projects";
import './projects.css'

export const Projects = () => {

    const listProjects = projects.map((project, index)=>
        <CardProject key={index} project={project}></CardProject>
    )

    return <>
        <div className="projects">
            {listProjects}
        </div>
    </>
};
