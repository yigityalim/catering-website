import {Route, Routes} from "react-router-dom";
import Home from "./views/admin/Home.tsx";
import Login from "./views/admin/Login.tsx";
import { useAuthenticationStatus } from '@nhost/react';
import SignIn from "./views/admin/SignIn.tsx";
import { Navigate } from "react-router-dom";
const PrivateRoute = () => {

    const { isAuthenticated, isLoading } = useAuthenticationStatus();

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<h1>Not Found</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    )
};

export default PrivateRoute;