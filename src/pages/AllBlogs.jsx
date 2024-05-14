import { useLoaderData } from "react-router-dom";
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
                form.reset()
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
            <div className="text-center mt-5 mb-10">
                <h4 className="text-4xl">Explore Our Blog Archives</h4>
                <p className="w-[65%] mx-auto mt-3">Uncover a wealth of knowledge and inspiration! Delve into our extensive blog archives, spanning various categories including travel, lifestyle, wellness, and more. Find something for every interest and passion. Start exploring now</p>
            </div>
            <div className="flex items-center gap-6 justify-center">
                <div className="flex items-center gap-2">
                    <h6> filtered by category:</h6>
                    <div>
                        <select name="categories" onChange={handleCategories} id="" defaultValue=''>
                            <option value="" disabled>Select Category</option>
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
                        <input type="text" name="search" className="w-[450px]" placeholder="Search by Title..." />
                        <input className="bg-[#14456A] py-2.5 text-white px-8" type="submit" value="SEARCH" />
                    </form>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;