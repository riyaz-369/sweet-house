import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectCreative } from 'swiper/modules';
import 'swiper/css/effect-creative';
import "swiper/css";
import "swiper/css/bundle";
import beautifulHouse from "../../assets/beautiful.jpeg"
import family from "../../assets/family.jpeg"
import studentHouse from "../../assets/student.jpeg"
import { CgMoreR } from "react-icons/cg";

const Banner = () => {

    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 2500
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation, EffectCreative]}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}>
                {/* slide 1 */}
                <SwiperSlide>
                    <div className="rounded-md bg-no-repeat bg-cover w-full h-auto md:h-96 lg:h-[550px]" style={{ backgroundImage: `url(${beautifulHouse})` }}>
                        <div className="rounded-md bg-gradient-to-r from-[#030712] to-60% h-full">
                            <div>
                                <div className="p-12 md:p-20 lg:p-32 ">
                                    <div>
                                        <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white">Beautiful Home Made <br /> For You</h1>
                                        <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-[8px] md:text-xs lg:text-sm opacity-80 drop-shadow-2xl">
                                            Welcome to your bespoke haven, where elegance seamlessly blends with comfort in every detail. From the carefully crafted architecture to the serene ambiance, this sanctuary is tailored just for you. Step into a world of luxury and tranquility, where every element reflects your unique style and taste.</p>
                                        <button
                                            className="btn btn-outline btn-sm lg:btn-md text-white text-xs md:text-sm lg:text-base hover:bg-white hover:text-black rounded-md md:px-6">
                                            <CgMoreR />
                                            Visit More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* slide 2 */}
                <SwiperSlide>
                    <div className="rounded-md bg-no-repeat bg-cover h-auto md:h-96 lg:h-[550px]" style={{ backgroundImage: `url(${family})` }}>
                        <div className="rounded-md bg-gradient-to-r from-[#030712] to-60% h-full">
                            <div>
                                <div className="p-12 md:p-20 lg:p-32 ">
                                    <div>
                                        <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white">Modern Single Family <br /> House </h1>
                                        <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-[8px] md:text-xs lg:text-sm opacity-80">Embrace sleek design and spacious living in this stunning modern single-family house. With clean lines, abundant natural light, and thoughtful amenities, it is the perfect blend of style and functionality for contemporary living. Welcome to your oasis of modern comfort.</p>
                                        <button
                                            className="btn btn-outline btn-sm lg:btn-md text-white text-xs md:text-sm lg:text-base hover:bg-white hover:text-black rounded-md md:px-6">
                                            <CgMoreR />
                                            Visit More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <div className="rounded-md bg-no-repeat bg-cover h-auto md:h-96 lg:h-[550px]" style={{ backgroundImage: `url(${studentHouse})` }}>
                        <div className="rounded-md bg-gradient-to-r from-[#030712] to-60% h-full">
                            <div>
                                <div className="p-12 md:p-20 lg:p-32 ">
                                    <div>
                                        <h1 className="mb-2 lg:mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white">Your Ideal House for <br /> University Life</h1>
                                        <p className="mb-3 lg:mb-5 text-white max-w-xs md:max-w-sm lg:max-w-md text-[8px] md:text-xs lg:text-sm opacity-80">Welcome to your student sanctuary, designed with your academic journey and social life in mind. This vibrant house offers a perfect balance of comfort and functionality, with ample space for studying, relaxing, and making memories with friends. Embrace the excitement of university life in your new home away from home.</p>
                                        <button
                                            className="btn btn-outline btn-sm lg:btn-md text-white text-xs md:text-sm lg:text-base hover:bg-white hover:text-black rounded-md md:px-6">
                                            <CgMoreR />
                                            Visit More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;