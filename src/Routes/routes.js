import { createBrowserRouter } from "react-router-dom";
import AddItem from "../layout/DashBoard/AddItem/AddItem";
import AllSellers from "../layout/DashBoard/AllSellers/AllSellers";
import AllUsers from "../layout/DashBoard/AllUsers/AllUsers";
import DashBoard from "../layout/DashBoard/DashBoard";
import MyOrders from "../layout/DashBoard/MyOrders/MyOrders";
import MyProducts from "../layout/DashBoard/MyProducts/MyProducts";
import Main from "../layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoriesID from "../Pages/CategoryID/CategoriesID";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/signup',
                element: <SignUp />,
            },
            {
                path: '/blogs',
                element: <Blogs />,
            },
            {
                path: '/categories/:name',
                loader: ({ params }) => fetch(`https://assignment-12-server-six.vercel.app/categories/${params.name}`),
                element: <PrivateRoute><CategoriesID /></PrivateRoute>,
            },

        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders /></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddItem /></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts /></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSellers /></AdminRoute>
            },
        ]
    }
])