
import { project } from '../../module';
import './cardProject.css'

export const CardProject = ({project}:{project:project}) => {

    return <>
        <div className="cardProject">
            <img src={`${project.img}`} alt="IMG" />
            <div className="content">
                <h5>{`${project.title}`}</h5>
                <p className="info">{`${project.info}`}</p>
            </div>
            <div className="actions">
                <button className='mock'>Details</button>
                <button className='mock'>Github</button>
                <button className='mock'>Hosted</button>
            </div>
        </div>
    </>
};
