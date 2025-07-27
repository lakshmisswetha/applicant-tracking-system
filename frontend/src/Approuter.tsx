import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import Jobs from "./pages/Jobs";
import { Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import JobDetailsWrapper from "./components/modules/Job-Details/JobDetailsWrapper";

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
        element: <Navigate to="/login" replace />,
    },
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        path: "/jobs",
                        element: <Jobs />,
                    },
                    {
                        path: "/jobdetails/:jobId",
                        element: <JobDetailsWrapper />,
                    },
                ],
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={appRouter} />;
};

export default AppRouter;
