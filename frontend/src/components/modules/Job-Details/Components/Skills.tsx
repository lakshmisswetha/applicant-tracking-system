import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ApplicationFormSectionProps } from "@/types/application";

const Skills: React.FC<ApplicationFormSectionProps> = ({ formData, setFormData }) => {
    return (
        <TabsContent value="skills">
            <div className="flex">
                <div className="left flex-1 ">
                    <div className="mt-5">
                        <Label htmlFor="languages" className="mt-3">
                            Languages
                        </Label>
                        <Input
                            name="languages"
                            value={formData.languages}
                            onChange={(e) => setFormData((prev) => ({ ...prev, languages: e.target.value }))}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-10">
                        <Label htmlFor="skills">Skills</Label>
                        <Textarea
                            name="skills"
                            value={formData.skills}
                            onChange={(e) => setFormData((prev) => ({ ...prev, skills: e.target.value }))}
                            className="mt-2 min-h-[150px]"
                            placeholder="Enter your skills here."
                        ></Textarea>
                    </div>
                </div>
            </div>
        </TabsContent>
    );
};

export default Skills;
