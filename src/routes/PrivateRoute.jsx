/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingSpinner from '../../public/Animation - 1715748794001.json';
import Lottie from "lottie-react";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <div className="flex items-center justify-center max-h-[calc(100vh-350px)]">
            <Lottie animationData={loadingSpinner} style={{ height: '50%', width: '50%' }}></Lottie>
        </div>
    }

    if (user) {
        return children
    }
    return (
        <div>
            <Navigate to='/login' state={location.pathname}></Navigate>
        </div>
    )
};

export default PrivateRoute;