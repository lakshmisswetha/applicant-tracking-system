import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import BasicDetails from "./Components/BasicDetails";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import { IApplication } from "@/types/application";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { applyJob } from "./jobDetails.api";
import { applicationSchema } from "@/schemas/application.schema";

interface JobApplicationSheetContentProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function JobApplicationSheetContent({ setIsOpen }: JobApplicationSheetContentProps) {
    const [activeTab, setActiveTab] = useState("basic-details");
    const { jobId } = useParams();

    const [formData, setFormData] = useState<IApplication>({
        jobId: Number(jobId),
        fullName: "",
        phone: "",
        location: "",
        dob: undefined,
        nationality: "",
        languages: "",
        skills: "",
        education: [],
        experience: [],
    });

    const { mutate: applyJobMutation, isPending } = useMutation({
        mutationFn: (application: IApplication) => applyJob(application),
        onSuccess: () => {
            console.log("Job application submitted");
            setIsOpen(false);
        },
        onError: (err: any) => {
            console.error("Error: ", err.message);
        },
    });

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
    };
    const handleSaveAndContinue = () => {
        const tabOrder = ["basic-details", "skills", "experience", "education"];
        const currentIndex = tabOrder.indexOf(activeTab);

        if (currentIndex < tabOrder.length - 1) {
            setActiveTab(tabOrder[currentIndex + 1]);
        } else {
            const parsed = applicationSchema.safeParse(formData);
            if (!parsed.success) {
                const errorMessages = parsed.error.issues.map((e) => e.message).join("\n");
                alert(errorMessages);
                return;
            }
            applyJobMutation(formData as IApplication);
        }
    };

    return (
        <>
            <SheetHeader>
                <SheetTitle>Application Form</SheetTitle>
                <SheetDescription className="sr-only">Fill in the form to apply for this job.</SheetDescription>
            </SheetHeader>
            <Tabs
                defaultValue="job-overview"
                value={activeTab}
                onValueChange={handleTabChange}
                className=" flex flex-col flex-1 mt-4 bg-green-300x"
            >
                <TabsList className="flex justify-around p-2 h-auto">
                    <TabsTrigger value="basic-details" className=" py-2 w-full">
                        Basic Details
                    </TabsTrigger>
                    <TabsTrigger value="skills" className="py-2 w-full">
                        Skills
                    </TabsTrigger>
                    <TabsTrigger value="experience" className="py-2 w-full">
                        Experience
                    </TabsTrigger>
                    <TabsTrigger value="education" className="py-2 w-full">
                        Education
                    </TabsTrigger>
                </TabsList>
                <div className="h-full overflow-y-auto relative scrollbar-hide">
                    <div className="absolute w-full   mt-4 p-2 ">
                        <BasicDetails formData={formData} setFormData={setFormData} />
                        <Skills formData={formData} setFormData={setFormData} />
                        <Experience formData={formData} setFormData={setFormData} />
                        <Education formData={formData} setFormData={setFormData} />
                    </div>
                </div>
            </Tabs>

            <SheetFooter className="mt-2">
                <Button className="w-[135px]" onClick={handleSaveAndContinue}>
                    {isPending ? "Submitting..." : activeTab === "education" ? "Submit" : "Save and Continue"}
                </Button>
            </SheetFooter>
        </>
    );
}
export function JobApplicationSheet() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button className="bg-cyan-900 hover:bg-cyan-700">Apply now</Button>
            </SheetTrigger>
            <SheetContent className="min-w-[710px] flex flex-col">
                <JobApplicationSheetContent setIsOpen={setIsOpen} />
            </SheetContent>
        </Sheet>
    );
}
