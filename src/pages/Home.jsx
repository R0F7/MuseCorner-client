import Banner from "../components/Banner";
import CommunitySpotlight from "../components/CommunitySpotlight";
import LearnMore from "../components/LearnMore";
import NewsLetter from "../components/NewsLetter";
import RecentBlog from "../components/RecentBlog";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentBlog></RecentBlog>
            <CommunitySpotlight></CommunitySpotlight>
            <LearnMore></LearnMore>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;