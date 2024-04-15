import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
    
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (user) {
        return children;
    }

    if (loading) {
        return <div className="max-w-7xl mx-auto my-12">
            <div className="flex flex-col gap-4 h-screen">
                <div className="skeleton h-52 w-full rounded-md"></div>
                <div className="skeleton h-6 w-1/2 rounded-md"></div>
                <div className="skeleton h-6 w-full rounded-md"></div>
                <div className="skeleton h-6 w-full rounded-md"></div>
                <div className="skeleton h-6 w-full rounded-md"></div>
            </div>
        </div>
    }

    return <Navigate state={location.pathname} to="/login" />
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;