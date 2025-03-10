import { FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";

import { useState } from "react";

const Layout = () => {
    const [sheetConfig, setSheetConfig] = useState({
        isOpen: false,
        title: "Post a Job",
    });
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex justify-between p-2 w-full fixed top-0 bg-white z-20">
                <div className="text-zinc-500 font-extrabold italic text-3xl">hireX</div>

                <div className="flex text-lg justify-center items-center">
                    <FaUserCircle className="text-2xl" />
                </div>
            </div>
            <div className="body flex-1 pt-[50px]">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
