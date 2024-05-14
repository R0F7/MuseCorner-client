import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Tooltip } from 'flowbite-react';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const navItems = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'border border-[#14456A] border-y-0 bg-transparent py-1.5 px-3 text-[#14456A] font-semibold rounded-lg' : 'text-[rgba(20,69,106,.8)] font-medium'}>Home</NavLink></li>
        <li><NavLink to='/add-blog' className={({ isActive }) => isActive ? 'border border-[#14456A] border-y-0 bg-transparent py-1.5 px-3 text-[#14456A] font-semibold rounded-lg' : 'text-[rgba(20,69,106,.8)] font-medium'}>Add Blog</NavLink></li>
        <li><NavLink to='/all-blogs' className={({ isActive }) => isActive ? 'border border-[#14456A] border-y-0 bg-transparent py-1.5 px-3 text-[#14456A] font-semibold rounded-lg' : 'text-[rgba(20,69,106,.8)] font-medium'}>All blogs</NavLink></li>
        <li><NavLink to='/featured-blogs' className={({ isActive }) => isActive ? 'border border-[#14456A] border-y-0 bg-transparent py-1.5 px-3 text-[#14456A] font-semibold rounded-lg' : 'text-[rgba(20,69,106,.8)] font-medium'}>Featured Blogs</NavLink></li>
        <li><NavLink to='/wishlist' className={({ isActive }) => isActive ? 'border border-[#14456A] border-y-0 bg-transparent py-1.5 px-3 text-[#14456A] font-semibold rounded-lg' : 'text-[rgba(20,69,106,.8)] font-medium'}>Wishlist</NavLink></li>
    </>

    const handleLogOut = async () => {
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="navbar bg-base-100 my-4 border-b px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <p className="text-xl font-bold text-[rgb(20,69,106)]">MuseCorner</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex space-x-6 px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end mr-4 md:mr-0">
                {user && <div tabIndex={0} role="button" className="avatar space-x-2">
                    <div className="w-12 rounded-full">
                        <Tooltip className='text-nowrap' content={user?.displayName} placement="bottom" animation='duration-1000'>
                            <img alt="Tailwind CSS Navbar component" referrerPolicy='no-referrer' src={user?.photoURL} />
                        </Tooltip>
                    </div>
                    <button className='btn' onClick={handleLogOut}>Logout</button>
                </div>}
                {!user && <div className='space-x-2'>
                    <Link to='/login' className="btn text-[#14456A] bg-transparent hover:bg-[#14456A] duration-1000 hover:text-white">Login</Link>
                    <Link to='/register' className="btn bg-[#14456A] text-white hover:bg-transparent duration-1000 hover:text-[#14456A]">Register</Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;
