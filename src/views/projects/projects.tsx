import { CardProject } from "../../components/cardProject/cardProject";
import './projects.css'
import { projects } from "../../utils/module";

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
