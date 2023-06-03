import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./admin/views/Login.tsx";
import {useAuthenticationStatus} from '@nhost/react';
import Settings from "./admin/views/Settings.tsx";
import Spinner from "./components/Spinner.tsx";
import Header from "./admin/components/Header.tsx";
import Layout from "./admin/components/Layout.tsx";
import Dashboard from "./admin/views/Dashboard.tsx";

const PrivateRoute = (): React.JSX.Element => {

    const {isAuthenticated, isLoading} = useAuthenticationStatus();

    if (isLoading) {
        return <Spinner/>
    }

    if (!isAuthenticated) {
        return <Login/>
    }

    return (
        <div className="w-full h-full p-2 md:p-3 lg:p-4 flex flex-col gap-2 md:gap-3 lg:gap-4">
            {isAuthenticated && <Header/>}
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="*" element={<h1>Not Found</h1>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                </Routes>
            </Layout>
        </div>
    )
};

export default PrivateRoute;