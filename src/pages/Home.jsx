import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import RecentBlog from "../components/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;