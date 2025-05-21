import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuKebab } from "react-icons/ci";
// import JobSheet from "../Job-Sheet";
const EditJob: React.FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <CiMenuKebab className="font-bold" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Edit Job</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default EditJob;
