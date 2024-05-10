// "use client";

// import { Avatar, Button, Navbar } from "flowbite-react";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

// const Header = () => {
//     const { user } = useAuth()

//     return (
//         <Navbar fluid rounded className="my-5 border-b">
//             <Navbar.Brand href="https://flowbite-react.com">
//                 <img src="" className="mr-3 h-6 sm:h-9" alt="" />
//                 <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
//             </Navbar.Brand>
//             <div className="flex ">
//                 <div className='space-x-3 flex'>
//                     <Link to='/login'>
//                         <Button gradientMonochrome="cyan">Login</Button>
//                     </Link>
//                     <Link to='/register'>
//                         <Button gradientDuoTone="cyanToBlue">Register</Button>
//                     </Link>
//                 </div>
//                 <Avatar className="hidden" alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
//                 <Navbar.Toggle />
//             </div>
//             <Navbar.Collapse>
//                 <NavLink to='/'>Home</NavLink>
//                 <NavLink to='/add-blog'>Add Blog</NavLink>
//                 <NavLink to='/all-blogs'>All blogs</NavLink>
//                 <NavLink to='/featured-blogs'>Featured Blogs</NavLink>
//                 <NavLink to='/wishlist'>Wishlist</NavLink>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default Header;