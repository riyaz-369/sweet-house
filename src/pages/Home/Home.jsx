import { Helmet } from "react-helmet";
import Banner from "./Banner";
import EstateSection from "./EstateSection";
import OurClientSay from "./OurClientSay";
import WhyChooseUs from "./WhyChooseUs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            offset: 200,
        })
    }, [])

    return (
        <div className="font-lato">
            <Helmet>
                <title>Home - Sweet House</title>
            </Helmet>
            <div className="mt-6 md:mt-12 bg-base-200 bg-opacity-35">
                <div data-aos="fade-up"
                    className="max-w-7xl mx-auto">
                    <Banner />
                </div>
            </div>
            <div className="mt-16 md:mt-20 max-w-7xl mx-auto">
                <EstateSection />
            </div>
            <div className="mt-20 max-w-7xl mx-auto">
                <WhyChooseUs />
            </div>
            <div className="my-16 md:mb-24 max-w-7xl mx-auto">
                <OurClientSay />
            </div>
        </div>
    );
};

export default Home;