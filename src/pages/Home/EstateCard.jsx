import PropTypes from 'prop-types';
import { SlLocationPin } from "react-icons/sl";
import { BiArea } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { CgMoreR } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { GiGreenhouse } from 'react-icons/gi';

const EstateCard = ({ house }) => {

    const { image, estate_title, description, price, status, area, location, segment_name, id } = house;
    const shortDes = description => {
        const splitTo = description.split(". ");
        return splitTo.slice(0, 1).join(". ") + ".";
    }

    return (
            <div data-aos="fade-up">
                <div className="card card-compact h-[690px] mt-8 rounded-md shadow-md hover:shadow-lg hover:shadow-gray-400 transition-all hover:scale-105">
                    <img className='rounded-t-md w-[400px] h-[256px]' src={image} alt={house.estate_title} />
                    <div className="card-body">
                        <h2 className="card-title text-[22px]">{estate_title}</h2>
                        <p className="text-base opacity-90">{shortDes(description)}</p>
                        <div className="my-3 space-y-2 border-t-2 border-dashed">
                            <p className="font-bold text-base mt-4 flex items-center gap-1">
                                <GiGreenhouse />
                                Segment:
                                <span className="font-normal ml-1 opacity-90">
                                    {segment_name}
                                </span>
                            </p>
                            <p className="font-bold text-base flex items-center gap-1">
                                <SlLocationPin />
                                Location:
                                <span className="font-normal ml-1 opacity-90">
                                    {location}
                                </span>
                            </p>
                            <div className='flex'>
                                <p className="font-bold text-base flex items-center gap-1">
                                    <BiArea />
                                    Area:
                                    <span className="font-normal opacity-90">
                                        {area}
                                    </span>
                                </p>
                                <p className="font-semibold text-base border-l-2 border-gray-400 pl-3 flex items-center gap-1">
                                    <MdOutlineSell />
                                    For
                                    <span
                                        className="font-normal opacity-90">
                                        {status}
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="mb-2">
                            <h3 className="font-bold text-xl">{price}</h3>
                        </div>
                        <Link to={`/house-details/${id}`}>
                            <button className="btn bg-blue-600 hover:bg-blue-500 rounded-md w-full text-white hover:shadow-md border-none">
                                <CgMoreR />
                                View Property
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
    );
};

EstateCard.propTypes = {
    house: PropTypes.object,
}

export default EstateCard;