
import './cardProject.css'

export const CardProject = () => {

    return <>
        <div className="cardProject">
            <img src="./src/assets/readApp.jpeg" alt="IMG" />
            <div className="content">
                <h5>TITLE</h5>
                <p className="info">texto mucho</p>
            </div>
            <div className="actions">
                <button>Details</button>
                <button>Github</button>
                <button>Hosted</button>
            </div>
            {/* <div className="technologys">UL LI Y DEMAS</div> */}
        </div>
    </>
};
