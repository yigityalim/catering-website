import {useRoutes} from 'react-router-dom';
import References from "./pages/References.tsx";
import Gallery from "./pages/Gallery.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import NotFound from "./pages/NotFound.tsx";
const allRoutes = () => {
    const token = true as const; // buraya token kontrolü gelecek

    type Route = {
        path: string;
        element: JSX.Element;
    }

    const publicRoutes: Route[] = [
        {path: '/', element: <Home/>},
        {path: '/references', element: <References/>},
        {path: '/gallery', element: <Gallery/>},
        {path: '/contact', element: <Contact/>},
        {path: '*', element: <NotFound/>}
    ];

    const privateRoutes = [
        {path: '/admin', element: <div>Admin</div>},
        {path: '/admin/references', element: <div>Admin References</div>},
    ];

    return token ? [...publicRoutes, ...privateRoutes] : [...publicRoutes];
}

export default function Routes() {
    const routes = allRoutes();
    return useRoutes(routes);
}