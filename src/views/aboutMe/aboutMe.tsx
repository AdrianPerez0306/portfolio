import { aboutMe } from '../../utils/aboutMe';
import './aboutMe.css'

export const AboutMe = () => {

    return <>
        <div className="">
            <h2>Hi, Im</h2>
            <h2>Adrian</h2>
            <h3>a Fullstack Developer</h3>
            <span>{aboutMe}</span>
        </div>
    </>
};


