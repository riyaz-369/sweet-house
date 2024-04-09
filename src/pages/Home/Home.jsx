import Banner from "./Banner";
import EstateSection from "./EstateSection";
import Navbar from "./Navbar";


const Home = () => {
    return (
        <div className="font-lato">
            <div className="mt-8 max-w-7xl mx-auto">
                <Navbar />
            </div>
            <div className="mt-8 bg-orange-50 p-8">
                <div className="max-w-7xl mx-auto">
                    <Banner />
                </div>
            </div>
            <div className="my-16 mt-20">
                <EstateSection />
            </div>
        </div>
    );
};

export default Home;