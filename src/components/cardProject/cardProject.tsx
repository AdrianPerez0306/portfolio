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
            <img src={`${project.img}`} alt="IMG" />
            <div className="content">
                <h5>{`${project.title}`}</h5>
                <p className="info">{`${project.info}`}</p>
            </div>
            <div className="technologys">
                {project.technologys.map((technology, index) =>
                    <div className="cardTechnologylabel" style={{ backgroundColor: technology.color }}>
                        <p className="labelText">{technology.label}</p>
                    </div>
                )}
            </div >

            <div className="actions">
                <button className='mock' onClick={goToDetail}>Details</button>
                <button className='mock' onClick={goToGithubRepo}>Github</button>
                <button className='mock'>Hosted</button>
            </div>


        </div>
    </>
};
