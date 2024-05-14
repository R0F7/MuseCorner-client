import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import WishlistCard from "../components/WishlistCard";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Wishlist = () => {
    // const blogs = useLoaderData();
    const [wishlistInfo, setWishlistInfo] = useState([]);
    const { user } = useAuth();
    const [wishlistBlogs, setWishlistBlogs] = useState([]);
    const [count, setCount] = useState(0)
    const email = user?.email;
    const axiosSecure = useAxiosSecure();

    // useEffect(() => {
    //     // axios.get(`${import.meta.env.VITE_API_URL}/wishlist/${email}`, { withCredentials: true })
    //     axiosSecure.get(`/wishlist/${email}`)
    //         .then((res) => {
    //             // console.log(res.data);
    //             setWishlistInfo(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [email, count, axiosSecure])

    const { isPending1, isError1, error1, refetch1, data: blogs = [] } = useQuery({
        queryKey: ['LoadBlogDataForWishlist'],
        queryFn: async () => {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs`);
            return res.data;
        }
    })

    const { isPending, isError, error, refetch, data } = useQuery({
        queryKey: ['setWishlist'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlist/${email}`);
            return res.data;
        }
    })

    useEffect(() => {
        refetch();
        if (data) {
            setWishlistInfo(data)
        }
    }, [count, data, refetch]);

    useEffect(() => {
        const filteredBlogs = blogs.filter(blog => wishlistInfo.some(wishlist => wishlist.blogId === blog._id));
        setWishlistBlogs(filteredBlogs);
    }, [blogs, wishlistInfo]);

    if (isPending) {
        return <h3>pending</h3>
    }

    if (isError) {
        return <span>{error.message}</span>
    }
    if (isPending1) {
        return <h3>pending</h3>
    }

    if (isError1) {
        return <span>{error1.message}</span>
    }

    // useEffect(() => {
    //     const filteredBlogs = blogs.filter(blog => wishlistInfo.some(wishlist => wishlist.blogId === blog._id));
    //     setWishlistBlogs(filteredBlogs);
    // }, [blogs, wishlistInfo]);

    const handleRemove = (_id) => {
        // console.log(_id);
        axios.delete(`${import.meta.env.VITE_API_URL}/wishlist-remove?email=${email}&&id=${_id}`)
            .then((res) => {
                // console.log(res);
                if (res.data.deletedCount > 0) {
                    setCount(count + 1)
                    toast.success('wishlist remove item successful')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-[calc(100vh-350px)]">

            <div className="grid grid-cols-3 gap-6 min-h-[calc(100vh-350px)]">
                {
                    wishlistBlogs.map(blog => <WishlistCard key={blog._id} blog={blog} handleRemove={handleRemove}></WishlistCard>)
                }
            </div>
        </div>
    );
};

export default Wishlist;