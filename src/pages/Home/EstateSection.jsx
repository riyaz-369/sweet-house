import EstateCard from "./EstateCard";


const EstateSection = () => {
    return (
        <>
            <div className="text-center space-y-2">
                <h2 className="text-4xl font-semibold">Discover Your Perfect Home</h2>
                <p className="opacity-80">Step into the world of residential retreats, where tranquility meets functionality in the comfort of your own space. <br /> Browse through a myriad of options, from quaint suburban homes to luxurious urban dwellings, each offering a haven tailored to your lifestyle. <br /> Find solace and inspiration as you embark on the journey to find your perfect residential sanctuary.</p>
            </div>

            <div>
                <EstateCard></EstateCard>
            </div>
        </>
    );
};

export default EstateSection;