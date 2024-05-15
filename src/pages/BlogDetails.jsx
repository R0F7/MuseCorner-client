import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";
// import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const BlogDetails = () => {
    // const blog = useLoaderData();

    const {id} = useParams()
    const { user } = useAuth()
    // const [comments, setComments] = useState([]);
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    const { isPending1, isError1, error1, refetch1, data: blog = {} } = useQuery({
        queryKey: ['detailsBlog'],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/details/${id}`);
            return res.data;
        },
    })

    const { _id, title, image, short_description, long_description, category, createdAt, updatedAt, user_image, user_name, user_email } = blog;
    const dateString = createdAt;
    const date = new Date(dateString).toLocaleString();
    const updateDateString = updatedAt;
    const updateDate = new Date(updateDateString).toLocaleString();

    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_API_URL}/comments/${_id}`)
    //         .then((res) => {
    //             // console.log(res.data);
    //             setComments(res.data)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [_id, count])

    // const axiosSecure = useAxiosSecure()

    const { isPending, isError, error, refetch, data: comments } = useQuery({
        queryKey: ['comments'],
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/comments/${_id}`);
            return res.data;
        },
        retry:10
    })

    useEffect(() => {
        refetch(); 
    }, [refetch, count, blog]);

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

    const handleComment = (e) => {
        e.preventDefault()
        const form = e.target;
        const comment = form.comment.value;
        const user_name = user?.displayName;
        const user_image = user?.photoURL;
        const blogId = _id;
        const commentInfo = { blogId, comment, user_name, user_image }

        if (!user) {
            toast.error('Login please')
            return navigate('/login')
        }

        if (user_email === user.email) {
            return toast.error('cannot comment your own blog')
        }

        axios.post(`${import.meta.env.VITE_API_URL}/comments`, commentInfo)
            .then(() => {
                // console.log(res);
                toast.success('comment send successful')
                setCount(count + 1)
                form.reset();
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="md:w-[80%] mx-auto mb-10">
            <div >
                <div className="relative ">
                    <img className="w-full h-64 rounded-lg md:h-[280px] lg:h-[450px]" src={image} alt="" />

                    <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src={user_image} alt="" />
                        <div className="mx-4">
                            <h1 className="text-sm md:text-base dark:text-gray-200 text-[#14456A] font-semibold">{user_name}</h1>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{date}</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center mt-6 gap-2.5">
                    <h1 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">{title}</h1>
                    <h1 className="font-semibold text-sm text-gray-500 dark:text-white border-l-2 border-[#14456A] pl-2.5">{category}</h1>
                </div>
                <hr className="w-40 my-4 text-blue-500" />
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{short_description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 md:indent-8 lg:w-[80%]">{long_description}</p>
            </div>

            <div className="mt-5 md:mt-10">
                {
                    user?.email !== user_email ?
                        <form onSubmit={handleComment}>
                            <h4 className="text-[#14456A] border-b inline-block pb-1.5 border-[#14456A] font-semibold">comments section</h4>
                            <textarea name="comment" id="" cols="0" rows="2" className="w-full md:w-[492px] block px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="write your comment" required></textarea>
                            <button type="submit" className="bg-[#14456A] text-white w-full md:w-[492px] h-[40px] flex justify-center items-center text-2xl mt-2.5 rounded-sm hover:bg-white hover:text-[#14456A] hover:border hover:duration-700 focus:outline-none focus:bg-[#14456A] focus:text-white">
                                <IoIosSend />
                            </button>
                        </form>
                        :
                        <div>
                            <h4 className="text-[red] text-sm font-medium">can not comment on own blog</h4>
                            {
                                updatedAt ? <p><span className="text-[#14456A] font-semibold">Last Update:</span> {updateDate}</p> : ''
                            }
                            <Link to={`/update/${_id}`} className="bg-[#14456A] text-white text-sm md:w-[492px] h-[33px] md:h-[40px] flex justify-center items-center md:text-lg font-bold mt-2.5 rounded-sm hover:bg-white hover:text-[#14456A] hover:border hover:duration-1000 focus:outline-none focus:bg-[#14456A] focus:text-white">
                                update
                            </Link>
                        </div>
                }
                <div className="mt-5">
                    <h4 className="text-[#14456A] font-semibold">comments:</h4>
                    {
                        comments.map((com) => <Comment key={com._id} com={com}></Comment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;