import { useJobDetails } from "@/hooks/useJobDetails";
import React from "react";
import { JobApplicationSheet } from "./JobApplicationSheet";
import { Loader2 } from "lucide-react";

const JobDetailsCandidate: React.FC = () => {
    const { data, isLoading, isError } = useJobDetails();
    const job = data?.data.job;
    if (isLoading)
        return (
            <div className="flex justify-center items-center h-64">
                <Loader2 className="h-10 w-10 animate-spin text-cyan-700" />
            </div>
        );
    if (isError || !data?.status) return <div>Failed to load job details</div>;
    return (
        <div className="bg-muted w-full h-screen px-[250px] py-8 overflow-hidden">
            <div className="w-full bg-white h-full flex flex-col border p-4">
                <div className="py-4 border-b-2 p-4 sticky top-0 z-10 flex justify-between">
                    <div>
                        <div className=" text-2xl font-bold">{job?.jobTitle}</div>
                        <div className="flex mt-2">
                            {job?.companyName} | <h1 className="ml-2">{job?.location}</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <JobApplicationSheet />
                    </div>
                </div>
                <div className="overflow-y-auto flex-1 p-4 space-y-4 scrollbar-hide">
                    <div className="w-full flex justify-center p-4">
                        <div className="w-[150px] bg-sky-50 flex flex-col justify-center h-[60px] items-center rounded-lg">
                            <h1 className="font-bold text-lg text-sky-800">{job?.experience} Years</h1>
                            experience
                        </div>
                        <div className="ml-8 w-[150px] bg-yellow-50 flex flex-col justify-center h-[60px] items-center rounded-lg">
                            <h1 className="font-bold text-lg text-yellow-600">{job?.salary}</h1>
                            salary
                        </div>
                        <div className="ml-8 w-[150px] bg-emerald-50 flex flex-col justify-center h-[60px] items-center rounded-lg">
                            <h1 className="font-bold text-lg text-emerald-600">{job?.openings}</h1>
                            openings
                        </div>
                    </div>
                    <div className="job-overview">
                        <div className="font-semibold text-xl">Job Overview</div>
                        <p className="mt-4">{job?.jobDescription}</p>
                    </div>
                    <div className="qualification pt-14">
                        <div className="font-semibold text-xl">Eligibility</div>
                        <p className="mt-4">{job?.qualificationRequired}</p>
                    </div>
                    <div className="skills pt-14">
                        <div className="font-semibold text-xl">Skills Required</div>
                        <ul className="list-disc list-inside space-y-1 mt-4">
                            {job?.skillsRequired?.split(",").map((skill: string, index: number) => (
                                <li key={index}>{skill.trim()}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetailsCandidate;
