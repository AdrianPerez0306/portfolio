import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import { paths, PathTestId, pathToLabelMap } from './domain/routes';

import { AboutMe } from '../components/aboutMe/aboutMe';
import { Projects } from '../components/projects/projects';
import { Layout } from '../components/layout/layout';

export const defaultRoute = '/portfolio'
export const AppRoutes = (
    // props: HeaderOptionProps
) => {
    // const location = useLocation()
    // useEffect(() => {
    //     handleTitle()
    // }, [location]);

    // function handleTitle() {
    //     const currentPath = location.pathname;
    //     const matchedLabel = Object.keys(pathToLabelMap).find(path => {

    //         return currentPath === path || currentPath.startsWith(path.replace(/:id/, ''));
    //     });
    //     props.stateDispatcher(matchedLabel ? pathToLabelMap[matchedLabel] : paths.login.label);
    // }


    return <>
        <Routes>
            <Route element={<Layout />}>
                <Route element={<AboutMe />} path={`${defaultRoute}/main`}/>
                <Route element={<Projects />} path={`${defaultRoute}/projects`}/>
            </Route>
            <Route path="*" element={<Navigate to={`${defaultRoute}/main`} replace />} />
        </Routes>
    </>
};


export const AppRouter = () => {
    // const [currentOption, setCurrentOption] = useState(paths.dashboard.label)
    return <>
        <Router>
            <AppRoutes></AppRoutes>
        </Router>

    </>
};
