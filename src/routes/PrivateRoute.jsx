/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    // console.log(location);

    if (loading) {
        return <span className="animate-pulse">loading Private Route...</span>
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