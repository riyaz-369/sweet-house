import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div>
            <div className="bg-base-200 bg-opacity-35">
                <div className="mt-12 max-w-7xl mx-auto">
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