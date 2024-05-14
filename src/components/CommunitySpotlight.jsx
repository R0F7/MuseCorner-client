import CPL from '../../public/image/Project_70-02.jpg'
import { FaArrowTrendUp } from "react-icons/fa6";


const CommunitySpotlight = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center gap-6 lg:gap-0 py-10 lg:my-20'>
            <div className='lg:w-1/2'>
                <h1 className='text-2xl md:text-3xl font-bold text-[#14456A] mb-3 md:mb-4'>Community Spotlight</h1>
                <div className='space-y-2 ml-1 md:ml-4'>
                    <div className='text-[#79848F] flex lg:items-center gap-2'>
                        <span className='mt-1.5 lg:mt-0'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Travel: </span>
                            <span className='text-sm md:text-base'> Reader-submitted travel stories or photos from their adventures.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex lg:items-center gap-2'>
                        <span className='mt-1.5 lg:mt-0'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Food: </span>
                            <span className='text-sm md:text-base'>Sharing recipes from your readers' kitchens or hosting guest chef spotlights.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex gap-2'>
                        <span className='mt-1.5'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Health: </span>
                            <span className='text-sm md:text-base'>Featuring success stories or testimonials from readers who have implemented health tips from your blog.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex lg:items-center gap-2'>
                        <span className='mt-1.5 lg:mt-0'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Technology: </span>
                            <span className='text-sm md:text-base'>Inviting guest bloggers to share their expertise or insights on tech-related topics.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex  lg:items-center gap-2'>
                        <span className='mt-1.5 lg:mt-0'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Art: </span>
                            <span className='text-sm md:text-base'>Showcasing artwork submitted by aspiring artists or featuring guest artist interviews.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex gap-2'>
                        <span className='mt-1.5'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Self-Improvement: </span>
                            <span className='text-sm md:text-base'>Highlighting personal development journeys or inspirational stories shared by your audience.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className='md:h-[400px] lg:h-auto ' src={CPL} alt="" />
            </div>
        </div>
    );
};

export default CommunitySpotlight;