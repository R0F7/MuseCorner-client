import useAuth from "../hooks/useAuth";
// import CBD from '../assets/circular-background-dots-image_347235-removebg-preview.png'
import svg from '../../public/image/vecteezy_studying-and-learning-online-concept_1270244.svg'

const Banner = () => {
    const { user } = useAuth();

    return (
        <div className="lg:flex mt-5 mb-14">
            <div className="flex items-center md:justify-center w-full md:px-6  md:pt-8 lg:py-8 lg:h-[32rem] lg:w-1/2 relative">
                <div className="max-w-xl">
                    <div className="w-12 h-3 bg-[#14456A] mb-2"></div>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-[80%]">Explore the World Through <span className="text-[#14456A] dark:text-blue-400">Our Lens</span></h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base ">Welcome to MuseCorner, where inspiration knows no bounds. Discover captivating narratives across Travel, Food, Art, Technology, Self-Improvement, and Health. Join us on a journey of exploration, learning, and inspiration.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">

                        <div className="flex items-center bg-gray-100 md:w-[490px] justify-between px-3 py-3 rounded-full shadow-lg">
                            <div className="ml-3 md:ml-6">
                                <h6 className="text-xs md:text-sm">Your email address</h6>
                                <h4 className="font-bold text-sm md:text-lg">{user?.email}</h4>
                            </div>
                            <a href='#recent-blog' className="bg-[#14456A] text-white py-2.5 px-3 md:py-3.5 md:px-6 rounded-full font-bold">Get Started</a>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute -left-[230px] -bottom-[34px] -rotate-12">
                    <img className="w-[200px]" src={CBD} alt="" />
                </div> */}
            </div>

            <div className="w-full h-64 md:h-[340px] lg:w-1/2 lg:h-auto">
                <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${svg})` }}>
                    <div className="w-full h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;