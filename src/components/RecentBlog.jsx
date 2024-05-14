// import axios from "axios";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import useAxiosSecure from "../hooks/useAxiosSecure";

const RecentBlog = () => {
    // const [blogs, setBlogs] = useState([])

    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/blog`,)
    //         .then(data => setBlogs(data.data.slice(0,6)))
    // }, [])

    const axiosSecure = useAxiosSecure()
    const { isPending, isError, error, data: blogs } = useQuery({
        queryKey: ['recentBlog'],
        queryFn: async () => {
            const res = await axiosSecure(`/blog`);
            return res.data;
        }
    })

    if (isPending) {
        return <h3>pending</h3>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    return (
        <div >
            <div className="text-center mt-10" id="recent-blog">
                <h4 className="text-4xl">Dive into Our Newest Blog Posts</h4>
                <p className="w-[65%] mx-auto mt-3">Stay up-to-date with our latest adventures! Explore diverse destinations, discover hidden gems, and get insider tips for your next journey. Start reading now for travel inspiration!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {
                    blogs?.slice(0, 6).map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;