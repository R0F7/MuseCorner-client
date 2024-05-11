import { useLoaderData, useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";

const BlogDetails = () => {
    const blog = useLoaderData();
    const { user } = useAuth()
    const [comments, setComments] = useState([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const { _id, title, image, short_description, long_description, category, createdAt, user_image, user_name, user_email } = blog;
    const dateString = createdAt;
    const date = new Date(dateString).toLocaleString();

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/comments/${_id}`)
            .then((res) => {
                // console.log(res.data);
                setComments(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [_id, count])

    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const user_name = user?.displayName;
        const user_image = user?.photoURL;
        const blogId = _id;
        const commentInfo = { blogId, comment, user_name, user_image }

        if (user_email === user.email) {
            return toast.error('cannot comment your own blog')
        }

        axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentInfo)
            .then((res) => {
                console.log(res);
                toast.success('comment send successful')
                setCount(count + 1)
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const handleNavigate = () => {
        navigate('/update')
    }

    return (
        <div className="w-[80%] mx-auto my-12">
            <div >
                <div className="relative ">
                    <img className="w-full h-64 rounded-lg lg:h-[400px]" src={image} alt="" />

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src={user_image} alt="" />
                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">{user_name}</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-6 gap-3">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                    <h1 className="font-semibold text-gray-500 dark:text-white border-l-2 border-[#14456A] pl-3">{category}</h1>
                </div>
                <hr className="w-32 my-4 text-blue-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{short_description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 indent-8 w-[80%]">{long_description}</p>
            </div>

            <div className="mt-10">
                <h4>comments section</h4>
                {
                    user?.email !== user_email ?
                        <form onSubmit={handleComment}>
                            <textarea name="comment" id="" cols="60" rows="2" className="block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="write your comment" required></textarea>
                            <button type="submit" className="bg-[#14456A] text-white w-[492px] h-[40px] flex justify-center items-center text-2xl mt-2.5 rounded-sm hover:bg-white hover:text-[#14456A] hover:border hover:duration-1000">
                                <IoIosSend />
                            </button>
                        </form>
                        : <button onClick={handleNavigate} className="bg-[#14456A] text-white w-[492px] h-[40px] flex justify-center items-center text-lg font-bold mt-2.5 rounded-sm hover:bg-white hover:text-[#14456A] hover:border hover:duration-1000">
                            update
                        </button>
                }
                <div className="mt-16">
                    {
                        comments.map((com) => <Comment key={com._id} com={com}></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;