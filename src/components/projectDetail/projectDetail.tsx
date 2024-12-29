import { useNavigate, useParams } from "react-router-dom";
import { project, projects } from "../../module";
import { useEffect, useState } from "react";
import { defaultRoute } from "../../routing/router";

export const ProjectDetail = () => {
    const routeParameter = useParams()
    const [project, setProject] = useState<project>()
    const navigate = useNavigate()
    function getProject():void{
        // Como no hay backend para este portfolio, esto solo lo busca en la lista de <modules.ts>
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
            {/* <h1>{project.title}</h1> */}
            <div><h1>{project?.info}</h1></div>
            <button onClick={goBack}>BACK</button>
        </div>
    </>
};
