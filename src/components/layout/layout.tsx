import { NavLink, Outlet } from "react-router-dom";
import { defaultRoute } from "../../routing/router";
import './layout.css'

export const Layout = () => {

    return <>
        <header>
            <div className="detail">
                <img src="./src/assets/logo.png" alt="IMG" className="logo" />
                <h2>TEXT</h2>
            </div>
            <div className="shortcuts">
                <NavLink to={`${defaultRoute}/main`}>
                    <button>main</button>
                </NavLink>
                <NavLink to={`${defaultRoute}/projects`}>
                    <button>projects</button>
                </NavLink>
            </div>

        </header>
        <div className="content">
            <Outlet></Outlet>
        </div>
        <footer>
            <span>Github</span>
            <span>Linkedin</span>
            <span>Curriculum</span>
        </footer>
    </>
};
