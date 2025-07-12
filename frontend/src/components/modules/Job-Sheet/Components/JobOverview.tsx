import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TabsContent } from "@/components/ui/tabs";
import { Job } from "@/types/job";

interface JobOverviewProps {
    jobData: Job;
    setJobData: React.Dispatch<React.SetStateAction<Job>>;
}

const JobOverview: React.FC<JobOverviewProps> = ({ jobData, setJobData }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setJobData((prev) => ({ ...prev, [name]: name === "openings" ? Number(value) : value }));
    };

    return (
        <TabsContent value="job-overview">
            <div className="flex">
                <div className="left flex-1 ">
                    <div className="mt-5">
                        <Label htmlFor="jobTitle" className="mt-3">
                            Job Title
                        </Label>
                        <Input name="jobTitle" value={jobData.jobTitle} onChange={handleChange} className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="companyName">Hiring Company</Label>
                        <Input
                            name="companyName"
                            value={jobData.companyName || ""}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            name="location"
                            value={jobData.location || ""}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="experience">Experience in Years</Label>
                        <Input
                            name="experience"
                            value={jobData.experience || ""}
                            onChange={handleChange}
                            placeholder="e.g., 1, 2, 3 "
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="workType">Work Type</Label>
                        <Input
                            name="workType"
                            value={jobData.workType || ""}
                            onChange={handleChange}
                            placeholder="e.g., Hybrid, Remote, Onsite"
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="skillsRequired">Skills Required</Label>
                        <Input
                            name="skillsRequired"
                            value={jobData.skillsRequired || ""}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="right flex-1 ml-4">
                    <div className="mt-5">
                        <Label htmlFor="department" className="mt-3">
                            Department
                        </Label>
                        <Input
                            name="department"
                            value={jobData.department || ""}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="openings">No. of openings</Label>
                        <Input
                            name="openings"
                            type="number"
                            value={jobData.openings}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="employeeType">Employee Type</Label>
                        <Input
                            name="employeeType"
                            value={jobData.employeeType || ""}
                            onChange={handleChange}
                            placeholder="e.g., Full-time, Part-time, Contract"
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="qualificationRequired">Qualification required</Label>
                        <Input
                            name="qualificationRequired"
                            value={jobData.qualificationRequired || ""}
                            onChange={handleChange}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="salary">Salary</Label>
                        <Input name="salary" value={jobData.salary || ""} onChange={handleChange} className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Label htmlFor="jobDescription">Job Description</Label>
                <Textarea
                    placeholder="Enter the Job Description here."
                    value={jobData.jobDescription || ""}
                    onChange={handleChange}
                    className="mt-2 min-h-[150px]"
                    name="jobDescription"
                ></Textarea>
            </div>
        </TabsContent>
    );
};

export default JobOverview;
