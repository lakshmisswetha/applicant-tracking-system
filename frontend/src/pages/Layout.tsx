import { FaPowerOff } from "react-icons/fa6";
import { Outlet, useNavigate } from "react-router-dom";

// import { useState } from "react";

const Layout = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("role");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div className="flex flex-col min-h-screen bg-muted ">
            <div className="flex justify-between px-4 py-2 w-full fixed top-0 bg-muted z-20">
                <div className="text-cyan-900 font-extrabold italic text-3xl">hireX</div>

                <div
                    onClick={handleLogout}
                    className="flex text-lg justify-center items-center cursor-pointer hover:text-cyan-600"
                >
                    <FaPowerOff className="text-xl" />
                </div>
            </div>
            <div className="body  flex-1 pt-[50px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
