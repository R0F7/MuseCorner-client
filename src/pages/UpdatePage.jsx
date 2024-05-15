// import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import updateBG from '../../public/image/formbg2.jpg';

const UpdatePage = () => {
    const axiosSecure = useAxiosSecure()
    const [blog, setBlog] = useState({})
    const { _id, title, image, short_description, long_description, category } = blog;
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const email = user?.email;

    // useEffect(() => {
    //     // axiosSecure.get(`/update/${id}`)
    //     axiosSecure.get(`/update?email=${email}&&id=${id}`)
    //         .then((res) => {
    //             if (!res.data) {
    //                 return navigate('/')
    //             }
    //             setBlog(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, [axiosSecure, id, email,navigate])

    const { isPending, isError, error, refetch, data } = useQuery({
        queryKey: ['UpdatePageData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/update?email=${email}&&id=${id}`);
            return res.data;
        }
    })

    useEffect(() => {
        refetch();
        if (data) {
            setBlog(data)
        }
    }, [axiosSecure, refetch, data, email, id]);

    if (!data) {
        return navigate('/')
    }

    if (isPending) {
        return <h3>pending</h3>
    }

    if (isError) {
        return <span>{error.message}</span>
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const image = form.photo.value;
        const title = form.title.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const updatedAt = new Date().toISOString();
        // const user_name = user?.displayName;
        // const user_image = user?.photoURL;
        // const user_email = user?.email;
        const blogInfo = { image, title, category, short_description, long_description, updatedAt };

        // axios.put(`${import.meta.env.VITE_API_URL}/blog/${_id}`, blogInfo)
        axiosSecure.put(`${import.meta.env.VITE_API_URL}/blog/${_id}`, blogInfo)
            .then((res) => {
                // console.log(res.data.modifiedCount);
                if (res.data.modifiedCount) {
                    toast.success('Update Info Successful')
                    // location.reload(true)
                }
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message)
            })

    }

    return (
        <div className="flex w-full min-h-[calc(100vh-350px)] items-center my-6 lg:my-12 bg-gray-50 md:p-10 lg:py-16 rounded-xl"
        style={{ backgroundImage: `url('${updateBG}')`, backgroundSize: 'cover', backgroundPosition: 'top', }}
        >
            <section className="w-full lg:w-[70%] p-4 md:p-6 mx-auto glass-container rounded-md shadow-md dark:bg-gray-800 ">
                <h2 className="text-lg font-semibold text-white capitalize dark:text-white">Update Blog Info</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:gap-y-4 mt-4 sm:grid-cols-6">
                        <div className="md:col-span-3">
                            <label className="text-white text-sm font-medium dark:text-gray-200" htmlFor="username">Image url</label>
                            <input id="username" type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={image} required />
                        </div>

                        <div className="md:col-span-3">
                            <label className="text-white text-sm font-medium dark:text-gray-200" htmlFor="emailAddress">Title</label>
                            <input id="emailAddress" type="text" name="title" className="block w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={title} required />
                        </div>

                        <div className="md:col-span-2">
                            <label className="text-white text-sm font-medium dark:text-gray-200" htmlFor="password">Category</label>
                            <select name="category" id="" defaultValue='' className="block w-full px-4 py-2 mt-2 text-white bg-[#14456A] border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                                <option value="" disabled>Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Art">Art</option>
                                <option value="Technology">Technology</option>
                                <option value="Self-Improvement">Self-Improvement</option>
                                <option value="Health">Health</option>
                            </select>
                        </div>

                        <div className="md:col-span-4">
                            <label className="text-white text-sm font-medium dark:text-gray-200" htmlFor="passwordConfirmation">Short Description</label>
                            <input id="passwordConfirmation" type="text" name="short_description" className="block w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={short_description} required />
                        </div>
                    </div>
                    <div className="md:col-span-6 mt-6">
                        <label className="text-white text-sm font-medium dark:text-gray-200" htmlFor="passwordConfirmation">Long Description</label>
                        <textarea name="long_description" id="" cols="10" rows="7" className="block w-full px-4 py-2 mt-2 text-white bg-transparent border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={long_description} required></textarea>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform border-2 border-[#14456A] bg-[#14456A] rounded-md hover:bg-transparent hover:border-2 focus:outline-none focus:bg-gray-600">Update</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdatePage;