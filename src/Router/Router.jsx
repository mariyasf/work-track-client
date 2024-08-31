import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Employee from "../Pages/Employee/Employee";
// import CryptoCard from "../Components/CryptoCard";
import SideNavbar from "../Components/SideNavbar/SideNavbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children:
            [
                {
                    path: "/",
                    element: <Home />,
                },

            ]
    },
    {
        path: "/employee",
        element: <Employee />,
        children:
            [
                {
                    path: "/employee",
                    element: <SideNavbar />,
                },

            ]

    },
]);

export default router;