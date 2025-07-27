import React from "react";
import { Button } from "@/components/ui/button";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import JobOverview from "./Components/JobOverview";
import Pipeline from "./Components/Pipeline";
import { Job } from "@/types/job";
import { createJob } from "./createJob.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserRole } from "@/hooks/useUserRole";
import { jobDraft, jobSchema } from "@/schemas/job.schema";
import { editJob } from "../Job-Details/jobDetails.api";

interface JobSheetContentProps {
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    jobToEdit?: Job;
}
interface JobSheetProps {
    jobToEdit?: Job;
}
const JobSheetContent: React.FC<JobSheetContentProps> = ({ setIsOpen, jobToEdit }) => {
    const [isPublishMode, setIsPublishMode] = useState(false);
    const [activeTab, setActiveTab] = useState("job-overview");

    const queryClient = useQueryClient();

    const createJobMutation = useMutation({
        mutationFn: createJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["jobs"] });
            console.log("Job Published");
            setIsOpen(false);
        },
        onError: (error) => {
            console.error("Error Publishing Job: ", error);
        },
    });
    const updateJobMutation = useMutation({
        mutationFn: editJob,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["job", jobToEdit?.jobId] });

            console.log("Job Updated", jobToEdit?.jobId);
            setIsOpen(false);
        },
        onError: (error) => {
            console.error("Error Updating Job: ", error);
        },
    });

    const handleTabChange = (newTab: string) => {
        setActiveTab(newTab);
        setIsPublishMode(newTab === "pipeline");
    };

    const handleSaveAndContinue = async () => {
        if (activeTab === "job-overview") {
            handleTabChange("pipeline");
        } else if (activeTab === "pipeline") {
            const parsed = jobSchema.safeParse(jobData);
            if (!parsed.success) {
                const errorMessages = parsed.error.issues.map((e) => e.message).join("\n");
                alert(errorMessages);
                return;
            }
            const jobWithStatus = { ...jobData, status: "open" };
            if (jobToEdit) {
                updateJobMutation.mutate(jobWithStatus);
            } else {
                createJobMutation.mutate(jobWithStatus);
            }
        }
    };

    const handleSaveDraft = async () => {
        const parsed = jobDraft.safeParse(jobData);
        if (!parsed.success) {
            const errorMessages = parsed.error.issues.map((e) => e.message).join("\n");
            alert(errorMessages);
            return;
        }
        const jobWithStatus = { ...jobData, status: "draft" };
        const confirm = window.confirm(
            "Saving it as a draft will hide it from applicants. Are you sure you want to proceed?"
        );
        if (!confirm) return;
        if (jobToEdit) {
            updateJobMutation.mutate(jobWithStatus);
        } else {
            createJobMutation.mutate(jobWithStatus);
        }
    };

    const [jobData, setJobData] = useState<Job>(
        jobToEdit ?? {
            jobTitle: "",
            department: "",
            location: "",
            openings: 0,
            experience: "",
            employeeType: "",
            workType: "",
            qualificationRequired: "",
            salary: "",
            jobDescription: "",
            skillsRequired: "",
            companyName: "",
        }
    );

    return (
        <>
            <SheetHeader>
                <SheetTitle>Post a Job</SheetTitle>
                <SheetDescription className="sr-only">For creating job</SheetDescription>
            </SheetHeader>
            <Tabs
                defaultValue="job-overview"
                value={activeTab}
                onValueChange={handleTabChange}
                className=" flex flex-col flex-1 mt-4 bg-green-300x"
            >
                <TabsList className="flex justify-around p-2 h-auto">
                    <TabsTrigger value="job-overview" className=" py-2 w-full">
                        Job overview
                    </TabsTrigger>
                    <TabsTrigger value="pipeline" className="py-2 w-full">
                        Pipeline
                    </TabsTrigger>
                </TabsList>
                <div className="h-full overflow-y-auto relative scrollbar-hide">
                    <div className="absolute w-full   mt-4 p-2 ">
                        <JobOverview jobData={jobData} setJobData={setJobData} />
                        <Pipeline />
                    </div>
                </div>
            </Tabs>

            <SheetFooter className="mt-2">
                <SheetClose>
                    <Button className="w-[135px]" onClick={handleSaveDraft}>
                        Save Draft
                    </Button>
                </SheetClose>
                <Button className="w-[135px]" onClick={handleSaveAndContinue} disabled={createJobMutation.isPending}>
                    {createJobMutation.isPending ? "Publishing..." : isPublishMode ? "Publish" : "Continue"}
                </Button>
            </SheetFooter>
        </>
    );
};

const JobSheet: React.FC<JobSheetProps> = ({ jobToEdit }) => {
    const [isOpen, setIsOpen] = useState(false);
    const role = useUserRole();
    if (role == "candidate") return null;

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <Button className="p-4">{jobToEdit ? "Edit Job" : "+ Post a Job"}</Button>
            </SheetTrigger>
            <SheetContent className="min-w-[710px] flex flex-col">
                <JobSheetContent setIsOpen={setIsOpen} jobToEdit={jobToEdit} />
            </SheetContent>
        </Sheet>
    );
};

export default JobSheet;
