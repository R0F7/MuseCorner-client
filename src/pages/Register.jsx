import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useState } from "react";


const Register = () => {
    const navigate = useNavigate();
    const { user, setUser, createUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const [toggle, setToggle] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.table(name, photo, email, password);

        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters')
        }else if(!/^(?=.*[A-Z]).+$/.test(password)){
            return toast.error('Password must contain at least one capital letter')
        }else if (!/[!@#$%^&*()_+}{":;'?/>.<,]/.test(password)) {
            return toast.error('Password must contain at least one special character')
        }else if(!/^(?=.*\d)/.test(password)){
            return toast.error('Password must contain at least one numeric character')
        }

        try {
            await createUser(email, password)
            await updateUserProfile(name, photo)
            setUser({ ...user, photoURL: photo, displayName: name })
            toast.success('Registration Successful')
            navigate(location?.state ? location.state : '/')
        } catch (error) {
            // console.log(error);
            toast.error(error.message.split('/')[1].replace(').', ''))
        }
    }

    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-[calc(100vh-350px)] px-6 mx-auto">
                    <form onSubmit={handleSubmit} className="w-full max-w-md">

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input type="text" name="name" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" required/>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                </svg>
                            </span>

                            <input type="text" name="photo" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Profile Photo" required/>
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" name="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required/>
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type={toggle ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
                            <span onClick={() => setToggle(!toggle)} className="text-xl absolute right-4 top-4">{toggle ? <IoEyeOutline /> : <IoEyeOffOutline />}</span>

                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#14456A] rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Register
                            </button>

                            <div className="mt-6 text-center ">
                                <Link to='/login' className="text-sm text-[#14456A] hover:underline dark:text-blue-400">
                                    Already have an account?Login
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;