import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";

const UpdatePage = () => {
    const axiosSecure = useAxiosSecure()
    const [blog, setBlog] = useState({})
    const { _id, title, image, short_description, long_description, category } = blog;
    const { id } = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();

    const email = user?.email;

    useEffect(() => {
        // axiosSecure.get(`/update/${id}`)
        axiosSecure.get(`/update?email=${email}&&id=${id}`)
            .then((res) => {
                if (!res.data) {
                    return navigate('/')
                }
                setBlog(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [axiosSecure, id, email,navigate])

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

        axios.put(`${import.meta.env.VITE_API_URL}/blog/${_id}`, blogInfo)
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
        <div className="flex w-full min-h-[calc(100vh-350px)] items-center my-12 bg-gray-50 py-16 rounded-xl">
            <section className="w-[70%] p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
                <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Update Blog Info</h2>

                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 mt-4 sm:grid-cols-6">
                        <div className="col-span-3">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="username">Image url</label>
                            <input id="username" type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={image} required />
                        </div>

                        <div className="col-span-3">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">Title</label>
                            <input id="emailAddress" type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={title} required />
                        </div>

                        <div className="col-span-2">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="password">category</label>
                            <select name="category" id="" defaultValue={category} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
                                <option value="" disabled>Select Category</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Art">Art</option>
                                <option value="Technology">Technology</option>
                                <option value="Self-Improvement">Self-Improvement</option>
                                <option value="Health">Health</option>
                            </select>
                        </div>

                        <div className="col-span-4">
                            <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">short description</label>
                            <input id="passwordConfirmation" type="text" name="short_description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={short_description} required />
                        </div>
                    </div>
                    <div className="col-span-6 mt-6">
                        <label className="text-gray-700 dark:text-gray-200" htmlFor="passwordConfirmation">long description</label>
                        <textarea name="long_description" id="" cols="10" rows="7" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={long_description} required></textarea>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Update</button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdatePage;