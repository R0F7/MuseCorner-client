import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AllBlogs from "../pages/AllBlogs";
import BlogDetails from "../pages/BlogDetails";
import AddBlog from "../pages/AddBlog";
// import axios from "axios";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/all-blogs',
                element: <AllBlogs></AllBlogs>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-blogs`),
            },
            {
                path: '/details/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/details/${params.id}`)
            },
            {
                path:"/add-blog",
                element:<AddBlog></AddBlog>
            }
        ]
    }
])

export default routes

