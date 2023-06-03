import React from "react";
import {useAuthenticated} from "@nhost/react";
import {Navigate} from "react-router-dom";
import c from "classnames";
import {Helmet} from "react-helmet";
import Sidebar from "../components/Sidebar.tsx";

type LayoutProps = {
    children: React.ReactNode;
    className?: string;
}
const Layout = ({children, className}: LayoutProps): React.JSX.Element => {

    const isAuthenticated: boolean = useAuthenticated();

    if (isAuthenticated) {
        return (
            <>
                <Helmet>
                    <title>Admin Paneli</title>
                </Helmet>
                <div className="w-full h-full flex items-center justify-center gap-2 md:gap-3 lg:gap-4">
                    <Sidebar/>
                    <main className={c(
                        "bg-card dark:bg-card-dark rounded-lg h-full w-full p-4",
                        className
                    )}>
                        {children}
                    </main>
                </div>
            </>
        );
    }

    return <Navigate to="/admin/login"/>;
}
export default Layout
