import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { defaultRoute } from "../routes/router";
import { projects } from "../../utils/projects";
import { Project } from "../../model/project";
import './projectDetail.css'

export const ProjectDetail = () => {
    const routeParameter = useParams()
    const [project, setProject] = useState<Project>()
    const navigate = useNavigate()
    function getProject():void{

        const projectAux = projects.find(project=>
            project.id == Number(routeParameter.id)
        )
        setProject(projectAux)
    }

    function goBack(){
        navigate(`${defaultRoute}/projects`)
    }

    useEffect(() => {
        getProject();
    }, []);

    return <>
        <div className="project__detail">
            <h1>{project?.title}</h1>
            <h3>{project?.info}</h3>
            {project?.technologys.map((technology, index)=>
                <div className="technologys">
                    <div>Nombre: {technology.label}</div>
                    <div>Version: {technology.version}</div>
                    <div>Context: {technology.context}</div>
                    <div>Type: {technology.typeOfTool}</div>
                    {technology.subTool.map((subTechnology)=>
                        <span>{subTechnology.label} </span>
                    )}
                    
                </div>
            )}
            <button onClick={goBack}>BACK</button>

        </div>
    </>
};
