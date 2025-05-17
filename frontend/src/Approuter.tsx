import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";

const appRouter = createBrowserRouter([
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/jobs",
                element: <Jobs />,
            },
            {
                path: "/jobdetails",
                element: <JobDetails />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={appRouter} />;
};

export default AppRouter;
