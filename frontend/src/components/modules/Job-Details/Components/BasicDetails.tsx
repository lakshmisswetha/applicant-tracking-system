import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { ApplicationFormSectionProps } from "@/types/application";

const BasicDetails: React.FC<ApplicationFormSectionProps> = ({ formData, setFormData }) => {
    return (
        <TabsContent value="basic-details">
            <div className="flex">
                <div className="left flex-1 ">
                    <div className="mt-5">
                        <Label htmlFor="fullName" className="mt-3">
                            Full Name
                        </Label>
                        <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-5">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            name="location"
                            value={formData.location}
                            onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="nationality">Nationality</Label>
                        <Input
                            name="nationality"
                            value={formData.nationality}
                            onChange={(e) => setFormData((prev) => ({ ...prev, nationality: e.target.value }))}
                            className="mt-2"
                        />
                    </div>
                </div>
                <div className="right flex-1 ml-4">
                    <div className="mt-5">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                            name="phone"
                            value={formData.phone}
                            onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-5">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input
                            name="dob"
                            value={formData.dob ? formData.dob.toISOString().split("T")[0] : ""}
                            onChange={(e) =>
                                setFormData((prev) => ({
                                    ...prev,
                                    dob: e.target.value ? new Date(e.target.value) : undefined,
                                }))
                            }
                            type="date"
                            className="mt-2"
                        />
                    </div>
                </div>
            </div>
        </TabsContent>
    );
};

export default BasicDetails;
