import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import JobOverview from "./Components/JobOverview";
import Pipeline from "./Components/Pipeline";

interface JobSheetContentProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const JobSheetContent: React.FC<JobSheetContentProps> = ({ setIsOpen }) => {
    useEffect(() => {
        return () => {
            console.log("unmounteddd");
        };
    }, []);
    const [isPublishMode, setIsPublishMode] = useState(false);
    const [activeTab, setActiveTab] = useState("job-overview");

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
        setIsPublishMode(newTab === "pipeline");
    };

    const handleSaveAndContinue = () => {
        if (activeTab === "job-overview") {
            handleTabChange("pipeline");
        } else if (activeTab === "pipeline") {
            console.log("Job Published");
            setIsOpen(false);
        }
    };
    //

    return (
        <>
            <SheetHeader>
                <SheetTitle>Post a Job</SheetTitle>
                <SheetDescription className="sr-only">For creating job</SheetDescription>
            </SheetHeader>
            <Tabs defaultValue="job-overview" value={activeTab} onValueChange={handleTabChange} className=" flex flex-col flex-1 mt-4 bg-green-300x">
                <TabsList className="flex justify-around p-2 h-auto">
                    <TabsTrigger value="job-overview" className=" py-2 w-full">
                        Job overview
                    </TabsTrigger>
                    <TabsTrigger value="pipeline" className="py-2 w-full">
                        Pipeline
                    </TabsTrigger>
                </TabsList>
                <div className="h-full overflow-y-auto relative scrollbar-hide">
                    <div className="absolute w-full   mt-4 p-2 bg-blue-500x">
                        <JobOverview />
                        <Pipeline />
                    </div>
                </div>
            </Tabs>

            <SheetFooter className="mt-2">
                <SheetClose>
                    <Button className="w-[135px]">Save Draft</Button>
                </SheetClose>
                <Button className="w-[135px]" onClick={handleSaveAndContinue}>
                    {isPublishMode ? "Publish" : "Continue"}
                </Button>
            </SheetFooter>
        </>
    );
};

const JobSheet: React.FC = () => {
    useEffect(() => {
        console.log("jobsheet moint");
        return () => {
            console.log("jobsheet unmount");
        };
    }, []);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <Button className="p-4">+ Post a Job</Button>
            </SheetTrigger>
            <SheetContent className="min-w-[710px] flex flex-col">
                <JobSheetContent setIsOpen={setIsOpen} />
            </SheetContent>
        </Sheet>
    );
};

export default JobSheet;
