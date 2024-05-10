import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        children:[
            {
                index:true,
                element:<Home></Home>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default routes