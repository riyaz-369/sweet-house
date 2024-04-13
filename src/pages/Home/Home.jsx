import Banner from "./Banner";
import EstateSection from "./EstateSection";
import OurClientSay from "./OurClientSay";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {

    return (
        <div className="font-lato">
            <div className="mt-12 bg-base-200 bg-opacity-35">
                <div className="max-w-7xl mx-auto">
                    <Banner />
                </div>
            </div>
            <div className="mt-20 max-w-7xl mx-auto">
                <EstateSection />
            </div>
            <div className="mt-20 max-w-7xl mx-auto">
                <WhyChooseUs />
            </div>
            <div className="my-16 mb-24 max-w-7xl mx-auto">
                <OurClientSay />
            </div>
        </div>
    );
};

export default Home;