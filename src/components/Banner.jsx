import useAuth from "../hooks/useAuth";
// import CBD from '../assets/circular-background-dots-image_347235-removebg-preview.png'
import svg from '../assets/vecteezy_studying-and-learning-online-concept_1270244.svg'

const Banner = () => {
    const { user } = useAuth();

    return (
        <div className="lg:flex mt-5 mb-14">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2 relative">
                <div className="max-w-xl z-50">
                    <div className="w-12 h-3 bg-[#14456A] mb-2"></div>
                    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl lg:w-[80%]">Explore the World Through <span className="text-[#14456A] dark:text-blue-400">Our Lens</span></h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base ">Welcome to MuseCorner, where inspiration knows no bounds. Discover captivating narratives across Travel, Food, Art, Technology, Self-Improvement, and Health. Join us on a journey of exploration, learning, and inspiration.</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                        {/* <a href="#recent-blog" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Read Our Latest Stories</a>
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a> */}
                        <div className="flex items-center bg-gray-100 w-[490px] justify-between px-3 py-3 rounded-full shadow-lg">
                            <div className=" ml-6">
                                <h6 className="text-sm">Your email address</h6>
                                <h4 className="font-bold text-lg">{user?.email}</h4>
                            </div>
                            <a href='#recent-blog' className="bg-[#14456A] text-white py-3.5 px-6 rounded-full font-bold">Get Started</a>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute -left-[230px] -bottom-[34px] -rotate-12">
                    <img className="w-[200px]" src={CBD} alt="" />
                </div> */}
            </div>

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className="w-full h-full bg-cover" style={{ backgroundImage: `url(${svg})` }}>
                    <div className="w-full h-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;