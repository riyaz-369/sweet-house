import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex max-w-7xl h-screen mx-auto">
            <div className="flex flex-col w-full m-8 animate-pulse h-96">
                <div className="h-48 rounded-t dark:bg-gray-300"></div>
                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                    <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
                </div>
            </div>
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