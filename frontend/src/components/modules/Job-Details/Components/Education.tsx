import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ApplicationFormSectionProps } from "@/types/application";
const Education: React.FC<ApplicationFormSectionProps> = ({ formData, setFormData }) => {
    const education = formData.education?.[0] || {
        institute: "",
        course: "",
        location: "",
        passedYear: "",
        passedMonth: "",
    };

    const handleChange = (key: keyof typeof education, value: string) => {
        setFormData((prev) => ({
            ...prev,
            education: [{ ...education, [key]: value }],
        }));
    };
    return (
        <>
            <TabsContent value="education">
                <div className="flex">
                    <div className="left flex-1 ">
                        <div className="mt-5">
                            <Label htmlFor="institute" className="mt-3">
                                Institute Name
                            </Label>
                            <Input
                                name="institute"
                                value={education.institute}
                                onChange={(e) => handleChange("institute", e.target.value)}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-5">
                            <Label htmlFor="course">Course</Label>
                            <Input
                                name="course"
                                value={education.course}
                                onChange={(e) => handleChange("course", e.target.value)}
                                className="mt-2"
                            />
                        </div>
                    </div>
                    <div className="right flex-1 ml-4">
                        <div className="mt-5">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                name="location"
                                value={education.location}
                                onChange={(e) => handleChange("location", e.target.value)}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-5 flex">
                            <div>
                                <Label htmlFor="passedYear">Passed Year</Label>
                                <Input
                                    name="passedYear"
                                    value={education.passedYear}
                                    onChange={(e) => handleChange("passedYear", e.target.value)}
                                    className="mt-2"
                                />
                            </div>
                            <div className="ml-4">
                                <Label htmlFor="passedMonth">Passed Month</Label>
                                <Select
                                    value={education.passedMonth}
                                    onValueChange={(value) => handleChange("passedMonth", value)}
                                >
                                    <SelectTrigger className="w-[180px] mt-2">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="jan">January</SelectItem>
                                        <SelectItem value="feb">February</SelectItem>
                                        <SelectItem value="march">March</SelectItem>
                                        <SelectItem value="april">April</SelectItem>
                                        <SelectItem value="may">May</SelectItem>
                                        <SelectItem value="june">June</SelectItem>
                                        <SelectItem value="july">July</SelectItem>
                                        <SelectItem value="aug">August</SelectItem>
                                        <SelectItem value="sep">September</SelectItem>
                                        <SelectItem value="oct">October</SelectItem>
                                        <SelectItem value="nov">November</SelectItem>
                                        <SelectItem value="dec">December</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </>
    );
};

export default Education;
