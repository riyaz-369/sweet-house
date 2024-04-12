import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" />
};

PrivetRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivetRoute;