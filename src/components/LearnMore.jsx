import learnMore from '../../public/image/learn more 1.jpg';

const LearnMore = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row items-center lg:my-10'>
            <div className='lg:w-1/2'>
                <h1 className='text-2xl md:text-3xl font-bold text-[#14456A] mb-1'>Explore the World of MuseCorner</h1>
                <h4 className='text-base md:text-lg font-bold  text-[#487ABF] mb-3'> Explore, <span className='text-[#14456A]'>Share</span>, and Grow</h4>
                <p className='text-[#79848F] text-sm md:text-base '>Dive into the captivating world of MuseCorner, your ultimate destination for thought-provoking content spanning across six enriching categories: Travel, Food, Art, Technology, Health, and Self-Improvement. </p>
                <div className='my-2 text-[#79848F] text-sm md:text-base md:w-[90%] lg:w-[85%] indent-4'>
                    <span>Discover a curated selection of top 10 blogs, meticulously chosen based on their captivating long descriptions, providing you with a glimpse into the depth and breadth of our content. Engage with our community by posting, updating, and reading blogs, and share your thoughts through comments.</span>
                </div>
                <div className=' text-[#79848F] text-sm md:text-base'>
                    <span className=''>Experience the security and convenience of our protected routes, empowering you to add and remove blogs from your personal wishlist. Embrace inspiration, knowledge, and connection with MuseCorner.</span>
                </div>
            </div>
            <div className='lg:w-1/2'>
                <img className='md:h-[400px] lg:h-auto' src={learnMore} alt="" />
            </div>

        </div>
    );
};

export default LearnMore;