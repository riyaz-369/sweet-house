import EstateCard from "./EstateCard";
import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";

const EstateSection = () => {

    const houses = useLoaderData();

    return (
        <>
            <div className="text-center space-y-1 mb-8">
                <div className="flex justify-center">
                    <h2 data-aos="fade-up" className="text-xl md:text-2xl lg:text-4xl font-medium border-b-2 pb-2 border-blue-400 lg:w-1/2">Discover Your Perfect Home</h2>
                </div>
                <p data-aos="fade-up" className="opacity-80 text-xs md:text-sm lg:text-base">Step into the world of residential retreats, where tranquility meets functionality in the comfort of your own space. <br /> Browse through a myriad of options, from quaint suburban homes to luxurious urban dwellings, each offering a haven tailored to your lifestyle. <br /> Find solace and inspiration as you embark on the journey to find your perfect residential sanctuary.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    houses.map(house => <EstateCard key={house.id} house={house}></EstateCard>)
                }
            </div>
        </>
    );
};

EstateSection.propTypes = {
    houses: PropTypes.array,
}

export default EstateSection;