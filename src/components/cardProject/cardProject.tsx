import { useNavigate } from 'react-router-dom';
import { defaultRoute } from '../../views/routes/router';
import './cardProject.css'
import { Project } from '../../model/project';

export const CardProject = ({ project }: { project: Project }) => {

    const navigate = useNavigate()

    function goToDetail() {
        navigate(`${defaultRoute}/projects/${project.id}`)
    }

    function goToGithubRepo(): void {
        window.location.href = project.githubRepoLink
    }

    return <>
        <div className="cardProject">
            <h1 >
                {`${project.title}`}
                {/* <hr /> */}
            </h1>
            <hr />
            <div className="technologys">
                {project.technologys.map((technology, index) =>
                    <div className="cardTechnologylabel" style={{ backgroundColor: technology.color }}>
                        <p className="labelText">{technology.label}</p>
                    </div>
                )}
                
            </div >
            <hr />
            <div className="actions">
                <button className='action' onClick={goToDetail}>Details</button>
                <button className='action' onClick={goToGithubRepo}>Github</button>
                <button className='action'>Hosted</button>
            </div>


        </div>
    </>
};
