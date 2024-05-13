import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import WishlistCard from "../components/WishlistCard";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Wishlist = () => {
    const blogs = useLoaderData();
    const [wishlistInfo, setWishlistInfo] = useState([]);
    const { user } = useAuth();
    const [wishlistBlogs, setWishlistBlogs] = useState([]);
    const [count, setCount] = useState(0)
    const email = user?.email;
    const  axiosSecure  = useAxiosSecure();

    useEffect(() => {
        // axios.get(`${import.meta.env.VITE_API_URL}/wishlist/${email}`, { withCredentials: true })
        axiosSecure.get(`/wishlist/${email}`)
            .then((res) => {
                // console.log(res.data);
                setWishlistInfo(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [email, count, axiosSecure])

    useEffect(() => {
        const filteredBlogs = blogs.filter(blog => wishlistInfo.some(wishlist => wishlist.blogId === blog._id));
        setWishlistBlogs(filteredBlogs);
    }, [blogs, wishlistInfo]);

    const handleRemove = (_id) => {
        console.log(_id);
        axios.delete(`${import.meta.env.VITE_API_URL}/wishlist-remove?email=${email}&&id=${_id}`)
            .then((res) => {
                console.log(res);
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