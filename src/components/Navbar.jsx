import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Tooltip } from 'flowbite-react';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/add-blog'>Add Blog</Link></li>
        <li><Link to='/all-blogs'>All blogs</Link></li>
        <li><Link to='/featured-blogs'>Featured Blogs</Link></li>
        <li><Link to='/wishlist'>Wishlist</Link></li>
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
                <p className="text-xl">Blog Website</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {user && <div tabIndex={0} role="button" className="avatar space-x-2">
                    <div className="w-12 rounded-full">
                        <Tooltip className='text-nowrap' content={user?.displayName} placement="bottom" animation='duration-1000'>
                            <img alt="Tailwind CSS Navbar component" referrerPolicy='no-referrer' src={user?.photoURL} />
                        </Tooltip>
                    </div>
                    <button className='btn' onClick={handleLogOut}>Logout</button>
                </div>}
                {!user && <div className='space-x-2'>
                    <Link to='/login' className="btn">Login</Link>
                    <Link to='/register' className="btn">Register</Link>
                </div>}
            </div>
        </div>
    );
};

export default Navbar;
