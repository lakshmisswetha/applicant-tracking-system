import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TabsContent } from "@/components/ui/tabs";

const JobOverview: React.FC = () => {
    return (
        <TabsContent value="job-overview">
            <div className="flex">
                <div className="left flex-1 ">
                    <div className="mt-5">
                        <Label htmlFor="job-title" className="mt-3">
                            Job Title
                        </Label>
                        <Input type="job-title" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="location">Location</Label>
                        <Input type="location" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="experience">Experience</Label>
                        <Input type="experience" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="work-approach">Work Approach</Label>
                        <Input type="work-approach" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="language">Language</Label>
                        <Input type="language" className="mt-2" />
                    </div>
                </div>
                <div className="right flex-1 ml-4">
                    <div className="mt-5">
                        <Label htmlFor="department" className="mt-3">
                            Department
                        </Label>
                        <Input type="department" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="openings">No. of openings</Label>
                        <Input type="openings" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="employee-type">Employee Type</Label>
                        <Input type="employee-type" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="education">Education</Label>
                        <Input type="education" className="mt-2" />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="salary">Salary</Label>
                        <Input type="salary" className="mt-2" />
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <Label htmlFor="message">Job Description</Label>
                <Textarea placeholder="Enter the Job Description here." className="mt-2 min-h-[150px]" id="message"></Textarea>
            </div>
        </TabsContent>
    );
};

export default JobOverview;
