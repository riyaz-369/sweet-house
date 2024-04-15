import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Footer";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname])

    return (
        <div>
            <div className="bg-base-200 bg-opacity-35">
                <div className="mt-6 md:mt-12 max-w-7xl mx-auto">
                    <Navbar />
                </div>
            </div>
            <Outlet />
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;