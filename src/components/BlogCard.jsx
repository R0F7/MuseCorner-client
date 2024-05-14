/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../hooks/useAxiosSecure";

const BlogCard = ({ blog }) => {
    const { user } = useAuth();
    const { _id, title, image, short_description, category, createdAt } = blog;
    const dateString = createdAt;
    const date = new Date(dateString).toLocaleString();

    const email = user?.email;
    const [count, setCount] = useState(0);
    const [wishlist, setWishlist] = useState([])
    // console.log(wishlist);

    const navigate = useNavigate();
    // const axiosSecure = useAxiosSecure()

    // useEffect(() => {
    //     if (!email) {
    //        return email 
    //     }
    //     axios.get(`${import.meta.env.VITE_API_URL}/wishlist/${email}`, { withCredentials: true })
    //     // axiosSecure.get(`/wishlist/${email}`)
    //     .then((res) => {
    //         setWishlist(res.data)
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }, [email, count])

    const { isPending, isError, error, refetch, data } = useQuery({
        queryKey: ['wishlistCheck'],
        queryFn: async () => {
            if (!email) {
                return []
            }
            const res = await axios(`${import.meta.env.VITE_API_URL}/wishlist/${email}`, { withCredentials: true });
            return res.data;
        }
    })

    useEffect(() => {
        refetch();
        setWishlist(data)
    }, [refetch, count, data]);

    if (isPending) {
        return <h3>pending</h3>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    const handleWishList = () => {
        const blogId = _id;
        const user_email = user?.email;
        const wishlistInfo = { blogId, user_email }
        // console.log(wishlistInfo);

        const exist = wishlist.find(item => item.blogId === blogId);
        // console.log(exist);

        if (!user) {
            return navigate('/login')
        }

        if (exist) {
            return toast.error('already added')
        }

        axios.post(`${import.meta.env.VITE_API_URL}/wishlist`, wishlistInfo)
            .then((res) => {
                // console.log(res.data.insertedId);

                if (res.data.insertedId) {
                    toast.success('Blog added in wishlist successful')
                    setCount(count + 1)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="w-full overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={image} alt="avatar" />

                <div className="flex items-center px-6 py-3 bg-gray-900">
                    <h1 className="md:mx-3 text-lg font-semibold text-white">{category}</h1>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                    <p className="py-2 text-gray-700 dark:text-gray-400 min-h-[100px] md:min-h-[65px]">{short_description}</p>
                    <div className="flex gap-4 pt-3 pb-2">
                        <button onClick={handleWishList} className="btn btn-sm">Wishlist</button>
                        <Link to={`/details/${_id}`} className="btn btn-sm">Details</Link>
                        {/* <p>{date}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;