import PropTypes from 'prop-types';

const EstateCard = ({ house }) => {

    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = house;
    const shortDes = description => {
        const splitTo = description.split(". ")
        return splitTo.slice(0, 1).join(". ") + ".";
    }

    return (
        <div className="card card-compact rounded-md bg-base-100 shadow-md hover:shadow-xl">
            <img className='rounded-t-md' src={image} alt={house.estate_title} />
            <div className="card-body">
                <h2 className="card-title text-[22px]">{estate_title}</h2>
                <p className="text-base opacity-90">{shortDes(description)}</p>
                <div className="my-3 space-y-2 border-t-2 border-dashed">
                    <p className="font-bold text-base mt-4">Location:
                        <span className="font-normal ml-2 opacity-90">
                            {location}
                        </span>
                    </p>
                    <div className='flex'>
                        <p className="font-bold text-base">Area: <span className="font-normal opacity-90">{area}</span></p>
                        <p className="font-semibold text-base border-l-2 border-gray-400 pl-3">For <span className="font-normal opacity-90">{status}</span></p>
                    </div>
                </div>
                <div className="card-actions flex justify-between">
                    <h3 className="font-bold text-xl">{price}</h3>
                </div>
                <button className="btn btn-neutral rounded-md hover:text-white">View Property</button>
            </div>
        </div>
    );
};

EstateCard.propTypes = {
    house: PropTypes.object,
}

export default EstateCard;