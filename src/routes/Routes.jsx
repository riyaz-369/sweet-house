import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("./houses.json")
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);

export default router;