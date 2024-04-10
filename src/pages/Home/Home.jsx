import Banner from "./Banner";
import EstateSection from "./EstateSection";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";


const Home = () => {
    const houses = useLoaderData()

    return (
        <div className="font-lato">
            <div className="mt-8 max-w-7xl mx-auto">
                <Navbar />
            </div>
            <div className="mt-8 bg-base-200 p-8">
                <div className="max-w-7xl mx-auto">
                    <Banner />
                </div>
            </div>
            <div className="my-16 mt-20 max-w-7xl mx-auto">
                <EstateSection houses={houses} />
            </div>
        </div>
    );
};

export default Home;