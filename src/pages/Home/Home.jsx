import Banner from "./Banner";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto font-lato">
            <Navbar />
            <div className="bg-base-200 rounded-3xl mt-8">
                <Banner />
            </div>
        </div>
    );
};

export default Home;