import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Navbar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div>
            <div className="mt-8 max-w-7xl mx-auto">
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;