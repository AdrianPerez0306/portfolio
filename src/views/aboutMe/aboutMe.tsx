// import { NavLink, Outlet } from 'react-router-dom';
// import { Header } from './header';

import { aboutMe } from '../../utils/aboutMe';
import './aboutMe.css'
// import { paths, PathTestId, pathToLabelMap } from './domain/routes';
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


