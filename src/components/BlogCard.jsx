/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const BlogCard = ({ blog }) => {
    const { user } = useAuth();
    const { _id, title, image, short_description, category, createdAt } = blog;
    const dateString = createdAt;
    const date = new Date(dateString).toLocaleString();
    // console.log(date);

    const handleWishList = () => {
        const blogId = _id;
        const user_email = user?.email;
        const wishlistInfo = { blogId, user_email }
        // console.log(wishlistInfo);
        axios.post(`${import.meta.env.VITE_API_URL}/wishlist`, wishlistInfo)
            .then((res) => {
                // console.log(res.data.insertedId);
                
                if (res.data.insertedId) {
                    toast.success('Blog added in wishlist successful')
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
                    <h1 className="mx-3 text-lg font-semibold text-white">{category}</h1>
                </div>

                <div className="px-6 py-4">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                    <p className="py-2 text-gray-700 dark:text-gray-400 min-h-[65px] w-[85%]">{short_description}</p>
                    <div className="flex gap-4 pt-3 pb-2">
                        <button onClick={handleWishList} className="btn btn-sm">Wishlist</button>
                        <Link to={`/details/${_id}`} className="btn btn-sm">Details</Link>
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;