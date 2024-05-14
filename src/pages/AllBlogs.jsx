// import { useLoaderData } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const AllBlogs = () => {
    // const allBlogs = useLoaderData();
    const { isPending, isError, error, refetch, data = [] } = useQuery({
        queryKey: ['AllBlogs'],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/all-blogs`);
            return res.data;
        }
    })

    useEffect(() => {
        refetch();
        setBlogs(data)
    }, [refetch, data]);


    const [blogs, setBlogs] = useState(data)
    // console.log(blogs);

    const handleCategories = event => {
        const val = event.target.value;

        axios.get(`${import.meta.env.VITE_API_URL}/categories?category=${val}`)
            .then(res => {
                setBlogs(res.data)
            })
    }

    const handleSearch = e => {
        e.preventDefault()
        const form = e.target;
        const searchValue = form.search.value;
        // console.log(searchValue);
        axios.get(`${import.meta.env.VITE_API_URL}/search?title=${searchValue}`)
            .then(res => {
                setBlogs(res.data)
                // form.reset()
            })
    }

    if (isPending) {
        return <h3>pending</h3>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    return (
        <div>
            <div className="text-center mt-5 mb-6 md:mb-10">
                <h4 className="text-2xl md:text-3xl font-semibold text-[#14456A]">Explore Our Blog Archives</h4>
                <p className="lg:w-[65%] text-sm md:text-base mx-auto mt-1.5 md:mt-2.5">Uncover a wealth of knowledge and inspiration! Delve into our extensive blog archives, spanning various categories including travel, lifestyle, wellness, and more. Find something for every interest and passion. Start exploring now</p>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 justify-center bg-gray-50 lg:w-[66%] py-5 rounded mx-auto shadow">
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <h6 className="text-[#14456A] text-lg font-medium lg:font-semibold"> Filtered by category:</h6>
                    <div className="w-[320px] md:w-auto">
                        <select name="categories" onChange={handleCategories} id="" defaultValue='' className="border-[#14456A] w-full border bg-transparent rounded-lg focus:ring-[#14456A] focus:border-0 focus:outline-none focus:ring focus:ring-opacity-70">
                            <option value="" disabled >Select Category</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Art">Art</option>
                            <option value="Technology">Technology</option>
                            <option value="Self-Improvement">Self-Improvement</option>
                            <option value="Health">Health</option>
                        </select>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSearch}>
                        <input type="text" name="search" className="lg:w-[450px] rounded-l-md bg-transparent text-[#14456A] placeholder:text-[#14456A] placeholder:font-medium focus:ring-[#14456A] focus:border-0 focus:outline-none focus:ring focus:ring-opacity-60" placeholder="Search by Title..." />
                        <input className="bg-[#14456A] py-2.5 text-white px-6 lg:px-8 rounded-r-lg" type="submit" value="SEARCH" />
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10">
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;