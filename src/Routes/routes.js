import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/Home/About/About";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";

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
        ]
    }
])