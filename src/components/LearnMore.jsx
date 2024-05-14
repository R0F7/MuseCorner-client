import learnMore from '../../public/image/learn more 1.jpg';

const LearnMore = () => {
    return (
        <div className='flex items-center my-10'>
            <div className='w-1/2'>
                <h1 className='text-3xl font-bold text-[#14456A] mb-1'>Explore the World of MuseCorner</h1>
                <h4 className='text-lg font-bold  text-[#487ABF] mb-3'> Explore, <span className='text-[#14456A]'>Share</span>, and Grow</h4>
                <p className='text-[#79848F] '>Dive into the captivating world of MuseCorner, your ultimate destination for thought-provoking content spanning across six enriching categories: Travel, Food, Art, Technology, Health, and Self-Improvement. <span className='mt-2 w-[80%]'>Discover a curated selection of top 10 blogs, meticulously chosen based on their captivating long descriptions, providing you with a glimpse into the depth and breadth of our content. Engage with our community by posting, updating, and reading blogs, and share your thoughts through comments.</span><span className='mt-2'>Experience the security and convenience of our protected routes, empowering you to add and remove blogs from your personal wishlist. Embrace inspiration, knowledge, and connection with MuseCorner.</span></p>
            </div>
            <div className='w-1/2'>
                <img src={learnMore} alt="" />
            </div>

        </div>
    );
};

export default LearnMore;