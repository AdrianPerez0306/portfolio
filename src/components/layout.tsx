import { NavLink, Outlet } from "react-router-dom";
import { defaultRoute } from "../routing/router";


export const Layout = () => {

    return <>
        <header>
            <NavLink to={`${defaultRoute}/main`}>
                <button>main</button>
            </NavLink>
            <NavLink to={`${defaultRoute}/projects`}>
                <button>projects</button>
            </NavLink>
        </header>
        <Outlet></Outlet>
        <footer>
            <div>CONTENT 1</div>
            <div>CONTENT 1</div>
            <div>CONTENT 1</div>
        </footer>
    </>
};
