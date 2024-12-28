import { Button } from "@/components/ui/button";
import ToggleThemeBtn from "@/components/ui/ToggleThemeBtn";
import { Input } from "@/components/ui/input";
import { FaUserCircle } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex flex-col">
            <div className="header  flex justify-between items-center p-3 bg-muted">
                Logo
                <Input className="w-[450px] bg-muted-foreground/10" />
                <Button className="p-4">+ Post a Job</Button>
                <div className="flex text-lg">
                    <ToggleThemeBtn />
                    <FaUserCircle className="ml-3 text-xl" />
                </div>
            </div>
            <div className="body px-[180px] h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
