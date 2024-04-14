import { useLoaderData, useParams } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BiArea } from "react-icons/bi";
import { MdOutlineSell } from "react-icons/md";
import { FaBath, FaBed } from "react-icons/fa";
import { GiFloorHatch, GiGreenhouse, GiSpookyHouse } from "react-icons/gi";
import { GrElevator } from "react-icons/gr";
import { SiLevelsdotfyi } from "react-icons/si";
import LeafletMap from "./LeafletMap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

const EstateDetails = () => {

    useEffect(() => {
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            offset: 200,
        })
    }, [])

    const houses = useLoaderData()
    const { id } = useParams()
    const idToInt = parseInt(id);
    const house = houses.find(house => house.id === idToInt)
    const { image, image1, image2, image3, image4, estate_title, segment_name, description, price, status, area, location, facilities, features } = house;

    return (
        <div data-aos="fade-up" className="card rounded-md max-w-7xl mx-auto p-4 my-12 shadow-md">
            <Helmet>
                <title>{estate_title}</title>
                <meta name="description" content={description} />
            </Helmet>
            <img className='rounded-md h-[550px]' src={image} alt={house.estate_title} />
            <div data-aos="fade-left" className="relative flex gap-3 py-6 overflow-x-auto">
                <img className="h-48 aspect-video rounded-md object-cover object-center dark:bg-gray-500" src={image1} alt={estate_title} />
                <img className="h-48 aspect-video rounded-md object-cover object-center dark:bg-gray-500" src={image2} alt={estate_title} />
                <img className="h-48 aspect-video rounded-md object-cover object-center dark:bg-gray-500" src={image3} alt={estate_title} />
                <img className="h-48 aspect-video rounded-md object-cover object-center dark:bg-gray-500" src={image4} alt={estate_title} />
            </div>
            <div data-aos="fade-up" className="card-body">
                <h2 className="card-title text-3xl">{estate_title}</h2>
                <p className="opacity-90">{description}</p>
                <div className="mt-8 space-y-2 border-t-2 border-dashed">
                    <div className="flex items-center justify-between mt-10">
                        <div className="space-y-3">
                            <h3 className="text-3xl font-medium mb-5">Property Information</h3>
                            <p className="font-bold mt-12 flex items-center gap-1">
                                <GiGreenhouse />
                                Segment:
                                <span className="font-normal ml-1 opacity-90">
                                    {segment_name}
                                </span>
                            </p>
                            <p className="font-bold flex items-center gap-1">
                                <SlLocationPin />
                                Location:
                                <span className="font-normal ml-1 opacity-90">
                                    {location}
                                </span>
                            </p>
                            <div>
                                <p className="font-bold flex items-center gap-1">
                                    <GiSpookyHouse />
                                    Facilities:
                                </p>
                                <ul className="list-disc ml-10">
                                    <li>{facilities[0]}</li>
                                    <li>{facilities[1]}</li>
                                    <li>{facilities[2]}</li>
                                </ul>
                            </div>
                            <p className="font-bold flex items-center gap-1">
                                <BiArea />
                                Area:
                                <span className="font-normal opacity-90">
                                    {area}
                                </span>
                            </p>
                            <p className="font-semibold flex items-center gap-1">
                                <MdOutlineSell />
                                For
                                <span
                                    className="font-normal opacity-90">
                                    {status}
                                </span>
                            </p>
                            <div>
                                <h3 className="font-bold text-2xl">{price}</h3>
                            </div>

                        </div>
                        {/* react leaflet map */}
                        <LeafletMap house={house} />
                    </div>
                </div>

                {/* features */}
                <h3 className="text-3xl font-medium mt-10 mb-5">Features</h3>
                <div className="stats stats-vertical lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title font-semibold flex justify-center text-2xl"><FaBed /></div>
                        <div className="stat-title font-semibold text-center text-2xl">Bedrooms</div>
                        <div className="stat-value text-3xl text-center font-semibold">{features?.bedrooms}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title font-semibold flex justify-center text-2xl"><FaBath /></div>
                        <div className="stat-title font-semibold text-center text-2xl">Bathrooms</div>
                        <div className="stat-value text-3xl text-center font-semibold">{features?.bathrooms}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title font-semibold flex justify-center text-2xl"><GiFloorHatch /></div>
                        <div className="stat-title font-semibold text-center text-2xl">Floors</div>
                        <div className="stat-value text-3xl text-center font-semibold">{features?.floors}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title font-semibold flex justify-center text-2xl"><GrElevator /></div>
                        <div className="stat-title font-semibold text-center text-2xl">Elevators in Building</div>
                        <div className="stat-value text-3xl text-center font-semibold">{features?.elevators_in_building ? <p>Yes</p> : <p>No</p>}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title font-semibold flex justify-center text-2xl"><SiLevelsdotfyi /></div>
                        <div className="stat-title font-semibold text-center text-2xl">Floor Level</div>
                        <div className="stat-value text-3xl text-center font-semibold">{features?.floor_level}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;