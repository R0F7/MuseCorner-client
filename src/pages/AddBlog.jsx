// import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaNfcSymbol } from "react-icons/fa6";
// import formBG from '../../public/image/form bg.jpg';

const AddBlog = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target;
        const image = form.photo.value;
        const title = form.title.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const createdAt = new Date().toISOString();
        const user_name = user?.displayName;
        const user_image = user?.photoURL;
        const user_email = user?.email;
        const blogInfo = { image, title, category, short_description, long_description, createdAt, user_name, user_image, user_email };

        axiosSecure.post(`/blog`, blogInfo)
            .then(() => {
                // console.log(res.data);
                toast.success('Submit Info Successful')
                form.reset()
            })
            .catch(error => {
                // console.log(error);
                toast.error(error.message)
            })

    }

    return (
        <div className="flex w-full min-h-[calc(100vh-350px)] items-center my-12 ">
            <section className="w-full lg:w-[70%]  mx-auto md:bg-gray-100 rounded-md md:shadow-md dark:bg-gray-800 "
                // style={{ backgroundImage: `url('${formBG}')`, backgroundSize: 'cover', backgroundPosition: 'top', }}
            >
                <div className="bg- py-3 md:p-6 ">
                    <h2 className="text-xl font-bold text-[#14456A] capitalize dark:text-white">Add Blog Info</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-2.5 md:gap-y-4 mt-4 sm:grid-cols-6">
                            <div className="md:col-span-3">
                                <label className="text-[#14456A] dark:text-gray-200 font-medium flex items-center gap-1" htmlFor="username"><span className='text-[8px]'>
                                    <FaNfcSymbol />
                                </span>Image url</label>
                                <input id="username" type="text" name="photo" className="block w-full px-4 py-2 mt-2 text-gray-700 shadow bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Image url" required />
                            </div>

                            <div className="md:col-span-3">
                                <label className="text-[#14456A] dark:text-gray-200 font-medium flex items-center gap-1" htmlFor="emailAddress"><span className='text-[8px]'>
                                    <FaNfcSymbol />
                                </span>Title</label>
                                <input id="emailAddress" type="text" name="title" className="block w-full px-4 py-2 mt-2 text-gray-700 shadow bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" placeholder="Blog Title" required />
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-[#14456A] dark:text-gray-200 font-medium flex items-center gap-1" htmlFor="category"><span className='text-[8px]'>
                                    <FaNfcSymbol />
                                </span>Category</label>
                                <select name="category" id="category" defaultValue='' className="block w-full px-4 py-2 mt-2 text-gray-700  bg-white shadow border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required>
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
                                <label className="text-[#14456A] dark:text-gray-200 font-medium flex items-center gap-1" htmlFor="passwordConfirmation"><span className='text-[8px]'>
                                    <FaNfcSymbol />
                                </span>Short Description</label>
                                <input id="passwordConfirmation" type="text" name="short_description" className="block w-full px-4 py-2 mt-2 text-gray-700 shadow bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required />
                            </div>
                        </div>
                        <div className="col-span-6 mt-2.5 md:mt-6">
                            <label className="text-[#14456A] dark:text-gray-200 font-medium flex items-center gap-1" htmlFor="passwordConfirmation"><span className='text-[8px]'>
                                <FaNfcSymbol />
                            </span>Long Description</label>
                            <textarea name="long_description" id="" cols="10" rows="7" className="block w-full px-4 py-2 mt-2 text-gray-700 shadow bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" required></textarea>
                        </div>

                        <div className="flex justify-end mt-6">
                            <button className="w-full md:w-1/2 px-8 h-10 leading-5 text-white transition-colors duration-300 transform bg-[#14456A] rounded-md font-medium hover:bg-white hover:text-[#14456A] hover:border hover:font-bold focus:outline-none focus:bg-[#14456A] focus:text-white ">submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddBlog;