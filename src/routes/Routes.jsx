import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import EstateDetails from "../pages/EstateDetails/EstateDetails";
import Register from "../pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("../houses.json")
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
                path: "/profile",
                element: <PrivetRoute><Profile /></PrivetRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/house-details/:id",
                element: <PrivetRoute><EstateDetails /></PrivetRoute>,
                loader: () => fetch("../houses.json")
            }
        ]
    }
]);

export default router;