import CPL from '../../public/image/Project_70-02.jpg'
import { FaArrowTrendUp } from "react-icons/fa6";


const CommunitySpotlight = () => {
    return (
        <div className='flex items-center my-20'>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold text-[#14456A] mb-3'>Community Spotlight</h1>
                <div className='space-y-2'>
                    <div className='text-[#79848F] flex items-center gap-2'>
                        <span><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Travel: </span>
                            <span> Reader-submitted travel stories or photos from their adventures.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex items-center gap-2'>
                        <span><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Food: </span>
                            <span>Sharing recipes from your readers' kitchens or hosting guest chef spotlights.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex gap-2'>
                        <span className='mt-1.5'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Health: </span>
                            <span>Featuring success stories or testimonials from readers who have implemented health tips from your blog.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex items-center gap-2'>
                        <span><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Technology: </span>
                            <span>Inviting guest bloggers to share their expertise or insights on tech-related topics.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex items-center gap-2'>
                        <span><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Art: </span>
                            <span>Showcasing artwork submitted by aspiring artists or featuring guest artist interviews.</span>
                        </div>
                    </div>
                    <div className='text-[#79848F] flex gap-2'>
                        <span className='mt-1.5'><FaArrowTrendUp></FaArrowTrendUp></span>
                        <div>
                            <span className="font-bold text-[#14456A]">Self-Improvement: </span>
                            <span>Highlighting personal development journeys or inspirational stories shared by your audience.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <img src={CPL} alt="" />
            </div>
        </div>
    );
};

export default CommunitySpotlight;