
import { useNavigate } from 'react-router-dom';
import { project } from '../../module';
import { defaultRoute } from '../../routing/router';
import './cardProject.css'

export const CardProject = ({project}:{project:project}) => {
    const navigate = useNavigate()
    function goToDetail(){
        navigate(`${defaultRoute}/projects/${project.id}`)
    }
    function goToExternalLink():void{
        window.location.href = project.link
    }
    return <>
        <div className="cardProject">
            <img src={`${project.img}`} alt="IMG" />
            <div className="content">
                <h5>{`${project.title}`}</h5>
                <p className="info">{`${project.info}`}</p>
            </div>
            <div className="actions">
                <button className='mock' onClick={goToDetail}>Details</button>
                <button className='mock' onClick={goToExternalLink}>Github</button>
                <button className='mock'>Hosted</button>
            </div>
        </div>
    </>
};
