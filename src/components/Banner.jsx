
const Banner = () => {
    return (
        <div
            className="min-h-[570px] w-full text-white text-center flex justify-center items-center"
            style={{ backgroundImage: `url('https://i.ibb.co/c2S6Pyd/blog-banner.png')` }}
        >
            <div>
                <h1 className="text-4xl font-bold">Explore the World Through Our Lens</h1>
                <h4 className="text-xl font-semibold mt-2 mb-4">Your Gateway to Adventure, Inspiration, and Discovery</h4>
                <p className="w-[80%] mx-auto"> Welcome to [Blog Name], your ultimate destination for immersive travel stories, insightful guides, and captivating photography. Embark on a journey of exploration and discovery as we uncover hidden gems, share insider tips, and inspire your wanderlust with tales from around the globe. Whether you're a seasoned traveler seeking your next adventure or an armchair explorer dreaming of far-off lands, our blog invites you to experience the beauty and diversity of our world through captivating narratives and stunning visuals.</p>
                <button className="btn mt-6">Read Our Latest Stories</button>
            </div>
        </div>
    );
};

export default Banner;