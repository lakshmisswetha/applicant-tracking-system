import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ApplicationFormSectionProps } from "@/types/application";

const Experience: React.FC<ApplicationFormSectionProps> = ({ formData, setFormData }) => {
    const experience = formData.experience?.[0] || {
        company: "",
        designation: "",
        location: "",
        fromYear: "",
        toYear: "",
        jobDescription: "",
    };
    const handleChange = (key: keyof typeof experience, value: string) => {
        setFormData((prev) => ({
            ...prev,
            experience: [{ ...experience, [key]: value }],
        }));
    };
    return (
        <>
            <TabsContent value="experience">
                <div className="flex">
                    <div className="left flex-1 ">
                        <div className="mt-5">
                            <Label htmlFor="companyName" className="mt-3">
                                Company Name
                            </Label>
                            <Input
                                name="companyName"
                                value={experience.company}
                                onChange={(e) => handleChange("company", e.target.value)}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-5">
                            <Label htmlFor="designation">Designation</Label>
                            <Input
                                name="designation"
                                value={experience.designation}
                                onChange={(e) => handleChange("designation", e.target.value)}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="right flex-1 ml-4">
                        <div className="mt-5">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                name="location"
                                value={experience.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-5 flex">
                            <div>
                                <Label htmlFor="fromYear">From Year</Label>
                                <Input
                                    name="fromYear"
                                    value={experience.fromYear}
                                    onChange={(e) => handleChange("fromYear", e.target.value)}
                                    className="mt-2"
                                />
                            </div>
                            <div className="ml-4">
                                <Label htmlFor="toYear">To Year</Label>
                                <Input
                                    name="toYear"
                                    value={experience.toYear}
                                    onChange={(e) => handleChange("fromYear", e.target.value)}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <Label htmlFor="jobDescription">Job Description</Label>
                    <Textarea
                        placeholder="Enter the Job Description here."
                        className="mt-2 min-h-[150px]"
                        name="jobDescription"
                        value={experience.jobDescription}
                        onChange={(e) => handleChange("jobDescription", e.target.value)}
                    ></Textarea>
                </div>
            </TabsContent>
        </>
    );
};

export default Experience;
